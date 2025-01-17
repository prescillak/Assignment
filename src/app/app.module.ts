import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import{CoreModule} from './core.module';
import{ StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    StoreModule.forRoot(fromApp.appReducer),
    SharedModule,
    CoreModule,
    EffectsModule.forRoot([AuthEffects]),
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService]
})
export class AppModule { }
