import { Alert } from '@mui/material';
import './App.css';
import MainComponent from './components/MainComponent';
import { useContext, useEffect } from 'react';
import { TranslationContext } from './context/Context';

function App() {
  const { toast } = useContext(TranslationContext)

  
  return (
    <div className="container" >
      <MainComponent />
      {
        toast.state === true ?
          <Alert severity="info" color="info">
            {toast.text}
          </Alert> : ""
      }
    </div >
  );
}
//bildirimler.
//css düzenlemesi ve tasarım iyileştirmesi.
//Context refactoring.

export default App;
