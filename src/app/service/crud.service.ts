import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  create_NewPaciente(record){
    return this.firestore.collection('paciente').add(record);
  }

  leer_pacientes(){
    return this.firestore.collection('paciente').snapshotChanges();
  }

}
