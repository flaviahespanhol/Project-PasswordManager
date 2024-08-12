import './passwords.css';
import './buttons.css';

type PasswordsProps = {
  handleDelete: () => void;
  nomeServiço: string;
  login: string;
  senha: string;
  url: string;
};

function Senhas({ nomeServiço, login, senha, url, handleDelete }: PasswordsProps) {
  return (
    <div className="div-passwords">
      <a href={ url }>{ nomeServiço }</a>
      <p>{ login }</p>
      <p>{ senha }</p>
      <button
        data-testid="remove-btn"
        className="btn-remove"
        onClick={ handleDelete }
      >
        Apagar
      </button>
    </div>
  );
}

export default Senhas;
