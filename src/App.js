import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
// import { NavLink } from "react-router-dom";

function App() {
  const [news, SetNews] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://3.19.185.123:8082/getBookingDetails/63ce109cdf0f9f1aaf137bb3"
      )
      // 'https://newsapi.org/v2/top-headlines?country=in&apiKey=acac1a3499c644e2b6ae804ffb90780e'
      .then((res) => {
        console.log(res.data);
        SetNews(res.data.Booking);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {news &&
        news.map((allData) => {
          return (
            <div className="container">
            <header className="form-header"> Details</header>
            <img src={allData.baddress.logo} alt="it is logo"></img>
              <h2> Booking for:{allData.baddress.name}</h2>
              <h1>{allData.cName}</h1>
              <p>phone number {allData.cPhoneNumber} </p>
              <h4> Status: <b style={{color: "rgb(8,190,188)"}}>{allData.slotStatus.status} </b></h4>
              <h2 style={{ textAlign:"center",backgroundColor:"#F5C3C3",width:"80%",height:"10%", padding:"10px",borderRadius:"20px"}}> Your Number:{allData.noOFPax}</h2>
              <p>Reason : need to just visit</p>
              <h3> Date & slote</h3>
              <h3> {allData.slotName}</h3>
              <h4> {allData.baddress.messages.STARTED}</h4>
              <h4 className="current"> Current in proggress:{allData.queueNo}</h4>
              <button className="refresh" onClick={() => window.location.reload(false)}>
                Tap here to status refresh
              </button>

              <h5> Venue Address:</h5>
              <h2>
                
                {allData.baddress.address1} {allData.baddress.address2}
              </h2>
              
              <a className="getDirect" href="https://www.google.com/maps/dir//77.3421154,28.6858898/@52.9391863,53.0378747,2z/data=!4m5!4m4!1m1!4e2!1m0!3e0"> Get Direction To map</a>
              <br />
              
              <a className="cancel" href="http://3.144.165.182:3000/details/63ce7e7a4918d42b9c9c382c">Tap here to Cancel booking</a>
              <h3>for assistance call at :</h3>
              <h3>{allData.baddress.phoneNumber}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default App;
