
class RightFrameTop extends HTMLDivElement {
    static attributeNames = {
        cascadeMaxLines: 'cascade-max-lines',
        bannerText: 'banner-text'
    };
    static observedAttributes = [this.attributeNames.cascadeMaxLines];

    subComponentFactory = window.lcarsFramework.subComponentFactory;
  
    constructor() {
      // Always call super first in constructor
      self = super();
    }
  
    connectedCallback() {
      self.classList.add('right-frame-top');
      let child = document.createElement('div');
      child.classList.add('banner');
      child.innerHTML = `${this.getAttribute(RightFrameTop.attributeNames.bannerText)} &#149; ${this.getStarDate()}`;
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

    getStarDate() {
        const currentDate = new Date();
        let starDate = `${String(currentDate.getFullYear()).slice(2)}${String(currentDate.getMonth() + 1).padStart(2, '0')}${String(currentDate.getDate()).padStart(2, '0')}`;
        starDate += `.${String(currentDate.getHours()).padStart(2, '0')}${String(currentDate.getMinutes()).padStart(2, '0')}`;
        return starDate;
    }


  }
  
  customElements.define("right-frame-top", RightFrameTop, { extends: 'div' });
  