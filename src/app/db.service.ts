import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ()

export class ConnectToDB {
    constructor (private http: HttpClient) {

    }

    GetAllProducts(): Observable<any> {      
        return this.http.get('http://192.168.1.14:3000/products');
    }

    SortLatest(products: any) {  
        let sortedarray: Array<any> = [];    
        for (let x of products) {
            if (sortedarray.length == 0) {
                sortedarray.push(x);
            }  else {
                let currentdate = this.getDate(x.dateadded);
                for(let i = 0; i < 8; i++) {
                    if ( this.getDate(x.dateadded) > this.getDate(sortedarray[i].dateadded)) {
                        sortedarray.splice(i, 0, x);
                        break;
                    } else if (i <=7 && i + 1 < 8) {
                        if (sortedarray[i + 1] == null) {
                            sortedarray.splice(i + 1, 0, x);
                            break;
                        }
                    }
                }
            }
        }
        if (sortedarray.length > 7) {
            let arraylenght = sortedarray.length;
            for (let i = 8; i < arraylenght; i++){
                sortedarray.splice(8, 1);
            }
        }
        return sortedarray;
    }

    SortMostSold(products: any) {
        let sortedarray: Array<any> = [];    
        for (let x of products) {
            if (sortedarray.length == 0) {
                sortedarray.push(x);
            }  else {
                let currenttimessold = x.timessold;
                for(let i = 0; i < 8; i++) {
                    if ( x.timessold > sortedarray[i].timessold) {
                        sortedarray.splice(i, 0, x);
                        break;
                    } else if (i <=7 && i + 1 < 8) {
                        if (sortedarray[i + 1] == null) {
                            sortedarray.splice(i + 1, 0, x);
                        }
                    }
                }
            }
        }
        if (sortedarray.length > 7) {
            let arraylenght = sortedarray.length;
            for (let i = 8; i < arraylenght; i++){
                sortedarray.splice(8, 1);
            }
        }
        console.log(sortedarray);
        return sortedarray;
    }

    getDate(date: string): Date {
        let datesplit = date.split('/');
        let currentdate = new Date(+datesplit[2], +datesplit[1] - 1, +datesplit[0]);
        return currentdate;
    }
}