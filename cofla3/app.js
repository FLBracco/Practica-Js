//Cofla entro a una tienda de celulares porque le parecio bien comprarse uno, de todos los modelos disponibles a cofla le llamaron especificamente 3 la atencion, el problema es que los vendedores no saben absolutamente nada al respecto del telefono. Antes de comprarlo quiere ver las cualidades y comportamiento de cada uno.
//1) Mostrarle las particularidades de los 3 celulares. Cada uno debe tener color, peso, resolucion de pantalla, camara y memoria ram. Deben poder prender , reiniciar, tomar fotos y grabar.

class Celular {
    constructor(nombre, color, peso, resPantalla, camara, ram){
        this._nombre = nombre;
        this._color = color;
        this._peso = peso;
        this._resPantalla = resPantalla;
        this._camara = camara;
        this._ram = ram;
        this.encedido = false;
        this.info = `Telefono marca ${this._nombre} con un color ${this._color}, un peso de ${this._peso}, una resolucion de pantalla de ${this._resPantalla}, una camara de ${this._camara} y con una memoria ram de ${this._ram}.`
    }
    
    verInfo(){
        console.log(this.info);
    }

    prender(){
        if(this.encedido == false){
            console.log('Prendiendo celular');
            this.encedido = true;
        }else{
            console.log('El celular esta prendido');
        }
    }
    apagar(){
        if(this.encedido == true){
            console.log('Apagando celular.');
            this.encedido = false;
        }else{
            console.log('El celular esta apagado');
        }
    }
    reiniciar(){
        if(this.encedido == true){
            console.log('reinciando celular');
        }else{
            console.log('El celular esta apagado.');
        }
    }
    tomarFotos(){
        console.log(`Foto tomada en una resolucion de: ${this._camara}`);
    }
    grabarVideo(){
        console.log(`Video grabado en una resolucion de: ${this._camara}`);
    }
}

const celular = new Celular('Samsung', 'rojo', '250gr', '1920x1080', '13MPx', '8 GB');
const celular2 = new Celular('Iphone', 'rojo', '250gr', '1920x1080', '13MPx', '8 GB');
const celular3 = new Celular('Xiaomi', 'rojo', '250gr', '1920x1080', '13MPx', '8 GB');

celular.verInfo();
celular2.verInfo();
celular3.verInfo();
celular.prender();