const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    place: String,
    area: String,
    bedrooms: Number,
    bathrooms: Number,
    nearbyHospitals: String,
    nearbyColleges: String,
    description: String,
});

module.exports = mongoose.model('Property', propertySchema);
