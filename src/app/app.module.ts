import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsModule } from './items/modules/items.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmationModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ItemsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
