import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    log(...arg: any[]): void {
        if (!environment.production){
            console.log(...arg);
        }
    }

    error(...arg: any[]): void {
        if (!environment.production){
            console.error(...arg);
        }
    }
}
