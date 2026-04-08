import { useState } from 'react';
import './Sites.css';
import { piles } from '../../data/mockData';
import PileCard from '../../components/PileCard/PileCard';

export default function Sites() {
  const [expandedId, setExpandedId] = useState(null);

  function handleCardClick(id) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <main className="sites">
      <header className="sites__header">
        <h1 className="sites__title">Storage Sites</h1>
        <p className="sites__subtitle">Emek Hefer Facility</p>
      </header>

      {piles.length === 0 ? (
        <p className="sites__empty">No storage sites found. Add pile data to get started.</p>
      ) : (
        <div className="sites__list">
          {piles.map((pile) => (
            <PileCard
              key={pile.id}
              pile={pile}
              isExpanded={expandedId === pile.id}
              onClick={() => handleCardClick(pile.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
