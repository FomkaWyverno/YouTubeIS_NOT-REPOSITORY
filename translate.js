const certificate = document.querySelector('.main-title');
const cert_name = document.querySelector('.cert-name');
const brithDayName = document.querySelector('.brithDayName');
const pass = document.querySelector('.passport');
const inter_pass = document.querySelector('.international_pass');
const button = document.querySelector('.button');
const user_info = document.querySelector('.info-user');

export function translateRU() {
    certificate.textContent = 'Сертификат о вакцинации COVID-19';
    cert_name.textContent = 'Действителен';
    brithDayName.textContent = 'Дата рождения: ';
    pass.textContent = 'Паспорт: ';
    button.textContent = 'Закрыть';
    user_info.textContent = 'Ru Name';
    inter_pass.classList.add('hide_international_pass');
}

export function translateENG() {
    certificate.textContent = 'Certificate of COVID-19 Vaccination';
    cert_name.textContent = 'Valid';
    brithDayName.textContent = 'Date of birth: ';
    pass.textContent = 'Рassport (ID number): ';
    button.textContent = 'Close';
    user_info.textContent = 'Eng Name';
    inter_pass.classList.remove('hide_international_pass');
}