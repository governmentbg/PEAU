﻿import { BaseProps, ViewMode } from "cnsys-ui-react";
import { attributesClassFormControlLabel, EAUBaseComponent } from "eau-core";
import { FieldFormUI, PoliceDepartmentUI } from "eau-documents";
import React from "react";
import { ApplicationForWithdrawServiceDataVM } from "../../models/ModelsAutoGenerated";

export class ApplicationForWithdrawServiceDataUI
    extends EAUBaseComponent<BaseProps, ApplicationForWithdrawServiceDataVM> {

    renderEdit(): JSX.Element {
        return <>
            <FieldFormUI>
                <legend>
                    <h3 className="field-title">
                        <span>{this.getResource("GL_URI_CASE_L")}</span>
                    </h3>
                </legend>
                <div className="row">
                    <div className="form-group col-12">
                        {this.textDisplayFor(m => m.caseFileURI)}
                    </div>
                </div>
                <legend>
                    <h3 className="field-title">
                        <span>{this.getResource("DOC_GL_WithdrawService_IssuingPoliceDepartment_L")}</span>
                    </h3>
                </legend>
                <div className="row">
                    <div className="form-group col-12">
                        <PoliceDepartmentUI  {...this.bind(m => m.policeDepartment, ViewMode.Display)} />
                    </div>
                </div>
                <legend>
                    <h3 className="field-title">
                        <span>{this.getResource("DOC_GL_ApplicationForWithdrawServiceData_identificationDocuments_L")}</span>
                    </h3>
                </legend>
                <div className="row">
                    <div className="form-group col-12">
                        {this.textDisplayFor(m => m.issuingDocument)}
                    </div>
                </div>
                <legend>
                    <h3 className="field-title">
                        <span>{this.getResource("DOC_GL_ApplicationForWithdrawServiceData_RefusalReasons_L")}</span>
                    </h3>
                </legend>
                <div className="row">
                    <div className="form-group col-12">
                        {this.textAreaFor(m => m.refusalReasons)}
                    </div>
                </div>
            </FieldFormUI>
        </>
    }

    renderDisplay(): JSX.Element {
        return <>
            <legend>
                <h3 className="field-title">
                    <span>{this.getResource("GL_URI_CASE_L")}</span>
                </h3>
            </legend>
            <div className="row">
                <div className="form-group col-12">
                    {this.textDisplayFor(m => m.caseFileURI)}
                </div>
            </div>
            <legend>
                <h3 className="field-title">
                    <span>{this.getResource("DOC_GL_WithdrawService_IssuingPoliceDepartment_L")}</span>
                </h3>
            </legend>
            <div className="row">
                <div className="form-group col-12">
                    <PoliceDepartmentUI  {...this.bind(m => m.policeDepartment, ViewMode.Display)} />
                </div>
            </div>
            <legend>
                <h3 className="field-title">
                    <span>{this.getResource("DOC_GL_ApplicationForWithdrawServiceData_identificationDocuments_L")}</span>
                </h3>
            </legend>
            <div className="row">
                <div className="form-group col-12">
                    {this.textDisplayFor(m => m.issuingDocument)}
                </div>
            </div>
            <legend>
                <h3 className="field-title">
                    <span>{this.getResource("DOC_GL_ApplicationForWithdrawServiceData_RefusalReasons_L")}</span>
                </h3>
            </legend>
            <div className="row">
                <div className="form-group col-12">
                    {this.textDisplayFor(m => m.refusalReasons)}
                </div>
            </div>
        </>
    }
}