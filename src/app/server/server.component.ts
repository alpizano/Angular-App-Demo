import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;

  // execute at time component is created by angular
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  // when AddServer button is clicked
  onCreateServer() {
    this.serverCreated = true;
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
}
