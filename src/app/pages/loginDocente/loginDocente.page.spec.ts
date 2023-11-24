import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginDocentePage } from './loginDocente.page';

describe('LoginDocentePage', () => {
  let component: LoginDocentePage;
  let fixture: ComponentFixture<LoginDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
