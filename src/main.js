export default class App {

    sumarParesFor() {
        let suma = 0;

        for(let i = 0; i <= 20; i = i + 2) {
                suma = suma + i;
        }

        return suma;
    }

    contarImparesFor(inicio, fin){
        let impar = 0

        for(let i = inicio; i <= fin; i = i + 1){
            if(i % 2 != 0){
                impar = impar + 1;
            }
        }
        return impar;
    }

}

let app = new App();

console.log(app.sumarParesFor());
console.log(app.contarImparesFor(5, 11));