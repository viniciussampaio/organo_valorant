import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Forms";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Loud",
      primaryColor: "#57c278",
      secondColor: "#d9f7e9",
      textColor: "#ffffff",
    },
    {
      name: "Furia",
      primaryColor: "#000000",
      secondColor: "#c7c6c2",
      textColor: "#ffffff",
    },
    {
      name: "Sentinels",
      primaryColor: "#B10404",
      secondColor: "#752D2D",
      textColor: "#ffffff",
    },
    {
      name: "Vivo Keyd",
      primaryColor: "#57047D",
      secondColor: "#8343A0",
      textColor: "#ffffff",
    },
    {
      name: "Team Liquid",
      primaryColor: "#131034",
      secondColor: "#4C44AB",
      textColor: "#ffffff",
    },
  ];

  const [players, setplayers] = useState([]);

  const newPlayerInserted = (player) => {
    debugger;
    setplayers([...players, player]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        teamValorant={teams.map((team) => team.name)}
        playerRegistered={(player) => newPlayerInserted(player)}
      />

      {teams.map((team) => (
        <Team
          name={team.name}
          key={team.name}
          primaryColor={team.primaryColor}
          secondColor={team.secondColor}
          players={players.filter((player) => player.team === team.name)}
        />
      ))}
    </div>
  );
}

export default App;
