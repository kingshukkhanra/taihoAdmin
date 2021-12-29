import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
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
  ReasonList:any=[];
  ReasonListNew:any = [];
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
    this.getReasonValues();
  }

  getReasonValues(){
    this.adminSvc.getReasonValue().subscribe(data=>{
      let temp = data[0].value;
      this.ReasonList = temp.split(",");
      for(let i=0;i<this.ReasonList.length;i++){
          this.ReasonListNew.push({item_id:i+1,item_text:this.ReasonList[i]});
      }
    });
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
      lookbackTimeForLog : new FormControl('',[Validators.min(1),Validators.required]),
      reason : new FormControl(this.selectedReasons)
    });
  }

  changeSettings(val:string){
      this.setsetting = val;
  }

  updateData(domainName,domainLabel,knowledgeBaseId,knowledgeBaseEndpointKey,confidenceThreshold,host,primaryEmailContact,
             secondaryEmailContact,helpText,maxResponsesInSearch,lookbackTimeForLog,domainIsActive,reasons){
 
  let active = (domainIsActive.checked)?"y":"n";
  let domainDetailsObj = {
    "domainName":domainName.value,
    "domainLabel":domainLabel.value,
    "isDomainActive":active,
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
  console.log(domainDetailsObj);
  Swal.fire({
    text:' New Domain Sucessfully Created',
    icon:'success'
  });
}


/////////////////////////////////////////////////////////////////////////////////////////
selectedReasons = [ 
  {item_id: 3, item_text: ' Irrelevant Results'},
  {item_id: 1, item_text: 'No Results'}
];
dropdownSettings:IDropdownSettings = {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 3,
  allowSearchFilter: true
};
onItemSelect(item: any) {
  //console.log(item);
  this.selectedReasons.push(item);
  console.log(this.selectedReasons);
}
onSelectAll(items: any) {
  //console.log(items);
  this.selectedReasons.push(items);
  console.log(this.selectedReasons);
}
//////////////////////////////////////////////////////////////////////////////////////////

}
