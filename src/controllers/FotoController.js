import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async create(req, res) {
    return upload(req, res, (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      return res.json(req.file);
    })
  }
}

export default new FotoController();
