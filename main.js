// const newData = {
//   name: "John Doe",
//   age: 25,
//   email: "john@example.com"
// };

// db.collection("users").add(newData)
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });

// // const db = firebase.firestore(); this is not needed 

// const usersCollection = db.collection("users");
// const querySnapshot = usersCollection.get()
// .then(function(querySnapshot) {
//   for (let i = 0; i < querySnapshot.docs.length; i++) {
//     const doc = querySnapshot.docs[i];
//     console.log("Document ID: ", doc.id);
//     console.log("Document data: ", doc.data());
//   }
// })
// .catch(function(error) {
//   console.error("Error getting documents: ", error);
// });

