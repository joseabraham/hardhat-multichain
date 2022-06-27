import { HardhatUserConfig } from "hardhat/config";

//@ts-ignore
require('dotenv').config();
let fantomURL = process.env.FANTOM_URL || "";
console.log("fantomURL", fantomURL)

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {            
            chainId: 250,
            mining: {
                auto: false,
                interval: 500,
            },               
            forking: {                
                url: fantomURL,                                
            },
            accounts:{
                "mnemonic": "test test test test test test test test test test test junk",
                "accountsBalance": "10000000000000000000000",
                "count":20,
                "passphrase": "iamyourwallet"
            }
        },
    },
};
export default hardhatConfig;