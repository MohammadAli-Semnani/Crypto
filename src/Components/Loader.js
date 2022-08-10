import React from 'react';
//css
import styles from "./Loader.module.css" 
//gif
import infinity from "../Gif/Infinity.gif"
const Loader = () => {
    return (
        <div className={styles.container}>
            <img  src={infinity} alt='loading'/>
            <h1>Loading . . .</h1>
        </div>
    );
};

export default Loader;