import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { IntroComponent } from './intro/intro.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
  },
  {
    path: 'title',
    component: TitleComponent,
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'how-to-use',
    component: HowToUseComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
