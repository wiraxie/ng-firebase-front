import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  showList:boolean = false;
  showAbout:boolean = true;
  showFAQ:boolean = true;
}
