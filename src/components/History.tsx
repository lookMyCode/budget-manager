import React from 'react';


export default function History() {
  return (
    <section className="row mt-5">
      <div className="col-12">
        <hr />
        <h2 className="text-center mb-3">Historia</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Okres</th>
              <th scope="col">Dochód</th>
              <th scope="col">Wydatek</th>
              <th scope="col">Balans</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01.2020</td>
              <td>5000 zł</td>
              <td>4000 zł</td>
              <td>1000 zł</td>
            </tr>
            <tr>
              <td>01.2020</td>
              <td>5000 zł</td>
              <td>4000 zł</td>
              <td>1000 zł</td>
            </tr>
            <tr>
              <td>01.2020</td>
              <td>5000 zł</td>
              <td>4000 zł</td>
              <td>1000 zł</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}