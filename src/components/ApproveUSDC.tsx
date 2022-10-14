import { BigNumber, ethers, providers } from "ethers";
import { useCallback, useEffect } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { Address, SetStateFunction } from "../types/types";
import { ERC20_ABI } from "../constants/ERC20ABI";
import { ERC20 } from "../types/ERC20";
import { INFINITE_ALLOWANCE, ONE_USDC_UNIT } from "../constants";
import { DButton } from "./displayComponents/Button";

// async function getAllowance(
//   contract: ERC20,
//   _userAddress: Address,
//   dowgoContractAddress: Address,
//   setAllowance: SetStateFunction<BigNumber>
// ) {
//   console.log(
//     "allowance",
//     _userAddress,
//     (await contract.allowance(_userAddress, dowgoContractAddress)).toHexString()
//   );
//   _userAddress !== "0x" &&
//     setAllowance(await contract.allowance(_userAddress, dowgoContractAddress));
// }

function ApproveUSDC(
  allowance: BigNumber | undefined,
  displayModal: boolean,
  setDisplayModal: SetStateFunction<boolean>,
  dowgoContractAddress: Address,
  usdcContractAddress: Address
) {
  const {
    config,
    isError: isPrepareError,
    error: prepareError,
  } = usePrepareContractWrite({
    addressOrName: usdcContractAddress,
    contractInterface: ERC20_ABI,
    functionName: "approve",
    args: [dowgoContractAddress, INFINITE_ALLOWANCE],
    enabled: Boolean(dowgoContractAddress) && Boolean(usdcContractAddress),
  });
  const { data, write, error, isError } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    confirmations: 8,
    hash: data?.hash,
  });

  async function approveUSDCToDowgo() {
    write?.();
  }

  const handleClose = () => setDisplayModal(false);
  return (
    <Modal show={displayModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Approve USDC Spendings</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          {allowance?.toHexString() === INFINITE_ALLOWANCE
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
        {isLoading ? "Approving..." : null}
        {isSuccess && (
          <div>
            Successfully approved USDC Transfer!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </Modal.Body>

      <Modal.Footer>
        {DButton(handleClose, `Close`)}
        {DButton(approveUSDCToDowgo, `Approve USDC transfer to Dowgo Contract`)}
      </Modal.Footer>
    </Modal>
  );
}

export default ApproveUSDC;
