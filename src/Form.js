/*
Full Name
Email
Password
Occupation
State 
*/

const Form = () => {
  return (
    <div>
      <h2>User Creation Form</h2>
      <div className="formDiv">
        <form className="innerForm">
          <div>
            <label className="column">Full Name:</label>
            <input type="text" id="flname" name="flname" />
          </div>
          <div>
            <label className="column">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label className="column">Password:</label>
            <input
              type="password"
              id="pword"
              name="pword"
              minLength="8"
              required
            />
          </div>
          <div>
            <label className="column">Occupation:</label>
            <input type="text" id="work" name="work" />
          </div>
          <div>
            <label className="column">State:</label>
            <input type="text" id="state" name="state" />
          </div>
        </form>
      </div>
      <button>Send</button>
    </div>
  );
};
export default Form;
