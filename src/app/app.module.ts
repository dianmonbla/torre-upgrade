import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './modules/layout/header/header.module';
import { FooterModule } from './modules/layout/footer/footer.module';

// Custom components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
