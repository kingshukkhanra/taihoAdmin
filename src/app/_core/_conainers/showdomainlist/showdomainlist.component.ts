import { SendvalueService } from './../../_services/sendvalue.service';
import { AdmindataService } from './../../_services/admindata.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
import { Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-showdomainlist',
  templateUrl: './showdomainlist.component.html',
  styleUrls: ['./showdomainlist.component.scss']
})
export class ShowdomainlistComponent implements OnInit {
  selectedDomainName:any='People';
  data:any = [];
  showForm:boolean=false;
  userForm:FormGroup;
  constructor(private adminSvc:AdmindataService,private router:Router)  { }
   

  ngOnInit(): void {
     this.getDomain();
     this.router.navigate([`showdetails/People`]);
  }
  ///////////////////////////////////////////////////
  // value: number = 0.5;
  // options: Options = {
  //   showTicksValues: true,
  //   stepsArray: [
  //     { value: 0.0 },
  //     { value: 0.1 },
  //     { value: 0.2 },
  //     { value: 0.3 },
  //     { value: 0.4 },
  //     { value: 0.5 },
  //     { value: 0.6 },
  //     { value: 0.7 },
  //     { value: 0.8 },
  //     { value: 0.9 },
  //     { value: 1.0 }
  //   ]
  // };

  //////////////////////////////////////////////////
  getDomain(){
     this.adminSvc.getDomainName().subscribe(a=>{
      this.data = a;
      });
  }

  onDomainClick(domain:string){
   this.router.navigate([`showdetails/${domain}`]);
   this.selectedDomainName = domain;
  }
  onNewDomainClick(newDomain:String){
     this.router.navigate(['newDomain']);
     this.selectedDomainName = 'newDomain';
  }


 


}
