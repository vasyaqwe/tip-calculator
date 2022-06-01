const bill = document.querySelector('.bill');
const percentBtns = document.querySelectorAll('[data-percent]');
const customPercent = document.querySelector('.custom-percent');
const ppl = document.querySelector('.ppl');
const resetBtn = document.querySelector('.btn-reset');
const tipEl = document.querySelector('.aside__prices__tip__price');
const totalEl = document.querySelector('.aside__prices__total__price');

const showError = (input, message) => {
    const formField = input.parentElement;
    const error = formField.querySelector('small');
    error.textContent = message;
};
const hideError = (input) => {
    const formField = input.parentElement;
    const error = formField.querySelector('small');
    error.textContent = '';
};


const calcPercentage = (btn) => {
    const billValue = bill.value;
    const pplValue = ppl.value;
    const percentNumber = parseInt(btn.innerHTML);
    const tipAmount = Math.round(billValue / 100 * percentNumber / pplValue * 100) / 100;
    const total = billValue / pplValue + tipAmount;
    const totalRounded = Math.round(total * 100) / 100;
    if (billValue < 1 || billValue > 10000) {
        showError(bill, 'The price is too high/too low');
        tipEl.innerText = `$0.00`;
        totalEl.innerText = `$0.00`;
        bill.classList.add('invalid');
    } else {
        tipEl.innerText = `$${tipAmount}`;
        totalEl.innerText = `$${totalRounded}`;
        hideError(bill);
        bill.classList.remove('invalid');
    }
    if (pplValue < 1 || pplValue > 30) {
        showError(ppl, 'Too many/Too few people');
        tipEl.innerText = `$0.00`;
        totalEl.innerText = `$0.00`;
        ppl.classList.add('invalid');
    } else {
        tipEl.innerText = `$${tipAmount}`;
        totalEl.innerText = `$${totalRounded}`;
        hideError(ppl);
        ppl.classList.remove('invalid');
    }
}

const calcCustomPercentage = () => {
    const billValue = bill.value;
    const pplValue = ppl.value;
    const percentNumber = customPercent.value;
    const tipAmount = Math.round(billValue / 100 * percentNumber / pplValue * 100) / 100;
    const total = billValue / pplValue + tipAmount;
    const totalRounded = Math.round(total * 100) / 100;
    if (billValue < 1 || billValue > 10000) {
        showError(bill, 'The price is too high/too low');
        tipEl.innerText = `$0.00`;
        totalEl.innerText = `$0.00`;
        bill.classList.add('invalid');
    } else {
        tipEl.innerText = `$${tipAmount}`;
        totalEl.innerText = `$${totalRounded}`;
        hideError(bill);
        bill.classList.remove('invalid');
    }
    if (pplValue < 1 || pplValue > 30) {
        showError(ppl, 'Too many/Too few people');
        tipEl.innerText = `$0.00`;
        totalEl.innerText = `$0.00`;
        ppl.classList.add('invalid');
    } else {
        tipEl.innerText = `$${tipAmount}`;
        totalEl.innerText = `$${totalRounded}`;
        hideError(ppl);
        ppl.classList.remove('invalid');
    }
};
customPercent.addEventListener('input', () => {
    calcCustomPercentage();
});

const reset = () => {
    bill.value = '';
    ppl.value = '';
    customPercent.value = '';
    tipEl.innerText = '$0.00';
    totalEl.innerText = '$0.00';
}


percentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calcPercentage(btn);
    })
})

resetBtn.addEventListener('click', () => {
    reset();
})
