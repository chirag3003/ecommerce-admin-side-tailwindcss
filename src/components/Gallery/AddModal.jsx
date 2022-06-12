/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhotographIcon } from "@heroicons/react/solid";
import Auth from "@helpers/Auth";
import SuccessfulRequestAlert from "@/SuccesfulRequestAlert";
import ErrorRequestAlert from "@/ErrorRequesAlert";

export default function AddModal({ open, setOpen }) {
    const auth = useContext(Auth);
    const [imageURL, setImageURL] = useState("");
    const [image, setImage] = useState("");
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    function changeImage(evt) {
        setImage(evt.target.files[0]);
        let url = URL.createObjectURL(evt.target.files[0]);
        setImageURL(url);
    }

    function addImage(evt) {
        evt.preventDefault();
        let data = new FormData();
        data.append("name", evt.target[0].value);
        data.append("image", image);
        auth.Axios.post("/images/gallery", data)
            .then((res) => {
                setSuccessOpen(true);
                setOpen(false);
            })
            .catch((err) => {
                setErrorOpen(true);
            });
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <form
                            onSubmit={addImage}
                            className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center bg-blue-200 h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                        <PhotographIcon
                                            className="h-6 w-6 text-blue-500"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Add an Image to the gallery
                                        </Dialog.Title>
                                        <div className="mt-2 w-full">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    required={true}
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Name of the image"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-2 w-full">
                                            <label htmlFor="file-upload" className="mt-2 w-full">
                                                <div
                                                    style={{
                                                        backgroundImage: imageURL
                                                            ? `url("${imageURL}")`
                                                            : "",
                                                        backgroundPosition: "center center",
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                    }}
                                                    className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                                >
                                                    <div className="space-y-1 text-center">
                                                        <PhotographIcon className="mx-auto h-12 w-12 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600">
                                                            <span>Upload a file</span>

                                                            <input
                                                                onChange={changeImage}
                                                                required={true}
                                                                id="file-upload"
                                                                accept="image/png, image/gif, image/jpeg, image/webp"
                                                                name="images"
                                                                type="file"
                                                                className="sr-only"
                                                            />

                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">
                                                            PNG, JPG, GIF up to 10MB
                                                        </p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="submit"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 mb-2 lg:mb-0 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Add Image
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </Transition.Child>
                </div>
                {/* <ErrorRequestAlert
                    open={errorOpen}
                    setOpen={setErrorOpen}
                    message={"Name already in use"}
                /> */}
                <SuccessfulRequestAlert
                    open={successOpen}
                    setOpen={setSuccessOpen}
                    message={"Image added  succesfully "}
                />
            </Dialog>
        </Transition.Root>
    );
}
