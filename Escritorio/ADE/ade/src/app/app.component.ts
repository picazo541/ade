import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ade';

  visible: boolean=false

  visibilidad(){
    //return (this.visible = !this.visible)
  }
}
