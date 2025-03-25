import "./Cashflow.css"

const CashflowForm = () => {

    return (
        <div className="">
            <h2 className="text-center mb-1 font-bold">In</h2>
            <form className="overflow-y-auto box-border">
                <label className="cf-label">
                    {/* Main Income */}
                    {/* <span className="required-asterisk" style={{color:"red"}}> *</span> */}
                    <input
                        className="cf-input"
                        type="float"
                        name="income"
                        placeholder="primary income"
                        // value={formData.first_name}
                        // onChange={handleChange}
                        required
                    />
                </label>

                <label className="cf-label">
                    <input
                        className="cf-input"
                        type="float"
                        name="investment_income"
                        placeholder="investment income"
                        // value={formData.first_name}
                        // onChange={handleChange}
                        required
                    />
                </label>

                <label className="cf-label">
                    <input
                        className="cf-input"
                        type="float"
                        name="other_income"
                        placeholder="other income"
                        // value={formData.first_name}
                        // onChange={handleChange}
                        required
                    />
                </label>


            </form>
        </div>
    );
}
export default CashflowForm;
