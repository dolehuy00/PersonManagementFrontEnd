import React, { useState } from "react";
import { logout } from "services/auth/AuthApi.js"

export default function LogoutPopup() {
    const [isOpen, setIsOpen] = useState(false);

    // Mở popup
    const openPopup = () => setIsOpen(true);

    // Đóng popup
    const closePopup = () => setIsOpen(false);

    return (
        <>
            <button onClick={openPopup} className="text-blueGray-700 hover:text-blueGray-500 background-transparent font-bold uppercase py-3 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i className="fas fa-sign-out-alt mr-2 text-sm opacity-75"></i> Logout
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 w-72 rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-semibold  mt-0 mb-2 text-blueGray-700">Logout</h2>
                        <hr></hr>
                        <p className="mt-3 mb-4 text-blueGray-900"><i className="fas fa-exclamation-circle text-red-500"></i> {" "}Are you sure want to log out?</p>
                        <div className="flex justify-end">
                            <button onClick={logout} className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs mx-10 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <i className="fas fa-check"></i> Yes
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
