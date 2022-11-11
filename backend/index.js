const express = require("express");
const data = require("./data");
const app = express();

// app.get("/", (request, response) => {
//   response.send({
//     data: [
//       {
//         name: "Mixmax",
//         budget_name: "Software subscription",
//         owner_id: 1,
//         spent: {
//           value: 100,
//           currency: "SGD",
//         },
//         available_to_spend: {
//           value: 1000,
//           currency: "SGD",
//         },
//         card_type: "burner",
//         expiry: "9 feb",
//         limit: 100,

//         status: "active",
//       },
//       {
//         name: "QuickBooks",
//         budget_name: "Software subscription",
//         owner_id: 2,
//         spent: {
//           value: 100,
//           currency: "SGD",
//         },
//         available_to_spend: {
//           value: 1000,
//           currency: "SGD",
//         },
//         card_type: "subscription",
//         expiry: "9 feb",
//         limit: 100,

//         status: "inactive",
//       },
//       {
//         name: "Motion",
//         budget_name: "Software subscription",
//         owner_id: 3,
//         spent: {
//           value: 100,
//           currency: "SGD",
//         },
//         available_to_spend: {
//           value: 1000,
//           currency: "SGD",
//         },
//         card_type: "burner",
//         expiry: "9 feb",
//         limit: 100,

//         status: "active",
//       },
//       {
//         name: "Pandadoc",
//         budget_name: "Software subscription",
//         owner_id: 3,
//         spent: {
//           value: 100,
//           currency: "SGD",
//         },
//         available_to_spend: {
//           value: 1000,
//           currency: "SGD",
//         },
//         card_type: "subscription",
//         expiry: "9 feb",
//         limit: 100,

//         status: "inactive",
//       },
//       {
//         name: "Xero",
//         budget_name: "Software subscription",
//         owner_id: 1,
//         spent: {
//           value: 100,
//           currency: "SGD",
//         },
//         available_to_spend: {
//           value: 1000,
//           currency: "SGD",
//         },
//         card_type: "subscription",
//         expiry: "9 feb",
//         limit: 100,

//         status: "active",
//       },
//       {
//         name: "Mookambika",
//         budget_name: "Software subscription",
//         owner_id: 2,
//         spent: {
//           value: 100,
//           currency: "SGD",
//         },
//         available_to_spend: {
//           value: 1000,
//           currency: "SGD",
//         },
//         card_type: "subscription",
//         expiry: "9 feb",
//         limit: 100,

//         status: "active",
//       },
//     ],
//   });
// });

app.use("/", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const filters = req.query;
  const filteredUsers = data.filter((user) => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
});

app.listen(4000);
