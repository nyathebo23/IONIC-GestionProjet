import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassForgetPage } from './pass-forget.page';

describe('PassForgetPage', () => {
  let component: PassForgetPage;
  let fixture: ComponentFixture<PassForgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassForgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassForgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
