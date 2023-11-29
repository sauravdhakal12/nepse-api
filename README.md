# Nepse API

## Usage

Enter valid symbol in nepse.js file (line 97)

```
  getCompanyInfo("Symbol")
```

Then: 
```
  node nepse.js
```

Result gets console.logged

<br>

## Working
- Request to " https://www.nepalstock.com/api/authenticate/prove
"
  - Response consists of **accessToken**, refreshToken and **salt[1...5]** among other things.

  - accessToken (which is 250 characters long) gets modified using some algorithm and salts; 5 characters are removed from it.

  - Thus, we a new 'key' gets generated that is 245 characters long. This new key is what allows us to fetch data from the NEPSE API.

  - The algorithm consists of 5 functions **(cdx, rdx, bdx, ndx and mdx)**. They perform series of mathematical operations to generate some numbers.

  - The original 'accessToken' is sliced up, based on the values of these 5 functions, and we end up with a new key.

<br>

- Request to "https://www.nepalstock.com/api/nots/nepse-data/market-open"
  - Response consist of "isOpen (Open/Close)", "asOf (date)" and an **"id"**. This 'id' is later required to generate payload. 

  - Store the current day of the month using getDate() method.

  - Then, a new integer gets generated as: 
  ```js
  const generatedId = dummyData[marketStatus.id] + marketStatus.id + 2 * day;
      
      //Here,    
      //  dummyData = an array of  integers.
      //  marketStatus.id = 'id' from first /market-open.
      //  day = From second step
  ```       
  - New JSON object as {"id": generatedId}

<br>

- Finally, request can be sent to "https://nepalstock.com.np/api/nots/security/[security_id]".
  - Request method is **"POST"** and request body consist of **JSON object** from final step above.

  - Authorization header is required which is **"Salter " + [new_key]** generated in Step 1.
  
  - Some other headers are also required.

  - Response consist of JSON object with info about requested security.
  