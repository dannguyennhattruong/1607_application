import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { _1607_DrawerService } from 'src/app/services/_1607_drawer.service';

@Component({
    selector: 'it-1607-drawer',
    templateUrl: './_1607_drawer.component.html',
    styleUrls: ['./_1607_drawer.component.scss']
})
export class _1607_DrawerComponent implements OnInit, OnDestroy {
    @Input()
    isShow = true;
    tabSelect = 0;
    routes: Route[] | any[] = [];
    currentRoute: string = '';
    time : any = null;
    date :any = Date.now();
    constructor(private drawerService: _1607_DrawerService, private router: Router, private activeRoute: ActivatedRoute) {
        this.routes = drawerService.ROUTES;

    }

    setupTime() {
        this.time = setInterval(() => {
            this.date = Date.now();
        },300)
    }

    ngOnInit(): void {
        this.activeRoute.fragment.subscribe((d: any) => {
            this.tabSelect = Number(d);
        })
        this.setupTime();
    }

    naviagte(route: any) {
        const { id } = route.data;
        this.tabSelect = id;
        this.router.navigate([route?.path], {
            fragment: `${route.data?.id}`
        });
    }

    ngOnDestroy(): void {
        clearInterval(this.time);
    }
}
