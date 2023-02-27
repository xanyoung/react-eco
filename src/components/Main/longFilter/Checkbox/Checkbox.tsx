import React from "react";

import styles from "./Checkbox.module.sass"

import checkbox from "../../../../assets/Vector 1 (Stroke).svg"

export const Checkbox = (props: {text: string, checked?: boolean}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if(props.checked) 
        setIsChecked(true);
  }, [props.checked]) // idk, but IDE send me a warning about missing dependency like 'props.checked'

  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <img
          className={`${styles.checkbox} ${isChecked ? styles.checkboxActive : ""}`}
          src={checkbox}
          alt='mark'
        />
        <div className={styles.caption}>{props.text}</div>
      </label>
    </div>
  );
}


