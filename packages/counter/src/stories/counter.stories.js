
import { Counter } from './counter';

export default {
    title: 'Example/Counter'
}

const Template = (args) => Counter(args)

export const Default = Template.bind({})
Default.args = {
    min: 0,
    max: 10,
    value: 1,
    label: "Adults"
}

