// ==UserScript==
// @author              Scott Cowan
// @name                Google Reader Minimalistic
// @namespace           http://google.com/reader/userscript
// @description         Removes all the whitespace from Google Reader and just gives you the news
// @include             http://google.com/reader/*
// @include             http://*.google.com/reader/*
// @include             https://google.com/reader/*
// @include             https://*.google.com/reader/*
// @include             https://google.co.uk/reader/*
// @include             https://*.google.co.uk/reader/*
// ==/UserScript==
// Google Reader Minimalistic
// Scott Cowan http://userscripts.org/users/32932

(function() {
  var ids = ["top-bar", "lhn-add-subscription-section"];

  function toggle_gr ()
  {
    var length = ids.length;
    var is_visible = document.getElementById(ids[0]).style.display != "none";

    for (var i=0; i<length; i++){
      if(document.getElementById(ids[i]) != null)
        document.getElementById(ids[i]).style.display = is_visible?"none":"block";
    }
  }

  function GRT_key(event) {
    element = event.target;
    elementName = element.nodeName.toLowerCase();
    if (elementName == "input") {
      typing = (element.type == "text" || element.type == "password");
    } else {
      typing = (elementName == "textarea");
    }
    if (typing) return true;
    if (String.fromCharCode(event.which)=="W" && !event.ctrlKey && !event.altKey && !event.metaKey) {
      toggle_gr();
      try {
        event.preventDefault();
      } catch (e) {
      }
      return false;
    }
    return true;
  }

  document.addEventListener("keydown", GRT_key, false);
  toggle_gr();

  var accountname = document.getElementById('email-address');
  document.title = document.title + " | " + accountname.innerHTML + " | ";
 
})();
