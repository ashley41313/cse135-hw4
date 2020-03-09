var firebaseConfig = {
    apiKey: "AIzaSyBnziJQ04i79BOojmoxOKtG-UyLR6bmneE",
    authDomain: "homework-4-f09d0.firebaseapp.com",
    databaseURL: "https://homework-4-f09d0.firebaseio.com",
    projectId: "homework-4-f09d0",
    storageBucket: "homework-4-f09d0.appspot.com",
    messagingSenderId: "615881620864",
    appId: "1:615881620864:web:4533cba4dd0af45b32d565",
    measurementId: "G-FESZ10ZM8Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  console.log('firebase-firestore initialized');

    /*get from the collection(permCookie)*/
    firestore.collection("allCollections").get().then((snapshot) => {
        snapshot.docs.forEach(doc => { /*geteach sessionCookie(doc)*/
            renderDoc(doc);
        })
        })
    
  //function takes in a DOCUMENT, and parses through its field and field values
  //result: 
  // entries = array of objects
  // arr = individual object
  // arr[i] = property name
  // entries[entry]arr[i] = property value
  var sessionNum = 0;

  function renderDoc(doc) {
    document.getElementById('reporter').innerHTML += "</br>";
    sessionNum++;
    document.getElementById('reporter').innerHTML += "<h1>This is information for Session "+ sessionNum+"</h1>";

    console.log("get array of JSON objects from specific field");
    let inf = doc.data().info;
    let entries = JSON.parse(inf) || [];
    
    //parse obj, arr[i] = property name, entries[entry][arr[i]] = propertyval
    for(entry in entries) {
        let arr = Object.keys(entries[entry]);
        console.log("Separating oject with fields: " + arr);

        for(i in arr) {
            document.getElementById('reporter').innerHTML += "<li>Property: " + arr[i] + " Value: " + entries[entry][arr[i]] + "</br>";
        }
    }
}
