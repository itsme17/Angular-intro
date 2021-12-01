import { Component } from '@angular/core';
import { AddFriendService } from './add-friend.service';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private addFriendService:AddFriendService){}
  title = 'angular-exercise';
  public languages = ["Html","Css","Java Script","Php" ];
  friendModel = new Friend("","","","","");
  onSubmit(){
    this.addFriendService.addFriend(this.friendModel).subscribe(data =>" it worked ", error => " it didn't work ")
  }
}
