import { HardhatUserConfig } from "hardhat/config";

//@ts-ignore
require('dotenv').config();
let avalancheURL = process.env.AVAX_URL || "";
console.log("avalancheURL", avalancheURL)

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {            
            chainId: 43114,
            mining: {
                auto: false,
                interval: 200,
            },               
            forking: {                
                url: avalancheURL,                                
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