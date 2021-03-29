import { useState } from "react";
import "./App.css";
import db from "./firebase/firebaseConfig";
// Your web app's Firebase configuration

function App() {
  const [userNameState, setUserNameState] = useState(null);
  const [userIdState, setUserIdState] = useState(null);
  const [useEmailState, setUserEmailState] = useState(null);
  const [userAgeState, setUserAgeState] = useState(null);

  const [errorr, setErrorr] = useState(false);
  const [errorrMSG, setErrorrMSG] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    var name = e.target.name;
    var id = e.target.id;
    var email = e.target.email;
    var age = e.target.age;

    db.collection("/userName").doc(`user ${id.value}`).set({
      username: name.value,
      id: id.value,
      email: email.value,
      age: age.value,
    });
    name.value = "";
    id.value = "";
    email.value = "";
    age.value = "";
    alert("NEW USER DATA ADDED");
  }

  function getData(e) {
    e.preventDefault();
    var getID = e.target.getID;
    db.collection("/userName")
      .doc(`user ${getID.value}`)
      .get()
      .then((snap) => {
        setUserNameState(snap.data().username);
        setUserIdState(snap.data().id);
        setUserEmailState(snap.data().email);
        setUserAgeState(snap.data().age);

        getID.value = "";
        setErrorr(false);
        setErrorrMSG("");
      })
      .catch((err) => {
        console.log(err);
        setErrorr(true);
        setErrorrMSG(`ERROR : ${err}`);

        setUserNameState(null);
        setUserIdState(null);
        setUserEmailState(null);
        setUserAgeState(null);
        getID.value = "";
      });
  }

  return (
    <div className="App">
      <header>
        <br />
        <img
          src="https://miro.medium.com/max/2400/1*adWGbH24epVnz_KIQ5dD-A.png"
          alt="img"
          style={{
            borderRadius: "10px",
            width: "250px",
          }}
        />
        <br />
        <br />
        <h2>Firebase Hosting | React Version</h2>
        <p>
          Firebase Hosting is production-grade web content hosting for
          developers. With a single command, you can quickly dename="" ploy web
          apps and serve both static and dynamic content to a global CDN
          (content delivery network). You can also pair Firebase Hosting with
          Cloud Functions or Cloud Run to build and host microservices on
          Firebase.
        </p>
      </header>
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit} className="upload-form">
        <h2>Upload Data Form</h2>
        <input type="number" name="id" placeholder="id" />
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="age" placeholder="age" />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Enter Data to Database" />
      </form>

      <br />
      <hr />
      <br />

      <form onSubmit={getData} className="get-data-form">
        <h2>GET USER'S DATA</h2>
        <input type="number" name="getID" placeholder="User's ID Number" />
        <input type="submit" value="Show User's Details" />
        <br />
        <span className="userDetails">
          {userNameState && (
            <strong>
              Name : {userNameState} <br />
            </strong>
          )}

          {userIdState && (
            <strong>
              ID : {userIdState} <br />
            </strong>
          )}

          {useEmailState && (
            <strong>
              Email : {useEmailState} <br />
            </strong>
          )}

          {userAgeState && <strong>Age : {userAgeState}</strong>}
          {errorr && <p>{errorrMSG}</p>}
        </span>
      </form>
      <br />
      <br />
    </div>
  );
}

export default App;
