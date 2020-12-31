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
  timeStamps = [];
  // why doesn't this need to be a static variable?
  count: number;

  // execute at time component is created by angular
  constructor() {
    this.message = 'Secret Password = tuna';
    this.count = 0;
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

    const timeStamp = new Date();
    // push, unshift, pop, shift
    console.log(timeStamp);
    this.timeStamps.push(`${this.count}: timestamp - ${timeStamp}`);
    this.count++;
  }

  getBgColor(index: number): string {
    return index > 5 ? 'blue' : 'transparent';
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
  log(event: any) {
    const button = event.target;
    console.log(button);
    console.dir(button);
  }

  ngOnInit(): void {}
}
