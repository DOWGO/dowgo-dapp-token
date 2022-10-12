import { BigNumber } from "ethers";
import { ONE_DOWGO_UNIT } from "../../constants";

function DowgoBalance(dowgoBalance: BigNumber) {
  // console.log("oh", dowgoBalance, Number(dowgoBalance));
  return <div>{`${Number(dowgoBalance) / Number(ONE_DOWGO_UNIT)} Dowgo`}</div>;
}

export default DowgoBalance;
