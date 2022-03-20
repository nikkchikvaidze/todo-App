import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AddTask {
  difficulty?: Difficulty;
  text: string;
}

interface Task {
  text: string;
  difficulty: Difficulty;
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
  difficulty = Difficulty;
  data: AddTask = {
    difficulty: undefined,
    text: '',
  };

  todos: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  displayInputs() {
    this.visible = true;
  }

  addTask() {
    if (!this.data.difficulty || !this.data.text) return;

    this.todos = [
      ...this.todos,
      {
        text: this.data.text,
        difficulty: this.data.difficulty,
      },
    ];

    this.data = {
      difficulty: undefined,
      text: '',
    };

    this.visible = false;
  }

  moveToProgress(task: Task, index: number) {
    this.inprogress = [
      ...this.inprogress,
      {
        text: task.text,
        difficulty: task.difficulty,
      },
    ];

    this.todos = this.todos.filter((_, i) => i !== index);
  }

  remove(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }

  moveToTodo(task: Task, index: number) {
    this.todos = [
      ...this.todos,
      {
        text: task.text,
        difficulty: task.difficulty,
      },
    ];
    this.inprogress = this.inprogress.filter((_, i) => i !== index);
  }

  moveToDone(task: Task, index: number) {
    this.done = [
      ...this.done,
      {
        text: task.text,
        difficulty: task.difficulty,
      },
    ];
    this.inprogress = this.inprogress.filter((_, i) => i !== index);
  }

  backToProgress(task: Task, index: number) {
    this.inprogress = [
      ...this.inprogress,
      {
        text: task.text,
        difficulty: task.difficulty,
      },
    ];
    this.done = this.done.filter((_, i) => i !== index);
  }

  emptyString = 'List is empty';

  getStyle(task: Task) {
    return {
      easy: task.difficulty === Difficulty.Easy,
      medium: task.difficulty === Difficulty.Medium,
      hard: task.difficulty === Difficulty.Hard,
    };
  }
}
