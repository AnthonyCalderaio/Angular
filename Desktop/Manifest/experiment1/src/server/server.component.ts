import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverStatus: String = "Down";

  turnServerOn(){
    this.serverStatus = "Up";
  }

  turnServerOff(){
    this.serverStatus = "Down"
  }
  
  
  constructor() { 
    
  }

  ngOnInit() {

  }
  

}
