
import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState(null);
  const [occupation, setOccupations] = useState([]);
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    state: "",
  });

  const handleInput = (e) => {
    //take previous obj val
    const { name, value } = e.target;
  
    setInput((prev) => {
      return {
        //return state object and update only inputVal
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault();

  }
  useEffect(() => {    
       axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then((res) => {
        setOccupations(res.data.occupations);
        console.log('occup',occupation)
      })
    },[])

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
            <label className="column" name="occupation">Occupation:</label>
            <select name="occupation">
              {occupation.map((job,i) => 
               <option value={job} key={job}>{job}</option>
              )}
            </select>
          </div>
          <div>
            <label className="column">State:</label>
           <select>
              
            </select>
          </div>
        </form>
      </div>
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};
export default Form;
