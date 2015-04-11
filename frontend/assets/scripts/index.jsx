'use strict';

import React from 'react';
import App from './App.jsx';
//import $ from 'jquery';

React.render(<App />, document.getElementById("mount"));

$(document).ready(function() {
    $.material.init();
});
