</div>

<img alt="logo da GCB" src="https://media.discordapp.net/attachments/1045500218541613168/1056308451241902181/image.png">

<h1 align="center"> 🔒 Validação de Senhas 🔒</h1>

<p align="center"><a href="https://www.typescriptlang.org"><img alt="GitHub top language"  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"></a> </p>

<br>

## :dart: Sobre

Neste desafio, deverá ser construído um método que consegiga receber uma senha e retornar se a mesma é válida, dadas as seguintes validações:

- A senha deve conter de 16 a 32 caracteres;
- Deve conter pelo menos 2 caracteres especiais;
- Deve conter letras maiúsculas e minúsculas;
- Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).

<hr>

## :rocket: Requisitos

- [x] Deve retornar um objeto contendo o resultado, e uma lista de erros que a senha contém.
- [x] Deve conter testes unitários para validar os casos listados no exemplo.

<h4>🎲 Exemplo: </h4>

    - console.log(isValidPassword("rZpy*D95&WBE'Z&B"));
    - // { result: true, errors: [] }

    - console.log(isValidPassword("c|e_AbC>F%8J%k`N8"));
    - // { result: false, errors: ['Caracteres em sequencia'] }

    - console.log(isValidPassword("dX5sWaY6tknDUHtL"));
    - // { result: false, errors: ['Faltam caracteres especiais'] }

    - console.log(isValidPassword("Gau74J^Zf6(>x4w"));
    - // { result: false, errors: ['Tamanho inválido'] }

<hr>
## :heavy_check_mark: Regras de negócio
<h4>👾 Tecnologias: </h4>
 
- [x] Utilizar POO
- [x] Utilizar Typescript

<h4>❌ Restrições: </h4>

- [x] Não utilizar Libs
- [x] Não copiar código

<hr>

## :clipboard: Documentação

<b>Este projeto consiste em uma classe, denominada de "PasswordValidation", a qual é formada pelos seguintes métodos: </b>

<b> validatePasswordLength( ): </b> Método responsável por validar se a senha recebida está dentro dos limites de quantidades de caractéres.
<b>retorno:</b> em caso de sucesso, o método retorna um boolean "True". Em caso de fracasso, o método retorna a string "Tamanho inválido!".

---

<b> validateSpecialCases( ): </b> Método responsável por validar se a senha recebida contém pelo menos dois caractéres especiais.
<b>retorno:</b> em caso de sucesso, o método retorna um boolean "True". Em caso de fracasso, o método retorna a string "Faltam caractéres especiais!".

---

<b> toASCIICode( ): </b> Método responsável por receber uma array de strings e convertê-lá para uma array com os respectivos ASCII Codes de cada caractér.
<b>parâmetro:</b> Array de strings.
<b>retorno:</b> Array de números.
<b>exemplo:</b>

    - console.log(toASCIICode(['a', 'b', 'c']));
    - // [65, 66, 67]

---

<b> validateUpperCases( ): </b> Método responsável por validar se a senha recebida contém pelo menos um caractér maiúsculo.
<b>retorno:</b> em caso de sucesso, o método retorna um boolean "True". Em caso de fracasso, o método retorna a string "A senha deve conter pelo menos uma letra maiúscula!".

---

<b> validateLowerCases( ): </b> Método responsável por validar se a senha recebida contém pelo menos um caractér minúsculo.
<b>retorno:</b> em caso de sucesso, o método retorna um boolean "True". Em caso de fracasso, o método retorna a string "A senha deve conter pelo menos uma letra minúscula!".

---

<b> validateSequences( ): </b> Método responsável por validar se a senha recebida contém alguma sequência de três caractéres seguidos (Exemplo: 'abc', '123')
<b>retorno:</b> em caso de sucesso, o método retorna um boolean "True". Em caso de fracasso, o método retorna a string "Caractéres em sequência!".

---

<b> validatePassword( ): </b> Método responsável por chamar todos os demais e montar o retorno da aplicação em forma de objeto. Este método é o que faz a aplicação rodar.
<b>retorno:</b> Objeto com status da validação e erros encontrados.
<b>exemplo:</b>

    - console.log(validatePassword("Gau74J^Zf6(>x4w"));
    - // { result: false, errors: ['Tamanho inválido'] }

<hr>

<div align="center"> 
<b>Feito por</b>
<br>
<a href="https://github.com/GuWuelta" target="_blank"><img src="https://avatars.githubusercontent.com/u/101107981?v=4" width="160px;" alt="Foto do Gustavo Wuelta no GitHub"/></a>
<br>
<a href="https://github.com/GuWuelta" target="_blank"><b>Gustavo Wuelta</b></a>

</div>

<p align="right">(<a href="#top"><b>Voltar para o topo</b></a>)</p>
