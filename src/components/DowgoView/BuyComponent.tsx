import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ONE_DOWGO_UNIT, ONE_USDC_UNIT } from "../../constants";
import { DowgoERC20ABI } from "../../constants/DowgoERC20ABI";
import { DowgoERC20 } from "../../types/DowgoERC20";
import { Address, SetStateFunction } from "../../types/types";
import useDebounce from "../debounce";

export const BuyComponent = (
  price: BigNumber | undefined,
  allowance: BigNumber | undefined,
  dowgoContractAddress: Address | undefined,
  setDisplayModal: SetStateFunction<boolean>
) => {
  const [buyInput, setBuyInput] = useState<BigNumber>(BigNumber.from(0));
  const debouncedBuyInput = useDebounce(buyInput, 500);
  //console.log("price&&allowance",Boolean(price)&&Boolean(allowance),price,allowance)
  const { address: currentAccount } = useAccount();
  console.log("currentAccount", currentAccount);
  console.log("buyInput",buyInput, "dowgoContractAddress",dowgoContractAddress)
  // BUY
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
    data:prepareData
  } = usePrepareContractWrite({
    address: dowgoContractAddress || "0x",
    abi: DowgoERC20ABI,
    functionName: "buy_dowgo",
    args: [buyInput.mul(ONE_DOWGO_UNIT)],
    enabled:
      price &&
      allowance &&
      buyInput.mul(price).gt(allowance) &&
      Boolean(debouncedBuyInput) &&
      Boolean(dowgoContractAddress),
      overrides: {
        from: currentAccount,
      }
  });
  console.log("e", isPrepareError, prepareError);
  console.log("prepareData",prepareData)
  console.log("config",config)
  const { data, write, error, isError } = useContractWrite(config);
  console.log("write",write)
  const { isLoading, isSuccess } = useWaitForTransaction({
    confirmations: 8,
    hash: data?.hash,
  });
  // async function buyDowgo() {
  //   //TODO catch errors (like rejection)
  //   let contract: DowgoERC20 = new ethers.Contract(
  //     dowgoContractAddress || "0x",
  //     DowgoERC20ABI,
  //     provider
  //   ) as DowgoERC20;
  //   console.log("buy input", Number(buyInput.mul(ONE_DOWGO_UNIT)));
  //   provider &&
  //     (await (
  //       await contract
  //         .connect(provider.getSigner())
  //         .buy_dowgo(buyInput.mul(ONE_UNIT))
  //     ).wait(8));
  //   console.log("allowed");
  //   updateDowgoBalance(contract, userAddress);
  //   updateUSDCBalance(userAddress);
  // }
  console.log("e", error, prepareError);
  // console.log("isLoading",isLoading)
  //TODO: check after comma values
  return (
    <Card>
      <Card.Header>BUY</Card.Header>
      <Card.Body>
        {price && allowance && (
          <div>
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={(e) => {
                console.log("(e.target.value)", e.target.value);
                setBuyInput(BigNumber.from(e.target.value));
              }}
            />
            <button
              type="button"
              disabled={isLoading}
              onMouseUp={(e) => {
                e.preventDefault();
                console.log(Number(buyInput), Number(price), Number(allowance));
                if (buyInput.mul(price).gt(allowance)) {
                  console.log("ok");
                  setDisplayModal(true);
                } else {
                  console.log(write);
                  write?.();
                }
              }}
            >
              Buy Dowgo
            </button>
            <div>{`Cost : ${
              (Number(buyInput) * Number(price)) / Number(ONE_USDC_UNIT)
            } USDC`}</div>
            <div>
              {isLoading ? "Buying..." : null}
              {isSuccess && (
                <div>
                  Successfully bought Dowgo!
                  <div>
                    <a href={`https://etherscan.io/tx/${data?.hash}`}>
                      Etherscan
                    </a>
                  </div>
                </div>
              )}
              {isError && <div>Error: {error?.message}</div>}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
