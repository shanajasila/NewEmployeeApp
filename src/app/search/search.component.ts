import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  empcode=""
  searchData:any=[]
  constructor(private api:ApiService,private route:Router){}
  readValue=()=>{
    let data={"empcode":this.empcode}
    console.log(data)
    this.api.searchemployee(data).subscribe(
        (response:any)=>{
          console.log(response)
          if(response.length ==0){
            alert("invalid Employee code")
          }
          else{
            this.searchData=response;
          }
        }
    )
  }

  id=""
  deleteClick=(id:any)=>{

    let data:any={"id":id}
    console.log(data)
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.status="success"){
          alert("Employee deleted Successfully")
          this.searchData=[]
          this.empcode=""
          this.route.navigate(['/search'])
          
        }
        else{
          alert("Invalid employee code")
          this.empcode=""
        }
      }
    )
  }

}
