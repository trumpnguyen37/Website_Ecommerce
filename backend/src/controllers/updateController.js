import multer from "multer"
import path from "path"

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpef|jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname){
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})

module.exports = {
    upload: upload,
}