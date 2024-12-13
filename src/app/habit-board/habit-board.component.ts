import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-habit-board',
  imports: [MatSlideToggleModule],
  templateUrl: './habit-board.component.html',
  styleUrl: './habit-board.component.css'
})
export class HabitBoardComponent {
  title = 'habbits-teacher my board Testing';
}
