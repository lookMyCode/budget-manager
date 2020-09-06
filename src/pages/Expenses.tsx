import React from 'react';

export default function Expenses() {
  return (
    <main className="container my-4 pb-4">
      <section className="row">
        <div className="col">
          <h2 className="text-center">Wydatki budżetu</h2>
          <hr />
        </div>
      </section>
      <section className="mt-3 align-items-center">
        <form action="" className="row">
          <div className="col-12">
            <h3 className="text-center">Dodać wydatek</h3>
          </div>
          <div className="col-12 col-md-3 mt-2">
            <input className="form-control form-control" type="text" placeholder="Nazwa" />
          </div>
          <div className="col-12 col-md-3 mt-2">
            <select className="browser-default custom-select">
              <option selected disabled>Rodzaj</option>
              <option value="1">Jedzenie</option>
              <option value="2">Zdrowie</option>
              <option value="3">Samochód</option>
            </select>
          </div>
          <div className="col-12 col-md-3 mt-2">
            <input className="form-control form-control" type="number" placeholder="Kwota w zł" />
          </div>
          <div className="col-12 col-md-3 mt-2">
            <input className="form-control form-control" type="datetime-local" />
          </div>
          <div className="col-12 mt-2">
            <button type="button" className="btn btn-primary w-100 ml-0">Dodać</button>
            <hr />
          </div>
        </form>
      </section>
      <section className="row mt-3">
        <div className="col">
          <h3 className="text-center">Wydatki po rodzaju</h3>
          <div className="w-100 my-3 d-flex justify-content-center">
            <div className="w-100 w-md-50">
              <label className="w-100 d-flex justify-content-center align-items-center">
                <span className="text-right mr-2">Wybierz miesiąc:</span>
                <select className="browser-default custom-select w-50">
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
              </label>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Rodzaj</th>
                <th scope="col">Odsetek</th>
                <th scope="col">Kwota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jedzenie</td>
                <td>50%</td>
                <td>1000 zł</td>
              </tr>
              <tr>
                <td>Zdrowie</td>
                <td>30%</td>
                <td>600 zł</td>
              </tr>
              <tr>
                <td>Samochód</td>
                <td>20%</td>
                <td>400 zł</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="row mt-3">
        <div className="col-12">
          <h3 className="text-center">Wydatki po tranzakcjam</h3>
          <h6 className="text-center mt-3">Filtr:</h6>
          <div className="w-100 mb-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="w-100 w-md-50">
              <label className="w-100 d-flex justify-content-center align-items-center">
                <span className="text-right mr-2">Wybierz rodzaj:</span>
                <select className="browser-default custom-select w-50">
                  <option value="0">Wszystkie</option>
                  <option value="1">Jedzenie</option>
                  <option value="2">Zdrowie</option>
                  <option value="3">Samochód</option>
                </select>
              </label>
            </div>
            <div className="w-100 w-md-50">
              <label className="w-100 d-flex justify-content-center align-items-center">
                <span className="text-right mr-2">Wybierz miesiąc:</span>
                <select className="browser-default custom-select w-50">
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
              </label>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nazwa</th>
                <th scope="col">Rodzaj</th>
                <th scope="col">Odsetek</th>
                <th scope="col">Kwota</th>
                <th scope="col">Data</th>
                <th scope="col">Usuń</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-4">Lorem</td>
                <td className="pt-4">Jedzenie</td>
                <td className="pt-4">50%</td>
                <td className="pt-4">1000 zł</td>
                <td className="pt-4">1.02.2020</td> 
                <td><button type="button" className="btn btn-danger py-1 px-2">&times;</button></td>             
              </tr>
              <tr>
                <td className="pt-4">Lorem</td>
                <td className="pt-4">Zdrowie</td>
                <td className="pt-4">30%</td>
                <td className="pt-4">600 zł</td>
                <td className="pt-4">1.02.2020</td> 
                <td><button type="button" className="btn btn-danger py-1 px-2">&times;</button></td> 
              </tr>
              <tr>
                <td className="pt-4">Lorem</td>
                <td className="pt-4">Samochód</td>
                <td className="pt-4">20%</td>
                <td className="pt-4">400 zł</td>
                <td className="pt-4">1.02.2020</td>  
                <td><button type="button" className="btn btn-danger py-1 px-2">&times;</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}