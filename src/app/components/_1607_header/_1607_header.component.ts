import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'it-1607-header',
    templateUrl: './_1607_header.component.html',
    styleUrls: ['./_1607_header.component.scss']
})
export class _1607_HeaderComponent {
    isShow = true;
    @Output() show = new EventEmitter();
    toggleMenu = () => {
        this.isShow = !this.isShow;
        this.show.emit(this.isShow);
    }
}
