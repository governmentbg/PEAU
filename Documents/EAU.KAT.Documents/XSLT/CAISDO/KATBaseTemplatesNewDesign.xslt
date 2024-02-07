﻿<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
                xmlns:PA="http://ereg.egov.bg/segment/0009-000094"
                xmlns:N="http://ereg.egov.bg/segment/0009-000005"
                xmlns:ID="http://ereg.egov.bg/segment/0009-000099"
                xmlns:S="http://ereg.egov.bg/segment/R-3301"
                xmlns:EA="http://ereg.egov.bg/segment/R-3203"
                xmlns:PD="http://ereg.egov.bg/segment/R-3037"
                
                xmlns:ms="urn:schemas-microsoft-com:xslt"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xslExtension="urn:XSLExtension">

  <!--START Head section-->

  <xsl:template name="Head">
    <head>
      <style>
        /* ----  Print  ---- */
        *, ::before, ::after {
        box-sizing: border-box; }

        body {
        margin: 0; }

        .digital-stamp {
        display: inline-block;
        vertical-align: middle;
        padding: 0.3125rem;
        font-family: Roboto, Arial, "Segoe UI", "Helvetica Neue", Verdana, sans-serif;
        border: 0.1875rem solid #a0cade;
        border-radius: 0.625rem; }
        .digital-stamp .digital-stamp-body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border: 0.125rem solid #80b8d3;
        border-radius: 0.375rem;
        text-align: left; }
        .digital-stamp .digital-stamp-name {
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem; }
        .digital-stamp .digital-stamp-data {
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        padding: 0.3125rem 0.625rem 0.3125rem 0.3125rem; }
        .digital-stamp .digital-stamp-name-text {
        font-size: 1.125rem;
        font-weight: bold;
        line-height: 1;
        max-width: 9rem;
        word-wrap: break-word; }
        .digital-stamp .digital-stamp-data-text {
        font-size: 0.625rem;
        line-height: 1;
        max-width: 6rem;
        word-wrap: break-word; }

        .flex-container {
        padding-right: 0.625rem;
        padding-left: 0.625rem; }

        .row-table .flex-col-auto,
        .row-table .flex-col,
        .row-table .flex-col-1,
        .row-table .flex-col-2,
        .row-table .flex-col-3,
        .row-table .flex-col-4,
        .row-table .flex-col-5,
        .row-table .flex-col-6,
        .row-table .flex-col-7,
        .row-table .flex-col-8,
        .row-table .flex-col-9,
        .row-table .flex-col-10,
        .row-table .flex-col-11,
        .row-table .flex-col-12 {
        padding: 0  0.3125rem 0.625rem 0.3125rem; }

        .row-table + .row-table {
        margin-top: 0.75rem; }

        .flex-row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        margin-right: -0.3125rem;
        margin-left: -0.3125rem; }

        .flex-col-auto,
        .flex-col,
        .flex-col-1,
        .flex-col-2,
        .flex-col-3,
        .flex-col-4,
        .flex-col-5,
        .flex-col-6,
        .flex-col-7,
        .flex-col-8,
        .flex-col-9,
        .flex-col-10,
        .flex-col-11,
        .flex-col-12 {
        position: relative;
        display: block;
        width: 100%;
        padding-right: 0.3125rem;
        padding-left: 0.3125rem; }

        .flex-col-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%; }

        .flex-col {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%; }

        .flex-col-1 {
        -ms-flex: 0 0 8.33%;
        flex: 0 0 8.33%;
        max-width: 8.33%; }

        .flex-col-2 {
        -ms-flex: 0 0 16.66%;
        flex: 0 0 16.66%;
        max-width: 16.66%; }

        .flex-col-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%; }

        .flex-col-4 {
        -ms-flex: 0 0 33.33%;
        flex: 0 0 33.33%;
        max-width: 33.33%; }

        .flex-col-5 {
        -ms-flex: 0 0 41.66%;
        flex: 0 0 41.66%;
        max-width: 41.66%; }

        .flex-col-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%; }

        .flex-col-7 {
        -ms-flex: 0 0 58.33%;
        flex: 0 0 58.33%;
        max-width: 58.33%; }

        .flex-col-8 {
        -ms-flex: 0 0 66.66%;
        flex: 0 0 66.66%;
        max-width: 66.66%; }

        .flex-col-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%; }

        .flex-col-10 {
        -ms-flex: 0 0 83.33%;
        flex: 0 0 83.33%;
        max-width: 83.33%; }

        .flex-col-11 {
        -ms-flex: 0 0 91.66%;
        flex: 0 0 91.66%;
        max-width: 91.66%; }

        .flex-col-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%; }

        .flex-items-center {
        -ms-flex-align: center;
        align-items: center; }

        .print-document {
        width: 720px;
        margin: 0 auto;
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px; }
        .print-document .document-title {
        font-size: 1.5em;
        font-weight: bold;
        margin: 1.875em 0 0.875em 0; }
        .print-document .document-title + .document-subtitle {
        margin: -.875em 0 1.25em 0; }
        .print-document .document-subtitle {
        font-size: 1.125em;
        font-weight: bold; }
        .print-document .document-section {
        margin-bottom: 1rem; }
        .print-document .document-section:not(:last-child) {
        margin-bottom: 2rem; }
        .print-document .document-section .section-title {
        font-size: 1.125em;
        font-weight: bold;
        margin-bottom: 0.625em; }
        .print-document .document-section .section-line {
        padding-bottom: 0.625em;
        border-bottom: 1px solid gray; }
        .print-document .document-section .document-section:not(:last-child) {
        margin-bottom: 1rem; }
        .print-document .document-section .document-section .section-title {
        font-size: 1.125em;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 0.5em; }
        .print-document .document-section .document-section .document-section .section-title {
        font-size: 1em;
        font-weight: bold;
        font-style: normal;
        margin-bottom: 0.5em; }
        .print-document .document-note {
        font-size: .85em;
        font-style: italic; }
        .print-document b {
        font-weight: bold; }
        .print-document p {
        margin-top: 0.625rem;
        margin-bottom: 0.625rem; }
        .print-document .table-margins {
        margin-top: 0.125rem;
        margin-bottom: 0.125rem; }
        .print-document .text-lead {
        font-size: 1.125em;
        font-weight: bold; }
        .print-document .text-uppercase {
        text-transform: uppercase !important; }
        .print-document .text-bold {
        font-weight: bold !important; }
        .print-document .text-center {
        text-align: center !important; }
        .print-document .text-left {
        text-align: left !important; }
        .print-document .text-right {
        text-align: right !important; }
        .print-document .text-justify {
        text-align: justify !important; }
        .print-document .text-indent {
        text-indent: 1.5em !important; }
        .print-document .text-underline {
        text-decoration: underline; }
        .print-document .list-unstyled {
        list-style: none;
        padding-left: 1.5em; }
        .print-document .text-number {
        padding: 0.125rem 0;
        max-width: 4em;
        min-width: 3em; }
        .print-document ol,
        .print-document ul {
        padding-left: 2.5em;
        margin-top: 0.625em;
        margin-bottom: 0.625em; }
        .print-document li {
        margin-bottom: 0.3125rem; }
        .print-document .list-field > li {
        margin-bottom: 0; }
        .print-document .list-field > li:not(:last-child) {
        border-bottom: 1px dotted gray;
        padding-bottom: 0.3125em;
        margin-bottom: 0.625em; }
        .print-document .list-counter {
        padding-left: 0;
        position: relative;
        list-style: none;
        counter-reset: list-counter; }
        .print-document .list-counter > li:not(:only-child) {
        padding-left: 2em;
        counter-increment: list-counter; }
        .print-document .list-counter > li:not(:only-child)::before {
        content: counter(list-counter) ".";
        position: absolute;
        left: 0; }
        .print-document hr {
        border: none;
        border-bottom: 2px solid gray; }
        .print-document .table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        text-indent: 0; }
        .print-document .table th {
        text-align: left; }
        .print-document .table td, .print-document .table th {
        vertical-align: top;
        padding: 0.3125rem 0.3125rem; }
        .print-document .table-borderless {
        border: none; }
        .print-document .table-borderless td, .print-document .table-borderless th {
        border: none;
        padding: 0  0.625rem 0.625rem 0; }
        .print-document .photo {
        border: 1px solid gray;
        max-width: 130px;
        max-height: 160px; }

        @media print {
        .print-document {
        width: 100%; } }

        /* ----  /Print  ---- */


        /*# sourceMappingURL=print.css.map */

      </style>
    </head>
  </xsl:template>

  <!--END Head section-->

  <!--START PersonBasicData-->

  <xsl:template name ="PersonBasicDataNames">
    <xsl:param name="Names"/>
    <xsl:choose>
      <xsl:when test="$Names">
        <sapn class="label">Име:</sapn>&#160;
        <xsl:value-of select="$Names/N:First"/>&#160;
        <xsl:choose>
          <xsl:when test="$Names/N:Middle">
            <xsl:value-of select="$Names/N:Middle"/>&#160;
          </xsl:when>
        </xsl:choose>
        <xsl:value-of select="$Names/N:Last"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="PersonBasicDataIdentifier">
    <xsl:param name="EGN"/>
    <xsl:param name="LNCH"/>
    <xsl:choose>
      <xsl:when test="$EGN">
        <span class="label">ЕГН:</span>&#160;<xsl:value-of  select="$EGN"/>
      </xsl:when>
      <xsl:when test="$LNCH">
        <span class="label">ЛНЧ:</span>&#160;<xsl:value-of  select="$LNCH"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="IdentitityIssueDate">
    <xsl:param name="IdentitityIssueDate"/>
    <xsl:choose>
      <xsl:when test="$IdentitityIssueDate">
        <xsl:if test="$IdentitityIssueDate != '0001-01-01'">
          <span class="label">Издаден на:</span>&#160;<xsl:value-of  select="ms:format-date($IdentitityIssueDate, 'dd.MM.yyyy г.')"/>
        </xsl:if>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="IdentityIssuer">
    <xsl:param name="IdentityIssuer"/>
    <xsl:choose>
      <xsl:when test="$IdentityIssuer">
        <span class="label">Издател:</span>&#160;<xsl:value-of  select="$IdentityIssuer"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="IdentityNumber">
    <xsl:param name="IdentityNumber"/>
    <xsl:choose>
      <xsl:when test="$IdentityNumber">
        <span class="label">Документ №:</span>&#160;<xsl:value-of  select="$IdentityNumber"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="IdentityDocumentType">
    <xsl:param name="IdentityDocumentType"/>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000087'">
        Тип документ:&#160;Лична карта
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000088'">
        Тип документ:&#160;Паспорт
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000089'">
        Тип документ:&#160;Дипломатически паспорт
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000090'">
        Тип документ:&#160;Служебен паспорт
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000091'">
        Тип документ:&#160;Моряшки паспорт
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000092'">
        Тип документ:&#160;Военна карта за самоличност
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000093'">
        Тип документ:&#160;Свидетелство за управление на моторно превозно средство
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000094'">
        Тип документ:&#160;Временен паспорт
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000095'">
        Тип документ:&#160;Служебен открит лист за преминаване на границата
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000097'">
        Тип документ:&#160;Карта на бежанец
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000099'">
        Тип документ:&#160;Карта на чужденец с хуманитарен статут
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000098'">
        Тип документ:&#160;Карта на чужденец, получил убежище
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000121'">
        Тип документ:&#160;Разрешение за пребиваване
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$IdentityDocumentType = '0006-000122'">
        Тип документ:&#160;Удостоверение за пребиваване на гражданин на ЕС
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="MaritalStatus">
    <xsl:param name="MaritalStatus"/>
    <xsl:choose>
      <xsl:when test="$MaritalStatus = '357'">
        женен/омъжена
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$MaritalStatus = '358'">
        разведен/а
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$MaritalStatus = '355'">
        вдовец/вдовица
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$MaritalStatus = '356'">
        неженен/неомъжена
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!--END PersonBasicDataNames-->

  <!--START Addresses-->

  <xsl:template name="GRAOAddress">
    <xsl:param name="GRAOAddress"/>
    <xsl:param name="AddressLabel"/>
    <span class="label">
      <xsl:value-of  select="$AddressLabel"/>:
    </span>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:DistrictGRAOName">
        област&#160;<xsl:value-of  select="$GRAOAddress/PA:DistrictGRAOName"/>,
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:MunicipalityGRAOName">
        община&#160;<xsl:value-of  select="$GRAOAddress/PA:MunicipalityGRAOName"/>,
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:SettlementGRAOName">
        <xsl:value-of  select="$GRAOAddress/PA:SettlementGRAOName"/>
        <br/>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:StreetText">
        бул./ул./ж.к.&#160;<xsl:value-of  select="$GRAOAddress/PA:StreetText"/>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:BuildingNumber">,</xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:BuildingNumber">
        &#160;№/бл.&#160;<xsl:value-of  select="$GRAOAddress/PA:BuildingNumber"/>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:Entrance">,</xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:Entrance">
        &#160;вх.&#160;<xsl:value-of  select="$GRAOAddress/PA:Entrance"/>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:Floor">,</xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:Floor">
        &#160;ет.&#160;<xsl:value-of  select="$GRAOAddress/PA:Floor"/>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:Apartment">,</xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$GRAOAddress/PA:Apartment">
        &#160;ап.&#160;<xsl:value-of  select="$GRAOAddress/PA:Apartment"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="EntityAddress">
    <xsl:param name="EntityAddress"/>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:DistrictName">
        Обл.&#160;<xsl:value-of  select="$EntityAddress/EA:DistrictName"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:MunicipalityName">
        Общ.&#160;<xsl:value-of  select="$EntityAddress/EA:MunicipalityName"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:SettlementName">
        &#160;<xsl:value-of  select="$EntityAddress/EA:SettlementName"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:AreaName">
        р-н.&#160;<xsl:value-of  select="$EntityAddress/EA:AreaName"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:PostCode">
        п.к.&#160;<xsl:value-of  select="$EntityAddress/EA:PostCode"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:HousingEstate">
        ж.к.&#160;<xsl:value-of  select="$EntityAddress/EA:HousingEstate"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:Street">
        бул./ул.&#160;<xsl:value-of  select="$EntityAddress/EA:Street"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:StreetNumber">
        №&#160;<xsl:value-of  select="$EntityAddress/EA:StreetNumber"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:Block">
        бл.&#160;<xsl:value-of  select="$EntityAddress/EA:Block"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:Entrance">
        вх.<xsl:value-of  select="$EntityAddress/EA:Entrance"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:Floor">
        ет.<xsl:value-of  select="$EntityAddress/EA:Floor"/>&#160;
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$EntityAddress/EA:Apartment">
        ап.&#160;<xsl:value-of  select="$EntityAddress/EA:Apartment"/>&#160;
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!--END Addresses-->

  <xsl:template name ="PeriodicTechnicalCheck">
    <xsl:param name="NextInspectionDate"/>
    <xsl:param name="Statuses"/>
    <h3 class="section-title">Справка в Регистър „Периодични технически прегледи“</h3>
    <xsl:choose>
      <xsl:when test="$NextInspectionDate">
        <p>
          <span class="label">Дата на следващ преглед:</span>&#160;<xsl:value-of  select="ms:format-date($NextInspectionDate, 'dd.MM.yyyy г.')"/>
        </p>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$Statuses">
        <xsl:call-template name="Statuses">
          <xsl:with-param name="Statuses" select="$Statuses"/>
          <xsl:with-param name="Status" select="$Statuses/Status"/>
        </xsl:call-template>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name ="GuaranteeFund">
    <xsl:param name="PolicyValidTo"/>
    <xsl:param name="Statuses"/>
    <h3 class="section-title">Справка в Регистър застраховки „Гражданска отговорност (ГО)“</h3>
    <xsl:choose>
      <xsl:when test="$PolicyValidTo">
        <p>
          <span class="label">Дата на валидност на полицата:</span>&#160;<xsl:value-of  select="ms:format-date($PolicyValidTo, 'dd.MM.yyyy г.')"/>
        </p>
      </xsl:when>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="$Statuses">
        <xsl:call-template name="Statuses">
          <xsl:with-param name="Statuses" select="$Statuses"/>
          <xsl:with-param name="Status" select="$Statuses/Status"/>
        </xsl:call-template>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="Status">
    <xsl:param name="Status"/>
    <xsl:choose>
      <xsl:when test="$Status/S:Blocking = 'true'">
        <p class="text-underline">
          Услугата се прекратява!<br/>
          <xsl:value-of select="$Status/S:Description"/>
        </p>
      </xsl:when>
      <xsl:otherwise>
        <p class="text-underline">
          <xsl:value-of select="$Status/S:Description"/>
        </p>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="Statuses">
    <xsl:param name="Statuses"/>
    <xsl:param name="Status"/>
    <xsl:choose>
      <xsl:when test="$Statuses">
        <xsl:call-template name="Status">
          <xsl:with-param name="Status" select="$Status"/>
        </xsl:call-template>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="IssuingPoliceDepartmentHeader">
    <xsl:param name="IssuingPoliceDepartment"/>
    ДО<br/>
    <xsl:choose>
      <xsl:when test="$IssuingPoliceDepartment/PD:PoliceDepartmentCode = 3286">
        ДИРЕКТОРА НА<br/>
      </xsl:when>
      <xsl:otherwise>
        НАЧАЛНИКА НА<br/>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:value-of select="$IssuingPoliceDepartment/PD:PoliceDepartmentName" />
  </xsl:template>

  <xsl:template name="IssuingPoliceDepartmentDirectTo">
    <xsl:param name="IssuingPoliceDepartment"/>
    <xsl:choose>
      <xsl:when test="$IssuingPoliceDepartment/PD:PoliceDepartmentCode = 3286">
        Уважаеми Господин Директор,
      </xsl:when>
      <xsl:otherwise>
        Уважаеми Господин Началник,
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="DocumentSignature">
    <xsl:param name="Signature"/>
    <xsl:if test="$Signature">
      <div class="digital-stamp">
        <div class="digital-stamp-body">
          <div class="digital-stamp-name">
            <div class="digital-stamp-name-text">
              <xsl:value-of select="xslExtension:ExtractFirstGroup(SigningCertificateData/Subject/., 'CN=(.+?),')"/>
            </div>
          </div>
          <div class="digital-stamp-data">
            <div class="digital-stamp-data-text">
              Digitally signed by<br/>
              <xsl:value-of select="xslExtension:ExtractFirstGroup(SigningCertificateData/Subject/., 'CN=(.+?),')"/><br/>
              Date:&#32;
              <xsl:value-of disable-output-escaping="yes" select="xslExtension:FormatDate(SignatureTime/., 'yyyy.MM.dd&lt;\/br&gt;HH:mm:ss zzz')"/>
            </div>
          </div>
        </div>
      </div>
    </xsl:if>
  </xsl:template>

  <xsl:template name="DocumentSignatures">
    <xsl:param name="Signatures"/>
    <xsl:if test="$Signatures">
      <xsl:for-each select="$Signatures/Signature">
        <xsl:call-template name="DocumentSignature">
          <xsl:with-param name="Signature" select = "$Signatures/Signature" />
        </xsl:call-template>
      </xsl:for-each>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>