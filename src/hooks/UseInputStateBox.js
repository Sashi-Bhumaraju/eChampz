
import React, { useState } from 'react';
import styles from '../.././src/css/UseInputStateBox.module.css'

function UseInputStateBox({intialValue,placeHolder,activeState}) {
    const [value,setValue] = useState(intialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue("");
    }

    const inputBox = <input disabled={!activeState}  value={value} placeholder={placeHolder} ></input>
    return [inputBox, value, handleChange, reset];
}

export default UseInputStateBox