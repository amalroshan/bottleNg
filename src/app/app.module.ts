import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimBottleComponent } from './claim-bottle/claim-bottle.component';
import { VerifyPurchaseComponent } from './verify-purchase/verify-purchase.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClaimBottleComponent,
    VerifyPurchaseComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
