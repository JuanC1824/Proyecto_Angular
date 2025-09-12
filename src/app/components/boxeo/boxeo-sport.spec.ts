import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxeoSport } from './boxeo-sport';

describe('BoxeoSport', () => {
  let component: BoxeoSport;
  let fixture: ComponentFixture<BoxeoSport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxeoSport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxeoSport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});