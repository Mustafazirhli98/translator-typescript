import { Alert } from '@mui/material';
import './App.css';
import MainComponent from './components/MainComponent';
import { useContext } from 'react';
import { TranslationContext } from './context/Context';

function App() {
  const { toast } = useContext(TranslationContext)


  return (
    <div className="container" >
      <MainComponent />
      {
        <Alert className={`alert ${toast.state != "" ? "active" : ""}`} severity="info" color="info">
          {toast.text}
        </Alert>
      }
    </div >
  );
}

export default App;
