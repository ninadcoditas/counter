import { LitElement } from 'lit-element';
export default class OrxeCounter extends LitElement {
    constructor();
    value: number;
    min: number;
    max: number;
    render(): import("lit-element").TemplateResult;
    updated(changedProperties: any): void;
    emitEvent(): void;
    static styles: import("lit-element").CSSResult;
}
