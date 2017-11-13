import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioStore } from './portfolio.store';

@Component({
  selector: 'dab-header',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
  products: any = [];

  constructor(private storage: PortfolioStore) {
  }

  ngOnInit () {
    this.storage.getProducts().then(products =>
      this.products = products);
  }

  ngAfterViewInit () {
    
  }
}