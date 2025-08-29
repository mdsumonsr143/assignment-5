// Initialize counts
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM elements
const heartDisplay = document.getElementById('heartCount');
const coinDisplay = document.getElementById('coinCount');
const copyDisplay = document.getElementById('copyCount');
const callHistoryDiv = document.querySelector('.call-history');

coinDisplay.innerText = coinCount;

// History 
const historyList = document.createElement('ul');
historyList.id = 'history-list';
historyList.classList.add('p-4', 'space-y-2');
callHistoryDiv.appendChild(historyList);

// Heart click
const loveIcons = document.querySelectorAll('.love-icon');
for (const btn of loveIcons) {
    btn.addEventListener('click', function () {
        heartCount++;
        heartDisplay.innerText = heartCount;
    })
}

// copy click
const copyButtons = document.querySelectorAll('[id$="-copy-btn"]')

for (const btn of copyButtons) {
    btn.addEventListener('click', function (e) {
        const card = e.target.closest('.card');
        const numberElem = card.querySelector('h1[id$="-number"], h1#all-number');
        const number = numberElem.textContent.trim();

        navigator.clipboard.writeText(number).then(function () {
            copyCount++;
            copyDisplay.textContent = copyCount;
            alert(`Copied: ${number}`);
        })
    })
}

// call click

const callButtons = document.querySelectorAll('[id$="-call-btn"]')
for (const btn of callButtons) {
    btn.addEventListener('click', function () {
        if (coinCount < 20) {
            alert("Do not have sufficiant coins to make a call!");
            return;
        }
        const card = btn.closest('.card');
        const serviceName = card.querySelector('h1.font-bold').innerText.trim();
        const numberElem = card.querySelector('h1[id$="-number"], h1#all-number');
        const number = numberElem.innerText.trim();

        coinCount -= 20;
        coinDisplay.innerText = coinCount;
        alert(`Calling ${serviceName}:  ${number}`);

        const time = new Date().toLocaleTimeString();
        const li = document.createElement('li');
        li.textContent = `${serviceName} - ${number} at ${time}`;
        li.classList.add('border-b', 'pb-1');
        historyList.appendChild(li);

    })
}

//  clear history 
document.getElementById('clear-btn').addEventListener('click', function(){
    historyList.innerHTML = '';
});
