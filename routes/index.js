const router = require("express").Router();
const { Location, Traveller, Trip } = require("../models");

router.get("/api/travellers", async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.json({ travellerData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/api/travellers", async (req, res) => {
  try {
    const travellerData = await Traveller.create(req.body);
    res.json({ travellerData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/travellers/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location, through: Trip }],
    });
    res.json({ travellerData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/api/travellers/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ travellerData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/locations", async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.json({ locationData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/api/locations", async (req, res) => {
  try {
    const locationData = await Location.create(req.body);
    res.json({ locationData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api/locations/:id', async (req, res) => {
  const locationData = await Location.findByPk(
    req.params.id,
    {
      include: [{ 
        model: Traveller, 
        through: {
          attributes: []
        }
      }]
    }
  );
 
  res.json(locationData);
});

router.delete("/api/locations/:id", async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ locationData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/trips", async (req, res) => {
  try {
    const tripData = await Trip.findAll();
    res.json({ tripData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/api/trips", async (req, res) => {
  try {
    const tripData = await Trip.findAll();
    res.json({ tripData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/api/trips/:id", async (req, res) => {
  try {
    const tripData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ tripData });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
