import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-produit-child',
  templateUrl: './produit-child.component.html',
  styleUrls: ['./produit-child.component.css']
})
export class ProduitChildComponent implements OnInit ,OnChanges {


  @Input() prod:Product={
      id:1,
      title:"",
      price:null,
      quantity:0,
      like:0
  };

  private _modifierPrice:number;
  @Input()
  set modifPrice(mp:number){
    this._modifierPrice=mp+5;
  }
  get modifPrice(){
    return this._modifierPrice

  }

  @Input() maxPrice:number;

  @Output() likesEvent=new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    
  }
  likeProd(){
console.log("like from childs");
this.likesEvent.emit(this.prod);

  }

}
