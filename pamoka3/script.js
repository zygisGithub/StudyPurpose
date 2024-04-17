const getLumber = document.getElementById('lumber')
const getStone = document.getElementById('stone')
const getGold = document.getElementById('gold')
const woodDisplay = document.getElementById('woodDisplay')
const stoneDisplay = document.getElementById('stoneDisplay')
const goldDisplay = document.getElementById('goldDisplay')
const populationDisplay = document.getElementById('populationDisplay')
const simpleHouse = document.getElementById('simpleHouse')
const biggerHouse = document.getElementById('biggerHouse')
const market = document.getElementById('market')
const stoneWall = document.getElementById('stoneWall')
const cityHall = document.getElementById('cityHall')
const autoWood = document.getElementById('autoWood')
const autoStone = document.getElementById('autoStone')
const city = document.getElementById('city')
const getRes = document.getElementById('getRes')
const shop = document.getElementById('shop')
const woodIcon = document.getElementById('woodIcon')
const stoneIcon = document.getElementById('stoneIcon')
const goldIcon = document.getElementById('goldIcon')
const cheat = document.getElementById('cheatBtn')


let stoneWallCount = 0
let wood = 0
let stone = 0
let gold = 0
let population = 0

cheat.onclick = function () {
    wood += 9999
    stone += 9999
    gold += 9999
    population += 9999
    populationDisplay.innerHTML = `Population: ${population}`
    goldDisplay.innerHTML = `Gold: ${gold}`
    stoneDisplay.innerHTML = `Stone: ${stone}`
    woodDisplay.innerHTML = `Wood: ${wood}`
}


getLumber.onclick = function () {
    wood++
    woodDisplay.innerHTML = `Wood: ${wood}`
    woodIcon.style.animation = 'shake 1s'
    woodIcon.addEventListener('animationend', function() {
        woodIcon.style.animation = 'none';
    }, {once: true});
}
getStone.onclick = function () {
    stone++
    stoneDisplay.innerHTML = `Stone: ${stone}`
    stoneIcon.style.animation = 'shake 1s'
    stoneIcon.addEventListener('animationend', function() {
        stoneIcon.style.animation = 'none';
    }, {once: true});
}
getGold.onclick = function () {
    gold++
    goldDisplay.innerHTML = `Gold: ${gold}`
    goldIcon.style.animation = 'shake 1s'
    goldIcon.addEventListener('animationend', function() {
        goldIcon.style.animation = 'none';
    }, {once: true});
}

simpleHouse.onclick = function () {
    if (wood>=10&&stone>=10&&gold>=30) {
        stone -= 10
        wood -= 10
        gold -= 30
        population += 10
        populationDisplay.innerHTML = `Population: ${population}`
        goldDisplay.innerHTML = `Gold: ${gold}`
        stoneDisplay.innerHTML = `Stone: ${stone}`
        woodDisplay.innerHTML = `Wood: ${wood}`
        const createSimpleHouse = document.createElement('div')
        city.append(createSimpleHouse)
        createSimpleHouse.style.backgroundImage = 'url("images/simplehouse.png")'
        createSimpleHouse.style.height = '30px'
        createSimpleHouse.style.width = '30px'
        createSimpleHouse.style.backgroundSize = 'cover'
        createSimpleHouse.style.animation = 'scaleUp 3s'
    }else{
        alert('Need more resources!')
    }
}
biggerHouse.onclick = function () {
    if (wood>=30&&stone>=30&&gold>=50) {
        stone -= 30
        wood -= 30
        gold -= 50
        population += 20
        populationDisplay.innerHTML = `Population: ${population}`
        goldDisplay.innerHTML = `Gold: ${gold}`
        stoneDisplay.innerHTML = `Stone: ${stone}`
        woodDisplay.innerHTML = `Wood: ${wood}`
        const createBiggerHouse = document.createElement('div')
        city.append(createBiggerHouse)
        createBiggerHouse.style.backgroundImage = 'url("images/biggerhouse.png")'
        createBiggerHouse.style.height = '40px'
        createBiggerHouse.style.width = '40px'
        createBiggerHouse.style.backgroundSize = 'cover'
        createBiggerHouse.style.backgroundPosition = 'center'
        createBiggerHouse.style.animation = 'scaleUp 3s'
    }else{
        alert('Need more resources!')
    }
}
market.onclick = function () {
    if (wood>=20&&stone>=100&&gold>=200&&population>=100) {
        stone -= 100
        wood -= 20
        gold -= 200
        population -= 100
        populationDisplay.innerHTML = `Population: ${population}`
        goldDisplay.innerHTML = `Gold: ${gold}`
        stoneDisplay.innerHTML = `Stone: ${stone}`
        woodDisplay.innerHTML = `Wood: ${wood}`
        const market = document.createElement('div')
        city.append(market)
        market.style.backgroundImage = 'url("images/market.webp")'
        market.style.height = '50px'
        market.style.width = '50px'
        market.style.backgroundSize = 'cover'
        market.style.backgroundPosition = 'center'
        market.style.animation = 'scaleUp 3s'
        function gainGold () {
            gold++
            goldDisplay.innerHTML = `Gold: ${gold}`
        }
        setInterval(gainGold, 1000)
    }else{
        alert('Need more resources!')
    }
}
autoWood.onclick = function () {
    if (wood>=200&&stone>=200&&gold>=100&&population>=50) {
        stone -= 200
        wood -= 200
        gold -= 100
        population -= 50
        populationDisplay.innerHTML = `Population: ${population}`
        goldDisplay.innerHTML = `Gold: ${gold}`
        stoneDisplay.innerHTML = `Stone: ${stone}`
        woodDisplay.innerHTML = `Wood: ${wood}`
        function gainWood () {
            wood++
            woodDisplay.innerHTML = `Wood: ${wood}`
        }
        setInterval(gainWood, 1000)
    }else{
        alert('Need more resources!')
    }
}
autoStone.onclick = function () {
    if (wood>=200&&stone>=200&&gold>=100&&population>=50) {
        stone -= 200
        wood -= 200
        gold -= 100
        population -= 50
        populationDisplay.innerHTML = `Population: ${population}`
        goldDisplay.innerHTML = `Gold: ${gold}`
        stoneDisplay.innerHTML = `Stone: ${stone}`
        woodDisplay.innerHTML = `Wood: ${wood}`
        function gainStone () {
            stone++
            stoneDisplay.innerHTML = `Stone: ${stone}`
        }
        setInterval(gainStone, 1000)
    }else{
        alert('Need more resources!')
    }
}
stoneWall.onclick = function () {
    if (wood >= 200 && stone >= 200 && gold >= 500 && population >= 500 && stoneWallCount === 0) {
        stone -= 200;
        wood -= 200;
        gold -= 500;
        stoneWallCount = 1;
        population -= 500;
        populationDisplay.innerHTML = `Population: ${population}`;
        goldDisplay.innerHTML = `Gold: ${gold}`;
        stoneDisplay.innerHTML = `Stone: ${stone}`;
        woodDisplay.innerHTML = `Wood: ${wood}`;

        // Create wall elements
        let wallTop = createWallElement();
        let wallBottom = createWallElement();
        let wallLeft = createWallElement();
        let wallRight = createWallElement();

        city.appendChild(wallTop);
        city.appendChild(wallBottom);
        city.appendChild(wallLeft);
        city.appendChild(wallRight);

        // Style wall elements
        wallTop.style.top = '0px';
        wallTop.style.left = '0px';
        wallTop.style.width = '100%';
        wallTop.style.height = '100px';
        wallTop.style.backgroundImage = 'url("images/wallside.png")'
        wallTop.style.backgroundSize = 'contain'
        wallTop.style.animation = 'scaleUp 10s'

        wallBottom.style.bottom = '0px';
        wallBottom.style.left = '0px';
        wallBottom.style.width = '100%';
        wallBottom.style.height = '100px';
        wallBottom.style.backgroundImage = 'url("images/wallside.png")'
        wallBottom.style.zIndex = '99'
        wallBottom.style.backgroundSize = 'contain'
        wallBottom.style.animation = 'scaleUp 10s'

        wallLeft.style.top = '0px';
        wallLeft.style.left = '0px';
        wallLeft.style.width = '100px';
        wallLeft.style.height = '100%';
        wallLeft.style.backgroundImage = 'url("images/walltop.png")'
        wallLeft.style.backgroundSize = 'contain'
        wallLeft.style.animation = 'scaleUp 10s'

        wallRight.style.top = '0px';
        wallRight.style.right = '0px';
        wallRight.style.width = '100px';
        wallRight.style.height = '100%';
        wallRight.style.backgroundImage = 'url("images/walltop.png")'
        wallRight.style.backgroundSize = 'contain'
        wallRight.style.animation = 'scaleUp 10s'

    } else if (stoneWallCount === 1) {
        alert('You already have a wall!');
    } else {
        alert('Need more resources!');
    }
}

function createWallElement() {
    let wall = document.createElement("div");
    wall.className = "wall";
    wall.style.position = "absolute";
    wall.style.backgroundColor = "grey";
    return wall;
}

cityHall.onclick = function () {
    if (gold>=500&&wood>=200&&stone>=200&&population>=500) {
        stone -= 200
        wood -= 200
        gold -= 500
        population -= 500
        populationDisplay.innerHTML = `Population: ${population}`
        goldDisplay.innerHTML = `Gold: ${gold}`
        stoneDisplay.innerHTML = `Stone: ${stone}`
        woodDisplay.innerHTML = `Wood: ${wood}`
        const cityHall = document.createElement('div')
        city.append(cityHall)
        cityHall.style.backgroundImage = 'url("https://i.pinimg.com/originals/5f/dd/b0/5fddb01a6eb6d8cb40141e53991af75b.png")'
        cityHall.style.height = '50px'
        cityHall.style.width = '50px'
        cityHall.style.backgroundSize = 'cover'
        cityHall.style.backgroundPosition = 'center'
        cityHall.style.animation = 'scaleUp 3s'
        function gainTax () {
            wood+=10
            stone+=10
            gold+=10
            woodDisplay.innerHTML = `Wood: ${wood}`
            goldDisplay.innerHTML = `Gold: ${gold}`
            stoneDisplay.innerHTML = `Stone: ${stone}`
        }
        setInterval(gainTax, 1000)
    }else{
        alert('Need more resources!')
    }

}