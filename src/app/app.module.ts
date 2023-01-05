import { LikeWigetModule } from './shared/components/like-widget/like-widget.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LikeWigetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
