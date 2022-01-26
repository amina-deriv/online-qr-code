import React from 'react';
import style from './App.module.scss';
import QrCode from './components/qr-code/qr-code';

function App() {
  return (
    <div className={style.app}>
       <div className={style.start}>start</div>
       <QrCode/>
    </div>
  );
}

export default App;
