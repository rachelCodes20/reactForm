import React, { useState } from "react";
import axios from "axios";
import useRewardsData from "./hooks/useRewardsData";
import TextInput from "./components/TextInput";
import PasswordInput from "./components/PasswordInput";
import RewardsForm from "./components/RewardsForm";
import SuccessMessage from "./components/SuccessMessage";

const Form = () => {
  const { states, occupations } = useRewardsData();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    occupation: "",
    homeState: "",
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
  function checkFormFields(obj) {
    let result = true;
    for (let key in input) {
      //util directory with functions file
      if (input[key] === "") {
        result = false;
      }
    }
    return result;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (checkFormFields(input) === false) {
      alert("please complete each form field");
      return;
    } else {
       console.log("input", input);
      async function postReq() {
        await axios
          .post(
            "https://frontend-take-home.fetchrewards.com/form",
            {
              fullName: input.fullName,
              email: input.email,
              password: input.password,
              occupation: input.occupation,
              homeState: input.state,
            },
            {
              headers: {
                "content-type": "text/json",
              },
            }
          )
          .then((response) => {
            console.log("post req", response.data);
          })
          .catch(function (error) {
            return "axios post req error" + error;
          });
          
      }
      console.log('request completed')
      postReq();
    }
  };
  return (
    <div className="App">
      <h2 className="userForm">User Form</h2>
      <div className="formDiv">
        <RewardsForm>
          <TextInput
            label="Your Full Name"
            inputID="fullName"
            inputValue={input.fullName}
            handleInput={handleInput}
          />
          <TextInput
            label="Your Email"
            inputID="email"
            inputValue={input.email}
            handleInput={handleInput}
          />
          <PasswordInput
            label="Password (8 minimum)"
            inputID="password"
            inputValue={input.password}
            handleInput={handleInput}
          />
          {/* select inputs -- no props */}
          <div>
            <label htmlFor="occupation" className="column">
              Your Occupation
            </label>
            <select
              name="occupation"
              id="occupation"
              value={input.occupation}
              onChange={handleInput}
            >
              {occupations.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="column">Your State</label>
            <select
              name="homeState"
              id="homeState"
              value={input.homeState}
              onChange={handleInput}
            >
              {states.map((st) => {
                return (
                  <option value={st.name} key={st.name}>
                    {st.name}
                  </option>
                );
              })}
            </select>
            <button className="selectButton" onClick={handleSubmit}>
              Submit Form!
            </button>
          </div>
        </RewardsForm>
      </div>
    </div>
  );
};
export default Form;
