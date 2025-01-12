import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitBoardCellComponent } from './habit-board-cell.component';

describe('HabitBoardCellComponent', () => {
  let component: HabitBoardCellComponent;
  let fixture: ComponentFixture<HabitBoardCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitBoardCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitBoardCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
