import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class _1607_BaseService {
    constructor(private httpClient: HttpClient) { }

    async post(apiURL: string, request: any, headers: any) {
        return await lastValueFrom(this.httpClient.post(environment.server_url + apiURL, request, {
            ...headers
        }));
    }

}