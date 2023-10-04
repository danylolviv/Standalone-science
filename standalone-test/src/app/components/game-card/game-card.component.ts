import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoGame} from '../inject-example/stansalone-root.component';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card.component.html'
})
export class GameCardComponent implements OnInit{

  @Input() game!: VideoGame

  ngOnInit(): void {
  }

}
