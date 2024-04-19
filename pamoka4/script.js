const attack = document.getElementById('attack')
const playerHealth = document.getElementById('playerHealthProgress')
const enemyHealth = document.getElementById('enemyHealthProgress')
const goldDisplay = document.getElementById('goldDisplay')
const pHealth = document.getElementById('healthCountP')
const eHealth = document.getElementById('healthCountE')
const enemyImage = document.getElementById('enemyImage')
const potion = document.getElementById('potion')
const slash = document.getElementById('slash')
const gameStart = document.getElementById('gameStart')
const gameOver = document.getElementById('gameOver')
const imageAr = ['https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg']
const gameContainer = document.getElementById('gameContainer')
const vayne = document.getElementById('playerImg1')
const olaf = document.getElementById('playerImg2')
const garen = document.getElementById('playerImg3')
const lissandra = document.getElementById('playerImg4')
const ashe = document.getElementById('playerImg5')
const playerImage = document.getElementById('playerImage')
const start = document.getElementById('start')
const chosen = document.getElementById('chosen')
const sword = document.getElementById('sword')
const bow = document.getElementById('bow')
const wand = document.getElementById('wand')

let playerHealthCount = 100
let enemyHealthCount = 100
let gold = 0
let name = ''
let chose = false
const characters = [vayne, olaf, garen, lissandra, ashe];
const weapons = [sword, bow, wand]
let selectedWeapon = 'sword'

vayne.style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg)";
olaf.style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg)";
garen.style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg)";
lissandra.style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg)";
ashe.style.backgroundImage = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg)";

weapons.forEach(weapon => {
    weapon.onclick = function () {
        weapons.forEach(weapon => {
            weapon.style.transform = 'scale(1)';
        });
        this.style.transform = 'scale(1.3)';
        selectedWeapon = this.id
        console.log(selectedWeapon)
    };
});

characters.forEach(character => {
    character.onclick = function () {
        chose = true
        characters.forEach(char => {
            char.style.scale = '1'
        });
        this.style.scale = '1.1'
        name = this.getAttribute('data-name');
        chosen.innerHTML = `${name}`
        playerImage.style.backgroundImage = this.style.backgroundImage;
        console.log("Player image background:", playerImage.style.backgroundImage);
    };
});

start.onclick = function () {
    if (chose === true) {
        gameStart.style.display = 'none'
        gameContainer.style.display = 'flex'
        gameContainer.style.flexDirection = 'column'
    }
}

// Function to simulate an attack
function attackFun() {
    let damage = 0;
    const enemyDamage = Math.floor(Math.random() * 8) + 1; // Enemy deals damage from 1-8

    if (selectedWeapon === 'sword' &&  enemyHealthCount > 0) {
        damage = Math.floor(Math.random() * 12) + 1; // Max damage: 12
        if (Math.random() <= 0.25) { // 25% chance to dodge enemy attack
            document.getElementById('attackResult').innerHTML = `You dodged the enemy attack! And Dealt: ${damage}!`;
            enemyHealthCount -= damage
        }else {
            document.getElementById('attackResult').innerHTML = `You Dealt: ${damage}! Enemy dealt: ${enemyDamage}!`;
            playerHealthCount -= enemyDamage
            enemyHealthCount -= damage
        }
    } else if (selectedWeapon === 'bow' &&  enemyHealthCount > 0) {
        damage = Math.floor(Math.random() * 8) + 1; // Max damage: 8
        if (Math.random() <= 0.35) { // 35% chance to do double damage
            document.getElementById('attackResult').innerHTML = `You dodged the enemy attack! And Dealt: ${damage}!`;
            enemyHealthCount -= damage
        }else{
            document.getElementById('attackResult').innerHTML = `You Dealt: ${damage}! Enemy dealt: ${enemyDamage}!`;
            playerHealthCount -= enemyDamage
            enemyHealthCount -= damage
        }
    } else if (selectedWeapon === 'wand' && enemyHealthCount > 0) {
        damage = Math.floor(Math.random() * 9) + 1;
        if (Math.random() <= 0.40) {
            const healAmount = Math.floor(Math.random() * 10) + 1;
            document.getElementById('attackResult').innerHTML = `You healed yourself for ${healAmount} HP! And dealt: ${damage}! Enemy dealt: ${damage}!`;
            playerHealthCount -= enemyDamage
            enemyHealthCount -= damage
            playerHealthCount += healAmount
        }else{
            document.getElementById('attackResult').innerHTML = `You dealt: ${damage}! Enemy dealt: ${damage}!`;
            playerHealthCount -= enemyDamage
            enemyHealthCount -= damage
        }
    }
    if (enemyHealthCount < 0) {
        enemyHealthCount = 0
    }

    if (playerHealthCount < 0) {
        playerHealthCount = 0
    }
}

// Call the attack function when the "Attack" button is clicked
document.getElementById('attack').onclick = function() {
    attackFun();
    enemyHealth.style.width = `${enemyHealthCount}%`
    playerHealth.style.width = `${playerHealthCount}%`
    pHealth.innerHTML = `${playerHealthCount}/100`
    eHealth.innerHTML = `${enemyHealthCount}/100`
    gold += Math.floor(Math.random() * 10) + 1
    goldDisplay.innerHTML = `Gold: ${gold}`
    if (enemyHealthCount <= 0) {
        enemyHealthCount = 100
        const randomIndex = Math.floor(Math.random() * imageAr.length);
        enemyImage.style.backgroundImage = `url('${imageAr[randomIndex]}')`;
    }
    if (playerHealthCount <= 0) {
        gameContainer.style.display = 'none'
        gameOver.style.display = 'flex'
        gameOver.style.flexDirection = 'column'
    }
};


potion.onclick = function () {
    if (gold >= 50) {
        playerHealthCount = 100
        pHealth.innerHTML = `${playerHealthCount}/100`
        playerHealth.style.width = `${playerHealthCount}%`
    }else {
        alert('Not enaugh Gold!')
    }
}

