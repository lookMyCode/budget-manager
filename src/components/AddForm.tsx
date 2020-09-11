import React from 'react';


interface IProps {
  header: string
}

export default function AddForm({ header }: IProps) {
  return (
    <section className="mt-3 align-items-center">
      <form action="" className="row">
      <div className="col-12">
        <h3 className="text-center">{header}</h3>
      </div>
      <div className="col-12 col-md-3 mt-2">
        <input className="form-control form-control" type="text" placeholder="Nazwa" />
      </div>
      <div className="col-12 col-md-3 mt-2">
        <select className="browser-default custom-select">
          <option selected disabled>Rodzaj</option>
          <option value="1">Praca</option>
          <option value="2">Akcji</option>
          <option value="3">Stypendja</option>
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
  );
}