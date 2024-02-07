﻿import { ObjectHelper } from "cnsys-core";
import { AsyncUIProps, BaseProps, withAsyncFrame } from "cnsys-ui-react";
import { attributesClassFormControlReqired, attributesClassFormControlRequiredLabel, EAUBaseComponent } from "eau-core";
import { observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { ApplicationType, EntityBasicData } from "../../models/ModelsAutoGenerated";
import { ApplicationFormManagerProps, withDocumentFormManager } from "../document-forms/DocumentFormManagerProvider";

interface EntityBasicDataUIProps extends BaseProps, ApplicationFormManagerProps, AsyncUIProps {
}

@observer class EntityBasicDataUIImpl extends EAUBaseComponent<EntityBasicDataUIProps, EntityBasicData> {

    @observable entityDataInformationPanel: any = null;

    constructor(props: EntityBasicDataUIProps) {
        super(props);

        //Bind
        this.getFirmData = this.getFirmData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    renderEdit(): JSX.Element {
        return (
            <div className="row">
                <div className="col-12">
                    {this.entityDataInformationPanel}
                </div>
                <div className="col-12">
                    {/**ЕИК/БУЛСТАТ*/}
                    {this.labelFor(m => m.identifier, null, attributesClassFormControlRequiredLabel)}
                </div>
                <div className="form-group col col-sm-6">
                    {
                        this.props.documentFormManager.applicationType == ApplicationType.AppForRemoveInvalidData || this.props.documentFormManager.applicationType == ApplicationType.AppForWithdrawService || this.props.documentFormManager.additionalData?.disabledEntityIdentifier == "true"
                            ? <input id={this.model.identifier} className="form-control" value={this.model.identifier} disabled />
                            : this.textBoxFor(m => m.identifier, attributesClassFormControlReqired, this.handleChange)
                    }
                </div>
                <div className="form-group col-auto">
                    <button className="btn btn-light" onClick={this.getFirmData}>
                        <i className="ui-icon ui-icon-import mr-1" aria-hidden="true"></i>
                        {this.getResource('GL_GET_DATA_L')}
                    </button>
                </div>
                <div className="form-group col-12">
                    {/**Фирма/Наименование на юридическо лице*/}
                    {this.labelFor(m => m.name, null, attributesClassFormControlRequiredLabel)}
                    {this.textBoxFor(m => m.name, attributesClassFormControlReqired, this.handleChange)}
                </div>
            </div>
        );
    }

    handleChange() {
        this.entityDataInformationPanel = null;
    }

    renderDisplay(): JSX.Element {
        return (
            <div className="row">                
                <div className="form-group col-12">
                    <h4 className="form-control-label">{this.getResourceByProperty(m => m.name)}</h4>
                    {this.textDisplayFor(m => m.name)}
                </div>
                <div className="form-group col-sm-6">
                    <h4 className="form-control-label">{this.getResourceByProperty(m => m.identifier)}</h4>
                    {this.textDisplayFor(m => m.identifier)}
                </div>
            </div>
        );
    }

    getFirmData(e: any): void {
        let that = this;

        this.props.registerAsyncOperation(this.props.documentFormManager.initRecipientEntityData().then(() => {
            let eikErrors = this.model.getPropertyErrors("identifier");

            if ((!eikErrors || eikErrors.length == 0) && ObjectHelper.isStringNullOrEmpty(that.model.name)) {
                that.entityDataInformationPanel = <div className="alert alert-warning" role="alert">
                    <p>{this.getResource("DOC_GL_LEGAL_PERSON_NOT_FOUND_E")}</p></div>
            } else {
                that.entityDataInformationPanel = null;
            }
        }));
    }
}

export const EntityBasicDataUI = withAsyncFrame(withDocumentFormManager(EntityBasicDataUIImpl));