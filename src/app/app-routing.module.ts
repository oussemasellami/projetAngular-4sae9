import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormProduitComponent } from './form-produit/form-produit.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FProduitComponent } from './f-produit/f-produit.component';
const ROUTES: Routes=[
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"produit/detail/:id", component: DetailComponent},
  {path:"produit/add", component: AddProduitComponent},
  {path:"produit/form", component: FormProduitComponent},
  {path:"produit/f", component: FProduitComponent},
  {path:"user", component: FormUserComponent},
  {path:"produit", component: ProduitComponent},
  {path:"**", component:PagenotfoundComponent}
]
@NgModule({
  declarations: [],
  imports: [

CommonModule,
  RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
