class imagenes {
    constructor(){
        this.imagen = document.getElementById("imagenAdd");
        this.botone1 = document.getElementById("abajo");
        this.botone2 = document.getElementById("arriba");
    }
    ocultar(){
        this.imagen.style.display = "none"; 
        this.botone2.style.display = "none";
    }
    arriba(){
        this.botone1.style.display = "none";
        this.botone2.style.display = "block";
        this.imagen.style.display = "block";
    }
    
    abajo(){
        this.botone2.style.display = "none";
        this.botone1.style.display = "block";
        this.imagen.style.display = "none";
    }
}
let imagen = new imagenes();

window.onload = imagen.ocultar();