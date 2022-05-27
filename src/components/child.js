import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Child = ({ setPrediction }) => {
    const [values, setValues_] = useState({
        grade: "",
        sub_grade: "",
        int_rate: "",
        mths_since_issue_d: "",
        mths_since_last_pymnt_d: "",
        mths_difference_payments: ""
    });
    const setValue = (key, value) => setValues_({ ...values, [key]: value });
    const predict = async () => {
        console.log(values);
        const res = await axios.post(
            "https://modelo-riesgo-crediticio.herokuapp.com/",
            values
        );
        setPrediction(res.data.prediction);
    };
    return (
        <div className="flex-1 col mx-auto px-5">
            <h1 className="my-4">Formulario de riesgo crediticio</h1>
            <Form className="">
                <Form.Label>LC assigned loan grade</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("grade", e.target.value);
                    }}
                    value={values.grade}
                    type="number"
                    placeholder="LC assigned loan grade"
                    required
                />
                

                <Form.Label>LC assigned loan subgrade</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("sub_grade", e.target.value);
                    }}
                    value={values.sub_grade}
                    type="number"
                    placeholder="LC assigned loan subgrade"
                    required
                />
                

                <Form.Label>Interest Rate on the loan</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("int_rate", e.target.value);
                    }}
                    value={values.int_rate}
                    type="number"
                    placeholder="Interest Rate on the loan"
                    required
                />
                

                <Form.Label>Meses desde el asunto</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("mths_since_issue_d", e.target.value);
                    }}
                    value={values.mths_since_issue_d}
                    type="number"
                    placeholder="Meses desde el asunto"
                    required
                />

                <Form.Label>Meses desde el último pago</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("mths_since_last_pymnt_d", e.target.value);
                    }}
                    value={values.mths_since_last_pymnt_d}
                    type="number"
                    placeholder="Meses desde el último pago"
                    required
                />
                
                <Form.Label>Meses de diferencia entre pagos</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("mths_difference_payments", e.target.value);
                    }}
                    value={values.mths_difference_payments}
                    type="number"
                    placeholder="Meses de diferencia entre pagos"
                    required
                />
                
                <div className="col text-center">
                    <Button
                        className="mt-2"
                        variant="primary"
                        onClick={() => predict()}
                    >
                        Predecir
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Child;
