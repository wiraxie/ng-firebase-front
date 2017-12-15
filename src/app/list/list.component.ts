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
  //public isCollapsed = false;
  
  constructor(private ListService: ListService) { }

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

}
