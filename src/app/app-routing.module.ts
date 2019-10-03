import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StmtUploadComponent } from './stmt-upload/stmt-upload.component';

const routes: Routes = [{path: '', redirectTo: 'stmt', pathMatch: 'full'},
{path: 'stmt', component: StmtUploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
