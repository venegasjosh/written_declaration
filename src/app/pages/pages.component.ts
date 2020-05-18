import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  constructor(private _router: Router) { }
  ngOnInit() {
    this.loadRoot();
  }
  loadRoot() {
    this._router.navigate(["/pages"]);
  }

}
