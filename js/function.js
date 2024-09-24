

// Common function by input filed
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}

// Common function by text filed
function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

//Donation Modal function
function openModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.add('hidden');
}

// Page switched function

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};