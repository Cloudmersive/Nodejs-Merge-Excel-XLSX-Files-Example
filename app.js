console.log("Hello World");

const fs = require('fs');

var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = '6639dfa5-7973-488f-a551-291207ecb6e6';



var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = Buffer.from(fs.readFileSync("spreadsheet1.xlsx").buffer); // File | First input file to perform the operation on.

var inputFile2 = Buffer.from(fs.readFileSync("spreadsheet2.xlsx").buffer); // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else 
  {
    fs.writeFile("./output.xlsx", data, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
    console.log('API called successfully.');
  }
};
apiInstance.mergeDocumentXlsx(inputFile1, inputFile2, callback);