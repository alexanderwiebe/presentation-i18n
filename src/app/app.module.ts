import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TitleComponent } from './title/title.component';
import { WhatIsComponent } from './what-is/what-is.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    IntroComponent,
    WhatIsComponent,
    HowToUseComponent,
    DemoComponent,
    QuestionsComponent,
    ThanksComponent,
    GreetingsComponent,
    QuizComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
