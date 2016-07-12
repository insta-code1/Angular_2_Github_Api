import { Component } from '@angular/core';
import {GithubComponent} from './components/github.components';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-app',
    template: '<github></github>',
    directives:[GithubComponent],
    providers: [HTTP_PROVIDERS, GithubService]               ]
})
export class AppComponent { }
