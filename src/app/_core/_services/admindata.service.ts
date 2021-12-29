import { createDomainModel } from 'src/app/_core/_models/create-domain-model.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  domainNameUrl:string = environment.baseUrl;
  domainDetailsUrl:string =environment.getConfigByDomainUrl;
  getReasonUrl:string = environment.getReasonUrl;
  updateDomainUrl:string = environment.updateDomainUrl
  //saveDomainUrl:string = environment.saveConfigbyDomainUrl;
  //createDomainUrl:string = environment.createDomainUrl;
  constructor(private apiSvc: ApiService ,private http:HttpClient) { }

getDomainName(){
    let path:string = this.domainNameUrl + '?code=weY6Onpi38ttGakOPpTSk3vIIxHrzrWGVlZ06QiQHG558PSEQz/W5A=='
    return this.apiSvc.get(path);
  }
getSelectedDomainDetails(domainName) {
  let path = this.domainDetailsUrl + '?code=aEadAKHKeaD5PesXAh1UZW3KYpQamwIAAJB6C70q51/TRaFzhAABow==&domainName=' + domainName;
  return this.apiSvc.get(path);
}

updateSelectedDomainDetails(domainName:string,updateDomainDetails:any){
  let headers = {'responseType':'text'};
  let path = this.updateDomainUrl+'?code=BU5gKdAJXas3AvbYoTvNR0gTpgaTwawbLXdfQOI6c0AJGzReBCNkLw==';
  // +domainName
  return this.apiSvc.post(path,updateDomainDetails,headers);
}
getReasonValue(){
  let Reason:string = 'Reason'
  let path = this.getReasonUrl + '?code=D7adEF5YYLpyFeauMJYQlZJoTSwPzUnVY3V/ZaafQ3PE/3B3ralGwg==&itemName=' + Reason;
  return this.apiSvc.get(path);
}

}
