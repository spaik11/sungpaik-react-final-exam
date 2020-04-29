import React from "react";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return props.beers.map(
    ({ id, name, image_url, brewers_tips, food_pairing, description }) => {
      return (
        <div className={styles.container} key={id}>
          <div className={styles.image}>
            <img src={image_url} alt='...' />
          </div>
          <div className={styles.info}>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>Tips: {brewers_tips}</p>
            <ul>
              Pair With:
              {food_pairing.map((pairing, i) => (
                <li key={i}>{pairing}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  );
};

export default Cards;
