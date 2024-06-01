import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home.model';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  user: User = new User();
  userList: iUser[] = [];

  constructor(
    private homeService : HomeService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  openComset(){
  this.homeService.openComset();
  }

  openAll(){
    this.homeService.openAll();
  }

  openMain(){
    this.homeService.openMain();
  }

}
