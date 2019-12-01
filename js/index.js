const products = document.getElementsByClassName('product');

function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
}

const forms = document.getElementsByTagName('form');

for (let i = 0; i < forms.length; i++) {
    forms.item(i).addEventListener('submit', handleSubmit);
}

for (let i = 0; i < products.length; i++) {
    let product = products.item(i);

    let confirmationBlock = document.createElement('div');
    let form = document.createElement('form');
    let productBlock = document.createElement('div');
    let button = document.createElement('button');
    let cross = document.createElement('span');

    confirmationBlock.classList.add('confirmBlock');
    productBlock.classList.add('product');
    button.classList.add('shiny');
    cross.classList.add('cross');

    button.innerText = "Confirm and pay";

    form.addEventListener('submit', handleSubmit);

    productBlock.insertAdjacentHTML('beforeend', product.innerHTML);
    form.insertAdjacentElement('afterbegin', productBlock);
    form.insertAdjacentElement('beforeend', button);
    form.insertAdjacentElement('beforeend', cross);
    confirmationBlock.insertAdjacentElement('afterbegin', form);

    const close = (e) => {
        if (e.target === cross || e.target === confirmationBlock) confirmationBlock.remove();
    };

    cross.addEventListener('click', close);
    confirmationBlock.addEventListener('click', close);

    product.addEventListener('click', () => {
        document.body.insertAdjacentElement('afterbegin', confirmationBlock);
    })
}