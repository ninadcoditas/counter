
import { Counter } from './counter';

export default {
    title: 'Example/Counter',
    component: 'orxe-counter',
}

// const Template = (args) => `<orxe-counter min=${args.min} max=${args.max} value=${args.value}>
//         ${args.label}
//     </orxe-counter>`

const Template = (args) => Counter(args)

export const Default = Template.bind({})
Default.args = {
    min: 0,
    max: 10,
    value: 1,
    label: "Adults",

}

export const Decrement_Disabled = Template.bind({})
Decrement_Disabled.args = {
    min: 0,
    max: 10,
    value: 0,
    label: "Adults",

}

export const Increment_Disabled = Template.bind({})
Increment_Disabled.args = {
    min: 0,
    max: 10,
    value: 10,
    label: "Adults",

}

export const Without_Label = Template.bind({})
Without_Label.args = {
    min: 0,
    max: 10,
    value: 10,
    label: "",

}
