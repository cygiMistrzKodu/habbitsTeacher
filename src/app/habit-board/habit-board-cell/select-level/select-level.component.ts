import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-select-level',
  imports: [MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './select-level.component.html',
  styleUrl: './select-level.component.css'
})
export class SelectLevelComponent {

  selectedLevel: string = ""

  levels = [
    { value: 'notDone', viewValue: 'not done' },
    { value: 'mini', viewValue: 'mini' },
    { value: 'medium', viewValue: 'medium' },
    { value: 'elite', viewValue: 'elite' },

  ]

}
