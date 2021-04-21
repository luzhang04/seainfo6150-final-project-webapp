import React, {useState} from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  const [submittedForm, setSubmittedForm] = useState();

    const [userEmail, setUserEmail] = useState();

	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		setSubmittedForm(data);
	};

  return (
    <div className = {styles.container}>
  <h1> Subscribe for DIY updates</h1>
  {
    submittedForm ? (
      <div><h2 className={styles.success}>Success, {submittedForm.get("firstname")}! </h2>
      <h2>we'll send updates to {submittedForm.get("email")} at the frequency of {submittedForm.get("dropdown")}!</h2></div>
    ) : (
      <form onSubmit={onSubmit} className = {styles.content}>
          <div className="container">
              <p>Please fill in this form to subscribe, fields with * are required.</p>


              <label htmlFor="firstname"><b>*First Name: </b></label>
              <div><input id = "firstname" type="text" placeholder="Firstname" name="firstname" required></input></div>
              <br/>


              <label htmlFor="lastname"><b>*Last Name: </b></label>
              <div><input id = "lastname" type="text" placeholder="Lastame" name="lastname" required></input></div>
              <br/>

              <label htmlFor="email"><b>*Email: </b></label>
              <div><input id = "email" type="text" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter a valid email address." name="email" required></input></div>
              <br/>

              <label htmlFor="dropdownId"><b>How frequent would you like to hear from us? </b></label>
              <div>
            <select name="dropdown" id="dropdownId">
                <option value="everyday">Every Day</option>
                <option value="everyweek">Every Week</option>
                <option value="everymonth">Every Month</option>
             </select>
               </div>
              <br/>

              <label htmlFor="tel"><b>Phone Number: </b> </label>
              <div><input id = "tel" type="text" placeholder="000-000-0000" name="tel" pattern="[0-9]{10}" title="Phone number is in ten-digit format"></input></div>
              <br/>

              <div><b>Would you like to receive text messages from us? </b></div>
              <input type="radio" id="yes" name="radio" value="yes"></input>
              <label htmlFor="yes">Yes</label><br/>
              <input type="radio" id="no" name="radio" value="no"></input>
              <label htmlFor="no">No</label>
              <br/>
              <br/>

              <div><b>What crafts are you interested in? (please select all)</b></div>
              <input type="checkbox" name="checkbox1" value="EasterDIY"></input>
              <label htmlFor="checkbox1"> Easter DIY </label><br />
              <input id = "checkbox1" type="checkbox" name="checkbox2" value="Valentine's-Day-diy"></input>
              <label htmlFor="checkbox2"> Valentine DIY</label><br/>
              <input id = "checkbox2" type="checkbox" name="checkbox3" value="Christmas-diy"></input>
              <label htmlFor="checkbox3"> Christmas DIY</label><br/>
              <input id = "checkbox3" type="checkbox" name="checkbox4" value="Halloween-diy"></input>
              <label htmlFor="checkbox3"> Halloween DIY</label>
              <br/>
              <br/>

              <label htmlFor="dropdownId2"><b>How did you hear about us? </b></label>
              <div>
            <select name="dropdown2" id="dropdownId2">
                <option value="--">----</option>
                <option value="SearchEngine">Search engine</option>
                <option value="GoogleAds">Google Ads</option>
                <option value="YoutubeAds">Youtube Ads</option>
                <option value="Twitter post">Twitter post</option>
                <option value="Radio">Radio</option>
                <option value="TV">TV</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Others">Others</option>
             </select>
               </div>
               <br/>
               <br/>
              <button type="submit"><b>Subscribe</b></button>

          </div>

      </form>
    )
  }
</div>
  )
}

export default Subscribe;
