function removeUrlAnchorTag(url) {
    let splitUrl = url.split("");
    let newUrl = [];
    for(let i = 0; i < splitUrl.length; i++) {
      if(splitUrl[i] === "#") {
        return newUrl.join("");
      }
      else {
        newUrl.push(splitUrl[i]);
      }
      
      return newUrl.join("");
      
    }
  }