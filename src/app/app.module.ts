import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HobbyListComponent} from './components/hobby-list/hobby-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HobbyFormComponent} from './components/hobby-form/hobby-form.component';
import {HobbyFormReactiveComponent} from './components/hobby-form-reactive/hobby-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyListComponent,
    HobbyFormComponent,
    HobbyFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
