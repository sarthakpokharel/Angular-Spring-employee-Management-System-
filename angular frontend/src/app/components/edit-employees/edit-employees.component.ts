import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployees(this.id, this.employee).subscribe(
      (data) => {
        this.goToList()
      },
      error => console.log(error)      
    )
  }

  goToList(){
    this.router.navigate(['/list'])
  }

}
