// server/src/middleware/upload.middleware.ts
import multer from 'multer';

const storage = multer.memoryStorage(); // Stocke le fichier en mémoire (buffer)
export const upload = multer({
  storage,
  fileFilter: (req, file, cb: multer.FileFilterCallback) => {
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel', // .xls
      'text/csv', // .csv
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Seuls les fichiers Excel (.xlsx, .xls) et CSV sont autorisés') as any, false);
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 Mo max
  },
});