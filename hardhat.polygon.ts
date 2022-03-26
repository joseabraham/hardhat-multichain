import { HardhatUserConfig } from "hardhat/config";

const {
    BSC_URL,
    BSC_DEPLOY_KEY,
    BSCSCAN_API_KEY,
    ETHERSCAN_API_KEY,
    BSC_TESTNET_URL,
    BSC_TESTNET_DEPLOY_KEY,
    ARBITRUM_TESTNET_DEPLOY_KEY,
    ARBITRUM_TESTNET_URL,
    ARBITRUM_DEPLOY_KEY,
    POLYGON_URL,
    MAINNET_URL,
    MAINNET_DEPLOY_KEY,    
  } = require("./env.json")



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
                url: POLYGON_URL,
                // blockNumber: 2776603,
                // enabled: true,
            }, 
        },
    },
};
export default hardhatConfig;