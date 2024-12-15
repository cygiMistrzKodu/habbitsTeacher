import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface Month {
  january: number;
  february: number;
  march: number;
  april: number;
  may: string;
}

const ELEMENT_DATA: Month[] = [
  {january: 1, february: 1, march: 1, april: 1, may : "1 nie ma"},
  {january: 2, february: 2, march: 0, april: 2 , may : "2 V" },  
  {january: 2, february: 2, march: 0, april: 2 , may : "3 V" }  
];

@Component({
  selector: 'app-habit-board',
  imports: [MatSlideToggleModule, MatTableModule, MatButtonModule],
  templateUrl: './habit-board.component.html',
  styleUrl: './habit-board.component.css'
})
export class HabitBoardComponent {
  title = 'habbits-teacher my board Testing';

  displayedColumns: string[] = ['january', 'february', 'march', 'april', 'may'];
  dataSource = ELEMENT_DATA;
}
