import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmpleadosComponent } from './register-empleados.component';

describe('RegisterEmpleadosComponent', () => {
  let component: RegisterEmpleadosComponent;
  let fixture: ComponentFixture<RegisterEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
