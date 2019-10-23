import React from 'react';
import './App.css';
import AnterosButton from '../src/components/AnterosButton'

function App() {
  return (
    <div style={{flex:1,alignItems:'center', justifyContent: 'center'}}>
      <AnterosButton
      style={{width:120,height:40,margin:20}}
      oval={true} warning={true}>
        <p>Olá, tudo bem?</p>
      </AnterosButton>
      
    </div>
  );
}

export default App;
