import React from "react";
import contact from "./contacts";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.src} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.num}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contact[0].name}
        src={contact[0].imgURL}
        num={contact[0].phone}
        email={contact[0].email}
      ></Card>
      <Card
        name={contact[1].name}
        src={contact[1].imgURL}
        num={contact[1].phone}
        email={contact[1].email}
      ></Card>
      <Card
        name={contact[2].name}
        src={contact[2].imgURL}
        num={contact[2].phone}
        email={contact[2].email}
      ></Card>
    </div>
  );
}

export default App;
