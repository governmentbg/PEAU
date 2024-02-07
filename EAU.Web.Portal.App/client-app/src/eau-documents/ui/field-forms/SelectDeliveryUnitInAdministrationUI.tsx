﻿import React from "react";
import { action, observable, runInAction } from "mobx";
import { observer } from "mobx-react";
import { ApiError, ArrayHelper, ObjectHelper, SelectListItem } from "cnsys-core";
import { AsyncUIProps, BaseProps, withAsyncFrame, ViewMode } from "cnsys-ui-react";
import { EAUBaseComponent } from "eau-core";
import { UnitInfo, ServiceApplicantReceiptDataUnitInAdministration, ServiceTermType } from "../../models/ModelsAutoGenerated";
import { ServiceApplicantReceiptDataUnitInAdministrationValidator } from "../../validations/ServiceApplicantReceiptDataUnitInAdministrationValidator";
import { Nomenclatures } from "../../cache/Nomenclatures";
import { moduleContext } from "../../ModuleContext"

interface SelectDeliveryUnitInAdministrationUIProps extends BaseProps, AsyncUIProps {
    serviceID: number;
    serviceTermType: ServiceTermType
}

@observer class SelectDeliveryUnitInAdministrationUIImpl extends EAUBaseComponent<SelectDeliveryUnitInAdministrationUIProps, ServiceApplicantReceiptDataUnitInAdministration> {
    @observable private rootUnits: UnitInfo[];
    @observable private childrenUnits: UnitInfo[];
    @observable private selectedRootUnitId: number;
    @observable private mustShowChildUnitDropDown: boolean;

    constructor(props: SelectDeliveryUnitInAdministrationUIProps) {
        super(props);

        //Bind
        this.getSelectedRootChildren = this.getSelectedRootChildren.bind(this);
        this.onChangeRootUnit = this.onChangeRootUnit.bind(this);
        this.onChangeChildUnit = this.onChangeChildUnit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.initOnEdit = this.initOnEdit.bind(this);

        //Init
        this.rootUnits = undefined;
        this.childrenUnits = undefined;
        this.mustShowChildUnitDropDown = false;
        this.selectedRootUnitId = undefined;
    }

    componentDidMount() {
        this.initOnEdit(this.props.serviceTermType);
    }

    componentWillUpdate(nextProps: SelectDeliveryUnitInAdministrationUIProps, nextState: any, nextContext: any): void {
        super.componentWillUpdate(nextProps, nextState, nextContext);

        if (nextProps.serviceTermType != this.props.serviceTermType) {
            this.initOnEdit(nextProps.serviceTermType);
        }
    }

    renderEdit(): JSX.Element {
        if (this.rootUnits && this.rootUnits.length > 0) {
            return (
                <div className="row">
                    <div className="form-group col-lg-7">
                        <select className="form-control" value={this.selectedRootUnitId ? this.selectedRootUnitId.toString() : ''} onChange={this.onChangeRootUnit}>
                            <option value={''}>{this.getResource('GL_DDL_CHOICE_L')}</option>
                            {this.rootUnits.map((item, idx) => {
                                return <option key={item.unitID} value={item.unitID.toString()}>{item.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group col-lg-5">
                        {this.mustShowChildUnitDropDown === true ?
                            this.dropDownListFor(m => m.administrativeDepartmentCode, this.getSelectedRootChildren(), null, this.onChangeChildUnit, true, this.getResource('GL_DDL_CHOICE_L')) 
                            : null}
                    </div>
                </div>);
        }

        return null;
    }

    renderDisplay(): JSX.Element {
        if (this.model) {
            return (<div className="row">
                <div className="form-group col-12">
                    <h4 className="form-control-label">{this.getResource('GL_MVR_STRUCTURE_L')}</h4>
                    {this.textDisplay(this.model.administrativeDepartmentName, this.model, "administrativeDepartmentCode")}
                </div>
            </div>);
        }

        return null;
    }

    @action onChangeRootUnit(event: any): void {
        this.model.administrativeDepartmentCode = undefined;
        this.model.administrativeDepartmentName = undefined;

        if (ObjectHelper.isStringNullOrEmpty(event.target.value)) {
            this.selectedRootUnitId = undefined;
        } else {
            this.selectedRootUnitId = Number(event.target.value);
            let selectedRootUnit = ArrayHelper.queryable.from(this.rootUnits).single(u => u.unitID == this.selectedRootUnitId);

            if (this.mustShowChildUnitDropDown == false)
            {
                this.model.administrativeDepartmentCode = selectedRootUnit.unitID.toString();
                this.model.administrativeDepartmentName = selectedRootUnit.name;
            }
        }

        let validator: ServiceApplicantReceiptDataUnitInAdministrationValidator = new ServiceApplicantReceiptDataUnitInAdministrationValidator();
        validator.validate(this.model);
    }

    @action onChangeChildUnit(e: any): void {
        if (ObjectHelper.isStringNullOrEmpty(this.model.administrativeDepartmentCode)) {
            this.model.administrativeDepartmentName = null;
        } else {
            let selectedChildUnit = ArrayHelper.queryable.from(this.childrenUnits).singleOrDefault(u => u.unitID.toString() == this.model.administrativeDepartmentCode);

            if (selectedChildUnit) {
                this.model.administrativeDepartmentName = selectedChildUnit.name;
            } else {
                this.model.administrativeDepartmentName = ArrayHelper.queryable.from(this.rootUnits).single(u => u.unitID.toString() == this.model.administrativeDepartmentCode).name;
            }
        }

        let validator: ServiceApplicantReceiptDataUnitInAdministrationValidator = new ServiceApplicantReceiptDataUnitInAdministrationValidator();
        validator.validate(this.model);
    }

    private getSelectedRootChildren(): SelectListItem[] {
        let res = ArrayHelper.queryable.from(this.childrenUnits)
            .where(u => u.parentUnitID == this.selectedRootUnitId)
            .select(u => new SelectListItem({ selected: this.model.administrativeDepartmentCode == u.unitID.toString(), value: u.unitID, text: u.name })).toArray();

        var rootUnit = ArrayHelper.queryable.from(this.rootUnits).where(el => el.unitID == this.selectedRootUnitId)
            .select(u => new SelectListItem({ selected: this.model.administrativeDepartmentCode == u.unitID.toString(), value: u.unitID, text: u.name })).firstOrDefault();

        if (rootUnit) {
            res.unshift(rootUnit);
        }

        return res;
    }

    private initOnEdit(termType: ServiceTermType): void {
        if (this.props.viewMode == ViewMode.Edit) {
            var that = this;

            this.props.registerAsyncOperation(Nomenclatures.getDeliveryUnitsInfo(this.props.serviceID, +termType).then(units => {
                if (units && units.length > 0) {
                    runInAction(() => {
                        that.mustShowChildUnitDropDown = ArrayHelper.queryable.from(units).count(u => u.hasChildUnits == true) > 0;
                        that.rootUnits = that.mustShowChildUnitDropDown == false ? units : ArrayHelper.queryable.from(units).where(u => u.hasChildUnits == true).toArray();
                        that.childrenUnits = that.mustShowChildUnitDropDown == false ? null : ArrayHelper.queryable.from(units).where(u => u.hasChildUnits == false).toArray();

                        if (!ObjectHelper.isStringNullOrEmpty(that.model.administrativeDepartmentCode)) {
                            if (that.mustShowChildUnitDropDown == true) {
                                let selectedChildUnit = ArrayHelper.queryable.from(that.childrenUnits).singleOrDefault(u => u.unitID == Number(that.model.administrativeDepartmentCode));

                                if (selectedChildUnit) {
                                    that.selectedRootUnitId = selectedChildUnit.parentUnitID;
                                } else {
                                    let selectedUnit = ArrayHelper.queryable.from(that.rootUnits).single(u => u.unitID == Number(that.model.administrativeDepartmentCode));
                                    that.selectedRootUnitId = selectedUnit.unitID;
                                } 
                            } else {
                                that.selectedRootUnitId = Number(that.model.administrativeDepartmentCode);
                            }
                        } else {
                            that.selectedRootUnitId = null;
                        }
                    });
                } else {
                    that.rootUnits = null;
                    that.childrenUnits = null;
                    that.mustShowChildUnitDropDown = false;

                    let err = new ApiError(moduleContext.resourceManager.getResourceByKey("GL_NO_DATA_FOUND_L"));
                    err.treatAsWarning = false;

                    throw err;
                }
            }));
        }
    }
}

export const SelectDeliveryUnitInAdministrationUI = withAsyncFrame(SelectDeliveryUnitInAdministrationUIImpl);