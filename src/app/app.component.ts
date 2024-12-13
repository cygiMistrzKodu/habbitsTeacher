import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitBoardComponent } from '../app/habit-board/habit-board.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'habbits-teacher';
}
