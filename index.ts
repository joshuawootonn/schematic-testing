console.log("nice ok!!!");

import { Schematic } from "@schematichq/schematic-typescript-node";

//TODO: Replace with your API key
const apiKey = "";
const client = new Schematic(apiKey);

async function app() {
  const a = await client.checkFlag(
    // { company: { id: "comp_WfYBF22r9hU" } },
    {
      company: {
        id: "V29ya3NwYWNlOjhhOWYzNTI3LTg3NmYtNDhjMC1hOTg2LTIxMTU5MmJmZGY5ZQ==",
      },
      // user: {
      //   userId: "VXNlcjpnb29nbGUtb2F1dGgyfDEwOTk0NjE4MDcxOTMxMDQzMTQ2Mg==",
      // },
    },
    "bynder-integration",
  );

  console.log(`


value: ${a}

`);
  client.close();
}

app();
