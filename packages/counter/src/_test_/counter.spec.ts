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

  it('init', () => {
    expect(parseInt(getValue())).toBe(1);
  })

  function getElement(id) {
    return counterElement.shadowRoot.querySelector(id)
  }

  function getValue() {
    let counterValue = getElement('#value').innerHTML.trim()
    counterValue = counterValue.replace(/<\!--.*?-->/g, "");
    return counterValue;
  }

  // function getByTestId(id: string): HTMLElement {
  //   return radioButton.shadowRoot.querySelector(`[data-testid=${id}]`);
  // }
  // it('should check default value for properties for radio button card', () => {
  //   expect(radioButton.radioCheckedFlag).toBeFalsy();
  //   expect(radioButton.radioLable).toEqual('');
  //   expect(radioButton.radioValue).toEqual('');
  // });

  // it('has checked content class', () => {
  //   const checkedContent = getByTestId('radio-button-card-checked-content');
  //   expect(checkedContent).toHaveClass('checked-content');
  // });
  // it('check css value for checked content before radio button check', () => {
  //   const beforeRadioButtonCheck = getByTestId('radio-button-card-checked-content');
  //   expect(beforeRadioButtonCheck).toHaveStyle({
  //     backgroundColor: window.getComputedStyle(document.body).getPropertyValue('--global-bg')
  //   });
  // });
  // it('radio button default unchecked', () => {
  //   const radioInput = getByTestId('radio-button-card-radio-input');
  //   expect(radioInput).not.toBeChecked()
  // });
  // it('check on click radio button status and css value', async () => {
  //   const radioInputClick = getByTestId('radio-button-card-radio-input');
  //   await radioInputClick.click();
  //   expect(radioInputClick).toBeChecked();
  //   expect(radioButton.radioCheckedFlag).toBeTruthy();
  //   const contentAfterClick = getByTestId('radio-button-card-checked-content');
  //   expect(contentAfterClick).toHaveStyle({
  //     backgroundColor: window.getComputedStyle(document.body).getPropertyValue('--neutral'),
  //     display: 'block'
  //   })
  // });

});