import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HabitBoardCellComponent } from "./habit-board-cell/habit-board-cell.component";

export interface Month {
  january: number;
  february: number;
  march: number;
  april: number;
  may: string;
}

const ELEMENT_DATA: Month[] = [
  { january: 1, february: 1, march: 1, april: 1, may: "1 nie ma" },
  { january: 2, february: 2, march: 2, april: 2, may: "2 V" },
  { january: 3, february: 3, march: 3, april: 2, may: "3 V" }
];

@Component({
  selector: 'app-habit-board',
  imports: [MatTableModule, HabitBoardCellComponent],
  templateUrl: './habit-board.component.html',
  styleUrl: './habit-board.component.css'
})
export class HabitBoardComponent {
  title = 'habbits-teacher my board Testing';

  displayedColumns: string[] = ['january', 'february', 'march', 'april', 'may'];
  dataSource = ELEMENT_DATA;
}
