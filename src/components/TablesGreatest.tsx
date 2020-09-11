import React from 'react';

import GreatestTable from './GreatestTable';


export default function TablesGreatest() {
  return (
    <section className="row mt-5">
      <div className="col-12 col-md-6">
        <h3 className="text-center">Największe dochody</h3>
        <GreatestTable type='income' hasInfo={true} />
      </div>

      <div className="col-12 col-md-6">
        <h3 className="text-center">Największe wydatki</h3>
        <GreatestTable type='expenses' hasInfo={true} />
      </div>
    </section>
  );
}