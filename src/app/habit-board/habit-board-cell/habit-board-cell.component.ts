import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SelectLevelComponent } from './select-level/select-level.component';

@Component({
  selector: 'app-habit-board-cell',
  imports: [MatCardModule, SelectLevelComponent],
  templateUrl: './habit-board-cell.component.html',
  styleUrl: './habit-board-cell.component.css'
})
export class HabitBoardCellComponent {
  @Input() dayOfMonth: any = '';


}
