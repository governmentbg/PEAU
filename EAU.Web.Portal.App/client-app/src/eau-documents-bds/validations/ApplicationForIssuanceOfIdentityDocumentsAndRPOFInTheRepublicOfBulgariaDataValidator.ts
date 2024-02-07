﻿import { EAUBaseValidator, ResourceHelpers, ErrMsgCodesConstants } from "eau-core";
import { DocumentFormValidationContext, TravelDocumentValidator } from "eau-documents";
import { ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM } from "../models/ModelsAutoGenerated";
import { ForeignIdentityBasicDataValidator } from "./ForeignIdentityBasicDataValidator";

export class ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataValidator
    extends EAUBaseValidator<ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM, DocumentFormValidationContext> {

    constructor() {
        super();

        this.ruleFor(m => m.foreignIdentityBasicData).setValidator(new ForeignIdentityBasicDataValidator());
        this.ruleFor(m => m.abroadAddress).match(/^[а-яА-Яa-zA-Z\s+\d+~@#$%^&*()_{}|"':>=|!<.,/\\?;-]+$/g).withMessage(ResourceHelpers.formatErrorMessage(ErrMsgCodesConstants.FieldValidationCyrillicLatinNumbersSymbols,
            new ApplicationForIssuanceOfIdentityDocumentsAndRPOFInTheRepublicOfBulgariaDataVM(), 'abroadAddress'));
        this.ruleFor(m => m.travelDocument).setValidator(new TravelDocumentValidator());
    }
}