import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  user: User = new User();
  userList: iUser[] = [];

  constructor() { }

  ngOnInit() {
  }

}
