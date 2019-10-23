import React from 'react';
import AnterosButton from '../src/components/AnterosButton'

function App() {
  return (
    <div style={{alignItems:'center', justifyContent: 'center'}}>
      <AnterosButton
      style={{width:120,height:40,margin:20}}
      oval={false} danger={true}>
        <p>Olá, tudo bem?</p>
      </AnterosButton>
    </div>
  );
}

export default App;
