# API RESTful

### API para uma lista To-Do

### Tecnologias usadas: 
- Typescript v5.9.3

- Cors: v2.8.5
    
- Express: v5.2.1

- SQLite: v5.1.1

- SQLite3: v5.1.7

---

### Para rodar a API:

### Utilizando o GET:
#### Essa request possibilita verificar as tasks existentes

- Rode o comando "npm run dev" no terminal

- Abra o Insomnia, Postman ou Curl e crie uma nova request

- Defina como GET para obter a lista atual

- Use a porta que está usando no código (Nesse caso, http://localhost:3000/tasks)

- Pressione Send

---
### Utilizando o POST:
#### Essa request possibilita a criação de novas tasks

- Defina uma nova request como POST 

- No body defina o tipo de arquivo usado como JSON

- Digite uma nova task com a seguinte identação:

      {
        "id":          
        "title":                           
        "completed":
      }

- Pressione Send e confira usando a request GET

---

### Utilizando o DELETE
#### Essa request possibilita deletar tasks existentes

- Defina uma nova request como DELETE

- Na URL  http://localhost:3000/tasks use o id depois de tasks como:  http://localhost:3000/tasks/1 para definir qual task deseja apagar

- Pressione Send e confira usando a request GET

---

### Utilizando o UPDATE:
#### Essa request possibilita a alteração de tasks existentes


- Defina uma nova request como PUT

- Assim como na reqest DELETE, defina qual task deseja alterar usando o id na URL, como: http://localhost:3000/tasks/1

- No body defina o tipo de arquivo usado como JSON

- Utilize a seguinte identação:

      {
        "title": 
        "completed":
      }

- Pressione Send e confira usando a request GET

---