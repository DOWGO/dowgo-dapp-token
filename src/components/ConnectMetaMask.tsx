import React, { useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import {
  Address,
  ChainId,
  ConnectMMStatus,
  SetStateFunction,
} from "../types/types";
import { ethers, providers } from "ethers";
import { DButton } from "./displayComponents/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  getDowgoAddress,
  getUSDCAddress,
} from "../constants/contractAddresses";
import { ALLOWED_NETWORKS } from "../constants";

const handleAccountsChanged = function (
  accounts: unknown,
  currentAccount: Address,
  setCurrentAccount: SetStateFunction<Address>,
  setStatus: SetStateFunction<ConnectMMStatus>
) {
  console.log("accounts raw", accounts);
  let accountList: Address[] = [];
  if (accounts && (accounts as string[]).length) {
    accountList = accounts as Address[];
  }
  if (accountList.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log("Please connect to MetaMask.");
    setStatus("Please connect to MetaMask");
  } else if (accountList[0] !== currentAccount) {
    setCurrentAccount(accountList[0]);
    setStatus("Connected");
  }
};

// TODO Disallow Local? Nah I dont know

function ConnectMetaMask(
  provider: providers.Web3Provider | undefined,
  setProvider: SetStateFunction<providers.Web3Provider | undefined>,
  setDowgoContractAddress: SetStateFunction<Address>,
  setUsdcContractAddress: SetStateFunction<Address>,
  currentAccount: Address,
  setCurrentAccount: SetStateFunction<Address>
) {
  const [status, setStatus] = React.useState<ConnectMMStatus>("Disconnected");
  const [chainId, setChainId] = React.useState<ChainId | undefined>(undefined);

  // CONNECT TO METAMASK

  // detect MM at the start of the Dapp
  useEffect(() => {
    async function detectProvider() {
      function startApp(_provider: MetaMaskInpageProvider) {
        // If the provider returned by detectEthereumProvider is not the same as
        // window.ethereum, something is overwriting it, perhaps another wallet.
        if (_provider !== window.ethereum) {
          console.error("Do you have multiple wallets installed?");
        }
        // Access the decentralized web!
        //@ts-ignore
        const provider = new ethers.providers.Web3Provider(_provider);
        setProvider(provider);
        setStatus("Connected");
      }
      // this returns the provider, or null if it wasn't detected
      const provider = await detectEthereumProvider();

      if (provider) {
        startApp(provider as MetaMaskInpageProvider); // Initialize your app
      } else {
        console.log("Please install MetaMask!");
        setStatus("Please install MetaMask");
      }
    }
    detectProvider();
  }, [setProvider, setStatus]);

  /**********************************************************/
  /* Handle chain (network) and chainChanged (per EIP-1193) */
  /**********************************************************/

  // detect chain id
  useEffect(() => {
    async function detectChainId(ethereum: MetaMaskInpageProvider) {
      function handleChainChanged(_chainId: unknown) {
        // Set chain id the first time
        if (_chainId && chainId === undefined) {
          setChainId(parseInt(_chainId as string, 16));
          // If Chain id changed,we recommend reloading the page, unless you must do otherwise
        } else if (_chainId && parseInt(_chainId as string, 16) !== chainId) {
          window.location.reload();
        }
      }
      const chainIdUnknown = await ethereum.request({ method: "eth_chainId" });
      handleChainChanged(chainIdUnknown);

      ethereum.on("chainChanged", handleChainChanged);
    }
    if (provider) {
      detectChainId(window.ethereum as MetaMaskInpageProvider);
    }
  }, [provider, chainId]);

  /***********************************************************/
  /* Handle user accounts and accountsChanged (per EIP-1193) */
  /***********************************************************/

  useEffect(() => {
    function checkAccounts(ethereum: MetaMaskInpageProvider) {
      ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: unknown) =>
          handleAccountsChanged(
            accounts,
            currentAccount,
            setCurrentAccount,
            setStatus
          )
        )
        .catch((err) => {
          // Some unexpected error.
          // For backwards compatibility reasons, if no accounts are available,
          // eth_accounts will return an empty array.
          console.error(err);
        });

      // Note that this event is emitted on page load.
      // If the array of accounts is non-empty, you're already
      // connected.
      ethereum.on("accountsChanged", (accounts: unknown) =>
        handleAccountsChanged(
          accounts,
          currentAccount,
          setCurrentAccount,
          setStatus
        )
      );
    }
    if (provider) {
      checkAccounts(window.ethereum as MetaMaskInpageProvider);
    }
  }, [provider, currentAccount, setCurrentAccount]);

  useEffect(() => {
    if (chainId) {
      // getAndSetDowgoAddress(chainId);
      // getAndSetUSDCAddress(chainId);
      setDowgoContractAddress(getDowgoAddress(chainId));
      setUsdcContractAddress(getUSDCAddress(chainId));
    }
  }, [chainId, setDowgoContractAddress, setUsdcContractAddress]);

  /*********************************************/
  /* Access the user's accounts (per EIP-1102) */
  /*********************************************/

  // You should only attempt to request the user's accounts in response to user
  // interaction, such as a button click.
  // Otherwise, you popup-spam the user like it's 1999.
  // If you fail to retrieve the user's account(s), you should encourage the user
  // to initiate the attempt.

  // While you are awaiting the call to eth_requestAccounts, you should disable
  // any buttons the user can click to initiate the request.
  // MetaMask will reject any additional requests while the first is still
  // pending.
  function connect(ethereum: MetaMaskInpageProvider) {
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: unknown) =>
        handleAccountsChanged(
          accounts,
          currentAccount,
          setCurrentAccount,
          setStatus
        )
      )
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
  }
  const unsupportedNetwork =
    chainId && ALLOWED_NETWORKS.includes(ChainId[chainId]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Dowgo</Navbar.Brand>
        <Navbar.Text>
          Status :{" "}
          <span
            style={{
              color:
                status === "Connected"
                  ? "green"
                  : status === "Disconnected"
                  ? "red"
                  : "orange",
            }}
          >
            {status}
          </span>
        </Navbar.Text>
        <Navbar.Text>
          Account:{" "}
          {currentAccount !== "0x"
            ? `${currentAccount.substring(0, 4)}...${currentAccount.substring(
                38,
                42
              )}`
            : "Not Connected"}
        </Navbar.Text>
        <Navbar.Text>
          Chain: {chainId ? ChainId[chainId] : "Unkown Chain"}
          {unsupportedNetwork ? null : (
            <span style={{ color: "red" }}> Unsupported Network</span>
          )}
        </Navbar.Text>
        <Navbar.Text>
          {provider &&
            DButton(() => {
              connect(window.ethereum as MetaMaskInpageProvider);
            }, `Connect to MetaMask`)}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default ConnectMetaMask;
