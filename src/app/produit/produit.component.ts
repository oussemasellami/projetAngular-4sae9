import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from './../model/Product';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {



  listProdcut: Product[]=[];

Prixmax:number;

  constructor() { }

  ngOnInit(): void {
    this.listProdcut=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }


  likeProduit(prod:Product){
    console.log("likes from Parent");

    let i=this.listProdcut.indexOf(prod)
    this.listProdcut[i].like++

  }

  
}
