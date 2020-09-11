import React from 'react';


interface IProps {
  type: string,
  hasInfo?: boolean
}

export default function GreatestTable({ type, hasInfo = false }: IProps) {
  let Table;

  if(type === 'expenses') {
    Table = (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rodzaj</th>
            <th scope="col">Odsetek</th>
            <th scope="col">Kwota</th>
            {hasInfo && <th scope="col">Szczegóły</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jedzenie</td>
            <td>50%</td>
            <td>1000 zł</td>
            {hasInfo && <td><a href="#">---></a></td>}
          </tr>
          <tr>
            <td>Zdrowie</td>
            <td>30%</td>
            <td>600 zł</td>
            {hasInfo && <td><a href="#">---></a></td>}
          </tr>
          <tr>
            <td>Samochód</td>
            <td>20%</td>
            <td>400 zł</td>
            {hasInfo && <td><a href="#">---></a></td>}
          </tr>
        </tbody>
      </table>
    );
  } else if (type === 'income') {
    Table = (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rodzaj</th>
            <th scope="col">Odsetek</th>
            <th scope="col">Kwota</th>
            {hasInfo && <th scope="col">Szczegóły</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Praca</td>
            <td>60%</td>
            <td>1800 zł</td>
            {hasInfo && <td><a href="#">---></a></td>}
          </tr>
          <tr>
            <td>Akcji</td>
            <td>30%</td>
            <td>900 zł</td>
            {hasInfo && <td><a href="#">---></a></td>}
          </tr>
          <tr>
            <td>Stypendja</td>
            <td>10%</td>
            <td>300 zł</td>
            {hasInfo && <td><a href="#">---></a></td>}
          </tr>
        </tbody>
      </table>
    );
  }

  return <>{Table}</>;
}