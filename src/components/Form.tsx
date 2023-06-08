function Form() {
  return (
    <form action="">
      <label htmlFor="Nome serviço">Nome do serviço</label>
      <input id="Nome serviço" type="text" />
      <label htmlFor="Login">Login</label>
      <input id="Login" type="text" />
      <label htmlFor="Senha">Senha</label>
      <input id="Senha" type="password" />
      <label htmlFor="Url">URL</label>
      <input id="Url" type="text" />
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
