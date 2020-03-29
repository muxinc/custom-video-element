import CustomVideoElement from './index.js';

class MyCustomVideoElement extends CustomVideoElement {
  constructor() {
    super();
  }

  connectedCallback() {

  }
}

if (!window.customElements.get('my-custom-video')) {
  window.customElements.define('my-custom-video', MyCustomVideoElement);
  window.MyCustomVideoElement = MyCustomVideoElement;
}

export default MyCustomVideoElement;
