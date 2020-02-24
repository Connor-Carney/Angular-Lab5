import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import {InterestService} from './Services/interest.service';

@NgModule({
  declarations: [
    AppComponent,
    SavingsComponent,
    MortgageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [InterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
