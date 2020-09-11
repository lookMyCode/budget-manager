import React from 'react';


interface IProps {
  header: string,
}

export default function TransactionInformation({ header }: IProps) {
  return (
    <section className="row mt-3">
      <div className="col-12">
        <h3 className="text-center">{header}</h3>
        <h6 className="text-center mt-3">Filtr:</h6>
        <div className="w-100 mb-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="w-100 w-md-50">
            <label className="w-100 d-flex justify-content-center align-items-center">
              <span className="text-right mr-2">Wybierz rodzaj:</span>
              <select className="browser-default custom-select w-50">
                <option value="0">Wszystkie</option>
                <option value="1">Praca</option>
                <option value="2">Akcji</option>
                <option value="3">Stypendja</option>
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
              <td className="pt-4">Praca</td>
              <td className="pt-4">60%</td>
              <td className="pt-4">1800 zł</td>
              <td className="pt-4">1.02.2020</td> 
              <td><button type="button" className="btn btn-danger py-1 px-2">&times;</button></td>             
            </tr>
            <tr>
              <td className="pt-4">Lorem</td>
              <td className="pt-4">Akcji</td>
              <td className="pt-4">30%</td>
              <td className="pt-4">900 zł</td>
              <td className="pt-4">1.02.2020</td> 
              <td><button type="button" className="btn btn-danger py-1 px-2">&times;</button></td> 
            </tr>
            <tr>
              <td className="pt-4">Lorem</td>
              <td className="pt-4">Stypendja</td>
              <td className="pt-4">10%</td>
              <td className="pt-4">300 zł</td>
              <td className="pt-4">1.02.2020</td>  
              <td><button type="button" className="btn btn-danger py-1 px-2">&times;</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}