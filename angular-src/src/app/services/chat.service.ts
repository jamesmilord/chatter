import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:8000';
  private socket: any;
  username: string;
  users: any=[];

  sendMessage(message:string, username:string) {
    this.socket.emit('add-message', message, username);
  }

  getMessages() {
    let observable = new Observable((observer:any)=> {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
          observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    })
    return observable;

  }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }



}
