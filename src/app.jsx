// Polyfill
import "babel-core/polyfill";

// Libraries
import React from "react";

// Componets
import HelloWorld from "./components/HelloWorld"

// Render
React.render(<HelloWorld />, document.getElementById("app"));
