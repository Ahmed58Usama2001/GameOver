import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleRoyalComponent } from './battle-royal.component';

describe('BattleRoyalComponent', () => {
  let component: BattleRoyalComponent;
  let fixture: ComponentFixture<BattleRoyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleRoyalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleRoyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
