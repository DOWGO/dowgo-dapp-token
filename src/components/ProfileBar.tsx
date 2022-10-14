import React, { useEffect } from "react";
import { useAccount, useConnect, useNetwork } from "wagmi";
import {
  Address,
  ChainId,
  ConnectMMStatus,
  SetStateFunction,
} from "../types/types";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ALLOWED_NETWORKS } from "../constants";
import { Button } from "react-bootstrap";

export function ProfileBar() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { address, connector: activeConnector, isConnected } = useAccount();
  const { chain } = useNetwork();

  const connectButton = (
    <div>
      {connectors.map((connector) => {
        return (
          <Button
            variant="primary"
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {`Connect to ${connector.name}`}
            {!connector.ready && " (unsupported)"}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              " (connecting)"}
          </Button>
        );
      })}

      {error && <div>{error.message}</div>}
    </div>
  );
  const unsupportedNetwork =
    chain?.id && ALLOWED_NETWORKS.includes(ChainId[chain?.id]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Dowgo</Navbar.Brand>
        {/* <Navbar.Text>
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
        </Navbar.Text> */}
        {isConnected && address && activeConnector && (
          <Navbar.Text>
            Account:{" "}
            {address !== "0x"
              ? `${address.substring(0, 6)}...${address.substring(36, 42)}`
              : "Not Connected"}
            <div>Connected to {activeConnector.name}</div>
          </Navbar.Text>
        )}
        <Navbar.Text>
          {/* Chain: {chain?.id ? ChainId[chain?.id] : "Unkown Chain"} */}
          {chain && <div>Connected to {chain.name}</div>}
          {unsupportedNetwork ? null : (
            <span style={{ color: "red" }}> Unsupported Network</span>
          )}
        </Navbar.Text>
        <Navbar.Text>{connectButton}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default ProfileBar;
