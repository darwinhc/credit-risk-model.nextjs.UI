import Score from "react-score-indicator";

const RiskIndex = ({ prediction }) => {
    return (
        <div className="flex-1 col">
            <div className="mt-5 p-5 my-auto">
                <p className="text-justify">Es un valor numérico que representa la solvencia de un individuo. Todas las instituciones de crédito, como los bancos, tienen complejos modelos de crédito que utilizan la información contenida en la solicitud, como el salario, los compromisos crediticios y el rendimiento de los préstamos anteriores, para determinar la puntuación de crédito de una solicitud o de un cliente existente. El modelo produce una puntuación que representa la probabilidad de que el prestamista reciba el pago a tiempo si concede a una persona un préstamo o una tarjeta de crédito.</p>
                <div className="mt-5">
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
                    <p>Usted es de {(100*(684+1-prediction)/(684-554)).toFixed(2)}% de personas</p>
                </div>
            </div>
        </div>
    );
};

export default RiskIndex;
