﻿import { BaseDataModel, BasePagedSearchCriteria, TypeSystem } from 'cnsys-core';
import { observable } from 'mobx';
import moment from 'moment';
import { moduleContext } from '../ModuleContext';
import { AuthenticationTypes, UserPermission, UserStatuses, DocumentType } from './ModelsAutoGenerated';

export enum WaysToStartService {

    ByAplication = 1,

    ByRedirectToWebPage = 2,

}
TypeSystem.registerEnumInfo(WaysToStartService, 'WaysToStartService', moduleContext.moduleName)

export enum AdmServiceTermType {

    Regular = 1,

    Fast = 2,

    Express = 3,

}
TypeSystem.registerEnumInfo(AdmServiceTermType, 'AdmServiceTermType', moduleContext.moduleName)

export enum ExecutionPeriodType {

    Hours = 1,

    Days = 2,

}
TypeSystem.registerEnumInfo(ExecutionPeriodType, 'ExecutionPeriodType', moduleContext.moduleName)

@TypeSystem.typeDecorator('Declaration', moduleContext.moduleName)
export class Declaration extends BaseDataModel {

    //#region declarationID

    @observable private _declarationID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set declarationID(val: number) {
        this._declarationID = val;
    }

    public get declarationID(): number {
        return this._declarationID;
    }

    //#endregion declarationID 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string) {
        this._description = val;
    }

    public get description(): string {
        return this._description;
    }

    //#endregion description 

    //#region content

    @observable private _content: string = null;

    @TypeSystem.propertyDecorator('string')
    public set content(val: string) {
        this._content = val;
    }

    public get content(): string {
        return this._content;
    }

    //#endregion content 

    //#region isRquired

    @observable private _isRquired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isRquired(val: boolean) {
        this._isRquired = val;
    }

    public get isRquired(): boolean {
        return this._isRquired;
    }

    //#endregion isRquired 

    //#region code

    @observable private _code: string = null;

    @TypeSystem.propertyDecorator('string')
    public set code(val: string) {
        this._code = val;
    }

    public get code(): string {
        return this._code;
    }

    //#endregion code 

    //#region isAdditionalDescriptionRequired

    @observable private _isAdditionalDescriptionRequired: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isAdditionalDescriptionRequired(val: boolean) {
        this._isAdditionalDescriptionRequired = val;
    }

    public get isAdditionalDescriptionRequired(): boolean {
        return this._isAdditionalDescriptionRequired;
    }

    //#endregion isAdditionalDescriptionRequired 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment) {
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment {
        return this._updatedOn;
    }

    //#endregion updatedOn 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}

@TypeSystem.typeDecorator('ServiceTerm', moduleContext.moduleName)
export class ServiceTerm extends BaseDataModel {

    //#region serviceTermID

    @observable private _serviceTermID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceTermID(val: number) {
        this._serviceTermID = val;
    }

    public get serviceTermID(): number {
        return this._serviceTermID;
    }

    //#endregion serviceTermID 

    //#region serviceID

    @observable private _serviceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceID(val: number) {
        this._serviceID = val;
    }

    public get serviceID(): number {
        return this._serviceID;
    }

    //#endregion serviceID 

    //#region serviceTermType

    @observable private _serviceTermType: AdmServiceTermType = null;

    @TypeSystem.propertyDecorator(AdmServiceTermType)
    public set serviceTermType(val: AdmServiceTermType) {
        this._serviceTermType = val;
    }

    public get serviceTermType(): AdmServiceTermType {
        return this._serviceTermType;
    }

    //#endregion serviceTermType 

    //#region price

    @observable private _price: number = null;

    @TypeSystem.propertyDecorator('number')
    public set price(val: number) {
        this._price = val;
    }

    public get price(): number {
        return this._price;
    }

    //#endregion price 

    //#region executionPeriod

    @observable private _executionPeriod: number = null;

    @TypeSystem.propertyDecorator('number')
    public set executionPeriod(val: number) {
        this._executionPeriod = val;
    }

    public get executionPeriod(): number {
        return this._executionPeriod;
    }

    //#endregion executionPeriod 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string) {
        this._description = val;
    }

    public get description(): string {
        return this._description;
    }

    //#endregion description 

    //#region periodType

    @observable private _periodType: ExecutionPeriodType = null;

    @TypeSystem.propertyDecorator(ExecutionPeriodType)
    public set periodType(val: ExecutionPeriodType) {
        this._periodType = val;
    }

    public get periodType(): ExecutionPeriodType {
        return this._periodType;
    }

    //#endregion periodType 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean) {
        this._isActive = val;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    //#endregion isActive 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}

@TypeSystem.typeDecorator('DeliveryChannel', moduleContext.moduleName)
export class DeliveryChannel extends BaseDataModel {

    //#region deliveryChannelID

    @observable private _deliveryChannelID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set deliveryChannelID(val: number) {
        this._deliveryChannelID = val;
    }

    public get deliveryChannelID(): number {
        return this._deliveryChannelID;
    }

    //#endregion deliveryChannelID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string) {
        this._name = val;
    }

    public get name(): string {
        return this._name;
    }

    //#endregion name 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}

@TypeSystem.typeDecorator('Service', moduleContext.moduleName)
export class Service extends BaseDataModel {

    //#region serviceID

    @observable private _serviceID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set serviceID(val: number) {
        this._serviceID = val;
    }

    public get serviceID(): number {
        return this._serviceID;
    }

    //#endregion serviceID 

    //#region isTranslated

    @observable private _isTranslated: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isTranslated(val: boolean) {
        this._isTranslated = val;
    }

    public get isTranslated(): boolean {
        return this._isTranslated;
    }

    //#endregion isTranslated 

    //#region groupID

    @observable private _groupID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set groupID(val: number) {
        this._groupID = val;
    }

    public get groupID(): number {
        return this._groupID;
    }

    //#endregion groupID 

    //#region documentTypeID

    @observable private _documentTypeID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set documentTypeID(val: number) {
        this._documentTypeID = val;
    }

    public get documentTypeID(): number {
        return this._documentTypeID;
    }

    //#endregion documentTypeID 

    //#region name

    @observable private _name: string = null;

    @TypeSystem.propertyDecorator('string')
    public set name(val: string) {
        this._name = val;
    }

    public get name(): string {
        return this._name;
    }

    //#endregion name 

    //#region sunauServiceUri

    @observable private _sunauServiceUri: string = null;

    @TypeSystem.propertyDecorator('string')
    public set sunauServiceUri(val: string) {
        this._sunauServiceUri = val;
    }

    public get sunauServiceUri(): string {
        return this._sunauServiceUri;
    }

    //#endregion sunauServiceUri 

    //#region initiationTypeID

    @observable private _initiationTypeID: WaysToStartService = null;

    @TypeSystem.propertyDecorator(WaysToStartService)
    public set initiationTypeID(val: WaysToStartService) {
        this._initiationTypeID = val;
    }

    public get initiationTypeID(): WaysToStartService {
        return this._initiationTypeID;
    }

    //#endregion initiationTypeID 

    //#region resultDocumentName

    @observable private _resultDocumentName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set resultDocumentName(val: string) {
        this._resultDocumentName = val;
    }

    public get resultDocumentName(): string {
        return this._resultDocumentName;
    }

    //#endregion resultDocumentName 

    //#region description

    @observable private _description: string = null;

    @TypeSystem.propertyDecorator('string')
    public set description(val: string) {
        this._description = val;
    }

    public get description(): string {
        return this._description;
    }

    //#endregion description 

    //#region explanatoryTextService

    @observable private _explanatoryTextService: string = null;

    @TypeSystem.propertyDecorator('string')
    public set explanatoryTextService(val: string) {
        this._explanatoryTextService = val;
    }

    public get explanatoryTextService(): string {
        return this._explanatoryTextService;
    }

    //#endregion explanatoryTextService 

    //#region explanatoryTextFulfilledService

    @observable private _explanatoryTextFulfilledService: string = null;

    @TypeSystem.propertyDecorator('string')
    public set explanatoryTextFulfilledService(val: string) {
        this._explanatoryTextFulfilledService = val;
    }

    public get explanatoryTextFulfilledService(): string {
        return this._explanatoryTextFulfilledService;
    }

    //#endregion explanatoryTextFulfilledService 

    //#region explanatoryTextRefusedOrTerminatedService

    @observable private _explanatoryTextRefusedOrTerminatedService: string = null;

    @TypeSystem.propertyDecorator('string')
    public set explanatoryTextRefusedOrTerminatedService(val: string) {
        this._explanatoryTextRefusedOrTerminatedService = val;
    }

    public get explanatoryTextRefusedOrTerminatedService(): string {
        return this._explanatoryTextRefusedOrTerminatedService;
    }

    //#endregion explanatoryTextRefusedOrTerminatedService 

    //#region orderNumber

    @observable private _orderNumber: number = null;

    @TypeSystem.propertyDecorator('number')
    public set orderNumber(val: number) {
        this._orderNumber = val;
    }

    public get orderNumber(): number {
        return this._orderNumber;
    }

    //#endregion orderNumber 

    //#region admStructureUnitName

    @observable private _admStructureUnitName: string = null;

    @TypeSystem.propertyDecorator('string')
    public set admStructureUnitName(val: string) {
        this._admStructureUnitName = val;
    }

    public get admStructureUnitName(): string {
        return this._admStructureUnitName;
    }

    //#endregion admStructureUnitName 

    //#region attachedDocumentsDescription

    @observable private _attachedDocumentsDescription: string = null;

    @TypeSystem.propertyDecorator('string')
    public set attachedDocumentsDescription(val: string) {
        this._attachedDocumentsDescription = val;
    }

    public get attachedDocumentsDescription(): string {
        return this._attachedDocumentsDescription;
    }

    //#endregion attachedDocumentsDescription 

    //#region additionalConfiguration

    @observable private _additionalConfiguration: any = null;

    @TypeSystem.propertyDecorator('any')
    public set additionalConfiguration(val: any) {
        this._additionalConfiguration = val;
    }

    public get additionalConfiguration(): any {
        return this._additionalConfiguration;
    }

    //#endregion additionalConfiguration 

    //#region additionalDataAsString

    @observable private _additionalDataAsString: string = null;

    @TypeSystem.propertyDecorator('string')
    public set additionalDataAsString(val: string) {
        this._additionalDataAsString = val;
    }

    public get additionalDataAsString(): string {
        return this._additionalDataAsString;
    }

    //#endregion additionalDataAsString 

    //#region serviceUrl

    @observable private _serviceUrl: string = null;

    @TypeSystem.propertyDecorator('string')
    public set serviceUrl(val: string) {
        this._serviceUrl = val;
    }

    public get serviceUrl(): string {
        return this._serviceUrl;
    }

    //#endregion serviceUrl 

    //#region isActive

    @observable private _isActive: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set isActive(val: boolean) {
        this._isActive = val;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    //#endregion isActive 

    //#region languageCode

    @observable private _languageCode: string = null;

    @TypeSystem.propertyDecorator('string')
    public set languageCode(val: string) {
        this._languageCode = val;
    }

    public get languageCode(): string {
        return this._languageCode;
    }

    //#endregion languageCode 

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment) {
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment {
        return this._updatedOn;
    }

    //#endregion updatedOn 

    //#region attachedDocumentTypes

    @observable private _attachedDocumentTypes: DocumentType[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'DocumentType')
    public set attachedDocumentTypes(val: DocumentType[]) {
        this._attachedDocumentTypes = val;
    }

    public get attachedDocumentTypes(): DocumentType[] {
        return this._attachedDocumentTypes;
    }

    //#endregion attachedDocumentTypes 

    //#region declarations

    @observable private _declarations: Declaration[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'Declaration')
    public set declarations(val: Declaration[]) {
        this._declarations = val;
    }

    public get declarations(): Declaration[] {
        return this._declarations;
    }

    //#endregion declarations 

    //#region seviceTerms

    @observable private _seviceTerms: ServiceTerm[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'ServiceTerm')
    public set seviceTerms(val: ServiceTerm[]) {
        this._seviceTerms = val;
    }

    public get seviceTerms(): ServiceTerm[] {
        return this._seviceTerms;
    }

    //#endregion seviceTerms 

    //#region deliveryChannels

    @observable private _deliveryChannels: DeliveryChannel[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'DeliveryChannel')
    public set deliveryChannels(val: DeliveryChannel[]) {
        this._deliveryChannels = val;
    }

    public get deliveryChannels(): DeliveryChannel[] {
        return this._deliveryChannels;
    }

    //#endregion deliveryChannels 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}

@TypeSystem.typeDecorator('UserSearchCriteria', moduleContext.moduleName)
export class UserSearchCriteria extends BasePagedSearchCriteria {

    //#region userIDs

    @observable private _userIDs: number[] = null;

    @TypeSystem.propertyArrayDecorator('number')
    public set userIDs(val: number[]) {
        this._userIDs = val;
    }

    public get userIDs(): number[] {
        return this._userIDs;
    }

    //#endregion userIDs 

    //#region cin

    @observable private _cin: number = null;

    @TypeSystem.propertyDecorator('number')
    public set cin(val: number) {
        this._cin = val;
    }

    public get cin(): number {
        return this._cin;
    }

    //#endregion cin 

    //#region email

    @observable private _email: string = null;

    @TypeSystem.propertyDecorator('string')
    public set email(val: string) {
        this._email = val;
    }

    public get email(): string {
        return this._email;
    }

    //#endregion email 

    //#region username

    @observable private _username: string = null;

    @TypeSystem.propertyDecorator('string')
    public set username(val: string) {
        this._username = val;
    }

    public get username(): string {
        return this._username;
    }

    //#endregion username 

    //#region userStatuses

    @observable private _userStatuses: UserStatuses[] = null;

    @TypeSystem.propertyArrayDecorator(UserStatuses)
    public set userStatuses(val: UserStatuses[]) {
        this._userStatuses = val;
    }

    public get userStatuses(): UserStatuses[] {
        return this._userStatuses;
    }

    //#endregion userStatuses 

    //#region dateFrom

    @observable private _dateFrom: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set dateFrom(val: moment.Moment) {
        if (moment.isMoment(val))
            this._dateFrom = val.startOf('day');
        else
            this._dateFrom = val
    }

    public get dateFrom(): moment.Moment {
        return this._dateFrom;
    }

    //#endregion dateFrom 

    //#region dateTo

    @observable private _dateTo: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set dateTo(val: moment.Moment) {
        if (moment.isMoment(val))
            this._dateTo = val.endOf('day');
        else
            this._dateTo = val;
    }

    public get dateTo(): moment.Moment {
        return this._dateTo;
    }

    //#endregion dateTo 

    //#region authenticationType

    @observable private _authenticationType: AuthenticationTypes = null;

    @TypeSystem.propertyDecorator(AuthenticationTypes)
    public set authenticationType(val: AuthenticationTypes) {
        this._authenticationType = val;
    }

    public get authenticationType(): AuthenticationTypes {
        return this._authenticationType;
    }

    //#endregion authenticationType 

    //#region loadUserPermissions

    @observable private _loadUserPermissions: boolean = null;

    @TypeSystem.propertyDecorator('boolean')
    public set loadUserPermissions(val: boolean) {
        this._loadUserPermissions = val;
    }

    public get loadUserPermissions(): boolean {
        return this._loadUserPermissions;
    }

    //#endregion loadUserPermissions 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}

@TypeSystem.typeDecorator('UserVM', moduleContext.moduleName)
export class UserVM extends BaseDataModel {

    //#region userID

    @observable private _userID: number = null;

    @TypeSystem.propertyDecorator('number')
    public set userID(val: number) {
        this._userID = val;
    }

    public get userID(): number {
        return this._userID;
    }

    //#endregion userID 

    //#region email

    @observable private _email: string = null;

    @TypeSystem.propertyDecorator('string')
    public set email(val: string) {
        this._email = val;
    }

    public get email(): string {
        return this._email;
    }

    //#endregion email 

    //#region username

    @observable private _username: string = null;

    @TypeSystem.propertyDecorator('string')
    public set username(val: string) {
        this._username = val;
    }

    public get username(): string {
        return this._username;
    }

    //#endregion username

    //#region updatedOn

    @observable private _updatedOn: moment.Moment = null;

    @TypeSystem.propertyDecorator('moment')
    public set updatedOn(val: moment.Moment) {
        this._updatedOn = val;
    }

    public get updatedOn(): moment.Moment {
        return this._updatedOn;
    }

    //#endregion valueDateTime 

    //#region cIN

    @observable private _cin: number = null;

    @TypeSystem.propertyDecorator('number')
    public set cin(val: number) {
        this._cin = val;
    }

    public get cin(): number {
        return this._cin;
    }

    //#endregion cIN 

    //#region status

    @observable private _status: UserStatuses = null;

    @TypeSystem.propertyDecorator(UserStatuses)
    public set status(val: UserStatuses) {
        this._status = val;
    }

    public get status(): UserStatuses {
        return this._status;
    }

    //#endregion status 

    //#region userPermissions

    @observable private _userPermissions: UserPermission[] = null;

    @TypeSystem.propertyArrayDecorator(moduleContext.moduleName + '.' + 'UserPermission')
    public set userPermissions(val: UserPermission[]) {
        this._userPermissions = val;
    }

    public get userPermissions(): UserPermission[] {
        return this._userPermissions;
    }

    //#endregion userPermissions 

    constructor(obj?: any) {
        super(obj)

        this.copyFrom(obj);
    }
}