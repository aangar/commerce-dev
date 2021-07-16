const typeSelector = document.querySelector('#type');
let check = false;
typeSelector.addEventListener('change', (e) => {
    if (e.target.value === 'Shoes') {
        changeS();
    } else if (e.target.value !== 'Shoes') {
        changeNo();
    } else {

    }
})

function changeS() {
    const s = document.querySelector('#size');
    s.remove();
    const inp = document.createElement('input');
    inp.type = 'number';
    inp.name = 'size';
    inp.id = 'numSize';
    inp.style.width = '133px';
    inp.step = '0.5';
    const header = document.querySelector('#sizeHeader');
    header.append(inp);
}

function changeNo() {
    const inp = document.querySelector('#numSize');
    inp.remove();
    const header = document.querySelector('#sizeHeader');
    const select = document.createElement('select');
    select.name = 'size';
    select.id = 'size';
    const children = ['--SELECT A SIZE--', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
    for (let i of children) {
        let child = document.createElement('option');
        child.value = i;
        child.innerText = i;
        select.append(child);
    }
    header.append(select);
}