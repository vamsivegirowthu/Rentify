const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

router.post('/add', async (req, res) => {
    const { owner, place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges, description } = req.body;
    try {
        const property = new Property({ owner, place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges, description });
        await property.save();
        res.status(201).json({ message: 'Property added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding property', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error });
    }
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Property.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: 'Property updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating property', error });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Property.findByIdAndDelete(id);
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting property', error });
    }
});

module.exports = router;
