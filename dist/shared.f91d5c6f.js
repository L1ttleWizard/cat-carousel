/*! For license information please see shared.f91d5c6f.js.LICENSE.txt */
"use strict";!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.Cookies=o():e.Cookies=o()}(self,(()=>(self.webpackChunkCookies=self.webpackChunkCookies||[]).push([["shared"],{647:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getCookie": () => (/* binding */ getCookie)\n/* harmony export */ });\nfunction getCookie(name) { // function to get the value of a cookie\r\n  let cookieValue = "";\r\n  const cookies = document.cookie; // split all cookies into an array\r\n  console.log(cookies);\r\n  // cookies.forEach((cookie) => { // loop through each cookie\r\n  //   let [cookieName, cookieVal] = cookie.split("="); // get cookie\'s name and value\r\n  //   cookieName = cookieName.trim(); // remove leading/trailing whitespaces\r\n\r\n  //   if (cookieName === name) { // if cookie\'s name is the required one\r\n  //     cookieValue = cookieVal; // save its value\r\n  //   }\r\n  // });\r\n\r\n  return cookieValue; // return cookie\'s value\r\n}\r\n\n\n//# sourceURL=webpack://Cookies/./src/js/shared.js?')}},e=>{var o;return o=647,e(e.s=o)}])));