// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'Very well connected, has friend in high places',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Expert in chemistry and posions',
  age: 32,  
  image: 'asset/plum.png',
  occupation: 'Entrepreneur'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Professional temptress, can seduce anyone.',
  age: 28,
  image: 'asset/scarlet.png',
  occupation: 'Entrepreneur'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'multicoloured',
  description: 'Can disguise herself as woman or man alike.',
  age: 48,
  image: 'asset/peacock.png',
  occupation: 'Actress'
}

const conolelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Strategies in general, and military strategies especially',
  age: 71,
  image: 'asset/mustard.png',
  occupation: 'Retiered General'
}

const mrsWhite = {
  firstName: 'Mable',
  lastName: 'White',
  color: 'white',
  description: 'Skilful pick-pocketer and lock-picker',
  age: 83,
  image: 'asset/white.png',
  occupation: 'Retiered Crafts Teacher'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  reach: 40,
}

const knife = {
  name: 'Knife',
  weight: 10,
  reach: 20,
}

const candlestick = {
  name: 'Candlestick',
  weight: 100,
  reach: 30,
}

const dumbell = {
  name: 'Dumbell',
  weight: 300,
  reach: 30,
}

const poison = {
  name: 'Poison',
  weight: 5,
  reach: 200,
}

const axe = {
  name: 'Axe',
  weight: 200,
  reach: 30,
}

const bat = {
  name: 'Bat',
  weight: 250,
  reach: 50,
}

const trophy = {
  name: 'Trophy',
  weight: 150,
  reach: 30,
}

const pistol = {
  name: 'Pistol',
  weight: 40,
  reach: 300,
}

console.log(pistol.reach)
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite
  // ...  and the rest
]

const weapons = []

const rooms = []

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
