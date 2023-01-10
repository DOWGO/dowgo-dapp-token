import { BigNumber, ethers, providers } from "ethers";
import { useEffect, useState } from "react";
import { Modal, Alert, Steps, Button, message } from "antd";
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
import VeriffPage from "./KYCPages/VeriffPage";
import CustomerProfilePage from "./KYCPages/CustomerProfilePage";
import FinancialProfilePage from "./KYCPages/FinancialProfilePage";
const Veriff = require("@veriff/js-sdk");

function KYCModal(
  displayKYCModal: boolean,
  setDisplayKYCModal: SetStateFunction<boolean>
) {
  const [current, setCurrent] = useState(0);
  const [customerProfile, setCustomerProfile] = useState({});
  const [financialProfile, setFinancialProfile] = useState({});
  const handleClose = () => setDisplayKYCModal(false);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onNext1 = (values: any) => {
    setCustomerProfile(values);
    next();
  };
  const onNext2 = (values: any) => {
    setFinancialProfile(values);
    next();
  };
  const steps: { title: string; content: JSX.Element }[] = [
    {
      title: "Customer Profile",
      content: CustomerProfilePage(onNext1),
    },
    {
      title: "Financial Profile",
      content: FinancialProfilePage(onNext2, prev),
    },
    {
      title: "ID Verification",
      content: <div>ID Verification</div>,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    // TODO use them from antdesign : const { token } = theme.useToken();
    // lineHeight: '260px',
    // textAlign: 'center',
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <Modal
      open={displayKYCModal}
      onCancel={handleClose}
      closable={true}
      title="KYC Process"
      width="70%"
    >
      <Steps current={current} items={items} />
      <div style={contentStyle}>{current < 2 && steps[current].content}</div>
      <div>{VeriffPage(current === 2)}</div>
      {/* <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!',undefined,handleClose)}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </Modal>
  );
}

export default KYCModal;
