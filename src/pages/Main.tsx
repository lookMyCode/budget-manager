import React from 'react';

export default function Main() {
  return (
    <main className="container my-4 pb-4">
      <section className="row">
        <div className="col">
          <h1 className="text-center">Menedżer budżetu</h1>
          <hr />
        </div>
      </section>
      <section className="row">
        <div className="col">
          <h5>Zestawienie za:</h5>
          <select className="browser-default custom-select">
            <option value="0">Styczeń</option>
            <option value="1">Luty</option>
            <option value="2">Marzec</option>
            <option value="3">Kwiecień</option>
            <option value="4">Maj</option>
            <option value="5">Czerwiec</option>
            <option value="6">Lipiec</option>
            <option value="7">Sierpiec</option>
            <option value="8">Wrzeszeń</option>
            <option value="9">Padziernik</option>
            <option value="10">Listopad</option>
            <option value="11">Grudzień</option>
          </select>
        </div>
      </section>
      <section className="row mt-5">
        <div className="col-12 col-sm-4">
          <h4 className="mt-1 text-sm-center">Dochody:</h4>
          <p className="text-sm-center">3000 zł</p>
        </div>
        <div className="col-12 col-sm-4">
          <h4 className="mt-1 text-sm-center">Wydatki:</h4>
          <p className="text-sm-center">2000 zł</p>
        </div>
        <div className="col-12 col-sm-4">
          <h4 className="mt-1 text-sm-center">Balans:</h4>
          <p className="text-sm-center text-success">1000 zł</p>
        </div>
      </section>
      <section className="row mt-5">
        <div className="col-12 col-md-6">
          <h3 className="text-center">Największe dochody</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Rodzaj</th>
                <th scope="col">Odsetek</th>
                <th scope="col">Kwota</th>
                <th scope="col">Szczegóły</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Praca</td>
                <td>60%</td>
                <td>1800 zł</td>
                <td><a href="#">---></a></td>
              </tr>
              <tr>
                <td>Akcji</td>
                <td>30%</td>
                <td>900 zł</td>
                <td><a href="#">---></a></td>
              </tr>
              <tr>
                <td>Stypendja</td>
                <td>10%</td>
                <td>300 zł</td>
                <td><a href="#">---></a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-12 col-md-6">
          <h3 className="text-center">Największe wydatki</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Rodzaj</th>
                <th scope="col">Odsetek</th>
                <th scope="col">Kwota</th>
                <th scope="col">Szczegóły</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jedzenie</td>
                <td>50%</td>
                <td>1000 zł</td>
                <td><a href="#">---></a></td>
              </tr>
              <tr>
                <td>Zdrowie</td>
                <td>30%</td>
                <td>600 zł</td>
                <td><a href="#">---></a></td>
              </tr>
              <tr>
                <td>Samochód</td>
                <td>20%</td>
                <td>400 zł</td>
                <td><a href="#">---></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
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
    </main>
  );
}