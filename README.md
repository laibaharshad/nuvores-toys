# Nuvores Toys — Booking & Reservation System

## Project Overview

Nuvores Toys is a booking and reservation system designed for an independent toy manufacturer serving schools, retailers, event organizers, and organizations.

The system allows customers to book a consultation for bulk orders, custom toy requirements, or product planning.

## Features

* Consultation type selection
* Date selection
* Past dates prevented through the date picker
* Weekend availability handling
* Available and unavailable time slots
* Customer contact information form
* Project requirements field
* Express.js availability API
* Express.js booking API
* Backend form validation
* Unique booking ID generation
* Booking confirmation screen
* Responsive desktop and mobile layout
* Invalid and unavailable booking states

## Consultation Types

* Bulk Order Consultation
* Custom Toy Consultation
* Product Planning Consultation

## Technology Stack

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js

## API Endpoints

### GET `/api/health`

Checks whether the booking API is running.

### GET `/api/availability?date=YYYY-MM-DD`

Returns available consultation time slots for the selected date.

Weekend dates return an unavailable state.

### POST `/api/bookings`

Creates a new consultation booking.

Required booking fields:

* Name
* Email
* Phone
* Organization
* Consultation type
* Date
* Time
* Project requirements

The server validates required booking information before creating the booking.

## Booking Flow

1. Customer selects a consultation type.
2. Customer selects a date.
3. The system checks availability.
4. Available time slots are displayed.
5. Customer enters contact and project information.
6. The booking is submitted to the Express API.
7. The server validates the booking.
8. A unique booking ID is generated.
9. A confirmation screen displays the reservation details.

## Project Structure

```text
nuvores-toys/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── index.html
├── server/
│   └── server.js
├── package.json
└── README.md
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server/server.js
```

Then open:

```text
http://localhost:3000
```

## Validation

The system handles:

* Missing booking fields
* Missing consultation selection
* Missing time selection
* Past date prevention
* Weekend/unavailable dates
* Unavailable time slots
* Availability request errors

## Evidence

The project documentation includes screenshots showing the working interface, API functionality, booking flow, confirmation state, and unavailable state.

## Project Context

**Project:** Week 3 — Professional Advanced Build
**Business:** Nuvores Toys
**Role:** Member 5 — Individual Contributor
**Primary Technology:** Node.js / Express
