import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '.././services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: any = [];
  message: string ;
  connection: any;
  username:any = null;
  onlineUsers: any = [];
  time: any = null;
  typing: any = null;

  constructor(private chatService: ChatService, private router: Router) {

  }

  sendMessage() {
    this.chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  broadcast(){
    this.chatService.broadcasted(this.username);
    console.log('broadcasted');
  }



  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe((message)=> {
      this.time = new Date().toLocaleTimeString();
      this.messages.push(message);




    });

    this.connection = this.chatService.userIsTyping().subscribe((typing)=> {

    console.log(typing);


    });




    this.username = this.chatService.getUsername();
    this.onlineUsers.push(this.username);
    if(!this.username){
      this.router.navigate(['/']);
    }
    if(this.username){
      window.setInterval(function() {
        var elem = document.getElementById('box');
        elem.scrollTop = elem.scrollHeight;
      }, 5000);
    }



  }

  ngOnDestroy() {
   this.connection.unsubscribe();
  }



}
