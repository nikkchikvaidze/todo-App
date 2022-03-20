import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AddTask {
  difficulty?: Difficulty;
  text: string;
}

enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  visible = false;
  data: AddTask = {
    difficulty: Difficulty.Easy,
    text: '',
  };
  displayInputs() {
    this.visible = true;
  }

  addTask() {
    this.visible = false;
  }
}

// <option [ngValue]=" null">Select</option>
//                 <option [ngValue]=" difficulty.Easy" value="">Easy</option>
//                 <option [ngValue]="difficulty.Medium" value="">Medium</option>
//                 <option [ngValue]="difficulty.Hard" value="">Hard</option>
