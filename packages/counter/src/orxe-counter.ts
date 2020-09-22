import { html, customElement, LitElement, property } from 'lit-element';
import styles from './counter-css';

@customElement('orxe-counter')
export default class OrxeCounter extends LitElement {

  constructor() {
    super();
    this.value = parseInt(this.getAttribute("value")!.toString())
    this.min = parseInt(this.getAttribute("min")!.toString())
    this.max = parseInt(this.getAttribute("max")!.toString())
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

  /**
   * This method handles decrement
   */
  decrement() {
    this.value--;
    this.handleEdgeCase();
  }

  /**
   * This method handles increment
   */
  increment() {
    this.value++
    this.handleEdgeCase()
  }
  /**
   * This method handles edge case
   */

  handleEdgeCase() {
    let incrementButton = (<HTMLInputElement>this.shadowRoot!.getElementById("increment"))
    let decrementButton = (<HTMLInputElement>this.shadowRoot!.getElementById("decrement"))
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

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
