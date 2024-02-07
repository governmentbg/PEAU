﻿import { ApplicationFormManagerBase, ElectronicServiceAuthorQualityType, PersonAndEntityChoiceType, IdentityDocumentType, DocumentFormValidationContext, Section } from 'eau-documents'
import { ApplicationForIssuingDocumentofVehicleOwnershipVM, ApplicationForIssuingDocumentofVehicleOwnershipDataVM, DocumentFor, ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM } from '../models/ModelsAutoGenerated';
import { ApplicationForIssuingDocumentofVehicleOwnershipDataUI } from '../ui/section-forms';
import { ResourceHelpers } from 'eau-core';
import { ApplicationForIssuingDocumentofVehicleOwnershipDataVMValidator } from '../validations/ApplicationForIssuingDocumentofVehicleOwnershipDataVMValidator';

export class ApplicationForIssuingDocumentofVehicleOwnershipManager extends ApplicationFormManagerBase<ApplicationForIssuingDocumentofVehicleOwnershipVM>{

    //#region ApplicationFormManagerBase

    createDocument(obj: any): ApplicationForIssuingDocumentofVehicleOwnershipVM {
        return new ApplicationForIssuingDocumentofVehicleOwnershipVM(obj);
    }

    //#endregion

    protected initDocumentForm() {
        super.initDocumentForm();

        if (!this.documentForm.circumstances) {
            this.documentForm.circumstances = new ApplicationForIssuingDocumentofVehicleOwnershipDataVM();
        }

        if (!this.documentForm.circumstances.documentFor) {
            this.documentForm.circumstances.documentFor = DocumentFor.OwnershipOfVehicleWithRegistrationNumberAndMake;
            if (!this.documentForm.circumstances.registrationAndMake) {
                this.documentForm.circumstances.registrationAndMake = new ApplicationForIssuingDocumentofVehicleOwnershipDataRegistrationAndMakeVM();
                this.documentForm.circumstances.registrationAndMake.areFieldsRequired = true;
            }
            
        }
        this.additionalData.showMessageForNonPaidSlip = true;
    }

    protected createSections(validationContext: DocumentFormValidationContext): Section[] {
        var sections = super.createSections(validationContext);

        var circumstances = new Section();
        circumstances.code = "circumstances";
        circumstances.title = ResourceHelpers.getResourceByProperty(m => m.circumstances, this.documentForm);
        circumstances.form = this.documentForm.circumstances;
        circumstances.formUICmp = ApplicationForIssuingDocumentofVehicleOwnershipDataUI;
        circumstances.validator = new ApplicationForIssuingDocumentofVehicleOwnershipDataVMValidator();
        circumstances.validator.setValidationContext(validationContext);
        circumstances.validate = () => this.validateSection(circumstances);

        sections.splice(1, 0, circumstances);

        return sections;
    }
}