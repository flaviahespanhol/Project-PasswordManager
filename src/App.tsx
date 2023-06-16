import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  const [mostraBotão, setMostraBotão] = useState(true);
  const [saved, setSaved] = useState< { nomeServiço: string,
    login: string,
    senha: string,
    url: string } []>([]);

  const handleButton = () => {
    setMostraBotão(false);
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

      {saved.length > 0 && (

        <ul>
          {saved.map((cadastro, index) => (
            <li key={ index }>
              <a href={ cadastro.url }>{cadastro.nomeServiço}</a>
              <p>
                {cadastro.login}
              </p>
              <p>
                {cadastro.senha}
              </p>
            </li>
          ))}
        </ul>
      )}
      {!isFormValid && saved.length === 0 && <p>Nenhuma senha cadastrada</p>}
    </>
  );
}
export default App;
