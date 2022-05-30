import {useContext, useEffect, useState} from "react";
import GalleryIItem from "@/Gallery/GalleryIItem";
import AddModal from "./AddModal";
import {PlusIcon} from "@heroicons/react/solid";
import Auth from "@helpers/Auth";


export default function Gallery() {
    const auth = useContext(Auth)

    const [images,setImages] = useState([])
    const [addOpen,setAddOpen] = useState(false)

    useEffect(() => {
        auth.Axios.get("/images/gallery")
            .then(res => {
                if(res.data){
                    setImages(res.data)
                }
            })
            .catch(err => {
                console.error(err)
            })
    },[])

    return (
        <div className="bg-white">

            <AddModal open={addOpen} setOpen={setAddOpen} setImages={setImages} />
            <div className="mx-auto py-12 px-4 max-w-full sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none flex justify-between items-center">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">My Gallery</h2>
                        <button onClick={() => setAddOpen(true)} className={"inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-400"}>
                            <PlusIcon className={"h-5 w-5 font-bold"} />
                        </button>
                    </div>
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                    >
                        {images.map((image,index) => (
                            <GalleryIItem key={index} image={image}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
