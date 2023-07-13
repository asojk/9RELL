import React from 'react';
import Card from './card.js';

const Cards = () => (
  <section className="cards-cards">
    <header className="header">
      <h2 className="heading" style={{ paddingTop: '2rem' }}>
        Meet our Team
      </h2>
    </header>
    <main className="cards-cards1">
      <Card rootClassName="card-root-class-name" />
      <Card
        Icon="/Icons/group%201314-200h.png"
        rootClassName="card-root-class-name1"
      />
      <Card
        Icon="/Icons/group%201317-200h.png"
        rootClassName="card-root-class-name2"
      />
    </main>
  </section>
);

export default Cards;
