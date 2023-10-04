import { Component } from '@angular/core';
import {BaseComponent} from '../../util/base.component';
import {AuthService} from '../../services/auth.service';
import {VideoGame} from '../inject-example/stansalone-root.component';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html'
})
export class FrameComponent extends BaseComponent{

  videoGames: VideoGame[] = [
    { name: 'The Legend of Zelda', genre: 'Action-Adventure', releaseYear: 1986 },
    { name: 'Super Mario Bros', genre: 'Platform', releaseYear: 1985 },
    { name: 'Tetris', genre: 'Puzzle', releaseYear: 1984 },
    { name: 'Minecraft', genre: 'Sandbox', releaseYear: 2011 },
    // add more games as per your requirement
  ];

  constructor(
    private authServiceeee: AuthService
  ) {
    super();
    console.log(authServiceeee.myVar)
  }
}
