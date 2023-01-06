import styles from "./Player.module.css";

export const Player = ({ name, image, office, primaryColor }) => {
  return (
    <div className={styles.player}>
      <div className={styles.header} style={{ backgroundColor: primaryColor }}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};
