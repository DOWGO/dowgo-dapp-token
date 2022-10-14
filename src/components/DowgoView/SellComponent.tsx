import { BigNumber } from "ethers";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { Address, SetStateFunction } from "../../types/types";
import { ONE_DOWGO_UNIT, ONE_USDC_UNIT } from "../../constants";
import { useState } from "react";
import { DowgoERC20ABI } from "../../constants/DowgoERC20ABI";
import useDebounce from "../debounce";

export const SellComponent = (
  price: BigNumber | undefined,
  dowgoBalance: BigNumber | undefined,
  dowgoContractAddress: Address | undefined
) => {
  const [sellInput, setSellInput] = useState<BigNumber>(BigNumber.from(0));
  const debouncedSellInput = useDebounce(sellInput, 500);

  const { config } = usePrepareContractWrite({
    addressOrName: dowgoContractAddress || "0x",
    contractInterface: DowgoERC20ABI,
    functionName: "sell_dowgo",
    args: [sellInput.mul(ONE_DOWGO_UNIT)],
    enabled: Boolean(sellInput) && Boolean(dowgoContractAddress),
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return (
    <Card>
      <Card.Header>SELL</Card.Header>
      <Card.Body>
        {dowgoBalance && (
          <div>
            {sellInput.mul(ONE_DOWGO_UNIT).gt(dowgoBalance) && (
              <Alert key={"warning"} variant={"warning"}>
                You don't have enough Dowgo tokens to sell.
              </Alert>
            )}
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={(e) => {
                setSellInput(BigNumber.from(e.target.value));
              }}
            />
            <button
              type="button"
              onMouseUp={() => {
                if (sellInput.mul(ONE_DOWGO_UNIT).gt(dowgoBalance)) {
                  console.log("Not enoughn Dowgo tokens");
                } else {
                  write?.();
                }
              }}
            >
              Sell Dowgo
            </button>
            <div>{`Value : ${
              (Number(sellInput) * Number(price)) / Number(ONE_USDC_UNIT)
            } USDC`}</div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
