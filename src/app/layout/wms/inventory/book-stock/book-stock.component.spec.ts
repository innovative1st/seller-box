import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStockComponent } from './book-stock.component';

describe('BookStockComponent', () => {
  let component: BookStockComponent;
  let fixture: ComponentFixture<BookStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
