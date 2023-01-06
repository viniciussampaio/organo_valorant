import styles from "./SelectList.module.css";

export const SelectList = (props) => {
  return (
    <div className={styles.selectList}>
      <label>{props.label}</label>
      <select
        onChange={(event) => props.Editado(event.target.value)}
        required={props.validated}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
