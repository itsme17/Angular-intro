import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  url='';
  constructor(
    private http :HttpClient
  ) {}
  addFriend(data:Friend){
    return this.http.post(this.url, data)
  }
}
