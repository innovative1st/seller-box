import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySerachComponent } from './inventory-serach.component';

describe('InventorySerachComponent', () => {
  let component: InventorySerachComponent;
  let fixture: ComponentFixture<InventorySerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
