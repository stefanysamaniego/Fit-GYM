class imagen{
    constructor(){
        this.img =  document.getElementById("imagenGimnasio");
        this.imagenes = [];
        this.carpeta = "/img"
    }
    foto (){
        let imagen = new Image();
        imagen.src = this.carpeta + "/" + this.img.value;
        imagen.onerror = Error;
    }
}

let imagenes = new imagen();
