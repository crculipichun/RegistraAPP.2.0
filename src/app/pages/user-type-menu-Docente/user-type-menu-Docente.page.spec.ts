import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTypeMenuDocentePage } from './user-type-menu-Docente.page';

describe('UserTypeMenuDocentePage', () => {
  let component: UserTypeMenuDocentePage;
  let fixture: ComponentFixture<UserTypeMenuDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserTypeMenuDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
