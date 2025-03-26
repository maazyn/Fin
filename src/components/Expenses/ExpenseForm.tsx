import { useState, ChangeEvent, FormEvent } from "react";
import { AuthProvider, useAuth } from "../../hooks/useAuth";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import AddNewCategoryModal from "./AddNewCategoryModal";

// import { useModal } from "../../Context/Modal";

import "../Cashflow/Cashflow.css"

interface FormData {
    rent: number | "";
    utilities: number | "";
    food: number | "";
    // health_insurance: number | "";
    // car_insurance: number | "";
    gas: number | "";
    purchases: number | "",
    misc: number | "";
}

const ExpenseForm = () => {

    const { user } = useAuth();
    const [formData, setFormData] = useState<FormData>({
        rent: "",
        utilities: "",
        food: "",
        // health_insurance: "",
        // car_insurance: "",
        gas: "",
        purchases: "",
        misc: "",
    });
    const [submittedData, setSubmittedData] = useState<FormData[]>([]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value === "" ? "" : Number(value),
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (user) {
            setSubmittedData([...submittedData, formData]);
            setFormData({ rent: "", utilities: "", food: "", gas: "", purchases: "", misc: ""});
        }
    };

    const handleClear = (e: FormEvent) => {
        e.preventDefault();
        setFormData({ rent: "", utilities: "", food: "", gas: "", purchases: "", misc: "" });
    }
    // const addField = (e: FormEvent) => {
    //     e.preventDefault();
    //     setFormData({ rent: "", utilities: "", food: "", gas: "", purchases: "", misc: "" });
    // }


    return (
        <div className="">
            <h2 className="text-center mb-1 font-bold">In</h2>
            <form onSubmit={handleSubmit} className="overflow-y-auto box-border">
            <input
            className="cf-input"
                type="number"
                name="rent"
                value={formData.rent}
                onChange={handleChange}
                placeholder="Rent"
            />
            <input
            className="cf-input"
                type="number"
                name="utilities"
                value={formData.utilities}
                onChange={handleChange}
                placeholder="Utilities"
            />
            <input
            className="cf-input"
                type="number"
                name="food"
                value={formData.food}
                onChange={handleChange}
                placeholder="Food"
            />
            {/* <input
            className="cf-input"
                type="number"
                name="health_insurance"
                value={formData.health_insurance}
                onChange={handleChange}
                placeholder="Health Insurance"
            />
            <input
            className="cf-input"
                type="number"
                name="car_insurance"
                value={formData.car_insurance}
                onChange={handleChange}
                placeholder="Car Insurance"
            /> */}
            <input
            className="cf-input"
                type="number"
                name="gas"
                value={formData.gas}
                onChange={handleChange}
                placeholder="Gas"
            />
            <input
            className="cf-input"
                type="number"
                name="purchases"
                value={formData.purchases}
                onChange={handleChange}
                placeholder="Purchases"
            />
            <input
            className="cf-input"
                type="number"
                name="misc"
                value={formData.misc}
                onChange={handleChange}
                placeholder="Misc."
            />
            {/* <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="cf-input"/> */}
                <div className="buttonContainer">
                    <button className="submit-button" type="submit">Go</button>
                    <button onClick={handleClear} className="cancel-button">Clear</button>
                </div>
                {/* <div className="buttonContainer">
                    <button onClick={handleAdd} className="add-button">New Category</button>
                </div> */}
                {/* <div className='buttonContainer2'>
                    <button type="button" className="add-button" onClick={addField}> New Category</button>
                </div> */}
                {(
                    <OpenModalButton
                        buttonText="Add new category"
                        modalComponent={<AddNewCategoryModal/>}
                    />
                )}
            </form>


            <div>

            </div>
        </div>
    );
}
export default ExpenseForm;
