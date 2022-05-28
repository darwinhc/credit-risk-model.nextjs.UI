import Score from "react-score-indicator";

const RiskIndex = ({ prediction }) => {
    return (
        <div className="flex-1 col">
            <div className="mt-5 p-5 my-auto">
                <p className="text-justify">A credit scorecard is one of such credit models, it is one of the most common credit models due to the fact it is relatively easy to interpret for customers and that it has been around for the last few decades, hence the development process is standard and widely understood. Property, K. T. |. (2022, 30 marzo). Intro to Credit Scorecard - Towards Data Science. Medium. https://towardsdatascience.com/intro-to-credit-scorecard-9afeaaa3725f</p>
                { prediction === null ? null : (
                    <>
                        <div className="mt-5">
                            <p style={{fontWeight: "bold"}}>The cut-off score is 600</p>
                            <Score
                                value={prediction}
                                maxValue={1000}
                                colors={[
                                    "#d12000",
                                    "#ed8d00",
                                    "#f1bc00",
                                    "#84c42b",
                                    "#53b83a",
                                    "#3da940",
                                    "#3da940",
                                    "#3da940",
                                ]}
                            />
                        </div>
                        <div>
                            <p>You are in the top {(100*(684+1-prediction)/(684-554)).toFixed(2)}% of people most likely to be approved for credit.</p>
                            <p>{prediction>= 600 ? "Credit is granted" : "No credit granted"}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RiskIndex;
