// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THER
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  {
    nameName: 'mrGreen',
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'Very well connected, has friend in high places',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur',
  },
  {
    nameName: 'professorPLum',
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Expert in chemistry and posions',
    age: 32,
    image: 'assets/plum.png',
    occupation: 'Entrepreneur',
  },
  {
    nameNam: 'missScarlet',
    firstName: 'Cassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'Professional temptress, can seduce anyone.',
    age: 28,
    image: 'assets/scarlet.png',
    occupation: 'Entrepreneur',
  },
  {
    nameName: 'mrsPeacock',
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'Can disguise herself as woman or man alike.',
    age: 48,
    image: 'assets/peacock.png',
    occupation: 'Actress',
  },
  {
    nameName: 'colonelMustard',
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Strategies in general, and military strategies especially',
    age: 71,
    image: 'assets/mustard.png',
    occupation: 'Retiered General',
  },
  {
    nameName: 'mrsWhite',
    firstName: 'Mable',
    lastName: 'White',
    color: 'white',
    description: 'Skilful pick-pocketer and lock-picker',
    age: 83,
    image: 'assets/white.png',
    occupation: 'Retiered Crafts Teacher',
  },
];
suspects.forEach((kollar) => {
  console.log(`${kollar.lastName}`);
});


const weapons = [
  {
  name: 'Rope',
  weight: 10,
  reach: 40,
  color: 'blue',
  },
  {
  name: 'Knife',
  weight: 10,
  reach: 20,
  color: 'white',
  },
  {
  name: 'Candlestick',
  weight: 100,
  reach: 30,
  color: 'black',
  },
  {
  name: 'Dumbell',
  weight: 300,
  reach: 30,
  color: 'red',
  },
  {
  name: 'Poison',
  weight: 5,
  reach: 200,
  color: 'orange',
  },
  {
  name: 'Axe',
  weight: 200,
  reach: 30,
  color: 'pink',
  },
  {
  name: 'Bat',
  weight: 250,
  reach: 50,
  color: 'green',
  },
  {
  name: 'Trophy',
  weight: 150,
  reach: 30,
  color: 'lilac',
  },
  {
  name: 'Pistol',
  weight: 40,
  reach: 300,
  color: 'orange',
  },
];

console.log(weapons[2]);

const rooms = [
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio',
];


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
}

let mystery = {
  killer:'',
  weapon:'',
  room:'',
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);
  killerImage.src = mystery.killer.image;

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('killerImage').innerHTML = `${mystery.killer.image}`;
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background.color = mystery.weapon.color;
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background.color = mystery.weapon.color;
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
