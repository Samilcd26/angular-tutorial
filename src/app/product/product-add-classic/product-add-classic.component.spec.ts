import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddClassicComponent } from './product-add-classic.component';

describe('ProductAddClassicComponent', () => {
  let component: ProductAddClassicComponent;
  let fixture: ComponentFixture<ProductAddClassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddClassicComponent]
    });
    fixture = TestBed.createComponent(ProductAddClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
