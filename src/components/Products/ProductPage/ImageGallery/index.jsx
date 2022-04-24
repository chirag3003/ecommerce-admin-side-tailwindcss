import React from 'react';
import Axios from '@helpers/Axios';

function ImageGallery({ images, setImage }) {
    function uploadImage(index) {
        return async (evt) => {
            let data = new FormData()
            data.append("images", evt.target.files[0])
            let resData = await Axios.post("/images", data).catch(err => console.error(err))
            console.log(resData)
            setImage(index, resData.data[0])
        }
    }
    return (
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                <img
                    src={images[0]?.src}
                    alt={images[0]?.alt}
                    className="w-full h-full object-center object-cover"
                />
                <label htmlFor={"image0"} className={"w-full h-full object-center object-cover cursor-pointer"} />
                <input id={"image0"} onChange={uploadImage(0)} type="file" accept={"image/png, image/jpg, image/jpeg"} hidden={true} alt={"image1"} />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden relative">
                    <img
                        src={images[1]?.src}
                        alt={images[1]?.alt}
                        className="w-full h-full object-center object-cover"
                    />
                    <label htmlFor={"image1"} className={"w-full h-full object-center object-cover cursor-pointer"} />
                    <input id={"image1"} onChange={uploadImage(1)} type="file" accept={"image/png, image/jpg, image/jpeg"} hidden={true} alt={"image1"} />
                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                        src={images[2]?.src}
                        alt={images[2]?.alt}
                        className="w-full h-full object-center object-cover"
                    />
                    <label htmlFor={"image2"} className={"w-full h-full object-center object-cover cursor-pointer"} />
                    <input id={"image2"} onChange={uploadImage(2)} type="file" accept={"image/png, image/jpg, image/jpeg"} hidden={true} alt={"image1"} />
                </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                <img
                    src={images[3]?.src}
                    alt={images[3]?.alt}
                    className="w-full h-full object-center object-cover"
                />
                <label htmlFor={"image3"} className={"w-full h-full object-center object-cover cursor-pointer"} />
                <input id={"image3"} onChange={uploadImage(3)} type="file" accept={"image/png, image/jpg, image/jpeg"} hidden={true} alt={"image1"} />
            </div>
        </div>

    );
}

export default ImageGallery;