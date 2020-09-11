import React from 'react';


interface IProps {
  income?: number,
  expenses?: number,
}

export default function Balance({ income = 100, expenses = 100
 }: IProps) {
  let className: string = 'text-sm-center';
  const balance: number = income - expenses;

  (balance < 0) ? className += ' text-danger' : ( (income / balance) > 10 ) ? className += ' text-warning' : className += ' text-success';

  return (
    <section className="row mt-5">
      <div className="col-12 col-sm-4">
        <h4 className="mt-1 text-sm-center">Dochody:</h4>
        <p className="text-sm-center">{income} zł</p>
      </div>
      <div className="col-12 col-sm-4">
        <h4 className="mt-1 text-sm-center">Wydatki:</h4>
        <p className="text-sm-center">{expenses} zł</p>
      </div>
      <div className="col-12 col-sm-4">
        <h4 className="mt-1 text-sm-center">Balans:</h4>
        <p className={className}>{balance} zł</p>
      </div>
    </section>
  );
}