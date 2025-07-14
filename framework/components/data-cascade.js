
class DataCascade extends HTMLDivElement {
  static attributeNames = {
    numberOfLines: 'number-of-lines',
    maxLines: 'max-lines',
    numberOfColumns: 'number-of-columns'
  };
  static observedAttributes = [
    DataCascade.attributeNames.numberOfLines, 
    DataCascade.attributeNames.maxLines,
    DataCascade.attributeNames.numberOfColumns
  ];
  static cssClasses = [
    'dc1', 'dc2', 'dc3', 'dc44', 'dc55', 'dc6', 'dc77', 'dc8', 'dc99', 'dc100',
    'dc11', 'dc12', 'dc13', 'dc14', 'dc150', 'dc801', 'dc802', 'dc803', 'dc804',
    'dc805', 'dc806', 'dc807', 'dc808', 'dc809'
  ];

  subComponentFactory = window.lcarsFramework.subComponentFactory;

  constructor() {
    // Always call super first in constructor
    self = super();
  }

  connectedCallback() {
    this.classList.add('cascade-wrapper');
    const maxLines = this.getAttribute(DataCascade.attributeNames.maxLines) || 4;
    const numberOfColumns = this.getAttribute(DataCascade.attributeNames.numberOfColumns) || 10;

    const minHeight = maxLines * 30;
    this.setAttribute('style', `min-height: ${minHeight}px;`);
    this.buildContent(maxLines, numberOfColumns);
    setInterval(() => {
      const newNumberOfLines = Math.floor(Math.random() * 3 + 2);
      this.setAttribute(DataCascade.attributeNames.numberOfLines, newNumberOfLines);
    }, 3000);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === DataCascade.attributeNames.numberOfLines) {
      this.buildContent(newValue, this.getAttribute(DataCascade.attributeNames.numberOfColumns));
    }
  }

  generateRandomValue() {
    const MAX_LENGTH = 6;
    let totalLength = Math.floor(Math.random() * (MAX_LENGTH - (MAX_LENGTH / 2))) + 4;
    const IS_DECIMAL = Math.random() < 0.5;
    const DECIMAL_PLACES = IS_DECIMAL ? Math.floor(Math.random() * 3) : 0;

    let value = '';
    if (DECIMAL_PLACES > 0) {
      value = `.${Math.floor(Math.random() * (10 ** DECIMAL_PLACES))}`;
    }
    const integerPart = Math.floor(Math.random() * (10 ** totalLength - DECIMAL_PLACES));
    value = `${integerPart}${value}`;
    if (value.length > MAX_LENGTH) {
      value = value.slice(0, MAX_LENGTH);
    } else if (value.length < MAX_LENGTH) {
      const padding = ' '.repeat(MAX_LENGTH - value.length);
      value = `${value}${padding}`;
    }
    return value;
  }

  generateRow(rowNumber, numberOfColumns) {
    const numCells = numberOfColumns;
    const cells = [];
    
    for (let i = 0; i < numCells; i++) {
      const cssClass = DataCascade.cssClasses[Math.floor(Math.random() * DataCascade.cssClasses.length)];
      const value = this.generateRandomValue();
      cells.push(`<div class="${cssClass}">${value}</div>`);
    }
    
    return `<div class="row-${rowNumber}"> ${cells.join(' ')} </div>`;
  }

  buildContent(rows, columns) {
    const numberOfRows = parseInt(rows) || 4;
    const numberOfColumns = parseInt(columns) || 10;
    const generatedRows = [];
    
    for (let i = 1; i <= numberOfRows; i++) {
      generatedRows.push(this.generateRow(i, columns));
    }
    
    const rowsHTML = generatedRows.join(' ');
    this.innerHTML = `
        <div class="cascade-wrapper">
          <div class="data-cascade" id="header-data-cascade">
            ${rowsHTML}
          </div>
        </div>
      `;
  }

}

customElements.define("data-cascade", DataCascade, { extends: 'div' });

// export default DataCascade;
