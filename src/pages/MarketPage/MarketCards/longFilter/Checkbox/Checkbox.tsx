import React from "react";

import styles from "./Checkbox.module.sass"

import checkbox from "assets/items/Flag.svg"

interface Props {
  text: string;
  checked?: boolean
}

export const Checkbox = ({text, checked}: Props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if(checked) 
        setIsChecked(true);
  }, [checked])

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
        <div className={styles.caption}>{text}</div>
      </label>
    </div>
  );
}


