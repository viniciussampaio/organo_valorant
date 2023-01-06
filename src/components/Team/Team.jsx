import { Player } from "../Card/Player";
import styles from "./Team.module.css";

export const Team = (props) => {
  const styleTeam = {
    backgroundColor: props.secondColor,
  };

  return props.players.length > 0 ? (
    <section className={styles.team} style={styleTeam}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className={styles.players}>
        {props.players.map((player) => (
          <Player
            primaryColor={props.primaryColor}
            key={player.name}
            name={player.name}
            office={player.office}
            image={player.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
