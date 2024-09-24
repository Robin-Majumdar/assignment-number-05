document.getElementById('blog-button')
    .addEventListener('click', function () {
        window.open('important-faq.html', '_blank');
    });

// document.getElementById('home-button')
//     .addEventListener('click', function () {
//         window.location.href = ('index.html');
//     });

document.getElementById('btn-donate-now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationAddMoney = getInputFieldValueById('donation-add-money');
        const presentBalance = getTextFieldValueById('donation-visible-money');

        if(isNaN(donationAddMoney) || donationAddMoney <=0) {
            alert("Please enter a valid number!")
        }
        else {
            const newBalance = presentBalance + donationAddMoney;
            document.getElementById('donation-visible-money').innerText = newBalance;
            document.getElementById('donation-visible-money').innerText = `${newBalance} BDT`;
            document.getElementById('donation-add-money').value = '';

        }


    });










