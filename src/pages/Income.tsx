import React from 'react';

import Header from '../components/Header';
import AddForm from '../components/AddForm';
import InfoByCategories from '../components/InfoByCategories';
import TransactionInformation from '../components/TransactionInformation';


export default function Income() {
  return (
    <main className="container my-4 pb-4">
      <Header className="text-center">Dochody budżetu</Header>
      <AddForm header='Dodać dochód' />
      <InfoByCategories header='Dochody po rodzaju' />
      <TransactionInformation header='Dochody po tranzakcjam' />
    </main>
  );
}