window.onscroll = function () {
    scrollFixNav()
};

function scrollFixNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav-link-container").style.padding = "0";
        document.getElementById("nav-link-container").style.backgroundColor = "#ffffff";
        /*background-color: #bacbe6;*/
    } else {
        document.getElementById("nav-link-container").style.padding = "3vh 0";
        document.getElementById("nav-link-container").style.backgroundColor = "";
    }
}

function generateName() {
    setInterval(hackerNameDisplay, 10000);
}

function hackerNameDisplay() {
    // const name = "I'm 1337D0xer!";
    const name = "Hi, my name is 1337D0xer and I am a programmer";
    let hackerNameElement = document.getElementById('hacker-name');
    let hackerName = document.getElementById('hacker-name').innerText;
    hackerNameElement.innerText = '';
    if (!hackerName) {
        hackerName = '1337D0xer!'
    }
    const characters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomnessNumber = 100;
    const iterations = hackerName.length;

    function randomChar() {
        return characters[Math.floor(Math.random() * characters.length)];
    }

    let textArray = [];
    for (let i = 0; i < iterations; i++) {
        let text = [];
        for (let j = 0; j < (iterations + randomnessNumber) - randomnessNumber * Math.random(); j++) {
            text.push(randomChar());
        }
        text.push(hackerName[i]);
        textArray.push(text);
    }

    let counter = 0;

    // for (let i = 0; i < iterations; i++) {
    //     const letters= document.createElement("span");
    //     letters.classList.add("hacker-name-letters");
    //     hackerNameElement.appendChild(letters);
    // }
    // let letterList = document.getElementsByClassName("hacker-name-letters");
    function changeHackerName() {
        for (let i = 0; i < iterations; i++) {
            let text = textArray[i];
            if (counter < text.length) {
                hackerNameElement.innerText = hackerNameElement.innerText.slice(0, i) + text[counter] + hackerNameElement.innerText.slice(i + 1);
            } else {
                hackerNameElement.innerText = hackerNameElement.innerText.slice(0, i) + text[text.length - 1] + hackerNameElement.innerText.slice(i + 1);
            }
        }
        if (name === hackerNameElement.innerText) {
            clearInterval(interval);
        }
        console.log("Firing")
        counter++;
    }

    let interval = setInterval(changeHackerName, 100);
    console.log("FIREDD");
}

function initializeFilterButtons() {
    let filterButtonList = document.getElementsByClassName('filter-button');
    for (let i = 0; i < filterButtonList.length; i++) {
        filterButtonList[i].onclick = processFilterButtons;
    }
}

function initializeEmailButton(){
    let emailButton = document.getElementById('email-input-button');
    emailButton.onclick = sendEmail;
}

function sendEmail(){
    let receiverEmail = document.getElementById('email-input-from').value;
    let senderName = document.getElementById('email-input-name').value;
    let subject = document.getElementById('email-input-subject').value;
    let body = document.getElementById('email-input-body').value;
    if (!receiverEmail || !senderName || !subject || !body){
        alert('Please fill the form before sending');
        return;
    }
    // var formattedBody = "FirstLine \n Second Line \n Third Line";
    let mailToLink = "mailto:" +receiverEmail+ "?subject="+subject+"&body=" + encodeURIComponent(body);
    window.location.href = mailToLink;
}

function processFilterButtons() {
    let filterButtonList = document.getElementsByClassName('filter-button');
    for (let i = 0; i < filterButtonList.length; i++) {
        filterButtonList[i].className = 'filter-button';
    }
    this.classList.add('filter-button-active');
    let portfolioItemList = document.getElementsByClassName('portfolio-grid-item');
    for (let i = 0; i < portfolioItemList.length; i++) {
        let item = portfolioItemList[i];
        if (item.dataset['projectType'] === this.dataset['filterId'] || this.dataset['filterId'] === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}


function initialize() {
    initializeFilterButtons();
    initializeEmailButton();
    // generateName();
}
