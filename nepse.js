const allCompanies = require("./all")
const { cdx, rdx, bdx, ndx, mdx } = require("./algorithms")

/* 
  Algorithm to generate value for 'Authorization' header.
  Request with invalid value for the header will return with status 401
*/
const generateNewToken = (e) => {
  const n1 = cdx(e.salt1, e.salt2, e.salt3, e.salt4, e.salt5);
  const n2 = rdx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5);
  const n3 = bdx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5);
  const n4 = ndx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5);
  const n5 = mdx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5);

  const authorizationKey = e.accessToken.slice(0, n1) + e.accessToken.slice(n1 + 1, n2) + e.accessToken.slice(n2 + 1, n3) + e.accessToken.slice(n3 + 1, n4) + e.accessToken.slice(n4 + 1, n5) + e.accessToken.slice(n5 + 1);
  return authorizationKey;
}

// Needed for id payload (body)
const dummyData = [
  147, 117, 239, 143, 157, 312, 161, 612, 512, 804,
  411, 527, 170, 511, 421, 667, 764, 621, 301, 106,
  133, 793, 411, 511, 312, 423, 344, 346, 653, 758,
  342, 222, 236, 811, 711, 611, 122, 447, 128, 199,
  183, 135, 489, 703, 800, 745, 152, 863, 134, 211,
  142, 564, 375, 793, 212, 153, 138, 153, 648, 611,
  151, 649, 318, 143, 117, 756, 119, 141, 717, 113,
  112, 146, 162, 660, 693, 261, 362, 354, 251, 641,
  157, 178, 631, 192, 734, 445, 192, 883, 187, 122,
  591, 731, 852, 384, 565, 596, 451, 772, 624, 691
];

// Ignore certificate validation
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


// Return id from symbol
const idFromSymbol = (symbol) => {
  const id = allCompanies[symbol];
  return id;
}


const getCompanyInfo = async (symbol) => {

  // Validate symbol and get corresponding id
  const id = idFromSymbol(symbol);
  if (!id) {
    console.log("Invalid Symbol");
    return;
  };

  // Get accessToken and salts[1..5]
  const res = await fetch("https://nepalstock.com.np/api/authenticate/prove");
  const resJson = await res.json();

  // Generate value for 'Authorization' Header
  const authorization = "Salter " + generateNewToken(resJson);

  // Required Headers
  const headers = {
    "Authorization": authorization,
    "Content-Type": "application/json",
    "Host": "nepalstock.com.np"
  };

  // Get market status + an 'id'
  const res1 = await fetch("https://www.nepalstock.com/api/nots/nepse-data/market-open", {
    headers: headers
  });
  const marketStatus = await res1.json();

  // Required for 'id' payload (body)
  const day = new Date().getDate();

  // Get id for payload (body)
  dummyId = dummyData[marketStatus.id] + marketStatus.id + 2 * day;

  const body1 = JSON.stringify({ "id": dummyId });

  // Get info about company
  const raw = await fetch("https://nepalstock.com.np/api/nots/security/" + id, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Length": body1.length.toString(),
    },
    body: body1, // the payload
  });
  const content = await raw.json();

  console.log(content);
}


// USAGE: getCompanyInfo("Symbol")
getCompanyInfo("NICA");