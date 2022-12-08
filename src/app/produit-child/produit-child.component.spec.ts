import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitChildComponent } from './produit-child.component';

describe('ProduitChildComponent', () => {
  let component: ProduitChildComponent;
  let fixture: ComponentFixture<ProduitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
