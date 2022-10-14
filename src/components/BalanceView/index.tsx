import { BigNumber } from "ethers";
import Card from "react-bootstrap/Card";
import DowgoBalance from "./DowgoBalance";
import USDCBalance from "./USDCBalance";

export const BalancePanel = (
  dowgoBalance: BigNumber | undefined,
  usdcBalance: BigNumber | undefined
) => {
  return (
    <Card style={{ width: "80vw", marginLeft: "10vw" }}>
      <Card.Header>Balances</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <div>
          {dowgoBalance && DowgoBalance(dowgoBalance)}
          {usdcBalance && USDCBalance(usdcBalance)}
        </div>
      </Card.Body>
    </Card>
  );
};
