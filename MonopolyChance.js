// Creates Your Chance Cards in String Array
function createChance() {
  const chance = [
    'Hostal Take Over!! Seize one property of your choosing from the player to your left and collect said rent until you pass go.',
    'Storm Hits Wallstreet!! loose 1 house from your most valuable property set.',
    'Double Or Nothing!! Make a wager, Take a roll - if you get doubles bank pays you double. Roll odd? Loose what you wagered.',
    '2 steps forward, X steps back!! Move two steps forward then Roll to see how far you move back ** if you pass go you still collect.',
    'Road Blocked!! Players behind you cannot pass and must turn around when they catch up to you until you pass go.',
    'Citizens Arrest!! Send A player of your choosing to jail!',
    'REPO!! Steal one house from any other player and place on ANY property you own, even if you dont own a suit yet.',
    'Double Your Chances!! You can pick up two more chance cards OR stay put.',
    'Flat Tire!! Miss your turn until you roll an even sum **Max 3 rolls.',
    'Speed Racer!! Roll Again.',
    'Get Rent Free Card!! Keep card and Use on any property you wish to stay for free at in the future.',
  ];
  return chance;
}

// Creates Your Chest Cards in String Array
function createChest() {
  const chest = [
    'You got a free stock!! Roll to claim your number, then write it down. Everytime it is rolled (even other players) bank pays you x10 **You can sell or trade your *stocks*.',
    'Lotto Winner!! Collect $500.',
    'Free Parking!! Move and collect free parking.',
    'Bad Accountant!! Your accountant is taking your money, loose $100.',
    'You are On A Roll!! Roll again.',
    'Community Looting!! Your properties produce 50% less rent until your next turn.',
    'Snoop dog is in the house!! Get paid out x10 on your next roll for mad hustling but roll doubles and go directly to jail.',
    'Slum Dog Millionaire!! Your rep is temporarily increased.  Make 10x on your properties until you pass go. ',
    'Build homes for the homeless!! Pay for one of your competitors houses of your choosing. They do not need a set.',
    'Double Crossed!! Exchange your current spot with someone in jail, if no ones in jail, go alone *Other player does not pay rent.',
  ];
  return chest;
}

let chest = createChest();
let chance = createChance();

// Picks Card

function pickCard(arr) {
  let left = arr.length;
  let x = Math.floor(Math.random() * left);
  if (left === 1 && arr === chest) {
    chest = createChest();
  } else if (left === 1 && arr === chance) {
    chance = createChance();
  }
  return arr.splice(x, 1);
}

// updates card text
function cardText(disc) {
  upercase = String(disc);
  document.querySelector('.message').textContent = upercase.toUpperCase();
}

// creates a random choice to prevent animation select glitch
function createSwitch() {
  let arr = [1, 2, 3];
  return arr;
}

let options = createSwitch();

function aniSwitch(arr) {
  let left = arr.length;
  let num = Math.trunc(Math.random() * left);
  console.log(left);
  if (left < 1) {
    options = createSwitch();
  }
  pick = arr.splice(num, 1);
  let name = 'cardAppear' + String(pick);
  return name;
}

// when click CHEST --------------------------
document.querySelector('.chest').addEventListener('click', function () {
  cardText(pickCard(chest));
  document.querySelector('.card').style.animation = `${aniSwitch(
    options
  )} 1.6s forwards`;
  document.querySelector('.card').style.backgroundImage =
    'url(assets/chest.jpg)';
  console.log(document.querySelector('.card').style.animation);
});

// when hover chest
document.querySelector('.chest').addEventListener('mouseover', function () {
  // document.querySelector('.card').style.animation = 'off';
});
document.querySelector('.chest').addEventListener('mouseout', function () {
  // document.querySelector('.card').style.animation = 'off';
});

// when click CHANCE ------------------------
document.querySelector('.chance').addEventListener('click', function () {
  cardText(pickCard(chance));
  document.querySelector('.card').style.animation = `${aniSwitch(
    options
  )} 1.6s forwards`;
  console.log(`${aniSwitch(options)} 1.6s forwards`);
  document.querySelector('.card').style.backgroundImage =
    'url(assets/chance.jpg)';
});

// when hover chance
document.querySelector('.chance').addEventListener('mouseover', function () {
  // document.querySelector('.card').style.animation = 'off';
});
document.querySelector('.chance').addEventListener('mouseout', function () {
  // document.querySelector('.card').style.animation = 'off';
});

////////////////////////////////////////////////////////////////////////////////

// console.log(pickCard(chest));
// console.log(pickCard(chance));
