import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMascotaComponent } from './formulario-mascota-component.component';

describe('FormularioMascotaComponentComponent', () => {
  let component: FormularioMascotaComponent;
  let fixture: ComponentFixture<FormularioMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioMascotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
