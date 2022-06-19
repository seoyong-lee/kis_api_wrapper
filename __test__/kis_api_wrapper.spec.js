/* global describe, it, expect, beforeEach, afterEach */

import fixtures from "./fixtures";
import Q from "q";

describe("Basic tests", function () {
  // var that = this;
  // beforeEach(function () {
  //   that.requests = [];
  //   that.xhr = sinon.useFakeXMLHttpRequest();
  //   that.xhr.onCreate = function (xhr) {
  //     that.requests.push(xhr);
  //   };
  // });
  // afterEach(function () {
  //   that.xhr.restore();
  // });
  // describe("Using callbacks", function () {
  //   it("should get a track", function () {
  //     // var callback = sinon.spy();
  //     // var api = new SpotifyWebApi();
  //     api.getTrack("3Qm86XLflmIXVm1wcwkgDK", callback);
  //     that.requests[0].respond(
  //       200,
  //       { "Content-Type": "application/json" },
  //       JSON.stringify(fixtures.track)
  //     );
  //     expect(callback.calledWith(null, fixtures.track)).toBeTruthy();
  //     expect(that.requests.length).toBe(1);
  //     expect(that.requests[0].url).toBe(
  //       "https://api.spotify.com/v1/tracks/3Qm86XLflmIXVm1wcwkgDK"
  //     );
  //   });
  // });
});
