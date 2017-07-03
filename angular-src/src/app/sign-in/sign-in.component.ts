import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ChatService} from '.././services/chat.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string = null;

  constructor(private chatService: ChatService, private router: Router) { }

  setUsername() {
    if(this.username){
      this.chatService.setUsername(this.username);
    
      this.router.navigate(['/chat']);

    }

  }


  ngOnInit() {
  }

}
