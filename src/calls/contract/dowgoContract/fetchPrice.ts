import { EthAddress } from "../../../types/types";

import { DowgoERC20 } from "../../../types/DowgoERC20";
import { BigNumber, ethers } from "ethers";
import { DowgoERC20ABI } from "../../../constants/DowgoERC20ABI";

export const fetchPrice = async (
  dowgoAddress: EthAddress,
  provider: ethers.providers.Provider
): Promise<BigNumber> => {
  try {
    const contract: DowgoERC20 = new ethers.Contract(
      dowgoAddress,
      DowgoERC20ABI,
      provider
    ) as DowgoERC20;
    const currentPrice = await contract.currentPrice();
    return currentPrice;
  } catch (error) {
    console.error(error);
  }
};
