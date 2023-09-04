import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncabezadoforgotComponent } from './encabezadoforgot.component';

describe('EncabezadoforgotComponent', () => {
  let component: EncabezadoforgotComponent;
  let fixture: ComponentFixture<EncabezadoforgotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoforgotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncabezadoforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
