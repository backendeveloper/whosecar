import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as algoliasearch from 'algoliasearch';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  car;
  index;

  constructor(private route: ActivatedRoute) {
    const client = algoliasearch('XLOY9IMVIL', '86abf6ed1a3a1b06e3770346fe03f8dd');
    this.index = client.initIndex('28feb');
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    this.index.getObject(param).then(data => {
      this.car = data;
      console.log(data);
    });

  }
}