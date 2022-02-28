import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TitleComponent } from './title/title.component';
import { WhatIsComponent } from './what-is/what-is.component';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
