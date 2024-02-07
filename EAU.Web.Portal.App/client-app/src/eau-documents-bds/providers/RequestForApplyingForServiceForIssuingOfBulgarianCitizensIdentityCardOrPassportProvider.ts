﻿import { IDocumentProvider } from 'eau-documents'
import { RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportManager } from '../form-managers/RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportManager'
import { RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportValidator } from '../validations/forms/RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportValidator'

export const requestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportProvider: IDocumentProvider = {
    getDocumentFormManager: () => new RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportManager(),
    getValidator: () => new RequestForApplyingForServiceForIssuingOfBulgarianCitizensIdentityCardOrPassportValidator()
}