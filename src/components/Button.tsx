type ButtonProps = {
  onClick: () => void;
};
function Button({ onClick }: ButtonProps) {
  return (
    <button onClick={ onClick }>Cadastrar nova senha</button>
  );
}
export default Button;
