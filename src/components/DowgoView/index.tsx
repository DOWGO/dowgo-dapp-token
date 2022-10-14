import React, { useCallback, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { BigNumber, ethers, providers } from "ethers";
import { Address, SetStateFunction } from "../../types/types";
import { DowgoERC20 } from "../../types/DowgoERC20";
import { DowgoERC20ABI } from "../../constants/DowgoERC20ABI";
import { ONE_DOWGO_UNIT, ONE_USDC_UNIT } from "../../constants";
import { ERC20 } from "../../types/ERC20";
import { ERC20_ABI } from "../../constants/ERC20ABI";
import { BuyComponent } from "./BuyComponent";
import { SellComponent } from "./SellComponent";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

interface TxStatus {
  on: boolean;
  type: "warning" | "danger" | "success";
  msg: string;
}
const BLANK_STATUS: TxStatus = { on: false, type: "warning", msg: "" };

function DowgoContract(
  allowance: BigNumber | undefined,
  usdcBalance: BigNumber | undefined,
  dowgoBalance: BigNumber | undefined,
  price: BigNumber | undefined,
  setDisplayModal: SetStateFunction<boolean>,
  dowgoContractAddress: Address,
  usdcContractAddress: Address
) {
  return (
    <Card style={{ width: "80vw", marginLeft: "10vw" }}>
      <Card.Header>{`Dowgo (Price: ${
        Number(price) / Number(ONE_USDC_UNIT)
      } USDC/Dowgo)`}</Card.Header>
      <Card.Body>
        <Container>
          {/* <Row>
            {txStatus.on && (
              <Alert
                variant={txStatus.type}
                onClose={() => setTxStatus(BLANK_STATUS)}
                dismissible
              >
                {txStatus.msg}
              </Alert>
            )}
          </Row> */}
          <Row>
            <Col>
              {BuyComponent(
                price,
                allowance,
                dowgoContractAddress,
                setDisplayModal
              )}
            </Col>
            <Col>
              {SellComponent(price, dowgoBalance, dowgoContractAddress)}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default DowgoContract;
