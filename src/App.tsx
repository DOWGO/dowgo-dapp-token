import React, { useEffect } from "react";
import { useAccount, useContractReads, useNetwork } from "wagmi";
import { BigNumber, providers } from "ethers";

import "./App.css";
import { Address } from "./types/types";
import DowgoContract from "./components/DowgoView";
import ApproveUSDC from "./components/ApproveUSDC";
import { BalancePanel } from "./components/BalanceView";
import ProfileBar from "./components/ProfileBar";
import { ERC20_ABI } from "./constants/ERC20ABI";
import { DowgoERC20ABI } from "./constants/DowgoERC20ABI";
import { getDowgoAddress, getUSDCAddress } from "./constants/contractAddresses";

function App() {
  const [dowgoContractAddress, setDowgoContractAddress] =
    React.useState<Address>("0x");
  const [usdcContractAddress, setUsdcContractAddress] =
    React.useState<Address>("0x");
  const [displayModal, setDisplayModal] = React.useState<boolean>(false);

  const { chain: currentChain } = useNetwork();
  const { address: currentAccount } = useAccount();
  console.log("currentacc", currentAccount);
  const {
    data: results,
    isError,
    error,
    isLoading,
  } = useContractReads({
    contracts: [
      {
        address: usdcContractAddress,
        abi: ERC20_ABI,
        functionName: "allowance",
        args: [currentAccount, dowgoContractAddress],
      },
      {
        address: usdcContractAddress,
        abi: ERC20_ABI,
        functionName: "balanceOf",
        args: [currentAccount],
      },
      {
        address: dowgoContractAddress,
        abi: DowgoERC20ABI,
        functionName: "balanceOf",
        args: [currentAccount],
      },
      {
        address: dowgoContractAddress,
        abi: DowgoERC20ABI,
        functionName: "currentPrice",
      },
    ],
    enabled:
      Boolean(currentAccount) &&
      Boolean(dowgoContractAddress) &&
      Boolean(usdcContractAddress),
  });
  console.log("results",results)

  const [allowance, usdcBalance, dowgoBalance, price]: (
    | BigNumber
    | undefined
  )[] =
    results && results[0] && results[1] && results[2] && results[3]
      ? results.map((res) => BigNumber.from(res))
      : [undefined, undefined, undefined, undefined];
  console.log("allowance", allowance);
  console.log("error loading reads", error);

  useEffect(() => {
    if (currentChain?.id) {
      setDowgoContractAddress(getDowgoAddress(currentChain.id));
      setUsdcContractAddress(getUSDCAddress(currentChain.id));
    }
  }, [currentChain, setDowgoContractAddress, setUsdcContractAddress]);
  return (
    <div className="App">
      <header>
        {ProfileBar()}
        {BalancePanel(dowgoBalance, usdcBalance)}
        {DowgoContract(
          allowance,
          usdcBalance,
          dowgoBalance,
          price,
          setDisplayModal,
          dowgoContractAddress,
          usdcContractAddress
        )}
        {ApproveUSDC(
          allowance,
          displayModal,
          setDisplayModal,
          dowgoContractAddress,
          usdcContractAddress
        )}
      </header>
    </div>
  );
}

export default App;
