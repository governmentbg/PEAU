﻿import { EAUBaseValidator } from "eau-core";
import { DocumentFormValidationContext } from "eau-documents";
import { RequestForDecisionForDealDataVM } from "../models/ModelsAutoGenerated";
import { VehicleRegistrationDataValidator } from "./VehicleRegistrationDataValidator";
import { VehicleOwnerDataVMValidator } from "./VehicleOwnerDataVMValidator";
import { VehicleBuyerDataVMValidator } from "./VehicleBuyerDataVMValidator";

export class RequestForDecisionForDealDataVMValidator extends EAUBaseValidator<RequestForDecisionForDealDataVM, DocumentFormValidationContext> {
    constructor() {
        super();

        this.ruleFor(m => m.vehicleRegistrationData).setValidator(new VehicleRegistrationDataValidator());

        this.ruleFor(m => m.ownersCollection).setCollectionValidator(new VehicleOwnerDataVMValidator());

        this.ruleFor(m => m.buyersCollection).setCollectionValidator(new VehicleBuyerDataVMValidator());
    }
}