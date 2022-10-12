import { BigNumber } from "ethers";
import Card from "react-bootstrap/Card";
import { ONE_USDC_UNIT } from "../../constants";
import { SetStateFunction } from "../../types/types";

export const BuyComponent = (
  buyDowgo: () => void,
  buyInput: BigNumber,
  setBuyInput: SetStateFunction<BigNumber>,
  price: BigNumber,
  allowance: BigNumber,
  setDisplayModal: SetStateFunction<boolean>
) => {
  //TODO: check after comma values
  return (
    <Card>
      <Card.Header>BUY</Card.Header>
      <Card.Body>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={(e) => {
            setBuyInput(BigNumber.from(e.target.value));
          }}
        />
        <button
          type="button"
          onMouseUp={() => {
            if (buyInput.mul(price).gt(allowance)) {
              setDisplayModal(true);
            } else {
              buyDowgo();
            }
          }}
        >
          Buy Dowgo
        </button>
        <div>{`Cost : ${
          (Number(buyInput) * Number(price)) / Number(ONE_USDC_UNIT)
        } USDC`}</div>
      </Card.Body>
    </Card>
  );
};
