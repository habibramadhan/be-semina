// import service categories
const {
  getAllCategories,
  getOneCategories,
  updateCategories,
  createCategories,
  deleteCategories
} = require('../../../services/mongoose/categories');

const { StatusCodes } = require('http-status-codes');


// buat function create
const create = async (req, res, next) => {
  try {
		
		// simpan Category yang baru dibuat ke MongoDB
    const result = await createCategories(req);

		// berikan response kepada client dengan mengembalikan categories yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
		// jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(err);
  }
};

const index = async (req, res, next) => {
    try {
      const result = await getAllCategories(req);
      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const find = async (req, res, next) => {
    try {
          // mencari categories di MongoDB berdasarkan field _id
      const result = await getOneCategories(req);
  
      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const update = async (req, res, next) => {
    try {
        
        // cari dan update categories berdasarkan field_id
        const result = await updateCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
  };

  const destroy = async (req,res, next) => {
    try {

        // cari dan hapus categories berdasarkan field_id
        const result = await deleteCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
  };

// Export fungsi create pada controller categories
module.exports = {
  create,
  index,
  find,
  update,
  destroy
};