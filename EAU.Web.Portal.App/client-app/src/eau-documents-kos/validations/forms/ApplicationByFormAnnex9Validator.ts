﻿import { EAUBaseValidator } from "eau-core";
import { DeclarationsVMValidator, DocumentFormValidationContext, ElectronicServiceApplicantVMValidator, ServiceTermTypeAndApplicantReceiptVMValidator } from "eau-documents";
import { ApplicationByFormAnnex9VM } from "../../models/ModelsAutoGenerated";
import { ApplicationByFormAnnex9DataValidator } from "../ApplicationByFormAnnex9DataValidator";

export class ApplicationByFormAnnex9Validator extends EAUBaseValidator<ApplicationByFormAnnex9VM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.electronicServiceApplicant).setValidator(new ElectronicServiceApplicantVMValidator());
        this.ruleFor(m => m.circumstances).setValidator(new ApplicationByFormAnnex9DataValidator());
        this.ruleFor(m => m.declarations).setValidator(new DeclarationsVMValidator());
        this.ruleFor(m => m.serviceTermTypeAndApplicantReceipt).setValidator(new ServiceTermTypeAndApplicantReceiptVMValidator());
    }
}