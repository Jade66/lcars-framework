
class LeftFrameTop extends HTMLDivElement {
    static observedAttributes = ["cascade", "cascadeLines"];
    subComponentFactory = window.lcarsFramework.subComponentFactory;
  
    constructor() {
      // Always call super first in constructor
      self = super();
    }
  
    connectedCallback() {
      self.classList.add('left-frame-top');

      let child = this.subComponentFactory.leftFrameItem('lcars-button', 'LCARS', 1, () => alert('LCARS for the win!'));
      self.appendChild(child);

      child = this.subComponentFactory.leftFrameItem('dummy-item-1', '21-943330', 2);
      self.appendChild(child);

    }
  
    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }
  
    connectedMoveCallback() {
      console.log("Custom element moved with moveBefore()");
    }
  
    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed.`);
    }
  }
  
  customElements.define("left-frame-top", LeftFrameTop, { extends: 'div' });
  