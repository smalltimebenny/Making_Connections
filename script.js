//ex from stack exchange
// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(Math.random())
// console.log(random, months[random]);


//names pulled from fantasynamegenerators.com, fairy names
const names =
    ["Echo Parsleysocks",
        "Sunrise Prettyspark",
        "Basil Oliveglow",
        "Astro Mountainwax",
        "Bumble Fluttergust",
        "Smokey Blacklily",
        "Onyx Leafbush",
        "Oregano Broomcreek",
        "Stardust Rainwink",
        "Sprinkle Orangetwirls",
        "Fox Cozybloom",
        "Dew Cloudgust",
        "Earth Frozendew",
        "Helio Gemwish",
        'Mercury Wonderbell',
        'Cirro Lillyswamp',
        'Herb Cricketgrass',
        'Scorpia Lilytoad',
        'Liri Snowjacket',
        'Snowdrop Darkgem',
        'Mythia Gigglethorn',
        'Spore Garlicbell',
        'Violet Garlicthistle',
        'Sienna Sourhop',
        'Fiery Pepperspice',
        'Bayberry Whitepearl',
        'Liatris Speedygriddle',
        'Coconut Rosesprite',
        'Polly Snowjacket',
        'Lorella Redbay'
    ]

// var pickName = Math.floor(Math.random() * names.length);

function randomName(element) {
    let pickName = Math.floor(Math.random() * names.length);
    let target = document.querySelector(element)
    console.log(target)
target.innerText = names[pickName];
}

function approveRequest(element, element2, element3) {
    let requestor = document.querySelector(element);
    requestor.remove();    
    let reduceCounter = document.querySelector(element2);
    let getNumber = parseInt(reduceCounter.innerText);
    // getNumber = parseInt(getNumber, 10)
    reduceCounter.innerText = getNumber - 1;
    let increaseCounter = document.querySelector(element3);
    let getNumber2 = parseInt(increaseCounter.innerText);
    console.log(typeof getNumber2)
    increaseCounter.innerText = getNumber2 + 1;
}

function denyRequest(element, element2){
    let requestor = document.querySelector(element);
    requestor.remove();
    let reduceCounter = document.querySelector(element2);
    let getNumber = parseInt(reduceCounter.innerText);
    reduceCounter.innerText = getNumber - 1;
}