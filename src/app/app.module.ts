import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnnonceAppRoutingModule } from './annonce/annonce-app-routing.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { FormProduitComponent } from './form-produit/form-produit.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FProduitComponent } from './f-produit/f-produit.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProduitChildComponent } from './produit-child/produit-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProduitComponent,
    HomeComponent,
    PagenotfoundComponent,
    DetailComponent,
    AddProduitComponent,
    FormProduitComponent,
    FormUserComponent,
    FProduitComponent,
    ProductCardComponent,
    ProduitChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnnonceModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
