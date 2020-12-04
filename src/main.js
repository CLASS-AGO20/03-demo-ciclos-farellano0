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

        if(inicio > fin){
            let t = inicio;
            inicio = fin;
            fin = t;
        }

        for(let i = inicio; i <= fin; i ++){
            if(i % 2 != 0){
                impar++;
            }
        }
        return impar;
    }
    sumarParesWhile(){

        let i = 1;
        let suma = 0;

        while(i <= 20){

            if(i % 2 === 0){
                suma = suma + i;
            }
            
            i = i + 1;
        }

        return suma;
    }
    contarImparesWhile(inicio, fin){

        let i = inicio;
        let impares = 0;

        while(i <= fin){

            if(i % 2 != 0){
                impares ++;
            }

            i ++;

        }
        return impares;
    }

}

let app = new App();

console.log(app.contarImparesWhile(5, 11));