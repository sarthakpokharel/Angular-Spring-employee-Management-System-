import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component'

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
