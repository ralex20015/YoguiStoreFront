import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosVistaComponent } from './articulos-vista.component';

describe('ArticulosVistaComponent', () => {
  let component: ArticulosVistaComponent;
  let fixture: ComponentFixture<ArticulosVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
