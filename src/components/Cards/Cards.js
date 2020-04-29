import React from "react";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return props.beers.map(
    ({ id, name, image_url, brewers_tips, food_pairing, description }) => {
      return (
        <div key={id}>
          <div className={styles.container}>
            <div className={styles.image}>
              <img src={image_url} alt='...' />
            </div>
            <div className={styles.info}>
              <h1>{name}</h1>
              <p>
                <b>Description:</b> {description}
              </p>
              <p>
                <b>Tips:</b> {brewers_tips}
              </p>
              <ul>
                <b>Pair With:</b>
                {food_pairing.map((pairing, i) => (
                  <li key={i}>{pairing}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
        </div>
      );
    }
  );
};

export default Cards;
