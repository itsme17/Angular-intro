import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise';
  public languages = ["Html","Css","Java Script","Php" ];
  friendModel = new Friend("","","","","");
  onSubmit(){
    console.log(this.friendModel);
  }
}
