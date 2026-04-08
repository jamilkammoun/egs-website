// ============================================================
// EGS — Shared Navbar & Footer Injection
// ============================================================

const WA_NUMBER = '96171676127';

const EGS_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 48" fill="none">
  <text x="2" y="36" font-family="Poppins,sans-serif" font-weight="800" font-size="38" fill="#ffffff" letter-spacing="-2">EGS</text>
  <rect x="0" y="40" width="80" height="3" rx="1.5" fill="#00C896"/>
</svg>`;

function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('about'))    return 'about';
  if (path.includes('services')) return 'services';
  if (path.includes('products')) return 'products';
  if (path.includes('projects')) return 'projects';
  if (path.includes('contact'))  return 'contact';
  return 'home';
}

function activeClass(page) {
  return getActivePage() === page ? ' active' : '';
}

function injectNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <svg class="nav-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 44">
          <text x="0" y="34" font-family="Poppins,sans-serif" font-weight="800" font-size="34" fill="#ffffff" letter-spacing="-1">EGS</text>
          <rect x="0" y="38" width="72" height="3" rx="1.5" fill="#00C896"/>
        </svg>
        <div class="nav-logo-text">
          <strong>Energex Global Solutions</strong>
          <span>Smart Home & Electrical</span>
        </div>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" class="${activeClass('home') ? 'active' : ''}">Home</a></li>
        <li><a href="services.html" class="${activeClass('services') ? 'active' : ''}">Services</a></li>
        <li><a href="products.html" class="${activeClass('products') ? 'active' : ''}">Products</a></li>
        <li><a href="projects.html" class="${activeClass('projects') ? 'active' : ''}">Projects</a></li>
        <li><a href="about.html" class="${activeClass('about') ? 'active' : ''}">About</a></li>
        <li><a href="contact.html" class="${activeClass('contact') ? 'active' : ''}">Contact</a></li>
      </ul>

      <div class="nav-right">
        <button class="lang-btn" id="langBtn" onclick="toggleLang()">عربي</button>
        <button class="cart-btn" id="cartOpenBtn">
          🛒 <span id="cartCount">0</span>
        </button>
        <button class="hamburger" id="hamburger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html"    class="${activeClass('home')}">🏠 Home</a>
      <a href="services.html" class="${activeClass('services')}">⚙️ Services</a>
      <a href="products.html" class="${activeClass('products')}">📦 Products</a>
      <a href="projects.html" class="${activeClass('projects')}">🏗️ Projects</a>
      <a href="about.html"    class="${activeClass('about')}">👤 About</a>
      <a href="contact.html"  class="${activeClass('contact')}">📞 Contact</a>
    </div>
  `;
}

function injectFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <svg class="footer-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 44">
            <text x="0" y="34" font-family="Poppins,sans-serif" font-weight="800" font-size="34" fill="#ffffff" opacity="0.85" letter-spacing="-1">EGS</text>
            <rect x="0" y="38" width="72" height="3" rx="1.5" fill="#00C896"/>
          </svg>
          <p>Professional smart home systems design, supply, and installation. Engineered for modern Lebanese living.</p>
          <div class="footer-social">
            <a href="#" class="social-link" title="Instagram">📸</a>
            <a href="#" class="social-link" title="Facebook">📘</a>
            <a href="https://wa.me/${WA_NUMBER}" class="social-link" title="WhatsApp" target="_blank">💬</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html">Smart Home Installation</a></li>
            <li><a href="services.html">Electrical Systems</a></li>
            <li><a href="services.html">Device Integration</a></li>
            <li><a href="services.html">Maintenance & Support</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-item">📞 <span>+961 71 676 127</span></div>
          <div class="footer-contact-item">✉️ <span>info@energexglobalsolutions.com</span></div>
          <div class="footer-contact-item">📍 <span>Tripoli, North Lebanon</span></div>
          <div class="footer-contact-item">🌐 <span>energexglobalsolutions.com</span></div>
        </div>
      </div>

      <hr class="footer-divider"/>

      <div class="footer-bottom">
        <p class="footer-copy">© 2025 Energex Global Solutions. All rights reserved.</p>
        <div class="footer-badges">
          <span class="footer-badge">SONOFF</span>
          <span class="footer-badge">TUYA</span>
          <span class="footer-badge">SUMMAO</span>
        </div>
      </div>
    </div>
  `;
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function toggleLang() {
  const ar = document.body.classList.toggle('ar');
  document.documentElement.setAttribute('dir', ar ? 'rtl' : 'ltr');
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = ar ? 'English' : 'عربي';
  if (typeof renderFilters === 'function') renderFilters();
  if (typeof renderCatalog === 'function') renderCatalog();
  if (typeof updateCartUI === 'function') updateCartUI();
}

function injectWAFloat() {
  const wa = document.createElement('a');
  wa.href = `https://wa.me/${WA_NUMBER}`;
  wa.target = '_blank';
  wa.className = 'wa-float';
  wa.title = 'Chat on WhatsApp';
  wa.textContent = '💬';
  document.body.appendChild(wa);
}

function injectCartSidebar() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="overlay-bg" id="overlayBg" onclick="closeCart()"></div>
    <div class="cart-sidebar" id="cartSidebar">
      <div class="cart-hdr">
        <h3>🛒 <span class="en">Your Cart</span><span class="ar-t">سلة المشتريات</span></h3>
        <button class="cart-close-btn" onclick="closeCart()">✕</button>
      </div>
      <div class="cart-items" id="cartItemsArea"></div>
      <div class="cart-ftr" id="cartFtr" style="display:none">
        <div class="cart-tot-row">
          <span class="cart-tot-lbl">Total (hardware)</span>
          <span class="cart-tot-val" id="cartTotVal">$0</span>
        </div>
        <button class="cart-wa-btn" onclick="sendCartWA()">💬 Order via WhatsApp</button>
        <p class="cart-note">Installation cost quoted separately</p>
      </div>
    </div>
    <div class="toast" id="toast"><span id="toastMsg"></span></div>
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-box">
        <div class="modal-grid">
          <div class="modal-img-side">
            <img id="mImg" src="" alt=""/>
          </div>
          <div class="modal-info">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div class="modal-brand" id="mCat"></div>
            <div class="modal-name" id="mName"></div>
            <div class="modal-model" id="mModel"></div>
            <div class="modal-price" id="mPrice"></div>
            <div class="modal-desc" id="mDesc"></div>
            <div class="modal-specs" id="mSpecs"></div>
            <div class="modal-variants" id="mVariants"></div>
            <div class="modal-qty-row">
              <span class="modal-qty-lbl">Qty:</span>
              <div class="qty-ctrl">
                <button class="qty-btn" onclick="mQty(-1)">−</button>
                <input class="qty-inp" id="mQtyInp" type="number" value="1" min="1" max="20"/>
                <button class="qty-btn" onclick="mQty(1)">+</button>
              </div>
            </div>
            <button class="modal-add-btn" onclick="addFromModal()">🛒 Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  injectNavbar();
  injectFooter();
  injectWAFloat();
  injectCartSidebar();

  const cartBtn = document.getElementById('cartOpenBtn');
  if (cartBtn) cartBtn.addEventListener('click', openCart);
});

