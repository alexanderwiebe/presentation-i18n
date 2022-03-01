import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCanadaComponent } from './team-canada.component';

describe('TeamCanadaComponent', () => {
  let component: TeamCanadaComponent;
  let fixture: ComponentFixture<TeamCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCanadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
