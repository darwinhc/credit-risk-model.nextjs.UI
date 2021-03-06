import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const limits = {
    int_rate: [0, 100],
    out_prncp: [-1000, 100000],
    sub_grade_2: [1, 5]
}

const Child = ({ setPrediction, setLoading }) => {
    const [values, setValues_] = useState({
        sub_grade_1: "A",
        sub_grade_2: 1,
        int_rate: "",
        out_prncp: ""
    });
    const setValue = (key, value) => setValues_({ ...values, [key]: value });
    const predict = async () => {
        if(values.int_rate === "" || values.out_prncp === ""){
            alert("There are fields to be filled in")
        }else{
            setLoading(true);
            
            try{
                let to_send = {int_rate: values.int_rate, out_prncp: values.out_prncp, 
                    sub_grade: values.sub_grade_1+values.sub_grade_2}
                const res = await axios.post(
                    "https://modelo-riesgo-crediticio.herokuapp.com/",
                    to_send
                );
                setPrediction(res.data.prediction);
            } catch (e){
                alert("An error has occurred with the prediction")
            }
            setLoading(false);
        }
    };
    return (
        <div className="flex-1 col mx-auto px-5">
            <h1 className="my-4">Credit Risk Form</h1>
            <Form className="">                

                <Form.Label>LC assigned loan subgrade</Form.Label>
                <div className="row">
                    <Form.Select
                        className="mb-3 col w-25"
                        onChange={(e) => {setValue("sub_grade_1", e.target.value);}}
                        value={values.sub_grade_1}
                    >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                    </Form.Select>
                    <Form.Select
                        className="mb-3 col w-25"
                        onChange={(e) => {
                            setValue("sub_grade_2", e.target.value);
                        }}
                        value={values.sub_grade_2}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
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
                        Predict
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Child;
