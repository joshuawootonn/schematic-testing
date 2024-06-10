"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var import_schematic_typescript_node = require("@schematichq/schematic-typescript-node");
console.log("nice ok!!!");
var apiKey = "";
var client = new import_schematic_typescript_node.Schematic(apiKey);
function app() {
  return __async(this, null, function* () {
    const a = yield client.checkFlag(
      // { company: { id: "comp_WfYBF22r9hU" } },
      {
        company: {
          id: "V29ya3NwYWNlOjhhOWYzNTI3LTg3NmYtNDhjMC1hOTg2LTIxMTU5MmJmZGY5ZQ=="
        }
        // user: {
        //   userId: "VXNlcjpnb29nbGUtb2F1dGgyfDEwOTk0NjE4MDcxOTMxMDQzMTQ2Mg==",
        // },
      },
      "bynder-integration"
    );
    console.log(`


value: ${a}

`);
    client.close();
  });
}
app();
