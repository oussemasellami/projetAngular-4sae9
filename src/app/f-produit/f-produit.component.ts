import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-f-produit',
  templateUrl: './f-produit.component.html',
  styleUrls: ['./f-produit.component.css']
})
export class FProduitComponent implements OnInit {
product:Product;
list:Product[];
  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
    this.list=[];
  
  }

  save(){
    this.product.like=0;
    this.list.push(this.product);
    console.log(this.list);

  }
}
