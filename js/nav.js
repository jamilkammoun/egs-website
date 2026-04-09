// ============================================================
// EGS — Shared Navbar & Footer — English Only
// ============================================================

const WA_NUMBER = '96171676127';

function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('about'))    return 'about';
  if (path.includes('services')) return 'services';
  if (path.includes('products')) return 'products';
  if (path.includes('contact'))  return 'contact';
  return 'home';
}

function injectNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const p = getActivePage();
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/EGS-logo.jpg" alt="EGS" class="nav-logo-img"/>
        <div class="nav-logo-text">
          <strong>Energex Global Solutions</strong>
          <span>Smart Home & Electrical</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html"    ${p==='home'    ?'class="active"':''}>Home</a></li>
        <li><a href="services.html" ${p==='services'?'class="active"':''}>Services</a></li>
        <li><a href="products.html" ${p==='products'?'class="active"':''}>Products</a></li>
        <li><a href="about.html"    ${p==='about'   ?'class="active"':''}>About</a></li>
        <li><a href="contact.html"  ${p==='contact' ?'class="active"':''}>Contact</a></li>
      </ul>
      <div class="nav-right">
        <button class="cart-btn" id="cartOpenBtn">🛒 <span class="cart-count" id="cartCount">0</span></button>
        <button class="hamburger" id="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></button>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html"    ${p==='home'    ?'class="active"':''}>🏠 Home</a>
      <a href="services.html" ${p==='services'?'class="active"':''}>⚙️ Services</a>
      <a href="products.html" ${p==='products'?'class="active"':''}>📦 Products</a>
      <a href="about.html"    ${p==='about'   ?'class="active"':''}>👤 About</a>
      <a href="contact.html"  ${p==='contact' ?'class="active"':''}>📞 Contact</a>
    </div>`;
  const cb = document.getElementById('cartOpenBtn');
if (cb) cb.addEventListener('click', function(){ if(typeof openCart==='function') openCart(); });
}

function injectFooter() {
  const f = document.getElementById('footer');
  if (!f) return;
  f.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="images/EGS-logo.jpg" alt="EGS" class="footer-logo-img"/>
          <p>Professional smart home systems design, supply, and installation. Engineered for modern Lebanese living.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/egs.smart?igsh=cDlwbGZlYWZvZTdt" target="_blank" class="social-link" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" target="_blank" class="social-link" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://wa.me/${WA_NUMBER}" target="_blank" class="social-link" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="products.html">Products</a></li>
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
    </div>`;
}
function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }

function injectWAFloat() {
  const wa = document.createElement('a');
  wa.href = `https://wa.me/${WA_NUMBER}`;
  wa.target = '_blank';
  wa.className = 'wa-float';
  wa.title = 'WhatsApp';
  wa.innerHTML = '💬';
  document.body.appendChild(wa);
}

function injectCartSidebar() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="overlay-bg" id="overlayBg" onclick="closeCart()"></div>
    <div class="cart-sidebar" id="cartSidebar">
      <div class="cart-hdr">
        <h3>🛒 Your Cart</h3>
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
          <div class="modal-img-side"><img id="mImg" src="" alt=""/></div>
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
    </div>`;
  document.body.appendChild(el);
  document.getElementById('modalOverlay').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
}

document.addEventListener('DOMContentLoaded', function() {
  injectNavbar();
  injectFooter();
  injectWAFloat();
  if(typeof PRODUCTS !== 'undefined') {
    injectCartSidebar();
  }
});
