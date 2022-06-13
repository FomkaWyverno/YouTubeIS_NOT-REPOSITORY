const input = document.querySelector('.input');
const result = document.querySelector('.result');

input.addEventListener('input', () => {
    toCamelCase(input.value);
});

function toCamelCase(value) {
    if(value.includes('-')) {
        value = value.replaceAt(value.indexOf('-')+1, value.charAt(value.indexOf('-')+1));
        result.textContent = value;
    }
}