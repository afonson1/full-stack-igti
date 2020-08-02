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

        // Questão 01
        cincoEstadosComMaisCidades();

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
        cidadesPorEstado.sort((a, b) => {
            return b.Cidades - a.Cidades
        });
        console.log(cidadesPorEstado.slice(0, 5));

        // Ordenar pelo número de Cidades (Decrescente)
        cidadesPorEstado.sort((a, b) => {
            return a.Cidades - b.Cidades
        });

    } catch (err) {
        console.log(err);
    }
}

console.log("fim do código");