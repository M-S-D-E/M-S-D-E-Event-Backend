import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
import * as dotenv from 'dotenv'
dotenv.config()

// export const localupload = multer({dest: 'uploads'});

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/uploads/*',
    })
   
})