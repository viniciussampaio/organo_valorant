import { useState } from "react";
import Button from "../Button";
import { SelectList } from "../Dropdown/SelectList";
import TextField from "../TextField";
import styles from "./Form.module.css";

export const Form = (props) => {
  const Save = (event) => {
    event.preventDefault();
    props.playerRegistered({
      name,
      office,
      image,
      team,
    });
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
  };

  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  return (
    <section className={styles.form}>
      <form onSubmit={Save}>
        <h2>Preencha os dados para criar o card dos jogadores</h2>
        <TextField
          validated={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          Editado={(name) => setName(name)}
        />
        <TextField
          validated={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          Editado={(office) => setOffice(office)}
        />
        <TextField
          validated={true}
          label="Imagem"
          placeholder="Escolha uma imagem"
          value={image}
          Editado={(image) => setImage(image)}
        />
        <SelectList
          validated={true}
          itens={props.teamValorant}
          label="Lista de Times"
          value={team}
          Editado={(team) => setTeam(team)}
        />
        <Button>Registrar Jogador</Button>
      </form>
    </section>
  );
};
