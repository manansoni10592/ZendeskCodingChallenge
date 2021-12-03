import {Component, OnInit, ViewChild } from '@angular/core';
import { RequestAPIData } from '../models/RequestAPIModel';
import { RequestService } from '../request.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { LoginData } from '../models/LoginData';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  isError:boolean = false;
  errormsg:string = "";
  apiData:RequestAPIData;
  loginData:LoginData;
  displayedColumns: string[] = ['id', 'subject', 'status', 'created_at'];
  dataSource: MatTableDataSource<any>;
  resultsLength:number;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private rs:RequestService) { }


  ngOnInit() {
    if(this.rs.auth_token == ""){
      this.rs.login().subscribe(data => {
        this.loginData = data;
        if(this.loginData.status == 200){
          this.rs.auth_token = this.loginData.auth_token;
          this.getRequests()
        }
        else{
          this.isError = true;
          this.errormsg = this.loginData.error;
        }
      })
    }
    else{
      this.getRequests();
    }    
      
  }

  getRequests(){
    this.rs.getRequests(this.rs.auth_token).subscribe(data=>{
      this.apiData = data;
      if (this.apiData.status == 200){
        this.rs.allRequests = this.apiData.requests["requests"];
        //console.log(this.rs.allRequests)
        //this.rs.numOfrequests = this.apiData.requests["count"];
        this.resultsLength = this.apiData.requests["count"];
        this.dataSource = new MatTableDataSource(this.rs.allRequests);
        this.dataSource.paginator = this.paginator;
      }
      else{
        this.isError = true;
        this.errormsg = this.apiData.error;
      }
    }); 
  }
}
