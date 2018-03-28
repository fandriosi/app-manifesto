import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaminhoesComponent } from './add-caminhoes.component';

describe('AddCaminhoesComponent', () => {
  let component: AddCaminhoesComponent;
  let fixture: ComponentFixture<AddCaminhoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaminhoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaminhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
