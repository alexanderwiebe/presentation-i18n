import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './build/build.component';
import { DemoComponent } from './demo/demo.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { TeamCanadaComponent } from './team-canada/team-canada.component';
import { ThanksComponent } from './thanks/thanks.component';
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
    path: 'greetings',
    component: GreetingsComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'team-canada',
    component: TeamCanadaComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'build',
    component: BuildComponent,
  },
  {
    path: 'deployment',
    component: DeploymentComponent,
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
