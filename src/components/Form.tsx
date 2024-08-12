import './form.css';
import './buttons.css';

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
    <div className="div-form">
      <form action="" onSubmit={ handleSubmitForm }>
        <label className="labels" htmlFor="nomeServiço">
          Nome do Serviço
          <input
            className="inputs"
            id="nomeServiço"
            type="text"
            name="nomeServiço"
            value={ data.nomeServiço }
            onChange={ handleInputChange }
          />
        </label>
        <label className="labels" htmlFor="login">
          Login
          <input
            className="inputs"
            id="login"
            type="text"
            name="login"
            value={ data.login }
            onChange={ handleInputChange }
          />
        </label>
        <label className="labels" htmlFor="senha">
          Senha
          <input
            className="inputs"
            id="senha"
            type="password"
            name="senha"
            onChange={ handleInputChange }
            value={ data.senha }
          />
        </label>
        <label className="labels" htmlFor="url">
          URL
          <input
            className="inputs"
            id="url"
            type="text"
            name="url"
            onChange={ handleInputChange }
            value={ data.url }
          />
        </label>
        <button className="btns-register-cancel" type="submit" disabled={ !isFormValid }>
          Cadastrar
        </button>
        <button className="btns-register-cancel" onClick={ hidindForm }>Cancelar</button>
        <div>
          {data.senha.length >= 8 ? (
            <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
          ) : (
            <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
          )}

          {data.senha.length > 16 ? (
            <p className="invalid-password-check">Possuir até 16 caracteres</p>
          ) : (
            <p className="valid-password-check">Possuir até 16 caracteres</p>
          )}

          {/(?=.*[a-z])/.test(data.senha) && /(?=.*\d)/.test(data.senha) ? (
            <p className="valid-password-check">Possuir letras e números</p>
          ) : (
            <p className="invalid-password-check">Possuir letras e números</p>
          )}

          {/(?=.*\W+)/.test(data.senha) ? (
            <p className="valid-password-check">Possuir algum caractere especial</p>
          ) : (
            <p className="invalid-password-check">Possuir algum caractere especial</p>
          )}
        </div>
      </form>
    </div>
  );
}
export default Form;
