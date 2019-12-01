import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassforgetPage } from './passforget.page';

describe('PassforgetPage', () => {
  let component: PassforgetPage;
  let fixture: ComponentFixture<PassforgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassforgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassforgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
