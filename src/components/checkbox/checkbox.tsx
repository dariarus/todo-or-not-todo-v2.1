import React, { FunctionComponent } from 'react';
import { observer } from "mobx-react-lite";

import checkboxStyles from './checkbox.module.css';

import { TCheckbox } from '../../services/types/props';

export const Checkbox: FunctionComponent<TCheckbox> = observer((props) => {
  return (
    <input type="checkbox"
           id={props.labelId}
           defaultChecked={props.checked}
           className={props.type === 'isDone'
             ? `${checkboxStyles.checkbox} ${checkboxStyles['checkbox_type_is-done']}`
             : `${checkboxStyles.checkbox} ${checkboxStyles['checkbox_type_is-important']}`}
           onChange={props.onChange}
    />
  )
})