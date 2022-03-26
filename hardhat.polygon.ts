import { HardhatUserConfig } from "hardhat/config";

  require('dotenv').config();

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 1137,
            mining: {
                auto: false,
                interval: 500,
            },
            allowUnlimitedContractSize: true,      
            forking: {
                url: process.env.POLYGON_URL,
                // blockNumber: 2776603,
                // enabled: true,
            }, 
        },
    },
};
export default hardhatConfig;