// ============================================================
// PARTIAL INJECTOR — Works with file:// protocol (no fetch)
// ============================================================

// Sidebar HTML template (inline, no fetch needed)
function getSidebarHTML(prefix) {
  const p = prefix || '';
  const logoSrc = p + 'assets/img/logo.png';
  const excelFile = p + 'MAPPING HOTEL.xlsx';

  return `
<aside id="sidebar" class="fixed inset-y-0 left-0 z-40 w-72 bg-midnight-glass text-slate-300 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out border-r border-white/5 shadow-2xl">
  <div class="flex flex-col h-full">
    <!-- Logo -->
    <div class="flex items-center gap-4 px-6 py-8 border-b border-white/5">
      <div class="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl overflow-hidden p-1 border border-blue-500/20 flex-shrink-0">
        <img src="${logoSrc}" alt="Logo" class="w-full h-full object-contain scale-110">
      </div>
      <div>
        <h1 class="text-sm font-bold text-white tracking-tight leading-tight">Manajemen Hotel</h1>
        <p class="text-[9px] tracking-micro text-blue-500 mt-1">Haji & Umroh</p>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 px-4 py-6 overflow-y-auto space-y-1">
      <p class="px-3 text-[10px] text-slate-500 tracking-micro mb-3 mt-2">Operasional</p>

      <a href="${p}dashboard.html" data-page="dashboard" class="nav-item group">
        <div class="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
          <i data-lucide="layout-dashboard" class="w-4 h-4 text-blue-400 group-hover:text-blue-300"></i>
        </div>
        <span>Dashboard</span>
      </a>

      <a href="${p}keberangkatan/index.html" data-page="keberangkatan" class="nav-item group">
        <div class="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
          <i data-lucide="plane-takeoff" class="w-4 h-4"></i>
        </div>
        <span>Keberangkatan</span>
      </a>

      <a href="${p}reservasi/index.html" data-page="reservasi" class="nav-item group">
        <div class="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
          <i data-lucide="calendar-check" class="w-4 h-4"></i>
        </div>
        <span>Reservasi Hotel</span>
      </a>

      <a href="${p}kalender/index.html" data-page="kalender" class="nav-item group">
        <div class="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
          <i data-lucide="calendar-days" class="w-4 h-4 text-blue-400"></i>
        </div>
        <span>Kalender Ocupansi</span>
      </a>

      <p class="px-3 text-[10px] text-slate-500 tracking-micro mb-3 mt-8">Data Master</p>

      <a href="${p}hotel/index.html" data-page="hotel" class="nav-item group">
        <div class="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
          <i data-lucide="building-2" class="w-4 h-4"></i>
        </div>
        <span>Hotel & Kamar</span>
      </a>

      <a href="${p}jamaah/index.html" data-page="jamaah" class="nav-item group">
        <div class="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
          <i data-lucide="users" class="w-4 h-4"></i>
        </div>
        <span>Data Jamaah</span>
      </a>

      <a href="${excelFile}" download class="nav-item group mt-4 border border-white/5 hover:border-amber-500/30 bg-amber-500/5">
        <div class="p-2 rounded-lg bg-amber-500/10 flex-shrink-0">
          <i data-lucide="file-spreadsheet" class="w-4 h-4 text-amber-400"></i>
        </div>
        <div class="flex items-center gap-2 flex-1">
          <span class="text-amber-200">Mapping Hotel</span>
          <span class="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[9px] font-bold rounded uppercase">.xlsx</span>
        </div>
      </a>
    </nav>

    <!-- User Profile -->
    <div class="p-4 border-t border-white/5">
      <a href="${p}profile.html" class="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group border border-white/5">
        <div class="relative flex-shrink-0">
          <div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-inner">AF</div>
          <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-500 border-2 border-[#06110e] rounded-full"></span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-bold text-white truncate">Ahmad Fauzi</p>
          <p class="text-[9px] tracking-micro text-slate-400 mt-1">Manager</p>
        </div>
        <i data-lucide="settings" class="w-4 h-4 text-slate-500 group-hover:text-white transition-colors flex-shrink-0"></i>
      </a>
    </div>
  </div>
</aside>
<div id="sidebarOverlay" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 lg:hidden hidden" onclick="toggleSidebar()"></div>
`;
}

function getTopbarHTML(pageTitle) {
  return `
<header class="bg-white/70 backdrop-blur-xl border-b border-black/5 sticky top-0 z-30">
  <div class="flex items-center justify-between px-8 py-4">
    <div class="flex items-center gap-6">
      <button onclick="toggleSidebar()" class="lg:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
      <div class="reveal">
        <h2 id="pageTitle" class="text-2xl font-bold text-slate-900 tracking-tight leading-tight">${pageTitle}</h2>
        <div class="flex items-center gap-2 mt-1">
          <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <p class="text-[10px] tracking-micro text-slate-500">Sistem Operasional Aktif</p>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="hidden md:block relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <i data-lucide="search" class="w-4 h-4"></i>
        </div>
        <input type="text" placeholder="Cari jamaah, paket, atau hotel..." class="pl-11 pr-6 py-2.5 bg-slate-50/80 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white w-72 text-sm font-medium transition-all outline-none">
      </div>
      <button class="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
      </button>
      <div class="relative">
        <button onclick="toggleDropdown('userDropdown')" data-dropdown class="flex items-center gap-3 p-1.5 pr-4 hover:bg-slate-50 rounded-2xl transition-all duration-200 border border-transparent hover:border-slate-200/60 group">
          <div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm">AF</div>
          <div class="hidden sm:block text-left">
            <p class="text-xs font-bold text-slate-900 leading-none">Ahmad Fauzi</p>
            <p class="text-[9px] tracking-micro text-slate-400 mt-1">Administrator</p>
          </div>
          <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
        </button>
        <div id="userDropdown" class="hidden absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden">
          <div class="px-4 py-3 border-b border-slate-50 bg-slate-50/50">
            <p class="text-[9px] text-slate-500 tracking-micro mb-1">Status Sesi</p>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
              <p class="text-xs font-bold text-slate-700">Online & Terverifikasi</p>
            </div>
          </div>
          <div class="p-2 space-y-1">
            <a href="profile.html" class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all">
              <i data-lucide="user" class="w-4 h-4"></i> Profil Pengguna
            </a>
            <hr class="my-2 border-slate-100 mx-2">
            <a href="index.html" class="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all">
              <i data-lucide="log-out" class="w-4 h-4"></i> Keluar Sistem
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
`;
}

// ============================================================
// Main initialization
// ============================================================
function injectPartials() {
  const path = window.location.pathname;
  const isSubdir = path.includes('/jamaah/') ||
                   path.includes('/paket/') ||
                   path.includes('/keberangkatan/') ||
                   path.includes('/pembayaran/') ||
                   path.includes('/dokumen/') ||
                   path.includes('/laporan/') ||
                   path.includes('/master/') ||
                   path.includes('/mapping-hotel/') ||
                   path.includes('/hotel/') ||
                   path.includes('/reservasi/') ||
                   path.includes('/kalender/');

  const prefix = isSubdir ? '../' : '';

  // Inject sidebar
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = getSidebarHTML(prefix);
  }

  // Inject topbar
  const topbarContainer = document.getElementById('topbar-container');
  if (topbarContainer) {
    const pageTitle = document.querySelector('title')?.textContent?.split('|')[0]?.trim() || 'Dashboard';
    topbarContainer.innerHTML = getTopbarHTML(pageTitle);

    // Fix profile/logout links for subdirectories
    if (isSubdir) {
      topbarContainer.querySelectorAll('a[href="profile.html"]').forEach(a => a.href = '../profile.html');
      topbarContainer.querySelectorAll('a[href="index.html"]').forEach(a => a.href = '../index.html');
    }
  }

  // Re-initialize Lucide icons
  if (window.lucide) window.lucide.createIcons();

  // Set active menu item
  setActiveMenuItem();
}

// ============================================================
// Toast notification
// ============================================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  const colors = { success: 'bg-blue-600', error: 'bg-red-600', warning: 'bg-amber-600', info: 'bg-blue-600' };
  toast.className = `fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl text-white font-semibold text-sm transform transition-all duration-300 translate-x-full ${colors[type] || colors.success}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.classList.remove('translate-x-full'); });
  setTimeout(() => {
    toast.classList.add('translate-x-full');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// Modal management
// ============================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
}

// ============================================================
// Sidebar toggle for mobile
// ============================================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
  }
}

// ============================================================
// Format helpers
// ============================================================
function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

// ============================================================
// Set active menu item
// ============================================================
function setActiveMenuItem() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('[data-page]').forEach(item => {
    const page = item.getAttribute('data-page');
    const isActive = currentPath.includes('/' + page + '/') ||
      (page === 'dashboard' && (currentPath.endsWith('dashboard.html')));
    item.classList.toggle('nav-item-active', isActive);
  });
}

// ============================================================
// Search functionality
// ============================================================
function handleSearch(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  input.addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = table.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
      rows[i].style.display = rows[i].textContent.toLowerCase().includes(filter) ? '' : 'none';
    }
  });
}

// ============================================================
// Dropdown toggle
// ============================================================
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) dropdown.classList.toggle('hidden');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-dropdown]')) {
    document.querySelectorAll('[id$="Dropdown"]').forEach(d => d.classList.add('hidden'));
  }
  if (e.target.classList.contains('modal-backdrop')) {
    document.querySelectorAll('.modal-backdrop').forEach(m => { m.classList.add('hidden'); m.classList.remove('flex'); });
  }
});

// ============================================================
// Auto-init on DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  // isSubdir covers all module folders — only the root PROJECT/index.html is the login page
  const isSubdir = path.includes('/jamaah/') || path.includes('/paket/') ||
                   path.includes('/keberangkatan/') || path.includes('/pembayaran/') ||
                   path.includes('/dokumen/') || path.includes('/laporan/') ||
                   path.includes('/master/') || path.includes('/mapping-hotel/') ||
                   path.includes('/hotel/') || path.includes('/reservasi/') ||
                   path.includes('/kalender/');
  const isLoginPage = !isSubdir && path.endsWith('index.html');

  if (!isLoginPage && path !== '/') {
    injectPartials();
  }

  // Auto-handle form submissions with data-submit-message
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.dataset.submitMessage) {
      e.preventDefault();
      showToast(form.dataset.submitMessage, 'success');
      const modal = form.closest('.modal-backdrop');
      if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
      form.reset();
    }
  });
});
