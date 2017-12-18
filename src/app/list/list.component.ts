import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  List: List[] = [];
  p: number = 1;
  //public isCollapsed = false;
  
  constructor(private ListService: ListService) { }

  isCollapsed:boolean = true;

  ngOnInit() 
  {
    var x = this.ListService.getData();
    x.snapshotChanges().subscribe(item => 
    {
      this.List = [];
      item.forEach(element => 
      {
        var y = element.payload.toJSON();
        y["$prdKey"] = element.key;
        this.List.push(y as List);
      });
    });
  }

  //private opened;
  onItemClick(List : List)
  {
    this.ListService.selectedProduct = Object.assign({}, List);
    //this.opened = window.open("");
    //this.opened.document.write("<html><head><title>test</title></head><body>test<br>{{this.selectedProduct.prdName}}<br>{{this.selectedProduct.prdCategory}}<br>{{this.selectedProduct.prdDescription}}</body></html>");
  }
}