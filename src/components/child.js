import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Child = ({ setPrediction }) => {
    const [values, setValues_] = useState({
        sub_grade_1: "",
        sub_grade_2: "",
        int_rate: "",
        out_prncp: ""
    });
    const setValue = (key, value) => setValues_({ ...values, [key]: value });
    const predict = async () => {
        let to_send = {int_rate: values.int_rate, out_prncp: values.out_prncp, 
            sub_grade: values.sub_grade_1+values.sub_grade_2}
        console.log(to_send);
        const res = await axios.post(
            "https://modelo-riesgo-crediticio.herokuapp.com/",
            // "http://localhost:8000/",
            to_send
        );
        setPrediction(res.data.prediction);
    };
    return (
        <div className="flex-1 col mx-auto px-5">
            <h1 className="my-4">Credit Risk Form</h1>
            <Form className="">                

                <Form.Label>LC assigned loan subgrade</Form.Label>
                <div className="row">
                    <Form.Control
                        className="mb-3 col w-25"
                        onChange={(e) => {
                            setValue("sub_grade_1", e.target.value);
                        }}
                        value={values.sub_grade}
                        type="text"
                        placeholder="Subgrade letter"
                        maxLength={1}
                        required
                    />
                    <Form.Control
                        className="mb-3 col w-25"
                        maxLength={1}
                        onChange={(e) => {
                            setValue("sub_grade_2", e.target.value);
                        }}
                        value={values.sub_grade}
                        type="number"
                        min={1}
                        max={5}
                        placeholder="Subgrade number"
                        required
                    />
                </div>

                <Form.Label>Interest Rate on the loan</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("int_rate", parseFloat(e.target.value));
                    }}
                    value={values.int_rate}
                    type="number"
                    placeholder="Interest Rate on the loan"
                    required
                />

                <Form.Label>Remaining outstanding principal for total amount funded</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={(e) => {
                        setValue("out_prncp", parseFloat(e.target.value));
                    }}
                    value={values.out_prncp}
                    type="number"
                    placeholder="out_prncp"
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
