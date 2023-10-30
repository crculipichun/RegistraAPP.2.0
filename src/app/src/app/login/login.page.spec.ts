import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { RegistrarPage } from '../registrar/registrar.page';

describe('RegistrarPage', () => {
  let component: RegistrarPage;
  let fixture: ComponentFixture<RegistrarPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPage],
      imports: [IonicModule.forRoot()], // Asegúrate de agregar IonicModule aquí
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});