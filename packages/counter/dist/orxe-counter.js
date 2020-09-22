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
        this.value = parseInt(this.getAttribute("value").toString());
        this.min = parseInt(this.getAttribute("min").toString());
        this.max = parseInt(this.getAttribute("max").toString());
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
    <button @click="${this.decrement}" id="decrement"> 
    - 
    </button>
    </div>  
    <div class="counter_element">${this.value}</div>
    <div class="counter_element">
    <button @click="${this.increment}" id="increment">
    + 
    </button>
    </div>
    </div>
    </div>
    `;
    }
    decrement() {
        this.value--;
        this.handleEdgeCase();
    }
    increment() {
        this.value++;
        this.handleEdgeCase();
    }
    handleEdgeCase() {
        let incrementButton = this.shadowRoot.getElementById("increment");
        let decrementButton = this.shadowRoot.getElementById("decrement");
        if (this.value >= this.max) {
            incrementButton.disabled = true;
        }
        else {
            incrementButton.disabled = false;
        }
        if (this.value <= this.min) {
            decrementButton.disabled = true;
        }
        else {
            decrementButton.disabled = false;
        }
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
