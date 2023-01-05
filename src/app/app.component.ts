import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tests-one';
  public likes = 0;

  public like(): void {
    this.likes++;
  }
}
