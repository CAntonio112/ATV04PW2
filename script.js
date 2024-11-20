let listaTitulosLivros = [];
let mapaAutoresEGeneros = {};
let conjuntoGeneros = new Set();

function adicionarLivro(titulo, autor, genero) {
    listaTitulosLivros.push(titulo);
    mapaAutoresEGeneros[titulo] = { autor: autor, genero: genero };
    conjuntoGeneros.add(genero);

    return console.log("Livro adicionado com sucesso.");
}

function removerLivro(titulo) {
    let indice = listaTitulosLivros.indexOf(titulo);
    if (indice !== -1) {
        listaTitulosLivros.splice(indice, 1);
    }

    let genero = mapaAutoresEGeneros[titulo]?.genero;
    delete mapaAutoresEGeneros[titulo];

    if (genero && !listaTitulosLivros.some(t => mapaAutoresEGeneros[t]?.genero === genero)) {
        conjuntoGeneros.delete(genero);
    }
}

function listarLivros() {
    if (listaTitulosLivros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        console.log("Livros cadastrados:");
        listaTitulosLivros.forEach(function(titulo) {
            console.log(titulo);
        });
    }
}

function verificarDisponibilidadeLivro(titulo) {
    if (listaTitulosLivros.includes(titulo)) {
        console.log(`O livro "${titulo}" está disponível.`);
    } else {
        console.log(`O livro "${titulo}" não está disponível.`);
    }
}

function buscarLivrosPorGenero(genero) {
    let livrosPorGenero = [];

    listaTitulosLivros.forEach(function(titulo) {
        if (mapaAutoresEGeneros[titulo]?.genero === genero) {
            livrosPorGenero.push(titulo);
        }
    });

    if (livrosPorGenero.length === 0) {
        console.log(`Nenhum livro encontrado para o gênero "${genero}".`);
    } else {
        console.log(`Livros do gênero "${genero}":`);
        livrosPorGenero.forEach(function(titulo) {
            console.log(titulo);
        });
    }
}

// Dados de teste
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
adicionarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia");
adicionarLivro("1984", "George Orwell", "Distopia");
adicionarLivro("Dom Casmurro", "Machado de Assis", "Romance");
adicionarLivro("A Moreninha", "Joaquim Manuel de Macedo", "Romance");

listarLivros();

verificarDisponibilidadeLivro("O Senhor dos Anéis");
verificarDisponibilidadeLivro("O Hobbit");

buscarLivrosPorGenero("Fantasia");
buscarLivrosPorGenero("Romance");

removerLivro("1984");

listarLivros();

buscarLivrosPorGenero("Distopia");