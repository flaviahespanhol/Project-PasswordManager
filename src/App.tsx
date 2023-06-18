import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Senhas from './components/Senhas';

function App() {
  const [mostraBotão, setMostraBotão] = useState(true);
  const [saved, setSaved] = useState< { nomeServiço: string,
    login: string,
    senha: string,
    url: string } []>([]);

  const handleButton = () => {
    setMostraBotão(false);
    setData({
      nomeServiço: '',
      login: '',
      senha: '',
      url: '',
    });
  };

  const handleForm = () => {
    setMostraBotão(true);
  };

  const [data, setData] = useState({
    nomeServiço: '',
    login: '',
    senha: '',
    url: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,

    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = [...saved, data];
    console.log(newData);
    setSaved(newData);
    setMostraBotão(true);
  };

  const validateForm = () => {
    const validarNomeServiço = data.nomeServiço.length > 0;
    const validarLogin = data.login.length > 0;
    const regex = /(?=.*[a-z])(?=^.{8,16}$)((?=.*\d)(?=.*\W+))(?![.\n]).*$/;
    const validarSenha = regex.test(data.senha);

    return validarNomeServiço && validarLogin && validarSenha;
  };

  const isFormValid = validateForm();

  const removingRegister = (index: number) => {
    const registers = [...saved];
    registers.splice(index, 1); setSaved(registers);
  };

  return (
    <>

      <h1>Gerenciador de senhas</h1>
      {mostraBotão ? <Button onClick={ handleButton } />
        : <Form
            data={ data }
            setForm={ handleForm }
            handleInputChange={ handleChange }
            handleSubmitForm={ handleSubmit }
            isFormValid={ isFormValid }
        />}

      {saved.length > 0 ? (
        saved.map((cadastro, index) => (
          <Senhas
            key={ index }
            nomeServiço={ cadastro.nomeServiço }
            login={ cadastro.login }
            senha={ cadastro.senha }
            url={ cadastro.url }
            handleDelete={ () => removingRegister(index) }
          />
        )))
        : <p>Nenhuma senha cadastrada</p> }
    </>
  );
}

export default App;
