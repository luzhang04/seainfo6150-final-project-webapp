import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className = {styles.container}>
    <article className={styles.article}>
            <h1>Contact Us</h1>
            <br />
            <p>
                <b>For customer service: </b><br />
                <br />
                <span>please email products@www.com or call 1-888-888-8888.</span>
            </p>
            <br />

            <p>
                <b>For subscription issues: </b><br />
                <br />
                <span>please email ducts@www.com.</span>
            </p>
            <br />

            <p>
                <b>For advertising-related queries: </b><br />
                <br />
                <span>please email prs@www.com.</span>
            </p>



    </article>
        </div>
  )
}

export default ContactUs;
