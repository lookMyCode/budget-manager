import React from 'react';

import Header from '../components/Header';
import ComparisonsForMounts from '../components/ComparisonsForMounts';
import Balance from '../components/Balance';
import TablesGreatest from '../components/TablesGreatest';
import History from '../components/History';


export default function Main() {
  return (
    <main className="container my-4 pb-4">
      <Header tag="h1" className="text-center">Menedżer budżetu</Header>
      <ComparisonsForMounts />
      <Balance />
      <TablesGreatest />
      <History />
    </main>
  );
}