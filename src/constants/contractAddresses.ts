import { ChainId } from "../types/types";

export const LOCAL_USDC_ADDRESS = "0xda05bFF59ad872c46a8F5456fc551761fe8b1656";
export const LOCAL_DOWGO_ADDRESS = "0x2F914A5e3b99412C1A0763B9562f05eB73963D81";

export const GOERLI_USDC_ADDRESS = "0xD363E49B5421C2FcA7f74bC3f34E215d3676a36c";
export const GOERLI_DOWGO_ADDRESS =
  "0xbeEe6b2C3524E82B26cf463A465b8621D0e5d370";

export const getDowgoAddress = (chainId: ChainId) => {
  switch (chainId) {
    case 5: //Goerli
      return GOERLI_DOWGO_ADDRESS;
    default:
      console.log(
        `UNKOWN Network (getDowgoAddress), defaulting to localhost:8545`
      );
      return LOCAL_DOWGO_ADDRESS;
  }
};

export const getUSDCAddress = (chainId: ChainId) => {
  switch (chainId) {
    case 5: //Goerli
      return GOERLI_USDC_ADDRESS;
    default:
      console.log(
        `UNKOWN Network (getUSDCAddress), defaulting to localhost:8545`
      );
      return LOCAL_USDC_ADDRESS;
  }
};
