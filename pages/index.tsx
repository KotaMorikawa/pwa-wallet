import { ConnectWallet, useAddress, useChainId } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const currentChainId = useChainId();
  const validChainId = 5040;

  return (
    <div className={styles.container}>
      {address ? (
        // <div className={styles.loginContainer}>Login successful!</div>
        <>
          {currentChainId === validChainId ? (
            <div className={styles.loginContainer}>Login successful!</div>
          ) : (
            <div className={styles.loginContainer}>Please Switch Network!</div>
          )}
        </>
      ) : (
        <div className={styles.loginContainer}>
          <ConnectWallet btnTitle="Login" />
        </div>
      )}
    </div>
  );
};

export default Home;
