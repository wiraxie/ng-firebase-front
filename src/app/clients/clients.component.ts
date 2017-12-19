import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { Clients } from './clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  Clients: Clients[] = [];
  halaman: number = 1;
  //public isCollapsed = false;
  
  constructor(private ClientsService: ClientsService) { }

  isCollapsed:boolean = true;

  ngOnInit() 
  {
    var x = this.ClientsService.getData();
    x.snapshotChanges().subscribe(item => 
    {
      this.Clients = [];
      item.forEach(element => 
      {
        var y = element.payload.toJSON();
        y["$prdKey"] = element.key;
        this.Clients.push(y as Clients);
      });
    });
  }

}
