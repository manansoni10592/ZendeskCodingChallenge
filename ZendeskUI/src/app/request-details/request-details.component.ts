import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { RequestData } from '../models/RequestModel';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  id:number;
  currReq:RequestData;
  constructor(private route: ActivatedRoute, private router:Router, private rs: RequestService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.currReq = this.rs.allRequests.filter(req=>
      req.id == this.id)[0];
    
  }

}
