let logDebug = function(){
  let absolutePathsOfAllHtmlFilesInProvidedDir = htmlsDebug.split(',');
  let fileName = this.constructor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1.').toLowerCase();
  let fileNameDelimitedArr = fileName.split('.');
  fileName =
    fileNameDelimitedArr.slice(0, fileNameDelimitedArr.length-1).join('-') + '.component.html';
  let absolutePath = absolutePathsOfAllHtmlFilesInProvidedDir.find(name=>name.includes(fileName));
  return 'vscode://file/'+ absolutePath;
};

function openFileInVsCode(path) {
  window.open('vscode://file/'+ path, "_self");
}
let myNameDebug = function myName() {
  return this.constructor.name;
};

function findPathByFileName(fileName){
  let absolutePathsOfAllHtmlFilesInProvidedDir = htmlsDebug.split(',');
  // let fileName = this.constructor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1.').toLowerCase();
  let fileNameDelimitedArr = fileName.toLowerCase().split('-');
  fileName =
    fileNameDelimitedArr.slice(0, fileNameDelimitedArr.length).join('-') + '.component.html';
  fileName = fileName.replace('app-','');
  return absolutePathsOfAllHtmlFilesInProvidedDir.find(name=>name.includes(fileName));
}

Object.defineProperty(Object.prototype, 'logDebug', {value: logDebug, writable: false, enumerable: false});
Object.defineProperty(Object.prototype, 'myNameDebug', {value: myNameDebug, writable: false, enumerable: false});

let startWithAppRegex = new RegExp('^app-','i');
document.addEventListener('dblclick',($event)=>{
  let element = $event.target;
  while (!startWithAppRegex.test(element.tagName)){
    element = element.parentElement;
  }

  let absolutePath = findPathByFileName(element.tagName);
  openFileInVsCode(absolutePath);

});
