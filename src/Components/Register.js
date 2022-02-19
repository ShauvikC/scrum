import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {postReq} from './Api/first.api'

function Register() {
  const [obj, setObj] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  // function handleNameChange(e) {
  //   setObj({
  //     ...obj,
  //     name: e.target.value,
  //   });
  // }
  // function handleEmailChange(e) {
  //   setObj({
  //     ...obj,
  //     email: e.target.value,
  //   });
  // }
  // function handleMobileChange(e) {
  //   setObj({
  //     ...obj,
  //     mobile: e.target.value,
  //   });
  // }

  // function handlePasswordChange(e) {
  //   setObj({
  //     ...obj,
  //     password: e.target.value,
  //   });
  // }

  function handleChange(value, id) {
    console.log(value, id);
  }

  const handleSave = async () => {
    console.log(await postReq(obj))
    
  };
  return (
    <div className="flex-container" id="bg">
      <div id="bh">
        <h1>REGISTER</h1>
        <p>Enter the following details</p>
        <input
          id="NAME"
          type="string"
          value={obj.name}
          onChange={(e) => {
            setObj((ob) => {
              return { ...ob, name: e.target.value };
            });
            handleChange(e.target.value, e.target.id);
          }}
          placeholder="Enter your Name"
        ></input>
        <input
          type="email"
          value={obj.email}
          onChange={(e) =>
            setObj((ob) => {
              return { ...ob, email: e.target.value };
            })
          }
          placeholder="Enter your E-mail"
        ></input>
        <input
          type="tel"
          value={obj.mobile}
          onChange={(e) =>
            setObj((ob) => {
              return { ...ob, mobile: e.target.value };
            })
          }
          placeholder="Enter your Mobile No"
        ></input>
        <input
          type="password"
          value={obj.password}
          onChange={(e) =>
            setObj((ob) => {
              return { ...ob, password: e.target.value };
            })
          }
          placeholder="Enter your Passwornd"
        ></input>
        <input type="password" placeholder="Re-Enter your Password"></input>
        <Link to="/Login">
        <button onClick={handleSave} className = "lg">
          <b>SIGN UP</b>
        </button>
        </Link>
      </div>
      <div id="sgimg">
        <img src="./sg.png" />
      </div>
    </div>
  );
}

export default Register;
