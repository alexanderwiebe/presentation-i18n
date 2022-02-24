import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TitleComponent } from './title/title.component';
import { WhatIsComponent } from './what-is/what-is.component';

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
    path: 'what-is',
    component: WhatIsComponent,
  },
  {
    path: 'how-to-use',
    component: HowToUseComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'thanks',
    component: ThanksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
