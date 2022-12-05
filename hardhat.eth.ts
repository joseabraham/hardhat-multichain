import { HardhatUserConfig } from "hardhat/config";

const hardhatConfig: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 1001,
      mining: {
        auto: false,
        interval: 500,
      },
    },
  },
};
export default hardhatConfig;
