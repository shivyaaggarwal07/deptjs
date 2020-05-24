function validate(){
var noticeHeading = document.getElementById("inoticeHeading");
var uploadImage = document.getElementById("iuploadImage");
var validity = document.getElementById("ivalidity");
var uploadButton = document.getElementById("iupload");
var cancleButton = document.getElementById("icancle");

var today = new Date().toJSON();
var formData={
    "noticeHeading" : noticeHeading.value,
    "uploadImage" : uploadImage.value,
    "validity" :validity.value,
    "uploadedon" : today

};
firebase.database().ref('gndu-amritsar/noticecreation/' + noticeHeading.value).push(formData).then(function(){
    alert("You have succesfully notice creation.");
});
}