import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Receive from "./Receive";
import Transfer from "./Transfer";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "receive":
        return (
          <Receive
            setAction={setAction}
            selectedToken={selectedToken}
            walletAddress={walletAddress}
          />
        );
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "transferring":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <h2>Transfer in progress...</h2>
            <TailSpin
              height={"100"}
              width="100"
              color="#3773f5"
              ariaLabel="loading"
            />
          </div>
        );
      case "transferred":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <h2 style={{ color: "green" }}>Transfer complete</h2>
          </div>
        );
      default:
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
