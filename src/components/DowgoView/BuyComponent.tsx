import { BigNumber } from "ethers";
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
  // BUY
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: dowgoContractAddress || "0x",
    contractInterface: DowgoERC20ABI,
    functionName: "buy_dowgo",
    args: [buyInput.mul(ONE_DOWGO_UNIT)],
    enabled:
      price &&
      allowance &&
      buyInput.mul(price).gt(allowance) &&
      Boolean(debouncedBuyInput) &&
      Boolean(dowgoContractAddress),
  });
  const { data, write, error, isError } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    confirmations: 8,
    hash: data?.hash,
  });
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
