//DECLARAÇÃO DA CONSTANTE QUE DETEM O NOME DA ACTION
export const ADD_TODO = 'ADD_TODO'

//criando variavel para o incremento da lista de tarefas
let nextTodoId = 0;

export function addTodo(text){
    return{
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}