import { HardhatUserConfig } from "hardhat/config";

//@ts-ignore
require('dotenv').config();
let polygonURL = process.env.POLYGON_URL || "";

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {            
            chainId: 1137,
            mining: {
                auto: false,
                interval: 500,
            },               
            forking: {                
                url: polygonURL,                                
            }
        },
    },
};
export default hardhatConfig;