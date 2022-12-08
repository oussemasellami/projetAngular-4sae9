import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FProduitComponent } from './f-produit.component';

describe('FProduitComponent', () => {
  let component: FProduitComponent;
  let fixture: ComponentFixture<FProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
