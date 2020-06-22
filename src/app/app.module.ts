import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {CrudService} from './service/crud.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VerdatosComponent } from './verdatos/verdatos.component';

const rutas: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'registro'
    },
  {
    path: 'registro',
    component: FormularioComponent
  },
  {
    path: 'verdatos',
    component: VerdatosComponent
  }
];




@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VerdatosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,  // Firebase database module
    RouterModule.forRoot(rutas,{
      useHash: true,
    }),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
