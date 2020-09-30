"use strict";
/* global filterLongWords assert filterLongWords */

describe("filter words that are greaterthan i", function() {

    it("filters words that are greaterthan i", function() {
      assert.equal("hello",filterLongWords(["hi", "hello"], 3));
    });
  

  });