import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.css']
})
export class FormProduitComponent implements OnInit {
product:Product;
list:Product[];
  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
    this.list=[];
  }
add(){
  this.product.like=0;
  this.list.push(this.product);
  console.log(this.list);
}
}
