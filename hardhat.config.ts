import {HardhatUserConfig} from "hardhat/config";

const hardhatConfig: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 1919,
            mining: {
                auto: false,
                interval: 5000
              }
        }
    }
};
export default hardhatConfig;