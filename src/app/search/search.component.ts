import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  empcode=""
  searchData:any=[]
  constructor(private api:ApiService){}
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

}
