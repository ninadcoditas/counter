import { css } from 'lit-element';
export default css`
:host{
  --counter-background-color: var(--background-01);
  --counter-disabled-color: var(--disabled-text);
  --counter-enabled-state:var(--secondary);
  --counter-font-family: var(--primary-font-family);
  --counter-font-color:	var(--primary-text);
  --counter-supporting-font-family: var(--primary-font-family);
  --counter-supporting-label-color:var(--secondary-text);
    --counter-opacity:100%;
    --counter-font-size:1em;
    --shadow:none;
    --counter-font-weight:semibold;
    --counter-supporting-label-size:1.4em;      
    --counter-supporting-label-weight:regular;

}

.counter{
    display:flex;
    justify-content:space-between;
}
.counter_label{
    font-size:2em;
    color:var( --counter-supporting-label-color);
    font-weight:var(--counter-supporting-label-weight);
}

.counter_container{
    display: flex;
    width: 120px;
    // background-color: var(--counter-background-color);
    opacity: var(--counter-opacity);
    font-family: var(--counter-font-family);
    color:var(--counter-font-color);
    font-size: var(--counter-font-size);
    font-weight: var(--counter-font-weight);
}

.counter_element{
    width: 40px;
    height: 40px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2em;
}
button{
    width: 100%;
    height: 100%;
    font-size:var(--counter-supporting-label-size);
    color:var(--counter-enabled-state);
}
button:disabled{
    color:var(--counter-disabled-color);
} 
`;

