// Selecione os elementos do DOM serão usados
const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('adicionar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// Função para adicionar uma nova tarefa
btnAdicionar.addEventListener('click', function () {
//Obtém o valor digitado no campo de entrada 
const tarefaTexto = inputTarefa.value;

//Verifica se o campo de entrada está vazio 
if (tarefaTexto ==='') {
        alert('Digite uma tarefa antes de adicionar!');
        return; //Sai da função se o campo estiver vazio
}

// Cria um novo item de lista (li) para a tarefa
const novaTarefa = document.createElement('li');
novaTarefa.innerText = tarefaTexto;

// Cria o botão de remover tarefa e o anexo à nova tarefa
const btnRemover = document.createElement('button');
btnRemover.innerText = 'Remover';
btnRemover.classList.add ('remover-tarefa');
//Aplica classe CSS ao botão

// Função para remover a tarefa quando o botão for clicado 
btnRemover.addEventListener('click', function () { 
listaTarefas.removeChild(novaTarefa);
});

// Adiciona o botão de remover á tarefa 
novaTarefa.appendChild(btnRemover);

// Adiciona a nota tarefa á lista de tarefas
listaTarefas.appendChild(novaTarefa);

// Limpa o campo de entrada após adicionar a tarefa 
inputTarefa.value = '';
});

// Adiciona interaratividade ao pressionar Enter para adicionar tarefas
inputTarefa.addEventListener('keypress', function (e)
{ 
    if (e.key === 'Enter') { 
        btnAdicionar.click(); //Simula o clique no botão de adicionar tarefa
    }
});