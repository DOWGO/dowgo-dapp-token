import { BigNumber, ethers, providers } from "ethers";
import { useCallback, useEffect } from "react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { Address, SetStateFunction } from "../types/types";
import { ERC20_ABI } from "../constants/ERC20ABI";
import { ERC20 } from "../types/ERC20";
import { INFINITE_ALLOWANCE, ONE_USDC_UNIT } from "../constants";
import { DButton } from "./displayComponents/Button";

async function getAllowance(
  contract: ERC20,
  _userAddress: Address,
  dowgoContractAddress: Address,
  setAllowance: SetStateFunction<BigNumber>
) {
  console.log(
    "allowance",
    _userAddress,
    (await contract.allowance(_userAddress, dowgoContractAddress)).toHexString()
  );
  _userAddress !== "0x" &&
    setAllowance(await contract.allowance(_userAddress, dowgoContractAddress));
}
function ApproveUSDC(
  provider: providers.Web3Provider | undefined,
  userAddress: Address,
  allowance: BigNumber,
  setAllowance: SetStateFunction<BigNumber>,
  displayModal: boolean,
  setDisplayModal: SetStateFunction<boolean>,
  dowgoContractAddress: Address,
  usdcContractAddress: Address
) {
  useEffect(() => {
    if (provider && userAddress !== "0x") {
      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract
      let contract: ERC20 = new ethers.Contract(
        usdcContractAddress,
        ERC20_ABI,
        provider
      ) as ERC20;
      userAddress !== "0x" &&
        dowgoContractAddress !== "0x" &&
        dowgoContractAddress !== "0x" &&
        getAllowance(contract, userAddress, dowgoContractAddress, setAllowance);
    }
  }, [
    provider,
    usdcContractAddress,
    dowgoContractAddress,
    userAddress,
    setAllowance,
  ]);

  async function approveUSDCToDowgo() {
    //TODO catch errors (like rejection)
    let contract: ERC20 = new ethers.Contract(
      usdcContractAddress,
      ERC20_ABI,
      provider
    ) as ERC20;
    console.log("approving...");
    console.log(
      "signer",
      provider && (await provider.getSigner().getAddress())
    );
    // provider &&
    //   (await contract
    //     .connect(provider.getSigner())
    //     .approve(dowgoContractAddress, INFINITE_ALLOWANCE));

    if (provider) {
      try {
        console.log("letsgo")
        console.log("letsgo")
        let tx = await contract
        .connect(provider.getSigner())
        .approve(dowgoContractAddress, ONE_USDC_UNIT)
        console.log("tx", tx);
        // setTxStatus({
        //   on: true,
        //   type: "warning",
        //   msg: `Included in Hash ${tx.hash}`,
        // });
        let recp = await tx.wait();
        console.log("recp", recp);
        // setTxStatus({
        //   on: true,
        //   type: "success",
        //   msg: `Finalized at block ${recp.blockNumber}`,
        // });
      } catch (e: any) {
        console.log("e", e);
        //setTxStatus({ on: true, type: "danger", msg: e.message });
      }
      console.log("allowed");
      getAllowance(contract, userAddress, dowgoContractAddress, setAllowance);
    }
        
  }

  const handleClose = () => setDisplayModal(false);
  return (
    <Modal show={displayModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Approve USDC Spendings</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          {allowance.toHexString() === INFINITE_ALLOWANCE
            ? `Allowance to Dowgo Contract : Infinite`
            : `Allowance to Dowgo Contract : ${
                Number(allowance) / 10 ** 18
              } USDC`}
        </div>
        <div>Dowgo Contract Address : {dowgoContractAddress}</div>
        <Alert key={"warning"} variant={"warning"}>
          You need to Approve USDC Spendings to the Dowgo Contract before you
          can buy Dowgo token.
        </Alert>
      </Modal.Body>

      <Modal.Footer>
        {DButton(handleClose, `Close`)}
        {DButton(approveUSDCToDowgo, `Approve USDC transfer to Dowgo Contract`)}
      </Modal.Footer>
    </Modal>
  );
}

export default ApproveUSDC;
