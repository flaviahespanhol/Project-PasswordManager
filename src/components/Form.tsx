import React from 'react';

type FormProps = {
  data: {
    nomeServiço: string;
    login: string;
    senha: string;
    url: string;
  };

  setForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
};

function Form({ data, setForm, handleInputChange,
  handleSubmitForm, isFormValid }: FormProps) {
  const hidindForm = () => {
    setForm(true);
  };
  return (
    <form action="" onSubmit={ handleSubmitForm }>
      <label htmlFor="Nome serviço">
        Nome do serviço
        <input
          id="Nome serviço"
          type="text"
          name="nomeServiço"
          value={ data.nomeServiço }
          onChange={ handleInputChange }
          required
        />
      </label>
      <label htmlFor="Login">
        Login
        <input
          id="Login"
          type="text"
          name="login"
          value={ data.login }
          onChange={ handleInputChange }
          required
        />
      </label>
      <label htmlFor="Senha">
        Senha
        <input
          id="Senha"
          type="password"
          name="senha"
          onChange={ handleInputChange }
          value={ data.senha }
        />
      </label>
      <label htmlFor="Url">
        URL
        <input
          id="Url"
          type="text"
        />
      </label>
      <button type="submit" disabled={ !isFormValid }>Cadastrar</button>
      <button onClick={ hidindForm }>Cancelar</button>
      <div>
        {data.senha.length >= 8
          ? (<p className="valid-password-check">Possuir 8 ou mais caracteres</p>)
          : (<p className="invalid-password-check">Possuir 8 ou mais caracteres</p>)}

        {data.senha.length > 16
          ? (<p className="invalid-password-check">Possuir até 16 caracteres</p>)
          : (<p className="valid-password-check">Possuir até 16 caracteres</p>)}

        {/(?=.*[a-z])/.test(data.senha) && /(?=.*\d)/.test(data.senha)
          ? (<p className="valid-password-check">Possuir letras e números</p>)
          : (<p className="invalid-password-check">Possuir letras e números</p>)}

        {/(?=.*\W+)/.test(data.senha)
          ? (<p className="valid-password-check">Possuir algum caractere especial</p>)
          : (<p className="invalid-password-check">Possuir algum caractere especial</p>)}

      </div>

    </form>
  );
}

export default Form;
