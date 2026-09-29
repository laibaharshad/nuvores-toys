# Nuvores Toys — Booking & Reservation System

## Live Project

**Live Website:** https://nuvores-toys.vercel.app/

---

## Project Overview

Nuvores Toys is a booking and reservation system designed for an independent toy manufacturer that works with schools, retailers, event organizers, and other organizations on bulk and custom toy requirements.

The system allows potential clients to book a production consultation by selecting a consultation type, choosing a date and available time slot, entering their contact and project information, and receiving a booking confirmation with a unique booking ID.

This project was developed as a **Week 3 Professional Advanced Build** using Node.js and Express.

---

## Project Objective

The objective was to build a complete booking flow rather than a static form.

The system handles:

- Consultation selection
- Date selection
- Availability checking
- Available and unavailable time slots
- Customer information
- Project requirements
- Booking validation
- Booking creation
- Booking confirmation

---

## Main Features

- Three consultation types:
  - Bulk Order Consultation
  - Custom Toy Consultation
  - Product Planning Consultation
- Date picker
- Past-date prevention
- Weekend/unavailable date handling
- Available and unavailable time slots
- Customer contact information
- Organization information
- Project requirements
- Express.js availability API
- Express.js booking API
- Required-field validation
- Unique booking ID generation
- Booking confirmation screen
- Invalid booking states
- Responsive desktop and mobile interface
- Vercel deployment

---

## Technology Stack

- **HTML5** — page structure
- **CSS3** — styling and responsive layout
- **JavaScript** — frontend interaction and API communication
- **Node.js** — server-side runtime
- **Express.js** — backend server and API routes
- **Vercel** — deployment
- **Git & GitHub** — version control

---

## Professional Reference Research

Before development, several professional scheduling platforms were reviewed to understand common booking patterns and user flows.

### Calendly

Used as a reference for service-based scheduling and displaying available consultation times.

### Acuity Scheduling

Used as a reference for the multi-step appointment flow:

**Service → Date → Time → Customer Details → Confirmation**

### Microsoft Bookings

Used as a reference for configurable booking information and organization-related questions.

### Square Appointments

Used as a reference for availability checking and booking confirmation.

These references helped shape the structure of the Nuvores Toys booking system while keeping the project specific to a toy manufacturing consultation service.

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

Receives the selected date and returns the available and unavailable consultation time slots.

### POST `/api/bookings`

Receives the submitted booking information and checks that all required fields have been provided before creating a booking.

Required information includes:

- Name
- Email
- Phone
- Organization
- Consultation type
- Date
- Time
- Project requirements

A unique booking ID is generated for each successful booking.

---

## Testing & Issues Fixed

The system was tested through the complete booking flow from consultation selection to confirmation.

During development, the available time slots initially did not display correctly after selecting a date. The frontend-to-API communication was checked and adjusted so that the availability response could be displayed correctly.

Another issue occurred after submitting the booking form where the API response was not being displayed correctly. The response-handling flow was checked and corrected so that the booking confirmation could be shown.

During deployment, the frontend initially loaded on Vercel but the Express API routes returned `404` errors. The deployment structure was adjusted by exposing the Express application through the root `api` directory and configuring the Vercel routing. The deployed `/api/health` endpoint was then tested successfully.

The final deployed booking flow was tested from:

**Consultation Selection → Date Selection → Time Selection → Customer Details → Booking Submission → Confirmation**

---

## Key Technical Decisions

### Node.js + Express

Express was used to handle the backend API routes, availability requests, validation, and booking requests.

### API-Based Frontend Communication

The frontend communicates with the Express backend using `fetch()` requests.

When a user selects a date, the frontend requests the available time slots from the backend.

When a user submits the booking form, the booking information is sent to the Express booking endpoint.

### Generated Booking IDs

Each successful booking receives a unique timestamp-based booking ID.

### Responsive Interface

The interface was designed to work across desktop and smaller screen sizes.

### Vercel Deployment

The project is deployed on Vercel. The Express application is exposed through the `/api` directory so that the frontend and backend API can operate through the deployed application.

### No Database

The current version does not use a database. Booking information is generated and returned by the server but is not permanently stored.

---

## Project Structure

```text
nuvores-toys/
│
├── api/
│   └── index.js
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
├── vercel.json
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

The current project focuses on the complete consultation booking workflow.

Possible future improvements include:

- Persistent database storage
- Email confirmations
- Admin dashboard for managing bookings
- Real-time availability management
- More detailed server-side validation
- Calendar synchronization
- Booking cancellation and rescheduling

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