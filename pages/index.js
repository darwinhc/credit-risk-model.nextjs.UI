import { useState } from "react";
import Child from "../src/components/child";
import RiskIndex from "../src/components/riskIndex";
import styles from "../styles/Home.module.css";
import Loading from "../src/components/loading";

export default function Home() {
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false)

    return (
        <div className={styles.container}>
            <main className="d-flex row">
                { loading ? <Loading /> : null}
                <Child prediction={prediction} setPrediction={setPrediction} setLoading={setLoading}/>
                <RiskIndex prediction={prediction} loading={loading}/>
            </main>
        </div>
    );
}
