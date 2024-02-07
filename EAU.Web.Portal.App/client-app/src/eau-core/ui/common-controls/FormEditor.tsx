import { BaseFieldComponent, BaseFieldProps } from "cnsys-ui-react";
import { observer } from "mobx-react";
import React from "react";
import { withSimpleErrorLabel } from "../WithSimpleErrorLabel";
import { Helper } from "cnsys-core";

interface FormEditorProps extends BaseFieldProps {
}

@observer class FormEditorUIImpl extends BaseFieldComponent<FormEditorProps> {

    private html: any;
    private saveTimeout: NodeJS.Timeout;

    constructor(props: FormEditorProps) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.html = this.props.modelReference.getValue();

        Helper.ensurePolyfilForReplaceAll();
        let isHTMLEditable = this.html.indexOf('contenteditable="true" class="editable"') < 0;

        if (isHTMLEditable)
            this.html = this.html.replaceAll('data-editable=""', 'contenteditable="true" class="editable" data-editable=""');
    }

    renderInternal() {
        return (<div onKeyDown={this.handleKeyDown} onPaste={this.handlePaste} dangerouslySetInnerHTML={{ __html: this.html }} />)
    }

    //#region handlers

    private handlePaste(e: any) {

        //��� ������ ������ data-htmlenable ������� ������� ������ �� ��������� ������������.
        if (!e.target.attributes['data-htmlenable']) {
            e.preventDefault();

            var clipboardText = null;

            if (e.clipboardData && e.clipboardData.getData)
                clipboardText = document.createTextNode(e.clipboardData.getData('text'));
            else if ((window as any).clipboardData && (window as any).clipboardData.getData)
                clipboardText = (window as any).clipboardData.getData('text'); //IE

            if (clipboardText) {
                let range = window.getSelection().getRangeAt(0);

                range.deleteContents();
                range.insertNode(clipboardText);
                range.setStartAfter(clipboardText);
                range.setEndAfter(clipboardText);
            }
        }

        this.saveContent();
    }

    private handleKeyDown(e: any) {

        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
            this.handleEnter(e);
        }

        this.saveContent();
    }

    private handleEnter(e: React.KeyboardEvent<HTMLDivElement>) {
        const selection = window.getSelection(),
            range = selection.getRangeAt(0);

        const el = document.createElement('br');

        range.deleteContents();
        range.insertNode(el);

        range.setStartAfter(el);
        range.setEndAfter(el);

        const ze = document.createTextNode("\u200B");
        range.insertNode(ze);
        range.setStartBefore(ze);
        range.setEndBefore(ze);

        selection.removeAllRanges();
        selection.addRange(range);
        e.stopPropagation();
    }

    private saveContent() {

        clearTimeout(this.saveTimeout);

        this.saveTimeout = setTimeout(() => {
            //������� ������������ �� ������ div � EDITOR-CONTENT-a, ������ ������������� - div � dangerouslySetInnerHTML ������ ������������ div. 
            //� ��� ������� �������� �� ��������� ������� div - ���.
            let htmlContent = $('#EDITOR-CONTENT>div').html();

            this.props.modelReference.setValue(htmlContent);
        }, 100); //������� �� �������� � ������ 100 ����������� ���� ���������� �������.
    }

    //#endregion
}
export const FormEditorUI = withSimpleErrorLabel(FormEditorUIImpl);