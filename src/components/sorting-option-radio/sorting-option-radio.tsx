import React, {FunctionComponent} from 'react';

import sortOptionCheckboxStyles from './sorting-option-radio.module.css';
import {TSortOptionRadio} from '../../services/types/props';

export const SortingOptionRadio: FunctionComponent<TSortOptionRadio> = (props) => {
  return (
    <div className={sortOptionCheckboxStyles['input-wrap']}>
      <input type="radio"
             id={props.id}
             name={props.inputName}
             checked={props.isChecked}
             className={sortOptionCheckboxStyles.input}
             onChange={props.onClickRadio}
      />
      <label htmlFor={props.id} className={sortOptionCheckboxStyles.label}>{props.label}</label>
    </div>
  )
}