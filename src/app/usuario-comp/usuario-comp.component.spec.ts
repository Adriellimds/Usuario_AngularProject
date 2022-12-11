import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCompComponent } from './usuario-comp.component';

describe('UsuarioCompComponent', () => {
  let component: UsuarioCompComponent;
  let fixture: ComponentFixture<UsuarioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
