class Imagenes{
    constructor(){
        this.uno = document.getElementById("uno");
        this.dos = document.getElementById("dos");
        this.tres = document.getElementById("tres");

        this.der = document.getElementById("der");
        this.izq = document.getElementById("izq");
        
        this.der1 = document.getElementById("der1");
        this.izq1= document.getElementById("izq1");

        this.der2 = document.getElementById("der2");
        this.izq2 = document.getElementById("izq2");
    }
    inicio(){
        this.dos.style.display = "none";
        this.tres.style.display = "none";
        this.der1.style.display = "none";
        this.izq1.style.display = "none";
        this.der2.style.display = "none";
        this.izq2.style.display = "none";
    }
    mostrarDer(){
        setTimeout(imagen.mostrarDer1, 5000);
        this.uno.style.display = "none";
        this.dos.style.display = "block";
        this.der.style.display = "none";
        this.izq.style.display = "none";
        this.der1.style.display = "block";
        this.izq1.style.display = "block";
    }
    mostrarIzq(){
        if(this.tres.style.display == "none"){
            this.uno.style.display = "none";
            this.tres.style.display = "block";
            this.der.style.display = "none";
            this.izq.style.display = "none";
            this.der2.style.display = "block";
            this.izq2.style.display = "block";
        }
    }
    mostrarDer1(){
        setTimeout(imagen.mostrarDer2, 5000);
        if(this.dos.style.display == "block"){
            this.dos.style.display = "none";
            this.tres.style.display = "block";
            this.der1.style.display = "none";
            this.izq1.style.display = "none";
            this.der2.style.display = "block";
            this.izq2.style.display = "block";
        }
    }
    mostrarIzq1(){
        if(this.uno.style.display == "none"){
            this.uno.style.display = "block";
            this.dos.style.display = "none";
            this.der.style.display = "block";
            this.izq.style.display = "block";
            this.der1.style.display = "none";
            this.izq1.style.display = "none";
        }
    }
    mostrarDer2(){
        setTimeout(imagen.mostrarDer, 5000)
        if(this.tres.style.display == "block"){
            this.uno.style.display = "block";
            this.tres.style.display = "none";
            this.der2.style.display = "none";
            this.izq2.style.display = "none";
            this.der.style.display = "block";
            this.izq.style.display = "block";
        }
    }
    mostrarIzq2(){
        if(this.dos.style.display == "none"){
            this.dos.style.display = "block";
            this.tres.style.display = "none";
            this.der1.style.display = "block";
            this.izq1.style.display = "block";
            this.der2.style.display = "none";
            this.izq2.style.display = "none";
        }
    }
}

let imagen = new Imagenes()

window.onload = imagen.inicio()

setTimeout(imagen.mostrarDer, 5000)