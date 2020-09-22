import { LitElement } from 'lit-element';
export default class OrxeCounter extends LitElement {
    constructor();
    value: number;
    min: number;
    max: number;
    render(): import("lit-element").TemplateResult;
    decrement(): void;
    increment(): void;
    handleEdgeCase(): void;
    static styles: import("lit-element").CSSResult;
}
