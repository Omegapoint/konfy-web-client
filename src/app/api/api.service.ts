import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import * as config from '../../../auth_config.json';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private auth: AuthService) {}

  passes() {
    console.log(this.auth.auth0Client$.subscribe((client: Auth0Client) => console.log(client.getTokenSilently())))
    // return fetch("/api/passes").then(response => response.json());
  }
}
