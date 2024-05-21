import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['login']);
  }

  signup(){
    this.route.navigate(['signup']);
  }
}
