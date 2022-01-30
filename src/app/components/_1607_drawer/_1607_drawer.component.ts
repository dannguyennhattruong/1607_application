import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { _1607_DrawerService } from 'src/app/services/_1607_drawer.service';

@Component({
    selector: 'it-1607-drawer',
    templateUrl: './_1607_drawer.component.html',
    styleUrls: ['./_1607_drawer.component.scss']
})
export class _1607_DrawerComponent implements OnInit {
    @Input()
    isShow = true;
    tabSelect = 0;
    routes: Route[] | any[] = [];
    currentRoute: string = '';
    constructor(private drawerService: _1607_DrawerService, private router: Router, private activeRoute: ActivatedRoute) {
        this.routes = drawerService.ROUTES;

    }

    ngOnInit(): void {
        this.activeRoute.fragment.subscribe((d: any) => {
            this.tabSelect = Number(d);
        })
    }

    naviagte(route: any) {
        const { id } = route.data;
        this.tabSelect = id;
        this.router.navigate([route?.path], {
            fragment: `${route.data?.id}`
        });
    }
}
