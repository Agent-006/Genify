import { OurFileRouter } from "@/app/api/uploadthing/core";
import {
    generateReactHelpers,
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";


export const UploadButton = generateUploadButton<OurFileRouter>();

export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

//FIXME: Uploader may be required

export const { 
    useUploadThing, 
    uploadFiles 
} = generateReactHelpers<OurFileRouter>();