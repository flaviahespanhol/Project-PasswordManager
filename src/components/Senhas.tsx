type SenhasProps = {
  handleDelete: () => void;
  nomeServiço: string;
  login: string;
  senha: string;
  url: string;
};

function Senhas({ nomeServiço, login, senha, url, handleDelete }: SenhasProps) {
  return (
    <div>
      <a href={ url }>{ nomeServiço }</a>
      <p>{ login }</p>
      <p>{ senha }</p>
      <button data-testid="remove-btn" onClick={ handleDelete }>Apagar</button>
    </div>
  );
}

export default Senhas;
