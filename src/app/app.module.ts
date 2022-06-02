import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { TestComponent2Component } from './components/test-component2/test-component2.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { TestComponent3Component } from './components/test-component3/test-component3.component';

import { registerLocaleData } from '@angular/common';
import LocaleRu from '@angular/common/locales/ru';

registerLocaleData(LocaleRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    TestCardComponent,
    TestComponent3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
