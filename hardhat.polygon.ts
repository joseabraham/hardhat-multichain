import { HardhatUserConfig } from "hardhat/config";

//@ts-ignore
require('dotenv').config();

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {            
            chainId: 1137,
            mining: {
                auto: false,
                interval: 500,
            },               
            forking: {
                //@ts-ignore
                url: process.env.POLYGON_URL,
                // blockNumber: 2776603,                
            }, 
        },
    },
};
export default hardhatConfig;