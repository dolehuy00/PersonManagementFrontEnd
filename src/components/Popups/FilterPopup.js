import React, { useState } from "react";

export default function FilterPopup() {
    const [isOpen, setIsOpen] = useState(false);

    // Mở popup
    const openPopup = () => setIsOpen(true);

    // Đóng popup
    const closePopup = () => setIsOpen(false);

    return (
        <>
            <button onClick={openPopup} className="text-blueGray-700 hover:text-blueGray-500 background-transparent font-bold uppercase py-3 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i className="fas fa-filter mr-2 text-sm opacity-75"></i> Filter
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 w-auto rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-semibold  mt-0 mb-2 text-blueGray-700">Filter</h2>
                        <hr></hr>
                        <div className="flex flex-wrap p-1">
                            <label className="px-2 py-1">Name or ID</label>
                            <input type="text" className="flex-grow px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full md:w-auto" />
                        </div>
                        
                        <div className="flex flex-wrap p-1">
                            <label className="px-2 py-1">Salary From</label>
                            <input type="text" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline md:w-auto" />
                            <label className="px-2 py-1">To</label>
                            <input type="text" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline md:w-auto" />
                        </div>
                        
                        <div className="flex justify-end">
                            <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs mx-10 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <i className="fas fa-check"></i> Confirm
                            </button>
                            <button onClick={closePopup} className="bg-blueGray-600 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <i className="fas fa-times"></i> Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
