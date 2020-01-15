function openPage() {
  copy("this is a test");
  alert("hello");
  console.log("testing");
  navigator.clipboard.writeText("<empty clipboard>").then(function() {
  /* clipboard successfully set */
    console.log("success");
  }, function() {
  /* clipboard write failed */
    console.log("failure");
  });
}



browser.browserAction.onClicked.addListener(openPage);
