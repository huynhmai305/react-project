import React from "react";
import styles from "../styles/Effect.module.scss";

const Effect = () => {
  return (
    <div className={styles.bike}>
      <div className={styles.bike__cloud_1} />
      <div className={styles.bike__cloud_2} />
      <div className={styles.bike__cloud_3} />
      <div className={styles.bike__bike}>
        <div className={styles.bike__wheel}>
          <div className={styles.bike__needle} />
          <div className={styles.bike__needle} />
          <div className={styles.bike__needle} />
        </div>
        <div className={styles.bike__wheel}>
          <div className={styles.bike__needle} />
          <div className={styles.bike__needle} />
          <div className={styles.bike__needle} />
        </div>
        <div className={styles.bike__down_tube} />
        <div className={styles.bike__tubes}>
          <div className={styles.bike__chain} />
          <div className={styles.bike__seat_stays} />
          <div className={styles.bike__chain_stays} />
          <div className={styles.bike__seat_tube} />
          <div className={styles.bike__star}>
            <div className={styles.bike__pedal} />
          </div>
          <div className={styles.bike__seat} />
        </div>
        <div className={styles.bike__top_tube} />
        <div className={styles.bike__fo} />
        <div className={styles.bike__head_tube} />
        <div className={styles.bike__helm} />
        <div className={styles.bike__lock} />
      </div>
      <div className={styles.bike__man}>
        <div className={styles.bike__arm}>
          <div className={styles.bike__forearm}>
            <div className={styles.bike__hand} />
          </div>
          <div className={styles.bike__sleeve} />
        </div>
        <div className={styles.bike__back_leg}>
          <div className={styles.bike__shin}>
            <div className={styles.bike__skin} />
            <div className={styles.bike__ked} />
          </div>
        </div>
        <div className={styles.bike__butt} />
        <div className={styles.bike__front_leg}>
          <div className={styles.bike__shin}>
            <div className={styles.bike__skin} />
            <div className={styles.bike__ked} />
          </div>
        </div>
        <div className={styles.bike__shirt}>
          <div className={styles.bike__collar} />
        </div>
        <div className={styles.bike__arm}>
          <div className={styles.bike__forearm}>
            <div className={styles.bike__hand} />
          </div>
          <div className={styles.bike__sleeve} />
        </div>
        <div className={styles.bike__head}>
          <div className={styles.bike__eye} />
          <div className={styles.bike__eye} />
          <div className={styles.bike__whisker} />
          <div className={styles.bike__nose} />
          <div className={styles.bike__month} />
          <div className={styles.bike__whisker} />
          <div className={styles.bike__cap}>
            <div className={styles.bike__peak}>
              <div className={styles.bike__peak_parts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
