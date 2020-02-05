import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actualNavTarget: string;

  changeNavigation(newNavTarget) {
    this.actualNavTarget = newNavTarget;
  }
}
