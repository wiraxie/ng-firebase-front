import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

//import ang. firebase module
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

//components
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component'

//router
import { RouterModule } from '@angular/router';

//import dari invirontment
import { environment } from '../environments/environment';

//services
import { ListService } from './list/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguration, 'app-root'), //environtment. yg di environtment 
  ],
  providers: [ ListService ],
  
  bootstrap: 
  [
    AppComponent,
    ListComponent,
  ]
})
export class AppModule { }