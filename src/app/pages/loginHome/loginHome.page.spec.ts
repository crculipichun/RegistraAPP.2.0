import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginHomePage } from './loginHome.page';

describe('LoginHomePage', () => {
  let component: LoginHomePage;
  let fixture: ComponentFixture<LoginHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
