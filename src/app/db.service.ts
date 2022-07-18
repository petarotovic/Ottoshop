import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ()

export class ConnectToDB implements OnInit {
    array: any;
    constructor (private http: HttpClient) {

    }

    ngOnInit(): void {

    }

    GetAllProducts(): Observable<any> {      
        return this.http.get('http://192.168.1.14:3000/products');
    }
}