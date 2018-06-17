import { Injectable } from '@angular/core';
// import {forkJoin} from 'rxjs';
import * as algoliasearch from 'algoliasearch';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { forkJoin } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  results:Object[];
  index: any;
  
  constructor() {
    this.results = [];
    var client = algoliasearch('XLOY9IMVIL', '86abf6ed1a3a1b06e3770346fe03f8dd');
    this.index = client.initIndex('28feb');
   }

  // GetObject(param: string) {
  //   let promise = new Promise((resolve, reject) => {
  //     this.index.getObject(param).toPromise().then(res => {
  //       console.log(res.json());
  //       resolve();
  //     }, msg => {
  //       reject(msg);
  //     })
  //   });
  //   return promise;
  // }
}
