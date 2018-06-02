# Desafio-Formul-rio

Desafio para criar um formulário de pessoa física utilizando de tecnologias especificas proposto pela empresa Zimut Studio.

## O formulário:
Precisamos que você construa um cadastro de pessoa física contendo as seguintes informações:

·      ID;
·      Nome Completo *;
·      Data de Nascimento *;
·      CPF *;
·      CEP *;
·      Endereço *;
·      Número;
·      Bairro *;
·      Cidade *;
·      Estado *;
·      Complemento;

## Regras e critérios:

1.     Os campos marcados com * são de preenchimento obrigatório;
2.     O CPF deve ser válido, ou seja, deve estar em acordo com o padrão estabelecido pela receita federal;
3.     O CPF não pode ser duplicado, ou seja, não deve ser permitido cadastrar mais de uma pessoa com o mesmo CPF;
4.     Após digitar o CEP, o endereço deve ser preenchido automaticamente (para isso utilize alguma API de consultar CEP);
5.     O campo Estado deve ser uma lista de seleção, ou seja, não deve ser possível digitar;
6.     O campo ID deve ser gerado automaticamente, utilizando o padrão UUID (Universally Unique Identifier);

O desenvolvimento deve ser feito usando as seguintes tecnologias: NodeJS, Bootstrap 4.0 e MySQL.

## O que foi alcançado:

-Utilização de todas as técnologias exigidas pelo desafio, cedendo um grande aprendizado;
-Criação do banco de dados MySQL, com a utilização de ID (uuid) como chave primária e CPF como unique. Dessa forma, é possível evitar que exista mais de uma pessoa cadastrada no banco de dados com o mesmo CPF;
-Criação do site HTML com o boostratp 4.0, com todos os campos exigidos no desafio, além do preenchimento automático dos campos obrigatórios relacionados ao endereço pelo CEP com a utilização de um script.
-Criação de dois scripts "injectBD.js" e "selectBD.js", utilizados para ligar o JavaScript com o MySQL e permitir o preenchimento do banco de dados a partir de valores definidos no script (injectBD.js), e a consulta do campo ID gerado em uuid pelo script de inject, de acordo com o CPF digitado no script (selectBD.js).

## O que **não** foi alcançado::

-Validação do campo CPF com o padrão estabelecido pela receita federal;
-Linkagem do JavaScript com o HTML para preencher automáticamente o script com os valores digitados nos campos do site.

## Requisitos:
1°: Antes de tudo, é necessário que antes de utilizar os scripts disponíveis, seja instalado o NodeJS. Para isso, é necessário acessar o site: 

https://nodejs.org/en/download/

E baixar o instalador de acordo com o seu sistema operacional, instalar e pronto, o NodeJS já está instalado e pronto para uso.

2°: Após a primeira parte, é necessário instalar o banco de dados na sua maquina. Existem diversas formas de fazer isso, mas a utilizada para a criação do banco de dados vai ser cedida no tutorial a seguir:

(Caso deseje, também pode assistir a essa vídeo-aula a partir de 11:19: https://www.youtube.com/watch?v=5JbAOWJbgIA&t=1119s)

-Primeiramente, vamos baixar uma ferramenta para manipular o ambiente do MySQL, o **MySQL Worckbanch 6.3 CE**:

https://dev.mysql.com/downloads/workbench/

É imporante ver os criterios para instalar (A parte "MySQL Workbench Windows Prerequisites"). Após isso, é necessário escolher a versão compatível com seu sistema operacional, baixar a instalar.

-Após a primeira parte, iremos baixar o **Wampserver**, para poder instalar o banco de dados do arquivo "DesafioBD.sql". Para isso, é necessário acessar o site:

http://www.wampserver.com/en/

Siga até a parte de download, escolha a versão relativa ao seu sistema e preste atenção nos requisitos. É possível que a versão do visual studio exigida pelo wampserver seja diferente da que você baixou anteriormente. Caso não ocorra erro na instalação, siga em frente. Se o erro acontecer, baixe a versão que o wampserver recomenda.

3° (Caso tenha seguindo o 2°): Após as devidas instalações, é necessário iniciar o wampserver e aguardar o ícone ficar verde. Em seguida, é possível abrir o MySQL Workbench e abrir a conexão com o banco de dados.

4°: Agora é necessário colocar o arquivo "DesafioBD.sql" no seu banco de dados. Caso tenha utilizado o 3° metodo, é só seguir o passo-a-passo na interface gráfica do MySQL Workbench:

<>Siga até o canto superior esquerdo do programa, clicando em "Server";
<>Clique em "Data Import";
<>Selecione a opção "Import from Self-Contained File";
<>Em seguida, nos "...", escolha o local onde você colocou a pasta "projeto NEW", clique sobre o arquivo "DesafioBD.sql" e selecione;
<>Agora é só clicar em "Start Import" e o banco de dados já está instalado.

5°(Caso não tenha seguido o 2°): De acordo com o seu ambiente escolhido para instalar o banco de dados, altere os arquivos "selectBD(exemplo).js" e "injectBD(exemplo).js" na seguinte parte:

```
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "desafiobd"
});
```
Altere o host, user e password de acordo com a do seu ambiente.

## Utilizando:

Após seguir os requisitos, já deve ser possível abrir tanto o arquivo HTML e os scripts na pasta "Projeto NEW". Assim, segue as instruções para utilizar ambos os arquivos:

1° "index.html": É o mais fácil entre todos, só é necessário clicar duas vezes sobre o arquivo e seu navegador padrão vai ser aberto com o site criado. ;)

2° "injectBD(exemplo).js": Para os scripts, é necessário estar com o **wampserver** aberto e funcionando (Com o ícone verde), ou a maneira que foi escolhida por você. Após isso, basta abrir o CMD e digitar o seguinte comando:

```
>node "C:\Users\Seu usuário\Local onde a pasta está\Projeto NEW\injectBD(exemplo).js"
```
e a resposta deve ser:

```
Connected!
1 record inserted
```
3° "selectBD(exemplo).js": Para os scripts, é necessário estar com o **wampserver** aberto e algum cadastro já feito no banco de dados. Após isso, é necessário abrir o CMD e digitar o seguinte comando:

```
>node "C:\Users\Seu usuário\Local onde a pasta está\Projeto NEW\selectBD(exemplo).js"
```

## Considerações finais:

Como dito a cima, o desafio não foi completamente feito. Assim, usei de diversas fontes para conseguir montar tudo que foi feito até o momento. Estou aberto para ver a completa solução do desafio. Caso esteja interessado, ou com duvidas, mande um e-mail para: johannesmarcio@gmail.com
Desde já, agradeço pela atenção. Um forte abraço.
