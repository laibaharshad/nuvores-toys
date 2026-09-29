const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));
// tells Express:
// "The files inside public are the files I want the browser to access."

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Nuvores Toys booking API is running."
  });
});

app.get("/api/availability", (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({
      error: "A date is required."
    });
  }

  const slots = [
    { time: "10:00", available: true },
    { time: "11:30", available: true },
    { time: "14:00", available: true },
    { time: "15:30", available: false }
  ];

  res.json({
    date,
    slots
  });
});

app.post("/api/bookings", (req, res) => {
  const {
    name,
    email,
    phone,
    organization,
    consultation,
    date,
    time,
    requirements
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !organization ||
    !consultation ||
    !date ||
    !time ||
    !requirements
  ) {
    return res.status(400).json({
      success: false,
      error: "All booking fields are required."
    });
  }

  const bookingId = `NV-${Date.now()}`;

  const booking = {
    bookingId,
    name,
    email,
    phone,
    organization,
    consultation,
    date,
    time,
    requirements
  };

  res.status(201).json({
    success: true,
    message: "Booking created successfully.",
    booking
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;

