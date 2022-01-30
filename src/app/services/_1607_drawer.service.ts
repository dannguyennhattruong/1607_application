import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from '../app-routing.module';

@Injectable({providedIn: 'root'})
export class _1607_DrawerService {
    constructor() { }

    get ROUTES() : Route[] {
        return routes.filter(f => f.path);
    }
    
}