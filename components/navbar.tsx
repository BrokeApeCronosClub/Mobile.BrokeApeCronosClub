import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();
    return (
        <div className={styles.navbar}>
            <Link href="https://cronoscan.com/token/0x3e68ea1588e32e51d98dbda6ea05128513ecc713" className={styles.navIcon}>
                <Image src={"/cronos-icon.png"} alt="" width={31} height={41}/>
                <p className={styles.navIconLabel}>Cronos</p>
            </Link>

             <Link href="/" className={styles.navIcon}>
                <Image src={"/claim-icon.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Claim</p>
            </Link>
            
            <Link href="/nfts" className={styles.navIcon}>
                <Image src={"/nft-icon.png"} alt="" width={40} height={40}/>
                <p className={styles.navIconLabel}>Collection</p>
            </Link>
            <div className={styles.navIcon}>
            {address && (
                <ConnectWallet
                    btnTitle="Login"
                    detailsBtn={() => {
                        return (
                            <div>
                                <Image src={"/profile-icon.png"} alt="" width={40} height={40}/>
                                <p className={styles.navIconLabel}>Profile</p>
                            </div>
                        )
                    }}
                />
            )}
            </div>
        </div>
    )
}
