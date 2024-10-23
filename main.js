class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
    }
    verInfo(){
        console.log(this.info);
    }
    
}
// Herencias
class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    static ladrar(){
        console.log(`WoW`);
    }

    set modificarRaza(nombre){
        this.raza = nombre;
    };

    get getRaza(){
        return this.raza
    }
}

const perro = new Perro("perro", 5, "rojo", 'caniche');
perro.modificarRaza = 'Doberman';
console.log(perro.getRaza);