import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
import { Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import Swal from 'sweetalert2';
import { AdmindataService } from '../../_services/admindata.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html',
  styleUrls: ['./create-domain.component.scss']
})
export class CreateDomainComponent implements OnInit {

  setsetting:string = 'basic';
  domainName:string;
  userForm:FormGroup;
  constructor( private adminSvc:AdmindataService) { }
  value: number = 0.5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0.0 },
      { value: 0.1 },
      { value: 0.2 },
      { value: 0.3 },
      { value: 0.4 },
      { value: 0.5 },
      { value: 0.6 },
      { value: 0.7 },
      { value: 0.8 },
      { value: 0.9 },
      { value: 1.0 }
    ]
  };
   
  ngOnInit(): void {
    this.getDefaultFormValue();
  }

  getDefaultFormValue(){
    this.userForm = new FormGroup({
      domainName : new FormControl('',[Validators.required]),
      domainLabel : new FormControl('',[Validators.required]),
      knowledgebaseId : new FormControl('',[Validators.required]),
      knowledgeBaseEndpointKey : new FormControl('',[Validators.required]),
      host : new FormControl('',[Validators.required]),
      primaryEmailContact : new FormControl('',[Validators.required]),
      secondaryEmailContact : new FormControl('',[Validators.required]),
      helpText : new FormControl('',[Validators.required]),
      maxResponsesInSearch : new FormControl('',[Validators.required]),
      lookbackTimeForLog : new FormControl('',[Validators.required])
    });
  }

  changeSettings(val:string){
      this.setsetting = val;
  }


  updateData(domainName,domainLabel,knowledgeBaseId,knowledgeBaseEndpointKey,confidenceThreshold,host,primaryEmailContact,
             secondaryEmailContact,helpText,maxResponsesInSearch,lookbackTimeForLog,domainIsActive){
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  let active = (domainIsActive.checked)?"y":"n";
  let domainDetailsObj = {
    "domainName":domainName.value,
    "domainLabel":domainLabel.value,
    "domainIsActive":active,
    "knowledgeBaseId":knowledgeBaseId.value,
    "knowledgeBaseEndpointKey":knowledgeBaseEndpointKey.value,
    "confidenceThreshold":confidenceThreshold.value,
    "host":host.value,
    "primaryEmailContact":primaryEmailContact.value,
    "secondaryEmailContact":secondaryEmailContact.value,
    "helpText":helpText.value,
    "lookbackTimeForLog":lookbackTimeForLog.value,
    "maxResponsesInSearch":maxResponsesInSearch.value
  }
  this.adminSvc.updateSelectedDomainDetails(domainName,domainDetailsObj).subscribe(data=>{
    console.log(data);
  });
  Swal.fire({
    text:' New Domain Sucessfully Created',
    icon:'success'
  });
  console.log(domainDetailsObj);
}


/////////////////////////////////////////////////////////////////////////////////////////
// dropdownList = [];
// selectedItems = [];
// dropdownSettings:IDropdownSettings = {};

// getDropDownlist(){
//   this.dropdownList = [
//     { item_id: 1, item_text: 'Mumbai' },
//     { item_id: 2, item_text: 'Bangaluru' },
//     { item_id: 3, item_text: 'Pune' },
//     { item_id: 4, item_text: 'Navsari' },
//     { item_id: 5, item_text: 'New Delhi' }
//   ];
// }
// getSelectedReasons(){
//   this.selectedItems = [
//     { item_id: 3, item_text: 'Pune' },
//     { item_id: 4, item_text: 'Navsari' }
//   ];
// }
// getDropdownFeatures(){
//   this.dropdownSettings = {
//     singleSelection: false,
//     idField: 'item_id',
//     textField: 'item_text',
//     selectAllText: 'Select All',
//     unSelectAllText: 'UnSelect All',
//     itemsShowLimit: 3,
//     allowSearchFilter: true
//   };
// }

}
