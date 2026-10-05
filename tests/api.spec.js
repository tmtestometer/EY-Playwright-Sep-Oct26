import { test, expect } from '@playwright/test';



//   test("get api",  async ({ request }) => {
//     let url = "https://api.restful-api.dev/objects";
//     let response = await request.get(url)

//     console.log(response.status());
//     expect.soft(response.status()).toBe(201);
//     console.log(await response.json());
//   });


// 100 testcase
// 80 tc 

// 20 tc

test.describe.configure(
    {mode:'serial'}
)
test.describe(() => {
        let assetID = "";
        test("post api",  async ({ request }) => {
                let url = "https://api.restful-api.dev/objects";
                let response = await request.post(url, {
                    headers : {
                        "content-type":"application/json",
                        "X-version": "v2"
                    },
                    data: {
                    "name": "Vaibhav Phone",
                    "data": {
                        "year": 2026,
                        "price": 2789.99,
                        "CPU model": "Intel Core i9",
                        "Hard disk size": "10 TB"
                    }
                    }
                });
            console.log(response.status());
            expect.soft(response.status()).toBe(200);
            let postJson = await response.json();
            console.log(postJson);
            assetID = postJson.id;
            console.log(assetID);    

        });
// update 
        test("put api",  async ({ request }) => {
                let url = "https://api.restful-api.dev/objects/"+assetID;
                let response = await request.put(url, {
                    headers : {
                        "content-type":"application/json"
                    },
                    data: {
                    "name": "Vaibhav Updated Phone",
                    "data": {
                        "year": 2026,
                        "price": 2789.99,
                        "CPU model": "Intel Core i9",
                        "Hard disk size": "10 TB",
                        "color": "silver"
                    }
                    }
                });
            console.log(response.status());
            expect.soft(response.status()).toBe(200);
            let postJson = await response.json();
            console.log(postJson);
        
        });

})

