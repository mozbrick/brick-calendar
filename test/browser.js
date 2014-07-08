/* jshint expr: true */
/* global chai, before, describe, it */

var expect = chai.expect;

var ready;
before(function (done) {
  ready = done;
});

window.addEventListener('WebComponentsReady', function() {

  // Add the HTMLImport for the custom element.
  document.head.innerHTML += '<link rel="import" id="el" href="/base/src/brick-calendar.html">';

  document.querySelector('#el').addEventListener('load', function() {

    // Create the custom element.
    var customElement = document.createElement('brick-calendar');
    // customElement.setAttribute('attribute-value', attrbute);

    // Add the custom element to the page.
    // This will trigger the element's attachedCallback function.
    document.body.appendChild(customElement);

    ready();

  });
});

describe("the brick-calendar", function(){

  it("should be attached to the DOM", function(){
    expect(document.querySelector("brick-calendar")).not.to.be.null;
  });

});
