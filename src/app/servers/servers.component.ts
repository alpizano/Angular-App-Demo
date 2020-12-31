import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverId = 10;
  serverStatus: string = 'offline';
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  message: string;
  detailsButtonClicked = false;

  // execute at time component is created by angular
  constructor() {
    this.message = 'Secret Password = tuna';
    // becomes clickable only after 2secs
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onDisplayDetails(event: any) {
    if (this.detailsButtonClicked) this.detailsButtonClicked = false;
    else this.detailsButtonClicked = true;
  }

  // when AddServer button is clicked
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }

  // implementing updating username but with event binding
  onUpdateUserName(event: any) {
    this.userName = event.target.value;
  }

  // should only be clickable () if not empty string
  isUserNameNull(): boolean {
    if (this.userName !== '') {
      return false;
    }
    return true;
  }

  resetUserName(): void {
    this.userName = '';
  }

  onUpdateServerName(event: any) {
    //this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }

  // log events of the dom element
  log(event) {
    const button = event.target;
    console.log(button);
    console.dir(button);
  }

  ngOnInit(): void {}
}
