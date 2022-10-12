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

interface TxStatus {
  on: boolean;
  type: "warning" | "danger" | "success";
  msg: string;
}
const BLANK_STATUS: TxStatus = { on: false, type: "warning", msg: "" };

async function updateDowgoBalance(
  contract: DowgoERC20,
  _userAddress: Address,
  setDowgoBalance: SetStateFunction<BigNumber>
) {
  _userAddress !== "0x" &&
    setDowgoBalance(await contract.balanceOf(_userAddress));
}
async function updateUSDCBalance(
  contract: ERC20,
  _userAddress: Address,
  setUSDCBalance: SetStateFunction<BigNumber>
) {
  const balance = await contract.balanceOf(_userAddress);
  console.log("balance", balance, Number(balance));
  console.log("_userAddress", _userAddress);
  _userAddress !== "0x" &&
    setUSDCBalance(await contract.balanceOf(_userAddress));
}
async function updatePrice(
  contract: DowgoERC20,
  setPrice: SetStateFunction<BigNumber>
) {
  setPrice(await contract.currentPrice());
}

function DowgoContract(
  provider: providers.Web3Provider | undefined,
  userAddress: Address,
  allowance: BigNumber,
  usdcBalance: BigNumber,
  setUSDCBalance: SetStateFunction<BigNumber>,
  dowgoBalance: BigNumber,
  setDowgoBalance: SetStateFunction<BigNumber>,
  setDisplayModal: SetStateFunction<boolean>,
  dowgoContractAddress: Address,
  usdcContractAddress: Address
) {
  const [txStatus, setTxStatus] = React.useState<TxStatus>(BLANK_STATUS);
  const [price, setPrice] = React.useState<BigNumber>(BigNumber.from(0));
  const [buyInput, setBuyInput] = React.useState<BigNumber>(BigNumber.from(0));
  const [sellInput, setSellInput] = React.useState<BigNumber>(
    BigNumber.from(0)
  );

  useEffect(() => {
    if (
      provider &&
      userAddress !== "0x" &&
      dowgoContractAddress !== "0x" &&
      usdcContractAddress !== "0x"
    ) {
      // Dowgo
      let contract: DowgoERC20 = new ethers.Contract(
        dowgoContractAddress,
        DowgoERC20ABI,
        provider
      ) as DowgoERC20;
      updateDowgoBalance(contract, userAddress, setDowgoBalance);

      // USDC
      let usdccontract: ERC20 = new ethers.Contract(
        usdcContractAddress,
        ERC20_ABI,
        provider
      ) as ERC20;
      updateUSDCBalance(usdccontract, userAddress, setUSDCBalance);
      updatePrice(contract, setPrice);
    }
  }, [
    provider,
    userAddress,
    dowgoContractAddress,
    usdcContractAddress,
    setUSDCBalance,
    setDowgoBalance,
  ]);

  async function buyDowgo() {
    //TODO catch errors (like rejection)
    let dowgoContract: DowgoERC20 = new ethers.Contract(
      dowgoContractAddress,
      DowgoERC20ABI,
      provider
    ) as DowgoERC20;

    let usdccontract: ERC20 = new ethers.Contract(
      usdcContractAddress,
      ERC20_ABI,
      provider
    ) as ERC20;

    // provider && buyInput.gt(0) &&
    //   (await dowgoContract
    //     .connect(provider.getSigner())
    //     .buy_dowgo(buyInput.mul(ONE_DOWGO_UNIT)));

    if (provider && buyInput.gt(0)) {
      try {
        let tx = await dowgoContract
        .connect(provider.getSigner())
        .buy_dowgo(buyInput.mul(ONE_DOWGO_UNIT))
        console.log("tx", tx);
        setTxStatus({
          on: true,
          type: "warning",
          msg: `Included in Hash ${tx.hash}`,
        });
        let recp = await tx.wait();
        console.log("recp", recp);
        setTxStatus({
          on: true,
          type: "success",
          msg: `Finalized at block ${recp.blockNumber}`,
        });
      } catch (e: any) {
        console.log("e", e);
        setTxStatus({ on: true, type: "danger", msg: e.message });
      }
      console.log("allowed");
      updateDowgoBalance(dowgoContract, userAddress, setDowgoBalance);
      updateUSDCBalance(usdccontract, userAddress, setUSDCBalance);
    }
    console.log("allowed");
    updateDowgoBalance(dowgoContract, userAddress, setDowgoBalance);
    updateUSDCBalance(usdccontract, userAddress, setUSDCBalance);
  }
  async function sellDowgo() {
    //TODO catch errors (like rejection)
    let dowgoContract: DowgoERC20 = new ethers.Contract(
      dowgoContractAddress,
      DowgoERC20ABI,
      provider
    ) as DowgoERC20;

    let usdccontract: ERC20 = new ethers.Contract(
      usdcContractAddress,
      ERC20_ABI,
      provider
    ) as ERC20;

    if (provider) {
      try {
        let tx = await dowgoContract
          .connect(provider.getSigner())
          .sell_dowgo(sellInput.mul(ONE_DOWGO_UNIT));
        console.log("tx", tx);
        setTxStatus({
          on: true,
          type: "warning",
          msg: `Included in Hash ${tx.hash}`,
        });
        let recp = await tx.wait();
        console.log("recp", recp);
        setTxStatus({
          on: true,
          type: "success",
          msg: `Finalized at block ${recp.blockNumber}`,
        });
      } catch (e: any) {
        console.log("e", e);
        setTxStatus({ on: true, type: "danger", msg: e.message });
      }
      console.log("allowed");
      updateDowgoBalance(dowgoContract, userAddress, setDowgoBalance);
      updateUSDCBalance(usdccontract, userAddress, setUSDCBalance);
    }
  }
  return (
    <Card style={{ width: "80vw", marginLeft: "10vw" }}>
      <Card.Header>{`Dowgo (Price: ${
        Number(price) / Number(ONE_USDC_UNIT)
      } USDC/Dowgo)`}</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            {txStatus.on && (
              <Alert
                variant={txStatus.type}
                onClose={() => setTxStatus(BLANK_STATUS)}
                dismissible
              >
                {txStatus.msg}
              </Alert>
            )}
          </Row>
          <Row>
            <Col>
              {BuyComponent(
                buyDowgo,
                buyInput,
                setBuyInput,
                price,
                allowance,
                setDisplayModal
              )}
            </Col>
            <Col>
              {SellComponent(
                sellDowgo,
                sellInput,
                setSellInput,
                price,
                dowgoBalance
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default DowgoContract;
