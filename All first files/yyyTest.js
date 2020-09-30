"use strict";
/* global camelize assert camelize */

describe("camel-case", function () {


    it("checks for camelCase", function () {
        assert.equal("lifeStyle", camelize("life-style"));
    });


});