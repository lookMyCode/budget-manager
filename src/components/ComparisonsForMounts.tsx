import React from 'react';

import SelectMounths from './SelectMounths';


export default function ComparisonsForMounts() {
  return (
    <section className="row">
      <div className="col">
        <h5>Zestawienie za:</h5>
        <SelectMounths />
      </div>
    </section>
  );
}