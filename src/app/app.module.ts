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
import {AppRoutingModule} from './app.routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { VinsComponent } from './components/vins/vins.component';
import { SearchComponent } from './components/search/search.component';
import { VinComponent } from './components/vin/vin.component';
import {
  MatAutocompleteModule,
  MatCheckboxModule, MatGridListModule,
  MatListModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSidenavModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, SidebarModule} from 'primeng/primeng';
import {ReactiveFormsModule} from '@angular/forms';
import { NavDrawerMiniComponent } from './components/nav-drawer-mini/nav-drawer-mini.component';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule
} from 'igniteui-angular';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {VinEffects} from './components/vin/store/effects/vin.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StatisticComponent,
    ChartComponent,
    VinsComponent,
    SearchComponent,
    VinComponent,
    NavDrawerMiniComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    UserModule,
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([UserEffects, AuthEffects, VinEffects]),
    MatSidenavModule,
    MatCheckboxModule,
    SidebarModule,
    ButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    MatAutocompleteModule,
    SharedModule,
    MatListModule,
    HttpClientModule,
    MatProgressBarModule,
    ChartsModule,
    MatGridListModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
