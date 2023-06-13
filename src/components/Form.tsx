type FormProps = {
  formOculto: React.Dispatch<React.SetStateAction<boolean>>
};

function Form({ formOculto }: FormProps) {
  const ocultandoForm = () => {
    formOculto(true);
  };
  return (
    <form action="">
      <label htmlFor="Nome serviço">
        Nome do serviço
        <input id="Nome serviço" type="text" />
      </label>
      <label htmlFor="Login">
        Login
        <input id="Login" type="text" />
      </label>
      <label htmlFor="Senha">
        Senha
        <input id="Senha" type="password" />
      </label>
      <label htmlFor="Url">
        URL
        <input id="Url" type="text" />
      </label>
      <button>Cadastrar</button>
      <button onClick={ ocultandoForm }>Cancelar</button>

    </form>
  );
}

export default Form;
