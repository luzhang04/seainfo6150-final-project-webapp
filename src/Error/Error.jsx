import React from 'react';
import error from "../images/404-3.png";
import { Link } from 'react-router-dom';
import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={styles.container}>
            <img src={error} alt="error" />
           
            <h1 className={styles.h1}>Oopsie! Something's missing...</h1>
        
            <h2 className={styles.h2}>click <Link className={styles.link} to="/">here</Link> to go to DIY's home page</h2>
        </div>
    )
}

export default Error;
