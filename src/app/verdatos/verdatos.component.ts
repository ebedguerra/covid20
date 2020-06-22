import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';


@Component({
  selector: 'app-verdatos',
  templateUrl: './verdatos.component.html',
  styleUrls: ['./verdatos.component.scss']
})
export class VerdatosComponent implements OnInit {

  pacientes: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.leer_pacientes().subscribe(data => {
      this.pacientes = data.map(e => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()['nombre'],
          apellido: e.payload.doc.data()['apellido'],
          dni: e.payload.doc.data()['dni'],
          fecnac: e.payload.doc.data()['fecnac'],
          movil: e.payload.doc.data()['movil'],
          distrito: e.payload.doc.data()['distrito'],
          sector: e.payload.doc.data()['sector'],
          direccion: e.payload.doc.data()['direccion'],
          creacion: e.payload.doc.data()['creacion'],
        };
      });
      // tslint:disable-next-line:no-console
      console.info(this.pacientes);

    });
  }

}
