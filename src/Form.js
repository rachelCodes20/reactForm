
import React, { useState, useEffect } from "react";
import axios from "axios";
import useRewardsData from "./hooks/useRewardsData";
import TextInput from "./components/TextInput";
import PasswordInput from "./components/PasswordInput";
import RewardsForm from "./components/RewardsForm";

const Form = () => {
  const { states , occupations } = useRewardsData();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    occupation: "",
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

  console.log('input', input)
  // function checkFormFields (obj){
  //   for(let key in input){
  //build in util directory with functions file
  // }
  // checkFormFields(input)
  const handleSubmit = (e) => {
    e.preventdefault();
    if(checkFormFields){
        alert('please complete each form field')
    }else{
         axios.post('https://frontend-take-home.fetchrewards.com/form', input)
          .then(response => {
          console.log(response);
        })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
  return (
    <div>
      <h2>User Creation Form</h2>
      <div className="formDiv">
        <RewardsForm>
          <TextInput label="Full Name" inputID="fullName" inputValue={input.fullName} handleInput={handleInput}/>
          <TextInput label="Email" inputID="email" inputValue={input.email} handleInput={handleInput}/>
          <PasswordInput label="password" inputID="password" inputValue={input.password} handleInput={handleInput} />
          {/* select inputs -- no props */}
          <div>
            <label className="column" name="occupation">Occupation:</label>
            <select name="occupation">
              {occupations.map((job) => 
               <option value={job} key={job}>{job}</option>
              )}
            </select>
          </div>
          <div>
           <label className="column">State:</label>
           <select name="state">
               {states.map((st) => {
                return <option value={st.name} key={st.name}>{st.name}</option>
               }
              )}
            </select>
          </div>
        </RewardsForm>
      </div>
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};
export default Form;
