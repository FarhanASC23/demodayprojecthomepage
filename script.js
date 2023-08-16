// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAFWdBLhMt7ihyBwpFOV22i5ilB8QDtG6k",

  authDomain: "habittrac4er.firebaseapp.com",

  databaseURL: "https://habittrac4er-default-rtdb.firebaseio.com",

  projectId: "habittrac4er",

  storageBucket: "habittrac4er.appspot.com",

  messagingSenderId: "643795810597",

  appId: "1:643795810597:web:84c174500e57f43feb42cc",

  measurementId: "G-9QBXB448Q8"

};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore database
const db = app.firestore();

let data;

// grabs element for changing preset texts
let pickbtn = document.getElementById('selectionbtn')
let selection = document.getElementById('selection')
let changedhabit = document.getElementById('changedhabit')
let changedhabit2 = document.getElementById('changedhabit2')
let changedhabit3 = document.getElementById('changedhabit3')
let changedhabit4 = document.getElementById('changedhabit4')

pickbtn.addEventListener('click', pickbtnclicked)

function pickbtnclicked(event) {
  event.preventDefault()
  if (selection.value === 'default') {
    changedhabit.innerHTML = 'Sleep at a similar time every night'
    changedhabit2.innerHTML = 'Remove Electronic Devices 30 minutes before bed'
    changedhabit3.innerHTML = 'Limit Caffeine'
    changedhabit4.innerHTML = 'Make the room as dark, quiet and relaxing as possible'
  }
  if (selection.value === 'weightgain') {
    changedhabit.innerHTML = 'Eat an extra 500 calories'
    changedhabit2.innerHTML = 'Cardio for 30 min'
    changedhabit3.innerHTML = 'Weight lifting 30 min'
    changedhabit4.innerHTML = 'Eat clean foods'
  }
  if (selection.value === 'weightloss') {
    changedhabit.innerHTML = '500 calorie deficit'
    changedhabit2.innerHTML = 'Cardio for 30 min'
    changedhabit3.innerHTML = 'Weightlifting 30 min'
    changedhabit4.innerHTML = 'Eat clean foods'
  }
  if (selection.value === 'anxiety') {
    changedhabit.innerHTML = 'Journal'
    changedhabit2.innerHTML = 'Take a deep breath & Be Grateful'
    changedhabit3.innerHTML = 'Meditation'
    changedhabit4.innerHTML = 'Sleep for atleast 8 hours'
  }
}

// First HABIT CONTAINER
// grabs elements to edit the text
let editbtn = document.getElementById('editbtn')

editbtn.addEventListener('click', editbtnclicked);

function editbtnclicked() {
  // Create an input element
  let input = document.createElement('input');
  input.value = changedhabit.innerText;

  // Replace the habit text with the input element
  changedhabit.innerHTML = '';
  changedhabit.appendChild(input);

  // Add event listener to save the edited text
  input.addEventListener('blur', function() {
    changedhabit.innerHTML = this.value;
  });
}

//grab elements to check to see if checkbox is checked
let checkboxchecked = document.getElementById('completedaily')
let score = document.getElementById('score')
let startingscore = score.innerHTML

checkboxchecked.addEventListener('change', function() {
  console.log(checkboxchecked.checked)
  if (checkboxchecked.checked) {
    startingscore++
    score.innerHTML = startingscore
  }
  else {
    startingscore--
    score.innerHTML = startingscore
  }
})

// SECOND HABIT CONTAINER
// grabs elements to edit the text
let editbtn2 = document.getElementById('editbtn2')

editbtn2.addEventListener('click', editbtnclicked2);

function editbtnclicked2() {
  // Create an input element
  let input = document.createElement('input');
  input.value = changedhabit2.innerText;

  // Replace the habit text with the input element
  changedhabit2.innerHTML = '';
  changedhabit2.appendChild(input);

  // Add event listener to save the edited text
  input.addEventListener('blur', function() {
    changedhabit2.innerHTML = this.value;
  });
}

//grab elements to check to see if checkbox is checked
let checkboxchecked2 = document.getElementById('completedaily2')
let score2 = document.getElementById('score2')
let startingscore2 = score2.innerHTML

checkboxchecked2.addEventListener('change', function() {
  console.log(checkboxchecked2.checked)
  if (checkboxchecked2.checked) {
    startingscore2++
    score2.innerHTML = startingscore2
  }
  else {
    startingscore2--
    score2.innerHTML = startingscore2
  }
})

// THIRD HABIT CONTAINER

// grabs elements to edit the text
let editbtn3 = document.getElementById('editbtn3')

editbtn3.addEventListener('click', editbtnclicked3);

function editbtnclicked3() {
  // Create an input element
  let input = document.createElement('input');
  input.value = changedhabit3.innerText;

  // Replace the habit text with the input element
  changedhabit3.innerHTML = '';
  changedhabit3.appendChild(input);

  // Add event listener to save the edited text
  input.addEventListener('blur', function() {
    changedhabit3.innerHTML = this.value;
  });
}

//grab elements to check to see if checkbox is checked
let checkboxchecked3 = document.getElementById('completedaily3')
let score3 = document.getElementById('score3')
let startingscore3 = score3.innerHTML

checkboxchecked3.addEventListener('change', function() {
  console.log(checkboxchecked3.checked)
  if (checkboxchecked3.checked) {
    startingscore3++
    score3.innerHTML = startingscore3
  }
  else {
    startingscore3--
    score3.innerHTML = startingscore3
  }
})

// FOURTH HABIT CONTAINER

// grabs elements to edit the text
let editbtn4 = document.getElementById('editbtn4')

editbtn4.addEventListener('click', editbtnclicked4);

function editbtnclicked4() {
  // Create an input element
  let input = document.createElement('input');
  input.value = changedhabit4.innerText;

  // Replace the habit text with the input element
  changedhabit4.innerHTML = '';
  changedhabit4.appendChild(input);

  // Add event listener to save the edited text
  input.addEventListener('blur', function() {
    changedhabit4.innerHTML = this.value;
  });
}

//grab elements to check to see if checkbox is checked
let checkboxchecked4 = document.getElementById('completedaily4')
let score4 = document.getElementById('score4')
let startingscore4 = score4.innerHTML

checkboxchecked4.addEventListener('change', function() {
  console.log(checkboxchecked4.checked)
  if (checkboxchecked4.checked) {
    startingscore4++
    score4.innerHTML = startingscore4
  }
  else {
    startingscore4--
    score4.innerHTML = startingscore4
  }
})

setInterval(checkTime, 100000)
function checkTime(){
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let url = 'https://worldtimeapi.org/api/timezone/America/New_York'

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    let locT = data.datetime.search("T")
    let locL = data.datetime.length
    console.log(locT)
    console.log(locL)
    let getTime = data.datetime.slice((locT + 1), 16)
    console.log(getTime)
    let timern = document.getElementById("timern")
    
    timern.innerHTML = 'Time: '+ getTime
})
.catch(function(err){
  console.log("Error:",err)
})
}
let changedtext = document.getElementById('changedhabit')
let changedtext2 = document.getElementById('changedhabit2')
let changedtext3 = document.getElementById('changedhabit3')
let changedtext4 = document.getElementById('changedhabit4')

let password = document.getElementById('pass')

//select save button
let savebtn = document.getElementById('savebtn')
//add click listener for save button
savebtn.addEventListener('click', function(e){
  e.preventDefault();
  //create object called state and store the different value
  let state = {
    pass: password.value,
    results: {
    score: score.innerHTML,
    score2: score2.innerHTML,
    score3: score3.innerHTML,
    score4: score4.innerHTML,
    status: "ASC",
    loadedtext: changedtext.innerHTML,
    loadedtext2: changedtext2.innerHTML,
    loadedtext3: changedtext3.innerHTML,
    loadedtext4: changedtext4.innerHTML,
    }
  }

  //usercollection.get
  
  db.collection('userState').add(state)
    .then(() => {
      console.log(state);
      console.log('Data Sent');
    })
})
//the listener will store the time, text, score, and scorestatus all in seperate variables
//the values from those variables will stored in sepereate collections(score values for the score collection etc.)

//select load button
let loadbtn = document.getElementById('loadbtn')
//add click listener to retreive the values stored in the database and edit the html
loadbtn.addEventListener('click', function(e){
  e.preventDefault();


  
  const usersCollection = db.collection('userState'); 
  usersCollection.get().then((querySnapshot) => { 
    const documents = querySnapshot.docs; 
    // Get the array of docs
    for (let i = 0; i < documents.length; i++) { 
      const doc = documents[i]; 
      const userData = doc.data(); // Get the data from the document 
      //console.log("Document ID:", doc.id); 
      //console.log("User Data:", userData.pass); 

      // Check for password
      if(password.value == userData.pass){
        console.log(userData)
        console.log("Data in index",i)
        score.innerHTML = userData.results.score
        score2.innerHTML = userData.results.score2
        score3.innerHTML = userData.results.score3
        score4.innerHTML = userData.results.score4
        changedtext.innerHTML = userData.results.loadedtext
        changedtext2.innerHTML = userData.results.loadedtext2
        changedtext3.innerHTML = userData.results.loadedtext3
        changedtext4.innerHTML = userData.results.loadedtext4
      }
    } 
  })
    .catch((error) => { 
    console.log("Error getting documents: ", error); 
  });
})
