// Right Cyber Solutions - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenuToggle.innerHTML = isOpen ?
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' :
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });
  }

  // Desktop Dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', function(e) {
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
        }
      });

      dropdown.classList.toggle('open');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  // Mobile Accordions
  const mobileAccordions = document.querySelectorAll('.mobile-accordion-toggle');

  mobileAccordions.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const accordion = this.closest('.mobile-accordion');
      accordion.classList.toggle('open');

      const icon = this.querySelector('svg');
      if (icon) {
        icon.style.transform = accordion.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
      }
    });
  });

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      // Close others
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
        }
      });

      item.classList.toggle('open');
    });
  });

  // Time Slot Selection
  const timeSlots = document.querySelectorAll('.time-slot');

  timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
      timeSlots.forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Simple Calendar
  initCalendar();

  // Form Submission
  const contactForm = document.getElementById('contactForm');
  const appointmentForm = document.getElementById('appointmentForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showFormSuccess(this, 'Thank you for your message! We\'ll get back to you within one business day.');
    });
  }

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showFormSuccess(this, 'Your appointment request has been submitted! We\'ll send a confirmation email within 1 business day.');
    });
  }
});

// Calendar Functionality
function initCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  let currentDate = new Date();
  let selectedDate = null;

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];

    let html = `
      <div class="calendar-header">
        <button type="button" class="calendar-prev">&lt;</button>
        <h4>${monthNames[month]} ${year}</h4>
        <button type="button" class="calendar-next">&gt;</button>
      </div>
      <div class="calendar-weekdays">
        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>
      <div class="calendar-days">
    `;

    // Empty cells for days before first day of month
    for (let i = 0; i < startingDay; i++) {
      html += '<button type="button" class="calendar-day empty"></button>';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isPast = date < today;
      const isDisabled = isWeekend || isPast;
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();

      let classes = 'calendar-day';
      if (isDisabled) classes += ' disabled';
      if (isSelected) classes += ' selected';

      html += `<button type="button" class="${classes}" data-date="${date.toISOString()}" ${isDisabled ? 'disabled' : ''}>${day}</button>`;
    }

    html += '</div>';
    calendarEl.innerHTML = html;

    // Event listeners
    calendarEl.querySelector('.calendar-prev').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });

    calendarEl.querySelector('.calendar-next').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });

    calendarEl.querySelectorAll('.calendar-day:not(.disabled):not(.empty)').forEach(btn => {
      btn.addEventListener('click', function() {
        selectedDate = new Date(this.dataset.date);
        renderCalendar();
        updateSelectedDateDisplay();
      });
    });
  }

  function updateSelectedDateDisplay() {
    const display = document.getElementById('selectedDate');
    if (display && selectedDate) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      display.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Selected: ${selectedDate.toLocaleDateString('en-US', options)}
      `;
    }
  }

  renderCalendar();
}

// Form Success Handler
function showFormSuccess(form, message) {
  const parent = form.parentElement;
  form.style.display = 'none';

  const successHtml = `
    <div class="success-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <h2>Success!</h2>
      <p>${message}</p>
      <button class="btn btn-primary" onclick="location.reload()">Send Another Message</button>
    </div>
  `;

  parent.insertAdjacentHTML('beforeend', successHtml);
}
