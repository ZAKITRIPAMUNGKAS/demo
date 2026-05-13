// Main JavaScript for prototype interactions

// Toast notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform transition-all duration-300 ${
    type === 'success' ? 'bg-emerald-600' :
    type === 'error' ? 'bg-red-600' :
    type === 'warning' ? 'bg-amber-600' :
    'bg-blue-600'
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Modal management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (sidebar && overlay) {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
  }
}

// Format currency
function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Load sidebar and topbar
async function loadPartials() {
  try {
    // Load sidebar
    const sidebarResponse = await fetch('../partials/sidebar.html');
    const sidebarHtml = await sidebarResponse.text();
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
      sidebarContainer.innerHTML = sidebarHtml;
    }

    // Load topbar
    const topbarResponse = await fetch('../partials/topbar.html');
    const topbarHtml = await topbarResponse.text();
    const topbarContainer = document.getElementById('topbar-container');
    if (topbarContainer) {
      topbarContainer.innerHTML = topbarHtml;
    }

    // Set active menu item
    setActiveMenuItem();
  } catch (error) {
    console.error('Error loading partials:', error);
  }
}

// Set active menu item based on current page
function setActiveMenuItem() {
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll('[data-page]');

  menuItems.forEach(item => {
    const page = item.getAttribute('data-page');
    if (currentPath.includes(page)) {
      item.classList.add('bg-emerald-700', 'text-white');
      item.classList.remove('text-emerald-100', 'hover:bg-emerald-700');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load partials if not on login page
  if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
    loadPartials();
  }

  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      const modals = document.querySelectorAll('.modal-backdrop');
      modals.forEach(modal => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
    }
  });

  // Handle form submissions
  const forms = document.querySelectorAll('form[data-submit-message]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = form.getAttribute('data-submit-message');
      showToast(message, 'success');

      // Close modal if form is inside one
      const modal = form.closest('.modal-backdrop');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }

      // Reset form
      form.reset();
    });
  });
});

// Search functionality
function handleSearch(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);

  if (!input || !table) return;

  input.addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    }
  });
}

// Dropdown toggle
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-dropdown]')) {
    const dropdowns = document.querySelectorAll('[id$="Dropdown"]');
    dropdowns.forEach(dropdown => dropdown.classList.add('hidden'));
  }
});
