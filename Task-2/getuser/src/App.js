import React, { useEffect, useState } from "react";
import './App.css'
export default function App() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((response) => {
        setItems(response.results);
        console.log(response);
      });
  }, []);
  function setuser() {
    setUser(true);
    setloading();
  }
  function setloading() {
    setLoading(false);
    console.log(loading);
  }
  return (
    <section>
      <h1>Random users..</h1>
      <button className="btn btn-primary mybtn" onClick={setuser}>
        get Users
      </button>
      {loading && <h1>loading...</h1>}
      {
        user && (
          <div className="container">
            <div className="row">
              {items.map((item, key) => {
                return (
                  <div className="col-3 m-5 my-col">
                    <div className="top">.</div>
                    <img className="img" src={item.picture.medium} alt="" width="150" height="100" />
                    <h2>{item.name.first}</h2>
                    <h3>age:{item.dob.age}</h3>
                    <h4>{item.location.country}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        )
      }
    </section >
  );
}
