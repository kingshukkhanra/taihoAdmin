// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // baseUrl: 'https://managebotconfig.azurewebsites.net',
  //getConfigByDomainUrl:'https://managebotconfig.azurewebsites.net/api/getConfigByDomain',//[GET, domainName=People]
  //saveConfigbyDomainUrl:'https://managebotconfig.azurewebsites.net/api/saveConfigbyDomain',   //POST//
  //createDomainUrl:'https://managebotconfig.azurewebsites.net/api/putConfig', //[POST, domainName=People, helpMessage = my help message, etc etc.....]
  deleteConfigbyDomainUrl:'https://managebotconfig.azurewebsites.net',//delete//

  baseUrl: 'https://managebotconfig.azurewebsites.net/api/getDomainNames',
  getConfigByDomainUrl:'https://managebotconfig.azurewebsites.net/api/getConfigByDomainName',
  getReasonUrl:'https://managebotconfig.azurewebsites.net/api/getItemByName',
  updateDomainUrl:'https://managebotconfig.azurewebsites.net/api/updateDomainConfigs'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
