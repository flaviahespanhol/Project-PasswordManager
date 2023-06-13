import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  const [mostraBotão, setMostraBotão] = useState(true);

  const handleButton = () => {
    setMostraBotão(false);
  };

  const handleForm = () => {
    setMostraBotão(true);
  };

  return (
    <>

      <h1>Gerenciador de senhas</h1>
      {mostraBotão ? <Button onClick={ handleButton } />
        : <Form formOculto={ handleForm } />}
    </>
  );
}
export default App;
