import multer from 'multer';
import multerConfig from '../config/multer';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      const { originalname, filename } = req.file;
      const foto = await Foto.create({ originalname, filename });

      return res.json(req.file);
    })
  }
}

export default new FotoController();
