import { ExclamationCircleIcon } from "@heroicons/react/solid";
import React,{ useEffect }  from "react";
function ErrorRequestAlert({ message, open, setOpen, time = 2000 }) {
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
            className={`rounded-md bg-red-50 p-4 fixed bottom-2 right-2 ml-2 ${
                !open ? "hidden" : ""
            }`}
        >
            <div className="flex">
                <div className="flex-shrink-0">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorRequestAlert;
