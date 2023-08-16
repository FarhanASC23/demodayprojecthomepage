// const firebaseConfig = {
// 	apiKey: 'AIzaSyACHT0qIKg-D29EW4cJ-PxsoqvFP6RlCMM',
// 	authDomain: 'anothermessage-f95c7.firebaseapp.com',
// 	databaseURL: 'https://anothermessage-f95c7-default-rtdb.firebaseio.com',
// 	projectId: 'anothermessage-f95c7',
// 	storageBucket: 'anothermessage-f95c7.appspot.com',
// 	messagingSenderId: '393196641650',
// 	appId: '1:393196641650:web:7102bc721b78231ea951eb',
// 	measurementId: 'G-EHBW2V6KQJ',
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Initialize Firestore database
// let db = app.firestore();
// let newData;

// function sendData(e) {
// 	e.preventDefault();
// 	let nameI = document.getElementById('name').value;
// 	let quoteI = document.getElementById('quote').value;

// 	newData = {
// 		userName: nameI,
// 		blogMessage: quoteI,
// 	};

// 	db.collection('quotes').add(newData)
// 		.then(function () {
//             console.log(newData);
// 			console.log('DATA SENT');
// 		})
// 		.catch(function (error) {
// 			console.error('Error sending data: ', error);
// 		});
// }

// //send data

// let btn = document.querySelector('button');
// btn.addEventListener('click', sendData);