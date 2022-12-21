

/*
Full Name
Email
Password
Occupation
State 
*/

const Form = () => {
return (
    <div className="form">
        <h2>User Creation Form</h2>
        <form>
            <label>Full Name:</label>
            <input type="text" className="flname" name="flname"/>
        </form>
    </div>
);
}
export default Form;