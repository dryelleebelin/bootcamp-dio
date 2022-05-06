# Git
É um sistema de versionamento de código distríbuido, que interage por linha de comando.
### 🖱 Comandos do terminal Windows:
**cd +nomedapasta /**  
muda de pasta, navega entre as pastas  
**ls**  
lista os arquivos dentro da pasta 
**mkdir +nomedapasta**  
cria pastas, diretório  
**del**  
deleta o arquivo dentro da pasta  
**rmdir**  
deleta a pasta e tudo que tem dentro  
**ctrl + l**  
limpa da tela  
**cd ..**  
volta uma pasta, volta um nível  
**echo**  
printa de volta ao terminal uma frase  
**echo > +nomedoarquivo**  
redireciona o fluxo e joga o echo em um arquivo  
**openssl sha1 +nomedapasta**  
o sha1 é uma ferramenta de versionamento de código, um algoritmo de encriptação, é único  
**.ssh**  
pasta onde fica as chaves ssh  
**cat +id**  
mostra a chave pública ou privada  
**pwd**  
mostra em qual caminho você está  
**eval $(ssh-agent -s)**  
mostra o agente  
**git init**  
inicia o repositório, cria  
**git add**  
move arquivos, versionamento  
**git add +asterisco**  
**git commit**  
cria commit  
**git commit -m " "**  
**git status**  
ajuda a monitorar os status dos arquivos  
**mv +nomedoarquivo ./ +nomedapasta**  
move um arquivo para dentro de uma pasta  
**git remove -v**  
lista a lista de repositórios remotos que tem cadastrados  
**git push origin master**  
leva o código do repositório local para o remoto  
**git pull origin master**  
puxa do remoto para a máquina

### 🖱 Dúvidas:
- O que é markdown? é uma linguagem de formatação, marcação.
- O que é chave ssh? é uma forma de estabelecer uma conexão segura e encriptada entre duas máquinas: servidor github e a nossa máquina; tem duas chaves: pública e privada.
- Como clonar um repositório? entra no git bash, entra na pasta, usa o comando git clone +linkdorepositório.
- O que fazer quando mudar algo no repositório local? no git bash, entrar na pasta, olhar o git status, git add . , git commit -m " ", git push origin main.
- O que fazer quando mudar algo no repositório remoto? no git bash entrar na pasta, olhar o git status, usar o comando git push origin master.
- cria repositório, copia o link no github, entra na pasta no git bash, usa o comando git remove add origin +link.

# Github
É uma plataforma em nuvem (repositório remoto), que guarda o meu código; É uma rede social.
