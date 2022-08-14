import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterArticuloComponent } from './register-articulo.component';

describe('RegisterArticuloComponent', () => {
  let component: RegisterArticuloComponent;
  let fixture: ComponentFixture<RegisterArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
