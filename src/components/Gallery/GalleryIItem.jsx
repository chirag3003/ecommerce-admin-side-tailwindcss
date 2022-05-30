import React, {useEffect, useState} from 'react';
import {QrcodeIcon } from "@heroicons/react/solid";
import Qrcode from "qrcode"



function GalleryIItem({image}) {
    const [qrURL,setQrURL] = useState("")
     useEffect(() => Qrcode.toDataURL(image.src, {
         name:image.name,
         fileName:"Chi"
     },function (err, url) {
         setQrURL(url)
     }))


    return (
        <li >
            <div className="space-y-4">
                <a href={image.src} target={"_blank"}>
                    <div className="aspect-w-3 aspect-h-2">
                        <img className="object-cover shadow-lg rounded-lg" src={image.src} alt="" />
                    </div>
                </a>

                <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1 flex justify-between items-center">
                        <h3>{image.name}</h3>
                        <a href={qrURL} download={`${image.name}.png`} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Qr Code</span>
                            <QrcodeIcon className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" />
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default GalleryIItem;