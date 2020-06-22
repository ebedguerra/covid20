import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  title = 'covid20';
  nombre: any;
  apellido: any;
  dni: any;
  fecnac: any;
  movil: any;
  distrito: any = '';
  sector: any;
  direccion: any;
  creacion: any;

  mensajeModal: any = 'Un momento por favor estamos: creando registro...';
  mensajeBoton = false;
  initModal = false;

  constructor(private crudService: CrudService) { }

  CreateRecord() {
    this.initModal = true;

    let fecha = new Date();
    let record = {};
    record['nombre'] = this.nombre;
    record['apellido'] = this.apellido;
    record['dni'] = this.dni;
    record['fecnac'] = this.fecnac;
    record['movil'] = this.movil;
    record['distrito'] = this.distrito;
    record['sector'] = this.sector;
    record['direccion'] = this.direccion;
    record['creacion'] = fecha.getDate() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getFullYear()
    this.crudService.create_NewPaciente(record).then(resp => {
      // tslint:disable-next-line:no-console
      console.info(resp);
      this.mensajeBoton = true;
      this.mensajeModal = 'Usted se registro correctamente, Gracias';
    })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.info(error);
        this.mensajeBoton = true;
        this.mensajeModal = 'Ocurrió un error en el registro por favor intentelo nuevamente';
      });
  }

  ngOnInit(): void {
  }

}
