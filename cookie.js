
window.onload = function () {
    let name = prompt("What is your name");

    let space = document.querySelector("#titel");

    space.innerHTML = name + "'s orkester";
};


let num = 0;
const audio = new Audio("snare1drum-43073.mp3");
const guitarAudio = new Audio("zendata_classical-104342.mp3")
const trumpetAudio = new Audio("horn-toy-claun-like-sound-2-36519.mp3")
const trumpetAudioTwo = new Audio("horn-toy-claun-like-sound-3-37246.mp3")
const cymbalAudio = new Audio("cymbal-crash-1-167695.mp3")

function cookieClick() {
    audio.currentTime = 0;
    audio.play();


    const img = document.querySelector("#drum img:last-child");
    if (img.classList.contains("tilt-left")) {
        img.classList.remove("tilt-left");
        img.classList.add("tilt-right");
    } else {
        img.classList.remove("tilt-right");
        img.classList.add("tilt-left");
    }

    let bonus = 0;

    if(num >= 100000) {
        bonus = 1000;
    }
    else if(num >= 1000) {
        bonus = 30;
    }
    else if(num >= 500) {
        bonus = 9;
    }
    else if(num >= 30) {
        bonus = 1;
    }

    num += 1 + bonus;
    document.querySelector("#totalClicks").textContent = num;

    updateBonusLevel();
};

function updateBonusLevel() {
    let upgradeLevel = document.querySelector("#upgradeLevel");
    console.log("Current num value:", num);

    if(num >= 100000) {
        upgradeLevel.innerHTML = "Bonham (1000x)";
    }
    else if(num >= 1000) {
        upgradeLevel.innerHTML = "Semi pro (30x)";
    }
    else if(num >= 500) {
        upgradeLevel.innerHTML = "Intermediate (10x)";
    }
    else if(num >= 30) {
        upgradeLevel.innerHTML = "Amateur (2x)";
    }
    else {
        upgradeLevel.innerHTML = "";
    }
}

function guitarClick() {
    if (num >= 250){
        let newImage = document.createElement("img");
        newImage.src = document.querySelector("#guitarButton").src;
        newImage.classList.add("iconStyle");
        document.querySelector("#inventoryList").appendChild(newImage);

        num -= 250;
        document.querySelector("#totalClicks").textContent = num;
        updateBonusLevel();
    } else {
        alert("Insufficient trommeslag! Hit the drum more to purchase this instrument.")
    }
}

function incrementClicksFromGuitar() {
    const hasGuitar = document.querySelector("#inventoryList img[src='" + document.querySelector("#guitarButton").src + "']");

    if(hasGuitar) {
        num += 2;
        document.querySelector("#totalClicks").textContent = num;

        guitarAudio.currentTime = 0;
        guitarAudio.play();
    }
};

setInterval(incrementClicksFromGuitar, 2000);

function trumpetClick() {
    if (num >=1000){
        let newImageTwo = document.createElement("img");
        newImageTwo.src = document.querySelector("#trumpetButton").src;
        newImageTwo.classList.add("iconStyle");
        document.querySelector("#inventoryList").appendChild(newImageTwo);

        num -= 1000;
        document.querySelector("#totalClicks").textContent = num;
        updateBonusLevel();
    } else {
        alert("Insufficient trommeslag! Hit the drum more to purchase this instrument.")
    }
};

let playFirstSound = true;

function incrementClicksFromTrumpet() {
    const hasTrumpet = document.querySelector("#inventoryList img[src='" + document.querySelector("#trumpetButton").src + "']");

    if (hasTrumpet) {
        num += 5;
        document.querySelector("#totalClicks").textContent = num;

        if (playFirstSound) {
            trumpetAudio.currentTime = 0;
            trumpetAudio.play();
        } else {
            trumpetAudioTwo.currentTime = 0;
            trumpetAudioTwo.play();
        }

        playFirstSound = !playFirstSound;
    }
}

setInterval(incrementClicksFromTrumpet, 500);

function cymbalClick() {
    if (num >= 2000){
        let newImage = document.createElement("img");
        newImage.src = document.querySelector("#cymbalButton").src;
        newImage.classList.add("iconStyle");
        document.querySelector("#inventoryList").appendChild(newImage);

        num -= 2000;
        document.querySelector("#totalClicks").textContent = num;
        updateBonusLevel();
    } else {
        alert("Insufficient trommeslag! Hit the drum more to purchase this instrument.")
    }
}

function incrementClicksFromCymbal() {
    const hasCymbal = document.querySelector("#inventoryList img[src='" + document.querySelector("#cymbalButton").src + "']");

    if(hasCymbal) {
        num += 100;
        document.querySelector("#totalClicks").textContent = num;

        cymbalAudio.currentTime = 0;
        cymbalAudio.play();
    }
};

setInterval(incrementClicksFromCymbal, 2500);
