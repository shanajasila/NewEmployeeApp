import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  id=""
  empcode=""
  name=""
  designation=""
  salary=""
  companyname=""
  mobileno=""
  username=""
  password=""

  readValues=()=>{
    let data={"empcode":this.empcode,"name":this.name,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobileno":this.mobileno,"username":this.username,"password":this.password}
    console.log(data)
  }
}
