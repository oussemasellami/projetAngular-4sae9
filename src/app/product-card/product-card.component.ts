import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnChanges {
  // partie une
  @Input() prod: Product={
    id: 1,
    title:"",
    price: null,
    quantity:0,
    like:0
};

// partie deux 
@Input() maxPrice: number;


//partie trois 
private _modifiedPrice:number;
@Input()
set modifiedPrice(mp:number){
  this._modifiedPrice=mp+1;
}
get modifiedPrice():number{return this._modifiedPrice}


@Output() likesEvent=new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  likechild(){
    console.log(" child to parent");
    this.likesEvent.emit(this.prod)
    

  }

}
