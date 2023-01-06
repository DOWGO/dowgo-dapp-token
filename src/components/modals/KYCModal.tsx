import { BigNumber, ethers, providers } from "ethers";
import { useEffect, useState } from "react";
import { Modal, Alert } from "antd";
import { createVeriffFrame } from "@veriff/incontext-sdk";
import {
  EthAddress,
  ChainId,
  SetStateFunction,
  TxStatus,
  ContractAddresses,
} from "../../types/types";
import { ERC20_ABI } from "../../constants/ERC20ABI";
import { ERC20 } from "../../types/ERC20";
import { INFINITE_ALLOWANCE } from "../../constants";
import { DButton } from "../displayComponents/Button";
import { DisplayTxStatus } from "../displayComponents/DisplayTxStatus";
import { launchTxWithStatus } from "../../utils/txWithStatus";
const Veriff = require("@veriff/js-sdk");


function VeriffComponent(displayKYCModal: boolean) {
  useEffect(() => {
    if (displayKYCModal) {
      const veriff = Veriff.Veriff({
        apiKey:"0427ce0c-753e-48e3-90f4-0fe02c5356e2",
        parentId: "veriff-root",
        onSession: function (err: any, response: any) {
          //TODO style reponse with
          //   {
          //     "status": "success",
          //     "verification": {
          //         "id": "UUID V4 Identifying the verification",
          //         "url": "full url to which a person should be redirected in order to proceed with verification flow",
          //         "host": "hostname",
          //         "status": "status of the verification",
          //         "sessionToken": "JWT encoded verification token"
          //     }
          // }
          // TODO:handle error
          err && console.log("err", err);
          console.log("response",response)
          // incontext sdk
          createVeriffFrame({ url: response.verification.url });
        },
      });
      veriff.setParams({
        vendorData: '0427ce0c-753e-48e3-90f4-0fe02c5356e2'
      });

      veriff.mount();
    }
  }, [displayKYCModal]);
  return <></>;
}

function KYCModal(
  displayKYCModal: boolean,
  setDisplayKYCModal: SetStateFunction<boolean>
) {
  const handleClose = () => setDisplayKYCModal(false);
  return (
    <Modal
      open={displayKYCModal}
      onCancel={handleClose}
      closable={true}
      title="KYC Process"
    >
      <div id="veriff-root">{VeriffComponent(displayKYCModal)}</div>
    </Modal>
  );
}

export default KYCModal;
