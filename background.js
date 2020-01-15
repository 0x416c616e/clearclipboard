// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'alert("Hello")'
  });
  clearClipboard();
});

async function clearClipboard() {
  try {
    await navigator.clipboard.writeText('');
    console.log('Cleared clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
