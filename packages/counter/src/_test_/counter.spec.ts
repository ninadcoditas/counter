import OrxeCounter from '../orxe-counter';
import {
  toHaveClass, toHaveAttribute, toHaveValue, toBeChecked, toHaveStyle
} from '@testing-library/jest-dom/matchers'

expect.extend({ toHaveClass, toHaveAttribute, toHaveValue, toBeChecked, toHaveStyle })


describe('orxe-counter', () => {
  let counter;
  let counterElement
  beforeEach(async () => {
    OrxeCounter;
    counterElement = document.createElement('orxe-counter')
    counterElement.setAttribute("value", "1");
    counterElement.setAttribute("min", "0");
    counterElement.setAttribute("max", "10");

    counter = document.body.appendChild(counterElement) as OrxeCounter;
    counterElement = document.getElementsByTagName('orxe-counter')[0] as HTMLElement
  });

  afterEach(async () => {
    await counter.remove();
  });


  function getElement(selector) {
    return counterElement.shadowRoot.querySelector(selector)
  }

  function getValue() {
    return counterElement.value
  }

  it('init', () => {
    expect(counterElement.value).toBe(1);
    expect(counterElement.min).toBe(0);
    expect(counterElement.max).toBe(10);
  })

  it('should increase value on clicking + when value < max value', () => {
    let currentValue = getValue();
    if (currentValue < counterElement.max) {
      getElement('#increment').click()
      let newValue = getValue()
      expect(newValue).toBe(currentValue + 1);
    }
  })

  it('should decrease value on clicking - when value > min value', () => {
    let currentValue = getValue();
    if (currentValue > counterElement.min) {
      getElement('#decrement').click()
      let newValue = getValue()
      expect(newValue).toBe(currentValue - 1)
    }
  })

  it('should disable + button when value >= max value ', () => {
    let currentValue = getValue();
    if (currentValue >= counterElement.max) {
      expect(getElement('#increment').hasAttribute('disabled')).toBeTruthy()
    }
  })

  it('should disable - button when value <= min value ', () => {
    let currentValue = getValue();
    if (currentValue <= counterElement.min) {
      expect(getElement('#decrement').hasAttribute('disabled')).toBeTruthy()
    }
  })
});