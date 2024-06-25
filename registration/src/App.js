import './App.css';

function App() {
  return (
    <div className="cont">
      <form>
        <h1> Registration Form</h1>
      <div className="ui divdder"></div>

      <div className="ui form"/>
      <div className="ui field">
      <label for="username">User Name:</label>
        <input type="text" id="username" name="username" required/>


        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname" required/>

        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required/>

        <label for="district">District:</label>
        <select id="district" name="district" required>
            <option value="" disabled selected>Select District</option>
            <option value="Masindi">Masindi</option>
            <option value="Hoima">Hoima</option>
            <option value="Kagadi">Kagadi</option>
            <option value="Kiboga">Kiboga</option>
            <option value="Kikuube">Kikuube</option>
        </select>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>

        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required/>

        <div class="error" id="password_error"></div>

        <div class="gender-label">
            <label>Gender:</label>
            <label><input type="radio" name="gender" value="male" required/> Male</label>
            <label><input type="radio" name="gender" value="female" required/> Female</label>
        </div>

        <div class="terms-label">
            <input type="checkbox" name="terms" class="terms-checkbox" required/>
            <label for="terms">I agree to the terms and conditions</label>
        </div>

       <input type="submit" value="Register" name="registration_submit"/>

        <div class="already-account">Already have an account? <a href="Login.php">Login</a></div>
   
        </div>
         </form>
      
      


       
    </div>
  );
}

export default App;
