import { Component } from '@angular/core';

@Component({
    selector: 'it-1607-chat',
    templateUrl: `./_1607_chat.component.html`,
    styleUrls: [`./_1607_chat.component.scss`]
})
export class _1607_ChatComponent {
    isOpen = false;
    isResize = false;
    system_message = `Please add new member to starter the conversation`;
    toggle = () => {
        this.isOpen = !this.isOpen;
    };
    resize = (rs?: boolean) => this.isResize = rs ?? !this.isResize;

    send() {

    }
}
