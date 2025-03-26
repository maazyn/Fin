import { useState, ChangeEvent, FormEvent } from "react";
import { useModal } from '../../Context/Modal';
import "./Expenses.css";

interface FormData {
    category: string | "";
    amount: number | "";
}

const AddNewCategoryModal = () => {
    const context = useModal();

    if (!context) {
        console.error("Modal context is not available.");
        return null;
    }

    const { closeModal } = context;

    // const handleAdd = (e: FormEvent) => {
    //     e.preventDefault();
    //     closeModal();
    // };

    const [formData, setFormData] = useState<FormData>({
        category: "",
        amount: "",
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
        setSubmittedData([...submittedData, formData]);
        setFormData({ category: "", amount: "" });
        closeModal();

    };

    return (
        <div className="expenseModal">
            <h2 className="pb-[30px] font-bold">Enter a new category</h2>
            <form onSubmit={handleSubmit}>
                <label className="modal-label">Category:
                <input
                    className="modal-input"
                    type="string"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    />
                </label>


                <label className="modal-label">Amount:

                <input
                    className="modal-input"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                    />
                </label>

                <div className="buttonContainer pt-[10px]">
                    <button className="submit-button text-white" type="submit" onClick={handleSubmit}>Enter</button>
                    <button className="cancel-button text-white" type="button" onClick={closeModal}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewCategoryModal;
