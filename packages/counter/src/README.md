# orxe-counter

A counter component in ORXe 3 allows users to increase or decrease a specified value.

## Usage

### Angular / javascript

```html
<!-- Default -->
 <orxe-counter value=1 max=10 min=0>
    Adults
  </orxe-counter>

```

### Event

Whenever the value of counter is changed, it fires a custom event named "value-changed".
You can attach an event listener on the component to get the actual value of counter

```js
const myElement = document.querySelector('orxe-counter');
  myElement.addEventListener('value-changed', (e) => {
    console.log(e.detail.value)
  });
  
```  


## Attributes

| Attribute | Description              | Type   |
| --------- | ------------------------ | ------ |
| min       | Minimum value of counter | number | 
| max       | Maximum value of counter | number |
| value     | Actual value of counter  | number | 