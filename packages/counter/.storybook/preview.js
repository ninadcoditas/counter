
import OrxeCounter from '../src/orxe-counter'

const componentName = 'orxe-counter'

function defineCustomElement() {
  customElements.get(componentName) || customElements.define(componentName, ExampleComponent);
}

defineCustomElement()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}