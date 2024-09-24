// Click on the button open a new window or new tab what aver
document.getElementById('blog-button')
    .addEventListener('click', function () {
        window.open('important-faq.html', '_blank');
    });

    
// Donation button number One
document.getElementById('btn-donate-one')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationAddMoney = getInputFieldValueById('donation-add-money');
        const presentBalance = getTextFieldValueById('donation-visible-money');
        const totalAmount = getTextFieldValueById('total-donation-amount');

        if(isNaN(donationAddMoney) || donationAddMoney <=0) {
            alert("Please enter a valid number!")
        }
        else {
            const newBalance = presentBalance + donationAddMoney;
            document.getElementById('donation-visible-money').innerText = newBalance;
            document.getElementById('donation-visible-money').innerText = `${newBalance} BDT`;
            document.getElementById('donation-add-money').value = '';
            openModal();

            const totalNewBalance = donationAddMoney + totalAmount;
            document.getElementById('total-donation-amount').innerText = totalNewBalance;
            document.getElementById('total-donation-amount').innerText = `${totalNewBalance} BDT`;

        }
    });

// Donation button number Two
    document.getElementById('btn-donate-two')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationAddMoney = getInputFieldValueById('donation-add-money-two');
        const presentBalance = getTextFieldValueById('donation-visible-money-two');
        const totalAmount = getTextFieldValueById('total-donation-amount');

        if(isNaN(donationAddMoney) || donationAddMoney <=0) {
            alert("Please enter a valid number!")
        }
        else {
            const newBalance = presentBalance + donationAddMoney;
            document.getElementById('donation-visible-money-two').innerText = newBalance;
            document.getElementById('donation-visible-money-two').innerText = `${newBalance} BDT`;
            document.getElementById('donation-add-money-two').value = '';
            openModal();

            const totalNewBalance = donationAddMoney + totalAmount;
            document.getElementById('total-donation-amount').innerText = totalNewBalance;
            document.getElementById('total-donation-amount').innerText = `${totalNewBalance} BDT`;

        }
    });

// Donation Button number Three
    document.getElementById('btn-donate-three')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationAddMoney = getInputFieldValueById('donation-add-money-three');
        const presentBalance = getTextFieldValueById('donation-visible-money-three');
        const totalAmount = getTextFieldValueById('total-donation-amount');

        if(isNaN(donationAddMoney) || donationAddMoney <=0) {
            alert("Please enter a valid number!")
        }
        else {
            const newBalance = presentBalance + donationAddMoney;
            document.getElementById('donation-visible-money-three').innerText = newBalance;
            document.getElementById('donation-visible-money-three').innerText = `${newBalance} BDT`;
            document.getElementById('donation-add-money-three').value = '';
            openModal();

            const totalNewBalance = donationAddMoney + totalAmount;
            document.getElementById('total-donation-amount').innerText = totalNewBalance;
            document.getElementById('total-donation-amount').innerText = `${totalNewBalance} BDT`;

        }
    });










