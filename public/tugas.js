let calculator = document.getElementById('calculator');
let display = document.getElementById('display');
let storedValue = '';

calculator.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        let key = e.target.value;
        switch (key) {
            case 'Del':
                display.value = '';
                break;
            case '=':
                try {
                    hasil = eval(display.value);
                    display.value = hasil;
                } catch {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += key;
        }
    }
});