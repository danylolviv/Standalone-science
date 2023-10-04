import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoGame} from '../inject-example/stansalone-root.component';
import {GameCardComponent} from '../game-card/game-card.component';

@Component({
  selector: 'app-proper-standalone',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './proper-standalone.component.html',
})
export class ProperStandaloneComponent {

  videoGames: VideoGame[] = [
    { name: 'The Legend of Zelda', genre: 'Action-Adventure', releaseYear: 1986 },
    { name: 'Super Mario Bros', genre: 'Platform', releaseYear: 1985 },
    { name: 'Tetris', genre: 'Puzzle', releaseYear: 1984 },
    { name: 'Minecraft', genre: 'Sandbox', releaseYear: 2011 },
    // add more games as per your requirement
  ];

}

