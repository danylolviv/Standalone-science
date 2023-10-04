import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrameComponent} from './components/frame/frame.component';
import {InitialComponentComponent} from './components/initial-component/initial-component.component';

const routes: Routes = [
  {
    path: '',
    component: InitialComponentComponent
  },
  {
    path: 'regular',
    component: FrameComponent
  },
  {
    path: 'standalone',
    loadComponent: () => import('./components/proper-standalone/proper-standalone.component').then(m => m.ProperStandaloneComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
