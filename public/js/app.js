const consultationCards = document.querySelectorAll(".consultation-card");
const bookingDate = document.querySelector("#bookingDate");
const timeSlots = document.querySelector("#timeSlots");
const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");

let selectedConsultation = "";
let selectedTime = "";

const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];

bookingDate.min = localToday;

consultationCards.forEach((card) => {

    card.addEventListener("click", () => {
        consultationCards.forEach((item) => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        selectedConsultation = card.dataset.consultation;

        console.log("Consultation selected:", selectedConsultation);
    });
});

bookingDate.addEventListener("change", async () => {
    const date = bookingDate.value;

    if (!date) {
        timeSlots.innerHTML = `
        <p class="empty-state">
            Select a date to view available times.
        </p>
        `;

        return;
    }

    timeSlots.innerHTML = `
        <p class="empty-state">Checking availability...</p>
    `;

    try {
        const response = await fetch(`/api/availability?date=${date}`);

        if (!response.ok) {
            throw new Error("Availability request failed.");
        }

        const data = await response.json();

        timeSlots.innerHTML = "";

        data.slots.forEach((slot) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "time-slot";
            button.textContent = formatTime(slot.time);

            if (!slot.available) {
                button.disabled = true;
                button.classList.add("unavailable");
                button.textContent += " — Unavailable";
            }

            if (slot.available) {
                button.addEventListener("click", () => {
                    document.querySelectorAll(".time-slot").forEach((item) => {
                        item.classList.remove("selected");
                    });

                    button.classList.add("selected");

                    selectedTime = slot.time;

                    console.log("Time selected:", selectedTime);
                });
            }

            timeSlots.appendChild(button);
        });
    } catch (error) {
        console.error(error);

        timeSlots.innerHTML = `
        <p class="empty-state">
            Unable to load availability. Please try again.
        </p>
        `;
    }
});

function formatTime(time) {
    const [hours, minutes] = time.split(":");
    const date = new Date();

    date.setHours(Number(hours), Number(minutes));

    return date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    });
}

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formMessage.textContent = "Submitting booking...";

  const bookingData = {
    name: document.querySelector("#name").value.trim(),
    email: document.querySelector("#email").value.trim(),
    phone: document.querySelector("#phone").value.trim(),
    organization: document.querySelector("#organization").value.trim(),
    consultation: selectedConsultation,
    date: bookingDate.value,
    time: selectedTime,
    requirements: document.querySelector("#requirements").value.trim()
  };

  try {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Booking failed.");
    }

    console.log("Booking response:", data);

    document.querySelector(".booking-layout").innerHTML = `
        <section class="confirmation">
            <p class="eyebrow">BOOKING CONFIRMED</p>

            <h2>Your consultation is booked.</h2>

            <p class="confirmation-message">
            Your Nuvores Toys consultation has been successfully reserved.
            </p>

            <div class="confirmation-details">
            <div>
                <span>Booking ID</span>
                <strong>${data.booking.bookingId}</strong>
            </div>

            <div>
                <span>Consultation</span>
                <strong>${data.booking.consultation}</strong>
            </div>

            <div>
                <span>Date</span>
                <strong>${data.booking.date}</strong>
            </div>

            <div>
                <span>Time</span>
                <strong>${formatTime(data.booking.time)}</strong>
            </div>

            <div>
                <span>Name</span>
                <strong>${data.booking.name}</strong>
            </div>

            <div>
                <span>Organization</span>
                <strong>${data.booking.organization}</strong>
            </div>
            </div>
        </section>
        `;
  } catch (error) {
    console.error(error);

    formMessage.textContent = error.message;
  }
});

