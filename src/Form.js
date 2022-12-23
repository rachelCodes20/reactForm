import React, { useState, useEffect } from "react";
import axios from "axios";
import useRewardsData from "./hooks/useRewardsData";
import TextInput from "./components/TextInput";
import PasswordInput from "./components/PasswordInput";
import RewardsForm from "./components/RewardsForm";

const Form = () => {
  const { states, occupations } = useRewardsData();
  const [work, setOccupation] = useState("");
  const [homeState, setHomeState] = useState("");
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    occupation: "",
    homeState: "",
  });
  const [postResponse, setPostResponse] = useState({});
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
    console.log("name targ", e.target);
  };
  function checkFormFields(obj) {
    for (let key in input) {
      //build in util directory with functions file
      if (input[key] === "") {
        result = false;
      }
      result = true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input", input);
    if (checkFormFields === false) {
      alert("please complete each form field");
    } else {
      async function postReq() {
        await axios
          .post(
            "https://frontend-take-home.fetchrewards.com/form",
            {
              fullName: input.fullName,
              email: input.email,
              password: input.password,
              // occupation: input.occupation,
              work: input.work,
              state: input.state,
            },
            {
              headers: {
                "content-type": "text/json",
              },
            }
          )
          .then((response) => {
            console.log("reponseee", response.data);
          })
          .catch(function (error) {
            console.error("axios error", error);
          });
      }
      postReq();
    }
  };
  return (
    <div className="App">
      <h2 class="userForm">User Form</h2>
      <div className="formDiv">
        <RewardsForm>
          <TextInput
            label="Full Name"
            inputID="fullName"
            inputValue={input.fullName}
            handleInput={handleInput}
          />
          <TextInput
            label="Email"
            inputID="email"
            inputValue={input.email}
            handleInput={handleInput}
          />
          <PasswordInput
            label="Password"
            inputID="password"
            inputValue={input.password}
            handleInput={handleInput}
          />
          {/* select inputs -- no props */}
          <div>
            <label htmlFor="work" className="column">
              Occupation
            </label>
            {/* <select name="occupation"> */}
            <select
              name="work"
              id="work"
              onChange={(e) => setOccupation(e.target.value)}
              value={work}
            >
              {occupations.map((job) => (
                <option key={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="column">State</label>
            <select
              name="homeState"
              id="homeState"
              value={homeState}
              onChange={(e) => setHomeState(e.target.value)}
            >
              {states.map((st) => {
                return (
                  <option
                    value={st.name}
                    key={st.name}
                    onChange={(e) => handleInput(e.target.value)}
                  >
                    {st.name}
                  </option>
                );
              })}
            </select>
            <button className="selectButton" onClick={handleSubmit}>Send</button>
          </div>
        </RewardsForm>
      </div>
    </div>
  );
};
export default Form;
