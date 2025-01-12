import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-habit-board-cell',
  imports: [MatSlideToggleModule, MatTableModule, MatButtonModule,
    MatSelectModule, MatCardModule, MatChipsModule, MatFormFieldModule],
  templateUrl: './habit-board-cell.component.html',
  styleUrl: './habit-board-cell.component.css'
})
export class HabitBoardCellComponent {
  @Input() dayOfMonth: any = '' ;

}
