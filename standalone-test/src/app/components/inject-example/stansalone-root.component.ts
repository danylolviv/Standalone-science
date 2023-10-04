import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BaseComponent} from '../../util/base.component';
import {AnotherService} from '../../services/another.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule, BrowserModule],
  selector: 'app-inject-example',
  templateUrl: './stansalone-root.component.html',
})

export class StandaloneRoot extends BaseComponent{

  authService = inject(AuthService);
  another = inject(AnotherService);

  videoGames: VideoGame[] = [
    { name: 'The Legend of Zelda', genre: 'Action-Adventure', releaseYear: 1986 },
    { name: 'Super Mario Bros', genre: 'Platform', releaseYear: 1985 },
    { name: 'Tetris', genre: 'Puzzle', releaseYear: 1984 },
    { name: 'Minecraft', genre: 'Sandbox', releaseYear: 2011 },
    // add more games as per your requirement
  ];

  constructor() {
    super()
    console.log(this.authService.myVar)

    console.log(this.videoGames[0].name)
  }


}

export interface VideoGame {
  name: string;
  genre: string;
  releaseYear: number;
}
