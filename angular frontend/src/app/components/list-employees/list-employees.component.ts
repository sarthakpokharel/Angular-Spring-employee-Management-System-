import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import  { EmployeesService } from "../../employees.service"


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees!: Employee[];

  constructor(private employee: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee(){
    this.employee.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['/edit', id])
  }  

  deleteEmployee(id: number){
    this.employee.deleteEmployee(id).subscribe ((data) => {
      console.log(data)
      this.getEmployee() 
    })
  }

  viewDetails (id: number){
    this.router.navigate(['/employee-details', id])  
  }
}
