import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as fromApp from './store/app.reducers';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/effects/auth.effects';
import {UserEffects} from './user/effects/user.effects';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {SharedModule} from './shared/shared.module';
import {RestService} from './core/services/rest.service';
import {AppRoutingModule} from './app.routing.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    AuthModule,
    UserModule,
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([UserEffects, AuthEffects]),
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
