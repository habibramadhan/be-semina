const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let talentSchema = Schema (
    {
      name : {
        type: String,
        required: [true, 'Nama harus diisi'],
      },
      role : {
        type: String,
        default: '-',
      },
    //   membuat relasi pada mongodb perlu membuat types ObjectId
      image : {
        type: mongoose.Types.ObjectId,
        ref: 'Image',
        required: true,
      },
    },
    {timestamps: true}
);

module.exports = model('Talent', talentSchema);