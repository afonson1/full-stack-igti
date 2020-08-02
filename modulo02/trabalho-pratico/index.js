import { promises as fs, writeFile } from "fs";

init();

const vetor_estados = [];
const vetor_cidades = [];

async function init() {
    try {
        // Lendo os arquivos originais
        const estados = JSON.parse(await fs.readFile("Estados.json"));
        const cidades = JSON.parse(await fs.readFile("Cidades.json"));
        
        // Testando as constantes
        //    console.log(estados[0]);
        //    console.log(cidades[0]);
        
        /* Acrecentando o elemento 0 ao vetor
            vetor_estados.push(estados[0]);
        */

        /* Imprimindo todos os IDs
            estados.forEach(uf => {
                console.log(uf.ID);
            });
        */

        //inicializando array de estados
        estados.forEach(uf => {
            vetor_estados.push({Id: uf.ID, Sigla: uf.Sigla, Nome: uf.Nome});
        });

        //inicializando array de cidades
        cidades.forEach(city => {
            vetor_cidades.push({Id: city.ID, Nome: city.Nome, Estado: city.Estado});
        });

        // Questão 01 e 02
        cincoEstadosComMaisCidades();
        // Questão 03
        //CidadeComMaiorNomeDeCadaEstado();
        // Questão 04
        // CidadeComMenorNomeDeCadaEstado();


    } catch (err) {
        console.log(err);
    }
}

async function cincoEstadosComMaisCidades(){
    try {
        const cidadesPorEstado = [];

        vetor_estados.forEach( uf => {
            let contador = 0;
            vetor_cidades.forEach( city => {
                const estado = uf.Id;
                const estadoDaCidade = city.Estado;

                if (estado === estadoDaCidade) {
                    contador++;
                }
            });
            cidadesPorEstado.push({Estado: uf.Nome, Cidades: contador});
        });

        // Ordenar pelo número de Cidades (Decrescente)
        console.log("Questão 01");
        cidadesPorEstado.sort((a, b) => {
            return b.Cidades - a.Cidades
        });
        console.log(cidadesPorEstado.slice(0, 5));

        // Ordenar pelo número de Cidades (Decrescente)
        console.log("Questão 02");
        cidadesPorEstado.sort((a, b) => {
            return a.Cidades - b.Cidades
        });
        console.log(cidadesPorEstado.slice(0, 5));

    } catch (err) {
        console.log(err);
    }
}

async function CidadeComMaiorNomeDeCadaEstado(){
    let array = [];
    try {
        vetor_estados.forEach( uf => {
            let cidadeMaiorNome = "A";
            vetor_cidades.forEach( city => {
                const estado = uf.Id;
                const estadoDaCidade = city.Estado;
                if (estado === estadoDaCidade){
                    if (cidadeMaiorNome.length < city.Nome.length){
                        cidadeMaiorNome = city.Nome;
                    }
                }
            });
            console.log(cidadeMaiorNome + " - " + uf.Sigla);
            array.push({Cidade: cidadeMaiorNome, Estado: uf.Sigla});
        });
        console.log();

        let maiorNomeGeral = array[0].Cidade;
        array.forEach(maiorNome => {
            if (maiorNome.Cidade.length > maiorNomeGeral.length) {
                maiorNomeGeral = maiorNome.Cidade;
            }
        });
        console.log(maiorNomeGeral);

    } catch (err) {
        console.log(err);
    }
}

async function CidadeComMenorNomeDeCadaEstado(){
    let array = [];
    try {
        console.log();
        vetor_estados.forEach( uf => {
            let cidadeMenorNome = "AAAAAAAAAAAA";
            vetor_cidades.forEach( city => {
                const estado = uf.Id;
                const estadoDaCidade = city.Estado;
                if (estado === estadoDaCidade){
                    if (cidadeMenorNome.length > city.Nome.length){
                        cidadeMenorNome = city.Nome;
                    }
                }
            });
            console.log(cidadeMenorNome + " - " + uf.Sigla);
            array.push({Cidade: cidadeMenorNome, Estado: uf.Sigla});
        });
        console.log();

        let menorNomeGeral = array[0].Cidade;
        array.forEach(menorNome => {
            if (menorNome.Cidade.length < menorNomeGeral.length) {
                menorNomeGeral = menorNome.Cidade;
            }
        });
        console.log(menorNomeGeral);
    } catch (err) {
        console.log(err);
    }
}

console.log("fim do código");