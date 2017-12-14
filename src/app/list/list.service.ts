import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { List } from './list';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class ListService implements OnInit {

  List: AngularFireList<any>;

  ngOnInit(){}

  constructor(private firebase: AngularFireDatabase) { }

  getData() 
  {
    this.List = this.firebase.list('Product');
    return this.List;
  }

}
