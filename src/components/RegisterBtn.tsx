import './buttons.css';

type RegisterBtnProps = {
  onClick: () => void;
};
function RegisterBtn({ onClick }: RegisterBtnProps) {
  return (
    <div className="div-btn-register">
      <button className="btn-register-password" onClick={ onClick }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
        <div className="text-btn-register-password">
          Cadastrar nova senha
        </div>
      </button>
    </div>
  );
}
export default RegisterBtn;
