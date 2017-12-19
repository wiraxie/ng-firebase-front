import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Clients } from './clients';

@Injectable()
export class ClientsService implements OnInit {

 ngOnInit()
 {
   this.getData();
 }

 //define list variable
 clientsList: AngularFireList<any>;
  
 selectedCustomer: Clients = new Clients();

 //dependency injection here
 constructor(private firebase: AngularFireDatabase) { }

 //template view
 getData() 
 {
   //this.customerList = this.firebase.list('name goes here');
   this.clientsList = this.firebase.list('Customer');
   return this.clientsList;
 }
 //setelah jadi panggil di ngOnInit()
 //end of view

}