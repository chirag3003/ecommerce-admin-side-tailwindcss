import { CheckCircleIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";

function SuccessfulRequestAlert({ message, open, setOpen, time = 2000 }) {
    async function close() {
        setTimeout(() => {
            setOpen(false);
        }, time);
    }
    useEffect(() => {
        if (open) close();
    }, [open]);
    return (
        <div
            className={`rounded-md bg-green-50 p-4 fixed bottom-2 right-2 ml-2 ${
                !open ? "hidden" : ""
            }`}
        >
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                        Request completed
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessfulRequestAlert;
