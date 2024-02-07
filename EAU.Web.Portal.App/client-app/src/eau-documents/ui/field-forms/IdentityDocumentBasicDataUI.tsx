﻿import { ObjectHelper, SelectListItem } from "cnsys-core";
import { BaseProps, ViewMode } from "cnsys-ui-react";
import { attributesClassFormControlReqired, attributesClassFormControlRequiredLabel, EAUBaseComponent, ResourceHelpers } from "eau-core";
import { observer } from "mobx-react";
import moment from "moment";
import * as React from "react";
import { IdentityDocumentBasicDataVM, IdentityDocumentType } from "../../models/ModelsAutoGenerated";
import { ApplicationFormManagerProps, withDocumentFormManager } from "../document-forms/DocumentFormManagerProvider";

interface IdentityDocumentBasicDataUIProps extends BaseProps, ApplicationFormManagerProps {
}

@observer class IdentityDocumentBasicDataUIImpl extends EAUBaseComponent<IdentityDocumentBasicDataUIProps, IdentityDocumentBasicDataVM> {
    private selectedItems: SelectListItem[];

    constructor(props: IdentityDocumentBasicDataUIProps) {
        super(props);

        //Init
        if (this.props.viewMode == ViewMode.Edit) {
            this.selectedItems = [];
            let docTypes = this.props.documentFormManager.getPossibleRecipientIdentityDocumentTypes();

            if (docTypes && docTypes.length > 0) {
                for (let i: number = 0; i < docTypes.length; i++) {
                    let currDocType: IdentityDocumentType = docTypes[i];
                    let tmpItem: SelectListItem = new SelectListItem({
                        value: currDocType.toString(),
                        text: ResourceHelpers.getResourceByEmun(currDocType, IdentityDocumentType),
                        selected: this.model.identityDocumentType === currDocType
                    });

                    this.selectedItems.push(tmpItem);
                }
            }
        }
    }

    renderEdit(): JSX.Element {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        {this.labelFor(m => m.identityDocumentType, null, attributesClassFormControlRequiredLabel)}
                        {this.dropDownListFor(m => m.identityDocumentType, this.selectedItems)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        {this.labelFor(m => m.identityNumber, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.identityNumber, attributesClassFormControlReqired)}
                    </div>
                    <div className="form-group col-sm-4">
                        {this.labelFor(m => m.identitityIssueDate, null, attributesClassFormControlRequiredLabel)}
                        {this.dateFor(m => m.identitityIssueDate, null, null, null, null, true)}
                    </div>
                    <div className="form-group col-sm-4">
                        {this.labelFor(m => m.identityIssuer, null, attributesClassFormControlRequiredLabel)}
                        {this.textBoxFor(m => m.identityIssuer, attributesClassFormControlReqired)}
                    </div>
                </div>
            </>
        );
    }

    renderDisplay(): JSX.Element {
        return (
            <>
                <div className="row">
                    <div className="form-group col-12">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.identityDocumentType)}</h4>
                        <p className="field-text">{ObjectHelper.isStringNullOrEmpty(this.model.identityDocumentType) ? '' : this.renderIdentityDocumentType()}</p>
                        {this.propertyErrorsDispleyFor(m => m.identityDocumentType)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.identityNumber)}</h4>
                        {this.textDisplayFor(m => m.identityNumber)}
                    </div>
                    <div className="form-group col-sm-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.identitityIssueDate)}</h4>
                        <p className="field-text">{this.renderIdentitityIssueDate()}</p>
                        {this.propertyErrorsDispleyFor(m => m.identitityIssueDate)}
                    </div>
                    <div className="form-group col-sm-4">
                        <h4 className="form-control-label">{this.getResourceByProperty(m => m.identityIssuer)}</h4>
                        {this.textDisplayFor(m => m.identityIssuer)}
                    </div>
                </div>
            </>
        );
    }

    renderIdentitityIssueDate() {

        if (this.model.identitityIssueDate && this.model.identitityIssueDate.year() > 1) {
            return this.dateDisplayFor(this.model.identitityIssueDate)
        }

        return "";
    }

    renderIdentityDocumentType() {

        if (this.model.identitityIssueDate && this.model.identitityIssueDate.year() == 1 && ObjectHelper.isNullOrUndefined(this.model.identityIssuer)) {
            return "";
        }

        return ResourceHelpers.getResourceByEmun(this.model.identityDocumentType, IdentityDocumentType);

    }
}

export const IdentityDocumentBasicDataUI = withDocumentFormManager(IdentityDocumentBasicDataUIImpl);