import { ExpenseForm } from "..";
import { CashflowForm } from "..";

const DashboardPage = () => {
    return (
        <div className="grid grid-rows gap-[10px] w-[full] items-center border-white bg-transparent mt-[10px] rounded-md">

            <div className="grid grid-cols-[2fr_8fr] gap-2 w-[full] h-[35vh] items-start border-white bg-amber-500 p-2 rounded-md">
                <div className="bg-orange-500 h-auto rounded-md px-2 py-3 min-w-[180px]">
                    <CashflowForm/>
                </div>
                <div className="bg-orange-500 h-full rounded-md px-2 py-2">
                    <p className="border-white">Data</p>
                </div>
            </div>

            <div className="grid md:grid-cols-[10fr_4fr] lg:grid-cols-[10fr_4fr] gap-2 w-[full] h-[55vh] items-start border-white bg-amber-500 p-2 rounded-md">
                <div className="bg-orange-500 h-full rounded-md px-2 py-2 min-h-[250px]">
                    <p className="border-white">Data</p>
                </div>
                <div className="grid grid-rows-[3fr_1fr] gap-2 bg-transparent h-full rounded-md min-w-[200px]">
                    <div className="bg-orange-500 h-auto rounded-md px-2 py-3">
                        <ExpenseForm/>
                    </div>
                    <div className="bg-orange-500 rounded-md px-2 py-2 min-h-[50px]">
                        <p className="border-white">Net</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default DashboardPage;
