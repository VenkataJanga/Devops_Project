import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
  employees: any[] = [];
  //employees!: Observable<ApiResponse>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {
      
    }

    ngOnInit() {
      //this.employees = this.employeeService.getEmployees();
      this.getEmployees();
      $('#datatable-example').DataTable();
      
    }
    getEmployees() {
      this.employeeService.getEmployees().subscribe(data => {
        this.employees = data;
      });
    }

    deleteEmployee(id:number){
      // this.employeeService.deleteEmployee(id).subscribe(
      //   data=>{console.log(data);
      //   this.employees = this.employeeService.getEmployees();
      //   },
      //   error=>console.log(error));

        this.employeeService.deleteEmployee(id).subscribe(() => {
          this.getEmployees();
        });
    }

    updateEmployee(id:number){
      this.router.navigate(['update',id])
    }

}
