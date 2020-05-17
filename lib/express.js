var express = require("express");

/**
 * express on modern class.
 *
 * @returns {import("express").Application} - express class.
 */
function App () {
    return express();
}

exports.App = App;
