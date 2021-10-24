import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { convertCompilerOptionsFromJson } from 'typescript';
import {EmployeesService} from '../../employees.service'

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe((data)=>{
      console.log(data)
      this.goToEmployeeList()
    }, error => console.log(error)
    )
  }

  goToEmployeeList(){
    this.router.navigate(['/list'])
  }

  onSubmit(){
    console.log(this.employee)
    this.saveEmployee();
  }

}
