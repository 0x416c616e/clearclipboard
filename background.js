function openPage() {
  console.log("the popup specified in manifest.json does what used to be here");
}

browser.browserAction.onClicked.addListener(openPage);
