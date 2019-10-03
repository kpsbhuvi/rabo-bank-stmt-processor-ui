import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Observable, Subject } from 'rxjs';
import{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StmtUploadComponent } from './stmt-upload/stmt-upload.component';
import { FailedstmtsComponent } from './failedstmts/failedstmts.component';


@NgModule({
  declarations: [
    AppComponent,
    StmtUploadComponent,
    FailedstmtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
