let hp = 100;
let mp = 50;

function updateUI() {
    document.getElementById("hp").innerText = hp;
    document.getElementById("mp").innerText = mp;
}

function attack() {
    document.getElementById("message").innerText = "You slashed the dragon! It roars!";
    // Add logic here for monster health later!
}

function heal() {
    if (mp >= 30) {
        mp -= 30;
        hp += 50;
        if (hp > 100) hp = 100;
        document.getElementById("message").innerText = "Golden light heals you!";
    } else {
        document.getElementById("message").innerText = "Out of Mana!";
    }
    updateUI();
}
function restartGame() {
    // 1. Reset the stats
    hp = 100;
    mp = 50;
    
    // 2. Reset the text
    document.getElementById("message").innerText = "A new journey begins...";
    
    // 3. Hide the restart button again
    document.getElementById("reset-btn").style.display = "none";
    
    // 4. Update the screen
    updateUI();
}

// Update your existing code to show the button when HP hits 0
function takeDamage(amount) {
    hp -= amount;
    if (hp <= 0) {
        hp = 0;
        document.getElementById("message").innerText = "You have fallen... Game Over.";
        document.getElementById("reset-btn").style.display = "inline-block"; // Show the button!
    } 
    updateUI();
}

