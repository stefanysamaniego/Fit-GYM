class password {
    constructor (){
        this.contraseña = document.getElementById('contraseña');
        this.repetir = document.getElementById('repetir');
        this.mensaje = document.getElementById('mensaje');
        this.noVer = document.getElementById('noVer');
        this.ver = document.getElementById('ver');
        this.noVer1 = document.getElementById('noVer1');
        this.ver1 = document.getElementById('ver1');
    }
    inicio(){
        this.noVer.style.display = 'none';
        this.noVer1.style.display = 'none';
    }
    mostrarPassword(){
        if(this.contraseña.type == 'password'){
            this.contraseña.type = 'text';
            this.noVer.style.display = 'block';
            this.ver.style.display = 'none';
        }
    }
    ocultarPassword(){
        if(this.contraseña.type == 'text'){
            this.contraseña.type = 'password';
            this.ver.style.display = 'block';
            this.noVer.style.display = 'none';
        }
    }
    mostrarPassword1(){
        if(this.repetir.type == 'password'){
            this.repetir.type = 'text';
            this.noVer1.style.display = 'block';
            this.ver1.style.display = 'none';
        }
    }
    ocultarPassword1(){
        if(this.repetir.type == 'text'){
            this.repetir.type = 'password';
            this.ver1.style.display = 'block';
            this.noVer1.style.display = 'none';
        }
    }
    validarPassword(){
        if(this.repetir.value === this.contraseña.value){
            this.mensaje.innerHTML = '';
            this.mensaje.innerHTML = '(Contraseña valida)';
        }
        if(this.repetir.value !== this.contraseña.value){
            this.mensaje.innerHTML = '';
            this.mensaje.innerHTML = '(La contraseña no coincide)';
        }
    }
}
var contrasena = new password();

window.onload = contrasena.inicio();