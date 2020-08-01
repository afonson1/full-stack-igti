import { promises as fs, writeFile } from "fs";

const vetor_estados = [];
const vetor_cidades = [];

init();
writeReadJson();

async function init() {
    try {
        // Lendo os arquivos originais
        const estados = JSON.parse(await fs.readFile("Estados.json"));
        const cidades = JSON.parse(await fs.readFile("Cidades.json"));
        console.log(estados[0]);
        console.log(cidades[0]);
        
        const obj2 = {
            estados: estados
        };

        // gravando e lendo os novos arquivos
        await fs.writeFile("testeEstados.json", JSON.stringify(obj2));
        const estados_atualizados = JSON.parse(await fs.readFile("testeEstados.json"));

        //inicializando array de times
        estados_atualizados[0].estados.forEach( states =>{
            vetor_estados.push({id: states.ID});
        });

        console.log(vetor_estados);
        
    } catch (err) {
        console.log(err);
    }
}
/*
async function init() {
    const estados = JSON.parse(await fs.readFile("Estados.json"));

    //inicializando array de times
    uf[0].id.forEach( estado => {
        estados.push({id: estado.id});
    });
}
*/

async function writeReadJson() {
    try {
        const arrayCarros = ["Gol", "Palio", "Uno"];
        const obj = {
            carros: arrayCarros
        };

        await fs.writeFile("teste.json", JSON.stringify(obj));
        const data = JSON.parse(await fs.readFile("Estados.json"));
        //console.log(data[0]);
    } catch (err) {
        console.log(err);
    }

}

console.log("fim do código");