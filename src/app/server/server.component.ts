import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';
    allowNewServer = false;
    serverCreationStatus = "No server was created!"

    // execute at time component is created by angular
    constructor() {
        setTimeout( () => {
            this.allowNewServer = true;
        },2000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreationStatus = "Server was created!"
    }

    // log events of the dom element
    log(event) {
        const button = event.target;
        console.log(button);
        console.dir(button);
    }
}