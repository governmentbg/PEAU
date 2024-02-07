﻿import { SelectListItem } from "cnsys-core";
import { BaseProps, ViewMode } from "cnsys-ui-react";
import { EAUBaseComponent, ResourceHelpers } from "eau-core";
import { action } from "mobx";
import React from "react";
import { AuthorWithQualityVM, ElectronicServiceAuthorQualityType, ApplicationType } from "../../models/ModelsAutoGenerated";
import { DocumentModes } from "../../models/ModelsManualAdded";
import { ApplicationFormManagerProps, withDocumentFormManager } from "../document-forms/DocumentFormManagerProvider";
import { ElectronicStatementAuthorUI } from "./ElectronicStatementAuthorUI";
import { FieldFormUI } from "./FieldFormUI";

interface AuthorWithQualityUIProps extends BaseProps, ApplicationFormManagerProps {
}

class AuthorWithQualityUIImpl extends EAUBaseComponent<AuthorWithQualityUIProps, AuthorWithQualityVM> {
    private authorQualities: SelectListItem[];

    constructor(props: AuthorWithQualityUIProps) {
        super(props);

        //Bind
        this.onRadioChange = this.onRadioChange.bind(this);

        //Init
        if (this.props.viewMode == ViewMode.Edit) {
            let posibleQualities: ElectronicServiceAuthorQualityType[] = this.props.documentFormManager.getPossibleAuthorQualities();

            if (posibleQualities && posibleQualities.length > 0) {
                this.authorQualities = [];
                for (let i: number = 0; i < posibleQualities.length; i++) {
                    let currPosibleQuality = posibleQualities[i];
                    let tmp: SelectListItem = new SelectListItem({
                        selected: this.model.selectedAuthorQuality === currPosibleQuality,
                        text: currPosibleQuality == 3 && this.checkIfOfficialHasCustomName() ? this.getResource(this.props.documentFormManager.additionalData.labelForOfficial) :ResourceHelpers.getResourceByEmun(currPosibleQuality, ElectronicServiceAuthorQualityType),
                        value: currPosibleQuality
                    });

                    this.authorQualities.push(tmp);
                }
            }
        }
    }

    renderEdit(): JSX.Element {
        return (
            <>
                <ElectronicStatementAuthorUI {...this.bind(m => m.author)} />
                {(this.props.documentFormManager.applicationType == ApplicationType.AppForFirstReg ||
                    (this.model.selectedAuthorQuality != ElectronicServiceAuthorQualityType.Personal && (this.props.documentFormManager.applicationType == ApplicationType.AppForRemoveInvalidData || this.props.documentFormManager.applicationType == ApplicationType.AppForChangeData))) ? (
                        <FieldFormUI title={this.getResourceByProperty(m => m.selectedAuthorQuality)} required>
                            <div className="row">
                                <div className="col-12 form-group">
                                    {
                                        this.getResults()
                                    }
                                </div>
                            </div>
                        </FieldFormUI>)
                    : (
                        <FieldFormUI title={this.getResourceByProperty(m => m.selectedAuthorQuality)}>
                            <div className="row">
                                <div className="col-12 form-group">
                                    <p className="field-text">{ResourceHelpers.getResourceByEmun(this.model.selectedAuthorQuality, ElectronicServiceAuthorQualityType)}</p>
                                </div>
                            </div>
                        </FieldFormUI>)}


            </>);
    }

    renderDisplay(): JSX.Element {
        return (
            <>
                <ElectronicStatementAuthorUI {...this.bind(m => m.author)} viewMode={ViewMode.Display} />
                <FieldFormUI title={this.getResourceByProperty(m => m.selectedAuthorQuality)}>
                    <div className="row">
                        <div className="col-12 form-group">
                            {this.model.selectedAuthorQuality == ElectronicServiceAuthorQualityType.Official && this.checkIfOfficialHasCustomName() ?
                                <p className="field-text">{this.getResource(this.props.documentFormManager.additionalData.labelForOfficial)}</p>
                                : <p className="field-text">{ResourceHelpers.getResourceByEmun(this.model.selectedAuthorQuality, ElectronicServiceAuthorQualityType)}</p>}

                        </div>
                    </div>
                </FieldFormUI>
            </>);
    }

    @action private onRadioChange(e: any): void {
        let choosenQuality: ElectronicServiceAuthorQualityType;

        if (e.target.value === ElectronicServiceAuthorQualityType.Personal.toString()) {
            choosenQuality = ElectronicServiceAuthorQualityType.Personal;
        } else if (e.target.value === ElectronicServiceAuthorQualityType.Representative.toString()) {
            choosenQuality = ElectronicServiceAuthorQualityType.Representative;
        } else if (e.target.value === ElectronicServiceAuthorQualityType.LegalRepresentative.toString()) {
            choosenQuality = ElectronicServiceAuthorQualityType.LegalRepresentative;
        }
        else {
            choosenQuality = ElectronicServiceAuthorQualityType.Official;
        }

        this.props.documentFormManager.changeAuthorQuality(choosenQuality);
    }

    checkIfOfficialHasCustomName(): boolean {

        if (this.props.documentFormManager.additionalData) {
            if (this.props.documentFormManager.additionalData.labelForOfficial) {
                return true;
            }
        }
        return false;
    }

    getResults() {
        if ((this.authorQualities && this.authorQualities.length == 1)
            || this.props.documentFormManager.mode == DocumentModes.WithdrawService
            || (this.props.documentFormManager.additionalData && this.props.documentFormManager.additionalData.disabledAuthorQuality === 'true')) {
            if (this.model.selectedAuthorQuality == ElectronicServiceAuthorQualityType.Official && this.checkIfOfficialHasCustomName()) {
                return (<p className="field-text">{this.getResource(this.props.documentFormManager.additionalData.labelForOfficial)}</p>)
            }
            else
                return (<p className="field-text">{ResourceHelpers.getResourceByEmun(this.model.selectedAuthorQuality, ElectronicServiceAuthorQualityType)}</p>)
        }
        else
            return this.radioButtonListFor(m => m.selectedAuthorQuality, this.authorQualities, null, this.onRadioChange);
    }
}

export const AuthorWithQualityUI = withDocumentFormManager(AuthorWithQualityUIImpl);