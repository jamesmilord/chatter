import { Component, OnInit } from '@angular/core';

import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isValid: boolean = false;
  username: string = null;

  constructor(private chatService: ChatService){
    if(this.username!= null){
      this.isValid = true;
    }
  }




  ngOnInit(){
    this.username = this.chatService.getUsername();

  }
}
