function leftFrameItem(id, text, panelStyleId, handler) {
    let child = document.createElement('div');
    child.id = id;
    child.classList.add(`panel-${panelStyleId}`);
    if (handler) {
        let anchor = document.createElement('a');
        anchor.href = '';
        anchor.innerText = text;
        anchor.addEventListener('click', handler);
        child.appendChild(anchor);
    } else {
        child.innerText = text;
    }
    return child;
}

function barPanelItem(id, barStyleId) {
    let child = document.createElement('div');
    child.id = id;
    child.classList.add(`bar-${barStyleId}`);
    return child;
}

window.lcarsFramework = window.lcarsFramework || {};
window.lcarsFramework.subComponentFactory = {
    leftFrameItem
};
