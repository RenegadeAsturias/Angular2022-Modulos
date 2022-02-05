import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Díaz";
  edad = 18;
  empresa = "RPS"

  usuarioRegistrado = false;
  usuarioNoRegistrado = true;

  textoDeRegistro = "No hay ningún usuario registrado.";

  setUsuarioRegistrado(event:Event) {

    if((<HTMLInputElement>event.target).value=="si"){
        this.textoDeRegistro = "El usuario se acaba de registrar!";
    } else {
        this.textoDeRegistro = "No hay ningún usuario registrado.";
    }

  }

  llamaDireccion(value:string){
  }


  direccionEmpresa = "";

  cambiarDireccionEmpresa (event:Event) {
      this.direccionEmpresa = (<HTMLInputElement>event.target).value;
  }
      
  telefonoEmpresa = "666123456";

  constructor() { }

  ngOnInit(): void {
  }

}
