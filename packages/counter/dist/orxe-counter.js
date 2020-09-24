var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './counter-css';
let OrxeCounter = class OrxeCounter extends LitElement {
    constructor() {
        super();
        this.value = 0;
        this.min = 0;
        this.max = 0;
        let value = this.getAttribute("value");
        this.value = value == null ? 0 : parseInt(value.toString());
        let min = this.getAttribute("min");
        this.min = min == null ? 0 : parseInt(min.toString());
        let max = this.getAttribute("max");
        this.max = max == null ? 0 : parseInt(max.toString());
    }
    render() {
        return html `
  <div class="counter">
  ${this.innerHTML.trim() != "" ?
            html ` 
        <div class="counter_label"> 
          <slot></slot>
          </div>` :
            html ``}
    <div class="counter_container">
      <div class="counter_element">
        <button @click="${() => this.value--}" id="decrement" ?disabled="${this.value <= this.min}"> 
          - 
        </button>
      </div>  
      <div class="counter_element" id="value">${this.value}</div>
      <div class="counter_element">
        <button @click="${() => this.value++}" id="increment" ?disabled="${this.value >= this.max}">
          + 
        </button>
      </div>
      </div>
    </div>
    `;
    }
    updated(changedProperties) {
        console.log(changedProperties);
        this.emitEvent();
    }
    emitEvent() {
        let event = new CustomEvent('value-changed', {
            detail: {
                value: this.value
            }
        });
        this.dispatchEvent(event);
    }
};
OrxeCounter.styles = styles;
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "value", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "min", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeCounter.prototype, "max", void 0);
OrxeCounter = __decorate([
    customElement('orxe-counter'),
    __metadata("design:paramtypes", [])
], OrxeCounter);
export default OrxeCounter;
