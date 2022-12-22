/*
Full Name
Email
Password
Occupation
State 
*/
import React, { useState } from "react";
const Form = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  const handleInput = (e) => {
    //take previous obj val
    console.log("event", e.target.value);
    const { name, value } = e.target;
    
    setInput((prev) => {
      return {
        //return state object and update only inputVal
        ...prev,
        [name]: value,
      };
    });
  };
  console.log("input", input);
  return (
    <div>
      <h2>User Creation Form</h2>
      <div className="formDiv">
        <form className="innerForm">
          <div>
            <label className="column">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="column">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="column">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInput}
              minLength="8"
              required
            />
          </div>
          <div>
            <label className="column">Occupation:</label>
            <input
              type="text"
              id="work"
              name="occupation"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="column">State:</label>
            <input type="text" id="state" name="state" onChange={handleInput} />
          </div>
        </form>
      </div>
      <button>Send</button>
    </div>
  );
};
export default Form;
