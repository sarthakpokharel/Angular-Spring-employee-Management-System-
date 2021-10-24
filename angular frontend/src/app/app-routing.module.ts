import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
{
  path: 'list',
  component: ListEmployeesComponent
},
{
  path: 'add',
  component: AddEmployeesComponent
},
{
  path: 'employee-details/:id',
  component: EmployeeDetailsComponent
},
{
  path: 'edit/:id',
  component: EditEmployeesComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
