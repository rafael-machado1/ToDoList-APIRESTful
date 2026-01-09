import { Request, Response } from 'express';

let tasks = [
  {id: 1, title: "Completar To-Do List", completed: false},
  {id: 2, title: "Completar API Biblioteca", completed: true}
] // Esse array de objetos simula um banco de dados, vai ser trocado posteriormente.

export const TaskController = { // O export serve para possibilitar o uso da constante em outros arquivos na pasta.
  
  getAll(req: Request, res: Response) { // O getAll faz parte da leitura das tasks existentes.
    return res.json(tasks);             // Retorna todas as tasks no JSON.
  },

  create(req: Request, res: Response) { // O create faz parte da criação de novas tasks.
    const { title } = req.body;         // O título é decidido pelo usuário.
    
    const newTask = {                   // Essa constante cria uma nova task.
      id: tasks.length + 1,             // Altera o id automaticamente a cada nova task.
      title,                            // O título é decidido pelo usuário.
      completed: false                  // Por padrão a task vem incompleta.
    };

    tasks.push(newTask);                // Joga todas as novas tasks dentro do banco de dados provisório.
    return res.status(201).json(newTask)// 201 é o código de deu certo, basicamente se a task foi criada
  },                                    // sem problemas o código 201 vai aparecer na tela.

  delete(req: Request, res: Response) {
    const { id } = req.params;          // Pega o id que vem na URL
                                        // O params é usado para identificar um recurso específico 
                                        // diretamente na URL (como o id no DELETE ou no UPDATE).
    const taskIndex = tasks.findIndex(t => t.id === Number(id)); // Converter id para número pois params 
                                                                 // vem sempre como string.
    if (taskIndex === -1){
      return res.status(404).json({ message: "Tarefa não encontrada" }); // id negativo não existe
    }

    tasks.splice(taskIndex, 1);         // Remove a task

    return res.status(200).json({ message: "Tarefa removida com sucesso" }); // Se isso apareceu, é porque deu certo
  },

  update(req: Request, res: Response){
    const { id } = req.params;          // Busca pelo id
    const { title, completed } = req.body; // Modifica o conteúdo
    
    const task = tasks.find(t => t.id === Number(id));

    if(!task){
      return res.send(404).json({ message: "Tarefa não encontrada" });
    }

    if (title !== undefined) task.title = title; // Modifica título
    if (completed !== undefined) task.completed = completed; // Modifica se a task está completa

    return res.json({ message: "Tarefa atualizada com sucesso", task });
  }
};