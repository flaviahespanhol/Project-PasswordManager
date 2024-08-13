# Projeto Password Manager

## Descrição

Nesse projeto foi desenvolvida uma aplicação de gerenciamento de senhas. O usuário poderá cadastrar no site as senhas que possui.

## Desenvolvimento do projeto

`Requisito 1`
A aplicação renderiza uma tag h1 contendo o texto "Gerenciador de senhas".

`Requisito 2`
Criar um componente chamado Form.

`Requisito 3`
Renderizar condicionalmente o formulário. Criar um botão com o texto "Cadastrar nova senha". Ao clicar no botão "Cadastrar nova senha", ele deverá desaparecer e o componente `<Form />` deverá ser renderizado. Ao clicar no botão do formulário com o texto `Cancelar`: o formulário deverá desaparecer e o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

`Requisito 4`
Validar os campos do formulário. O botão `Cadastrar` do formulário só estará habilitado caso essas verificações sejam atendidas: os inputs de "nome do serviço" "login" e "senha" devem estar preenchidos. A senha deve ter no mínimo 8 caracteres e no máximo 16 caracteres, com letras e números, e ter pelo menos um caractere especial. Se as verificações não forem atendidas, o botão `Cadastrar` deverá estar desabilitado.

`Requisito 5`
Criar um display para a validação da senha.
