console.log("Starting");

const fs = require('fs');

var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = '6639dfa5-7973-488f-a551-291207ecb6e6';



var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = (fs.readFileSync("spreadsheet1.xlsx")); // File | First input file to perform the operation on.
console.log("File 1 loaded ... " + inputFile1.byteLength);

var inputFile2 = (fs.readFileSync("spreadsheet2.xlsx")); // File | Second input file to perform the operation on (more than 2 can be supplied).
console.log("File 2 loaded ... " + inputFile2.byteLength);

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