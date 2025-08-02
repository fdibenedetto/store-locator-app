// Pagina con input e icone posizione/ricerca
import React from 'react';

export default function Search() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Ricerca punti vendita</h2>
      <input type='text' placeholder='Inserisci indirizzo' style={{ width: '80%', padding: 8 }} />
      <button>📍</button>
      <button>🔍</button>
    </div>
  );
}