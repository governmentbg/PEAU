﻿import { IDocumentProvider } from 'eau-documents'
import { ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesManager } from '../form-managers/ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesManager'
import { ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesValidator } from '../validations/forms/ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesValidator'

export const applicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesProvider: IDocumentProvider = {
    getDocumentFormManager: () => new ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesManager(),
    getValidator: () => new ApplicationForIssuingOrRenewingCertificateToWorkWithFluorinatedGreenhouseGassesValidator()
}