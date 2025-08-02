// Footer con pulsanti Cerca, Home, Mappa
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FooterNav() {
  const navigate = useNavigate();
  return (
    <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '60px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#eee', borderTop: '1px solid #ccc' }}>
      <button onClick={() => navigate('/')}>Cerca</button>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/map')}>Mappa</button>
    </footer>
  );
}