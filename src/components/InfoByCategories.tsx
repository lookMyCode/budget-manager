import React from 'react';

import SelectMounths from './SelectMounths';
import GreatestTable from './GreatestTable';


interface IProps {
  header: string,
}

export default function InfoByCategories({ header }: IProps) {
  return (
    <section className="row mt-3">
      <div className="col">
        <h3 className="text-center">{header}</h3>
        <div className="w-100 my-3 d-flex justify-content-center">
          <div className="w-100 w-md-50">
            <label className="w-100 d-flex justify-content-center align-items-center">
              <span className="text-right mr-2">Wybierz miesiąc:</span>
              <SelectMounths className='w-50' />
            </label>
          </div>
        </div>
        <GreatestTable type='income' />
      </div>
    </section>
  );
}