import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';
// import { NgAisModule } from 'angular-instantsearch';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
