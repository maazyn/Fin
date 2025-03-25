
const DashboardPage = () => {
    return (
        <div className="grid grid-rows gap-[10px] w-[full] items-center border-white bg-transparent mt-[10px] rounded-md">

            <div className="grid grid-cols-[2fr_3fr] gap-2 w-[full] h-[35vh] items-center border-white bg-amber-500 p-2 rounded-md">
                <div className="bg-orange-500 h-full rounded-md px-2 py-2">
                    <p className="border-white">Cashflow fields</p>
                </div>
                <div className="bg-orange-500 h-full rounded-md px-2 py-2">
                    <p className="border-white">Data</p>
                </div>
            </div>

            <div className="grid grid-cols-[5fr_4fr] gap-2 w-[full] h-[55vh] items-center border-white bg-amber-500 p-2 rounded-md">
                <div className="bg-orange-500 h-full rounded-md px-2 py-2">
                    <p className="border-white">Data</p>
                </div>
                <div className="grid grid-rows-[3fr_1fr] gap-2 bg-transparent h-full rounded-md">
                    <div className="bg-orange-500 rounded-md px-2 py-2">
                        <p className="border-white">Expense fields</p>
                    </div>
                    <div className="bg-orange-500 rounded-md px-2 py-2">
                        <p className="border-white">Net</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default DashboardPage;
