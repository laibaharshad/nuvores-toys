# Nuvores Toys — Booking & Reservation System

## Live Project

**Live Website:** https://nuvores-toys.vercel.app/

---

## Project Overview

Nuvores Toys is a booking and reservation system designed for an independent toy manufacturer that works with schools, retailers, event organizers, and other organizations on bulk and custom toy requirements.

The system allows potential clients to book a production consultation by selecting a consultation type, choosing an available date and time, entering their contact and project information, and receiving a booking confirmation with a unique booking ID.

This project was developed as a **Week 3 Professional Advanced Build** using Node.js and Express.

---

## Project Objective

The goal was to build a complete booking flow rather than a static form.

The system was designed to handle:

* Consultation selection
* Date selection
* Availability checking
* Available and unavailable time slots
* Customer information
* Project requirements
* Booking validation
* Booking creation
* Confirmation details

---

## Main Features

* Three consultation types:

  * Bulk Order Consultation
  * Custom Toy Consultation
  * Product Planning Consultation
* Date picker with past-date prevention
* Weekend/unavailable date handling
* Available and unavailable time slots
* Customer contact information form
* Organization information
* Project requirements field
* Express.js availability API
* Express.js booking API
* Required-field validation
* Unique booking ID generation
* Booking confirmation screen
* Invalid and unavailable booking states
* Responsive desktop and mobile layout

---

## Technology Stack

* **HTML5** — page structure
* **CSS3** — responsive styling and layout
* **JavaScript** — frontend interaction and API communication
* **Node.js** — server-side runtime
* **Express.js** — backend server and API routes
* **Vercel** — deployment
* **Git & GitHub** — version control and project hosting

---

## Professional Reference Research

Before development, professional scheduling platforms were reviewed to understand common booking patterns and user flows.

### Calendly

Used as a reference for service-based scheduling and displaying available consultation times.

### Acuity Scheduling

Used as a reference for the multi-step appointment flow:

**Service → Date → Time → Customer Details → Confirmation**

### Microsoft Bookings

Used as a reference for configurable booking information and organization-related questions.

### Square Appointments

Used as a reference for availability checking and booking confirmation.

These references helped shape the structure and flow of the Nuvores Toys booking system while keeping the project specific to a toy manufacturing consultation service.

---

## Booking Flow

```text
NUVORES TOYS
      ↓
Select Consultation
      ↓
Select Date
      ↓
Check Availability
      ↓
Display Available Time Slots
      ↓
Select Time
      ↓
Enter Customer Details
      ↓
Submit Booking
      ↓
Express Validation
      ↓
Create Booking
      ↓
Booking Confirmation
```

---

## API Structure

### GET `/api/health`

Checks whether the booking API is running.

Example response:

```json
{
  "status": "ok",
  "message": "Nuvores Toys booking API is running."
}
```

### GET `/api/availability?date=YYYY-MM-DD`

Returns the available consultation time slots for the selected date.

The response contains the selected date and the available/unavailable time slots.

### POST `/api/bookings`

Creates a new consultation booking.

Required information includes:

* Name
* Email
* Phone
* Organization
* Consultation type
* Date
* Time
* Project requirements

The server checks that the required booking information is present before creating the booking.

---

## Testing & Issues Fixed

The project was tested through the complete booking flow, including normal and invalid user interactions.

During development, one issue was that the available time slots were not displaying correctly after selecting a date. The frontend-to-API communication was checked and adjusted so that the availability response could be displayed in the booking interface.

Another issue occurred during booking submission where the API response was not being displayed correctly after the form was submitted. The submission and response-handling flow was checked and corrected, resulting in the final confirmation screen.

The completed flow was tested from:

**Consultation Selection → Date Selection → Time Selection → Customer Details → Booking Submission → Confirmation**

---

## Key Technical Decisions

### Node.js + Express

Express was used to create the backend API because the project required server-side availability handling, validation, and booking requests.

### API-Based Frontend Communication

The frontend communicates with the Express backend using `fetch()` requests instead of handling all booking logic only in the browser.

### Generated Booking IDs

Each successful booking receives a unique booking ID using a timestamp-based identifier.

### Responsive Interface

The interface was designed to work across desktop and smaller screen sizes.

### No Database

This version focuses on demonstrating the booking workflow and API implementation. Booking data is generated and returned by the server but is not permanently stored in a database.

---

## Project Structure

```text
nuvores-toys/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── index.html
│
├── server/
│   └── server.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/laibaharshad/nuvores-toys.git
```

Move into the project directory:

```bash
cd nuvores-toys
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

---

## Future Improvements

The current project focuses on the core booking workflow. Possible future improvements include:

* Persistent database storage for bookings
* Email confirmation after successful booking
* Admin dashboard for managing reservations
* Real-time availability management
* More detailed server-side validation
* Calendar synchronization
* Booking cancellation and rescheduling

---

## Project Context

**Project:** Week 3 — Professional Advanced Build
**Business:** Nuvores Toys
**Role:** Member 5 — Individual Contributor
**Primary Technology:** Node.js / Express
**Project Type:** Booking / Reservation System

---

## Author

**Laiba Arshad**

BS Software Engineering
Frontend Developer | AI Engineering
