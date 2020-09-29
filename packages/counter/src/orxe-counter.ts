import { html, customElement, LitElement, property } from 'lit-element';
import styles from './counter-css';

@customElement('orxe-counter')
export default class OrxeCounter extends LitElement {

  constructor() {
    super();
    let value = this.getAttribute("value");
    this.value = value == null ? 0 : parseInt(value.toString())
    let min = this.getAttribute("min")
    this.min = min == null ? 0 : parseInt(min.toString())
    let max = this.getAttribute("max")
    this.max = max == null ? 0 : parseInt(max.toString())
  }

  /**
   * @memberof OrxeCounter
   * this property denotes the actual value
   */
  @property({ type: Number })
  value = 0;

  /**
 * @memberof OrxeCounter
 * this property denotes the minimum value
 */
  @property({ type: Number })
  min = 0;

  /**
 * @memberof OrxeCounter
 * this property denotes the maximum value
 */
  @property({ type: Number })
  max = 0;

  /**
  * Implement `render` to define a template for button element.
  */
  render() {
    return html`
  <div class="counter">
  ${this.innerHTML.trim() != "" ?
        html` 
        <div class="counter_label"> 
          <slot></slot>
          </div>` :
        html``}
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

  /**
   * 
   * updated lifecycle hook to keep track of value and emit event
   */

  updated(changedProperties) {
    console.log(changedProperties); // logs previous values
    this.emitEvent()
  }



  connectedCallback() {
    // @ts-ignore
    this._saveInstanceProperties();
    super.connectedCallback();
  }

  /**
   * This method handles emits the value of counter
   */

  emitEvent() {
    let event = new CustomEvent('value-changed', {
      detail: {
        value: this.value
      }
    });
    this.dispatchEvent(event);
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;

}
