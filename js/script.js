

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

        if (isNaN(donationAddMoney) || donationAddMoney <= 0) {
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
            
            const div = document.createElement('div');
            div.classList.add('text-xl','text-center', 'mt-6', 'p-4', 'border-2', 'rounded-md', 'bg-slate-100');
            div.innerHTML = `
                <p>${donationAddMoney} BDT. Donate for Flood at Noakhali, Bangladesh New Balance: ${totalNewBalance} BDT</p>
                <p>${getCurrentTime()}</p>
            `;
            document.getElementById('transaction-container').appendChild(div);

        };
    });

// Donation button number Two
document.getElementById('btn-donate-two')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationAddMoney = getInputFieldValueById('donation-add-money-two');
        const presentBalance = getTextFieldValueById('donation-visible-money-two');
        const totalAmount = getTextFieldValueById('total-donation-amount');

        if (isNaN(donationAddMoney) || donationAddMoney <= 0) {
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

            const div = document.createElement('div');
            div.classList.add('text-xl','text-center', 'mt-6', 'p-4', 'border-2', 'rounded-md', 'bg-slate-100');
            div.innerHTML = `
                <p>${donationAddMoney} BDT. Donate for Flood Relief in Feni, Bangladesh New Balance: ${totalNewBalance} BDT</p>
                <p>${getCurrentTime()}</p>
            `;
            document.getElementById('transaction-container').appendChild(div);

        }
    });

// Donation Button number Three
document.getElementById('btn-donate-three')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationAddMoney = getInputFieldValueById('donation-add-money-three');
        const presentBalance = getTextFieldValueById('donation-visible-money-three');
        const totalAmount = getTextFieldValueById('total-donation-amount');

        if (isNaN(donationAddMoney) || donationAddMoney <= 0) {
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

            const div = document.createElement('div');
            div.classList.add('text-lg','text-center', 'mt-6', 'p-4', 'border-2', 'rounded-md', 'bg-slate-100');
            div.innerHTML = `
                <p>${donationAddMoney} BDT. Donate Aid for Injured in the Quota Movement New Balance: ${totalNewBalance} BDT</p>
                <p>${getCurrentTime()}</p>
            `;
            document.getElementById('transaction-container').appendChild(div);

        }
    });

// Page switched function called here

document.getElementById('donation-history')
    .addEventListener('click', function () {
        showSectionById('donation-section');

        this.style.backgroundColor = '#B4F461';
        this.style.color = 'black';
        document.getElementById('transaction-history').style.backgroundColor = 'white';
        document.getElementById('transaction-history').style.color = 'black';
    });

    document.getElementById('transaction-history')
    .addEventListener('click', function(){
        showSectionById('transaction-section');

        this.style.backgroundColor = '#B4F461';
        this.style.color = 'black';
        document.getElementById('donation-history').style.backgroundColor = 'white';
        document.getElementById('donation-history').style.color = 'black';
    });









