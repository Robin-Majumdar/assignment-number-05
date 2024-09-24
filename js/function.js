

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function openModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.add('hidden');
}