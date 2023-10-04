import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './components/frame/frame.component';
import {CommonModule} from '@angular/common';
import { InitialComponentComponent } from './components/initial-component/initial-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    InitialComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
