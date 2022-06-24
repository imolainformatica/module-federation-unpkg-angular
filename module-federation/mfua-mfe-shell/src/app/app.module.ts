import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfuaHeaderComponent } from './shared/components/mfua-header/mfua-header.component';
import { MfuaFooterComponent } from './shared/components/mfua-footer/mfua-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MfuaHeaderComponent,
    MfuaFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
