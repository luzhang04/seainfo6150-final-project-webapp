import React from 'react'
import Form from "../Form/Form";
import diylife from "../images/DiyLife.jpeg";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import diyhome from "../images/diyhome.jpeg";
import diyflower from "../images/diyflower.jpeg";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.container}>
                    <h1>DIY Your Dream Life</h1>
        <Link to="/diylist" ><img src={diyhome} alt="diy home" /></Link>


        </div>
    )
}

export default Home;
