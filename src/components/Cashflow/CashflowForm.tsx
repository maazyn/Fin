import { useState, ChangeEvent, FormEvent } from "react";
import { AuthProvider, useAuth } from "../../hooks/useAuth";
import "./Cashflow.css"

interface FormData {
    incomeA: number | "";
    incomeB: number | "";
    incomeOther: number | "";
}

const CashflowForm = () => {

    const { user } = useAuth();
    const [formData, setFormData] = useState<FormData>({
        incomeA: "",
        incomeB: "",
        incomeOther: "",
    });
    const [submittedData, setSubmittedData] = useState<FormData[]>([]);

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem("cashflow")) || [];
    //     setSubmittedData(storedData);
    // }, []);

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
            setFormData({ incomeA: "", incomeB: "", incomeOther: "" });
        }
    };

    const handleClear = (e: FormEvent) => {
        e.preventDefault();
        setFormData({ incomeA: "", incomeB: "", incomeOther: "" });
    }

    return (
        <div className="">
            <h2 className="text-center mb-1 font-bold">In</h2>
            <form onSubmit={handleSubmit} className="overflow-y-auto box-border">
            <input
            className="cf-input"
                type="number"
                name="incomeA"
                value={formData.incomeA}
                onChange={handleChange}
                placeholder="Wages"
            />
            <input
            className="cf-input"
                type="number"
                name="incomeB"
                value={formData.incomeB}
                onChange={handleChange}
                placeholder="Investment earnings"
            />
            <input
            className="cf-input"
                type="number"
                name="incomeOther"
                value={formData.incomeOther}
                onChange={handleChange}
                placeholder="Other Income"
            />
            {/* <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="cf-input"/> */}
                <div className="buttonContainer">
                    <button className="submit-button" type="submit">Go</button>
                    <button onClick={handleClear} className="cancel-button">Clear</button>
                </div>
            </form>


            <div>
                
            </div>
        </div>
    );
}
export default CashflowForm;
