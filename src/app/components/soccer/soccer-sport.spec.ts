import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerSport } from './soccer-sport';

describe('SoccerSport', () => {
  let component: SoccerSport;
  let fixture: ComponentFixture<SoccerSport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerSport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerSport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
