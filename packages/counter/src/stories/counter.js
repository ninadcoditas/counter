import OrxeCounter from '../orxe-counter'
import './counter.css'

export const Counter = ({ min, max, value, label }) => {
    return `
    <orxe-counter min=${min} max=${max} value=${value}>
        ${label}
    </orxe-counter>`
}