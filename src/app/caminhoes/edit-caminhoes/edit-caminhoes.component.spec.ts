import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaminhoesComponent } from './edit-caminhoes.component';

describe('EditCaminhoesComponent', () => {
  let component: EditCaminhoesComponent;
  let fixture: ComponentFixture<EditCaminhoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCaminhoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaminhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
