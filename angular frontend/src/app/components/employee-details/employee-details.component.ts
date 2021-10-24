import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id! : number;
  employee!: Employee 

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe( (data) => {
      this.employee = data;
    });
  }
  
  }
