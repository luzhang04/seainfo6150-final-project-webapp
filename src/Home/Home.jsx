import React from 'react'
import diyhome200 from "../images/diyhome200.jpg";
import diyhome400 from "../images/diyhome400.jpg";
import diyhome800 from "../images/diyhome800.jpg";
import styles from "./Home.module.css";
import diyhome from "../images/diyhome.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.container}>
                    <h1 className={styles.title}>DIY Your Dream Life</h1>
        <Link to="/diylist" >
        <img
            srcSet={`${diyhome200} 200w, ${diyhome400} 400w, ${diyhome800} 800w`}
            sizes="
            (max-width: 320px) 200px,
            (max-width: 500px) 400px,
            (max-width: 900px) 800px,
            600px
            "
            src={diyhome}
            alt="diy home"
      /></Link>



        </div>
    )
}

export default Home;
