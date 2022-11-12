const data = [
  {
    id: 1,
    name: "Mixmax",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 1000,
      currency: "SGD",
    },
    available_to_spend: {
      value: 0,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "21 jan",
    limit: 100,

    status: "active",
  },
  {
    id: 2,
    name: "QuickBooks",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 0,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "9 feb",
    limit: 100,

    status: "inactive",
  },
  {
    id: 3,
    name: "Motion",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 130,
      currency: "SGD",
    },
    available_to_spend: {
      value: 870,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "10 may",
    limit: 100,

    status: "active",
  },
  {
    id: 4,
    name: "Pandadoc",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 300,
      currency: "SGD",
    },
    available_to_spend: {
      value: 700,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "11 dec",
    limit: 100,

    status: "inactive",
  },
  {
    id: 5,
    name: "Xero",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 500,
      currency: "SGD",
    },
    available_to_spend: {
      value: 500,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "22 june",
    limit: 100,

    status: "active",
  },
  {
    id: 6,
    name: "Mookambika",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 50,
      currency: "SGD",
    },
    available_to_spend: {
      value: 950,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "31 july",
    limit: 100,

    status: "active",
  },
  {
    id: 7,
    name: "Sri harsha",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 200,
      currency: "SGD",
    },
    available_to_spend: {
      value: 800,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "2 mar",
    limit: 100,

    status: "inactive",
  },
  {
    id: 8,
    name: "Saswath",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 400,
      currency: "SGD",
    },
    available_to_spend: {
      value: 600,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,

    status: "active",
  },
  {
    id: 9,
    name: "Yuvaraj",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 600,
      currency: "SGD",
    },
    available_to_spend: {
      value: 400,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "6 aug",
    limit: 100,

    status: "active",
  },
  {
    id: 10,
    name: "Sairaja",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 700,
      currency: "SGD",
    },
    available_to_spend: {
      value: 300,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,

    status: "inactive",
  },
  {
    id: 11,
    name: "Maniroyal",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 900,
      currency: "SGD",
    },
    available_to_spend: {
      value: 100,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "13 july",
    limit: 100,

    status: "inactive",
  },
  {
    id: 12,
    name: "vinay",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 900,
      currency: "SGD",
    },
    available_to_spend: {
      value: 100,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "17 sep",
    limit: 100,

    status: "active",
  },
  {
    id: 13,
    name: "Evananda",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 150,
      currency: "SGD",
    },
    available_to_spend: {
      value: 850,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "27 apr",
    limit: 100,

    status: "inactive",
  },
  {
    id: 14,
    name: "Krishna sai",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 350,
      currency: "SGD",
    },
    available_to_spend: {
      value: 650,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "30 oct",
    limit: 100,

    status: "inactive",
  },
  {
    id: 15,
    name: "Bhaskar",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 1000,
      currency: "SGD",
    },
    available_to_spend: {
      value: 0,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,

    status: "active",
  },
  {
    id: 16,
    name: "Neeraj",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 1000,
      currency: "SGD",
    },
    available_to_spend: {
      value: 0,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "19 nov",
    limit: 100,

    status: "active",
  },
  {
    id: 17,
    name: "Hari anooz",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 0,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "21 dec",
    limit: 100,

    status: "inactive",
  },
  {
    id: 18,
    name: "Karthik",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 30,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "9 feb",
    limit: 100,

    status: "inactive",
  },
  {
    id: 19,
    name: "Ajay",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "11 may",
    limit: 100,

    status: "inactive",
  },
  {
    id: 20,
    name: "Cherith",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 700,
      currency: "SGD",
    },
    available_to_spend: {
      value: 300,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "9 feb",
    limit: 100,

    status: "active",
  },
];

module.exports = data;
