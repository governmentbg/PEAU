﻿import { EAUBaseValidator } from "eau-core";
import { RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportVM } from "../../models/ModelsAutoGenerated";
import { DocumentFormValidationContext, ElectronicServiceApplicantVMValidator } from "eau-documents";


export class RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportValidator extends EAUBaseValidator<RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.electronicServiceApplicant).setValidator(new ElectronicServiceApplicantVMValidator());
    }
}