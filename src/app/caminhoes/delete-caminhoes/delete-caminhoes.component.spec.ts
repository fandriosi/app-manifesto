import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCaminhoesComponent } from 'app/caminhoes/delete-caminhoes/delete-caminhoes.component';

describe('DeleteCaminhoesComponent', () => {
  let component: DeleteCaminhoesComponent;
  let fixture: ComponentFixture<DeleteCaminhoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCaminhoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCaminhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
