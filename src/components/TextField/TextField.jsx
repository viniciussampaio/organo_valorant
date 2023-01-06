import styles from "./TextField.module.css";

export const TextField = (props) => {
  const placeholderModificada = `${props.placeholder}`;

  const Capture = (event) => {
    props.Editado(event.target.value);
  };

  return (
    <div className={styles.text}>
      <label>{props.label}</label>
      <input
        onChange={Capture}
        value={props.value}
        required={props.validated}
        type="text"
        placeholder={placeholderModificada}
      />
    </div>
  );
};
