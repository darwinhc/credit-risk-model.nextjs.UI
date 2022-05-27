import { useState } from "react";
import Child from "../src/components/child";
import RiskIndex from "../src/components/riskIndex";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [prediction, setPrediction] = useState(200);

    return (
        <div className={styles.container}>
            <main className="d-flex row">
                <Child prediction={prediction} setPrediction={setPrediction}/>
                <RiskIndex prediction={prediction} />
            </main>
        </div>
    );
}
