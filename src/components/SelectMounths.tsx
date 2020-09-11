import React from 'react';

import nameOfMounths from '../constants/nameOfMounths';


interface IProps {
  className?: string,
}

export default function SelectMounths({ className = '' }: IProps) {
  const classes = `browser-default custom-select ${className}`;
  const mounths = nameOfMounths.map((mounth, i) => <option key={i} value={i}>{mounth}</option>);

  return (
    <select className={classes}>
      {mounths}
    </select>
  );
}