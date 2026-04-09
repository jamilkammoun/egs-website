// ============================================================
// EGS — App Logic — English Only
// ============================================================

let cart = {};
let currentFilter = 'all';
let currentModalId = null;
let currentVariants = {};

// ── CART ──
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('overlayBg').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlayBg').classList.remove('open');
  document.body.style.overflow = '';
}
function cartCount() { return Object.values(cart).reduce((s,i)=>s+i.qty,0); }
function cartTotal() { return Object.values(cart).reduce((s,i)=>s+(i.price*i.qty),0); }

function addToCart(id, qty) {
  qty = parseInt(qty)||1;
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  if(cart[id]) { cart[id].qty+=qty; } else { cart[id]={...p,qty}; }
  updateCartUI();
  toast('Added: '+p.name);
}
function removeFromCart(id) { delete cart[id]; updateCartUI(); }
function changeCartQty(id,d) {
  if(cart[id]) { cart[id].qty+=d; if(cart[id].qty<=0) delete cart[id]; }
  updateCartUI();
}

function updateCartUI() {
  const n = cartCount();
  const el = document.getElementById('cartCount');
  if(el) el.textContent = n;
  const area = document.getElementById('cartItemsArea');
  const ftr  = document.getElementById('cartFtr');
  if(!area) return;
  if(n===0) {
    area.innerHTML='<div class="cart-empty"><div>🛒</div><p>Cart is empty</p></div>';
    if(ftr) ftr.style.display='none';
    return;
  }
  if(ftr) ftr.style.display='block';
  area.innerHTML='';
  Object.values(cart).forEach(item=>{
    const ci=document.createElement('div');
    ci.className='ci';
    ci.innerHTML=`
      <div class="ci-img"><img src="images/${item.img}.jpg" alt="${item.name}"/></div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-model">${item.model}</div>
        <div class="ci-price">${item.price>0?'$'+(item.price*item.qty).toFixed(2):item.pd||'Contact'}</div>
      </div>
      <div class="ci-right">
        <div class="ci-qc">
          <button class="ciq-btn" onclick="changeCartQty('${item.id}',-1)">−</button>
          <span class="ciq-num">${item.qty}</span>
          <button class="ciq-btn" onclick="changeCartQty('${item.id}',1)">+</button>
        </div>
        <button class="ci-del" onclick="removeFromCart('${item.id}')">🗑</button>
      </div>`;
    area.appendChild(ci);
  });
  const tv=document.getElementById('cartTotVal');
  if(tv) tv.textContent='$'+cartTotal().toFixed(2);
}

function sendCartWA() {
  let msg='Hello EGS! My order:\n\n';
  Object.values(cart).forEach(item=>{
    msg+=`• ${item.name} (${item.model}) × ${item.qty}${item.price>0?' = $'+(item.price*item.qty).toFixed(2):' ('+( item.pd||'Contact for price')+')'}\n`;
  });
  msg+=`\nHardware total: $${cartTotal().toFixed(2)}\n\nPlease advise on installation.`;
  window.open('https://wa.me/96171676127?text='+encodeURIComponent(msg),'_blank');
}

// ── FILTERS ──
function renderFilters() {
  const row=document.getElementById('filterRow');
  if(!row) return;
  row.innerHTML='';
  FILTERS.forEach(f=>{
    const btn=document.createElement('button');
    btn.className='filter-btn'+(currentFilter===f.id?' active':'');
    btn.textContent=f.en;
    btn.onclick=()=>setFilter(f.id,btn);
    row.appendChild(btn);
  });
}

function setFilter(id,btn) {
  currentFilter=id;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog();
}

// ── CATALOG ──
function renderCatalog() {
  const grid=document.getElementById('catalogGrid');
  if(!grid) return;
  const brands=['sonoff','tuya','summao'];
  let prods = currentFilter==='all' ? PRODUCTS
    : brands.includes(currentFilter) ? PRODUCTS.filter(p=>p.brand===currentFilter)
    : PRODUCTS.filter(p=>p.cat===currentFilter);

  grid.innerHTML='';
  prods.forEach(p=>{
    const card=document.createElement('div');
    card.className='prod-card';
    card.innerHTML=`
      <div class="prod-img-wrap">
        <div class="prod-img" onclick="openModal('${p.id}')">
          <img src="images/${p.img}.jpg" alt="${p.name}" loading="lazy"/>
        </div>
        ${p.tag?`<div class="prod-tag tag-${p.tc||'blue'}">${p.tag}</div>`:''}
      </div>
      <div class="prod-body">
        <div class="prod-name" onclick="openModal('${p.id}')">${p.name}</div>
        <div class="prod-model">${p.model}</div>
        <div class="prod-price">${p.pd}</div>
        <div class="prod-btns">
          <button class="prod-btn-cart" onclick="addToCart('${p.id}',1)">Add to Cart</button>
          <button class="prod-btn-detail" onclick="openModal('${p.id}')">Details</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ── MODAL ──
function getVariantImg(p) {
  if(!p.variantImgs) return p.img;
  const g=currentVariants['gangs']||(p.variants&&p.variants.gangs?p.variants.gangs[0]:'1 Gang');
  const c=currentVariants['color']||(p.variants&&p.variants.color?p.variants.color[0]:'White');
  return p.variantImgs[g+'_'+c]||p.img;
}
function getVariantPrice(p) {
  if(!p.variantPrices) return p.pd;
  const g=currentVariants['gangs']||(p.variants&&p.variants.gangs?p.variants.gangs[0]:'');
  return p.variantPrices[g]||p.pd;
}

function openModal(id) {
  const p=PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  currentModalId=id;
  currentVariants={};
  if(p.variants&&!Array.isArray(p.variants)) {
    Object.keys(p.variants).forEach(k=>{currentVariants[k]=p.variants[k][0];});
  }
  document.getElementById('mImg').src='images/'+getVariantImg(p)+'.jpg';
  document.getElementById('mCat').textContent=p.brand.toUpperCase()+' — '+p.model;
  document.getElementById('mName').textContent=p.name;
  document.getElementById('mModel').textContent=p.model;
  document.getElementById('mPrice').textContent=getVariantPrice(p);
  document.getElementById('mDesc').textContent=p.desc;
  document.getElementById('mSpecs').innerHTML=p.specs.map(([k,v])=>`<div class="spec-row"><span>${k}</span><span>${v}</span></div>`).join('');
  document.getElementById('mQtyInp').value=1;

  const varDiv=document.getElementById('mVariants');
  varDiv.innerHTML='';
  if(p.variants&&!Array.isArray(p.variants)) {
    const labels={gangs:'Gang Count',color:'Color',protocol:'Protocol'};
    const colorMap={White:'#f5f3f0',Black:'#1a1a2e',Gray:'#9ca3af'};
    Object.keys(p.variants).forEach(key=>{
      const row=document.createElement('div');
      row.style.marginBottom='12px';
      const lbl=document.createElement('div');
      lbl.className='variant-lbl';
      lbl.textContent=labels[key]||key;
      row.appendChild(lbl);
      const opts=document.createElement('div');
      opts.className='variant-opts';
      p.variants[key].forEach((val,i)=>{
        (function(k,v){
          const btn=document.createElement('button');
          btn.className='variant-btn'+(i===0?' active':'');
          if(k==='color'){
            btn.style.cssText=`width:28px;height:28px;border-radius:50%;background:${colorMap[v]||'#ccc'};border:2px solid ${i===0?'var(--blue)':'#ccc'};padding:0;cursor:pointer;`;
            btn.title=v;
          } else { btn.textContent=v; }
          btn.onclick=()=>{
            opts.querySelectorAll('.variant-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            currentVariants[k]=v;
            document.getElementById('mImg').src='images/'+getVariantImg(p)+'.jpg';
            document.getElementById('mPrice').textContent=getVariantPrice(p);
          };
          opts.appendChild(btn);
        })(key,val);
      });
      row.appendChild(opts);
      varDiv.appendChild(row);
    });
  }
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function mQty(d) {
  const el=document.getElementById('mQtyInp');
  el.value=Math.max(1,Math.min(20,(parseInt(el.value)||1)+d));
}
function addFromModal() {
  const p=PRODUCTS.find(x=>x.id===currentModalId);
  if(!p) return;
  const qty=parseInt(document.getElementById('mQtyInp').value)||1;
  const varStr=Object.values(currentVariants).join(' / ');
  const cartKey=currentModalId+(varStr?'__'+varStr.replace(/[^a-zA-Z0-9]/g,'_'):'');
  const entry={id:cartKey,brand:p.brand,name:p.name+(varStr?` (${varStr})`:''),model:p.model,img:getVariantImg(p),price:0,pd:getVariantPrice(p),qty};
  if(cart[cartKey]){cart[cartKey].qty+=qty;}else{cart[cartKey]=entry;}
  updateCartUI();
  toast('Added to cart');
  closeModal();
}

// ── TOAST ──
function toast(msg) {
  const el=document.getElementById('toast');
  if(!el) return;
  document.getElementById('toastMsg').textContent=msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2500);
}

// ── FEATURED (home page) ──
function renderFeatured() {
  const grid=document.getElementById('featuredGrid');
  if(!grid) return;
  const featured=PRODUCTS.filter(p=>p.featured).slice(0,6);
  const display=featured.length?featured:PRODUCTS.slice(0,6);
  display.forEach(p=>{
    const card=document.createElement('div');
    card.className='prod-card';
    card.innerHTML=`
      <div class="prod-img-wrap">
        <div class="prod-img" onclick="openModal('${p.id}')">
          <img src="images/${p.img}.jpg" alt="${p.name}" loading="lazy"/>
        </div>
        ${p.tag?`<div class="prod-tag tag-${p.tc||'blue'}">${p.tag}</div>`:''}
      </div>
      <div class="prod-body">
        <div class="prod-name" onclick="openModal('${p.id}')">${p.name}</div>
        <div class="prod-model">${p.model}</div>
        <div class="prod-price">${p.pd}</div>
        <div class="prod-btns">
          <button class="prod-btn-cart" onclick="addToCart('${p.id}',1)">Add to Cart</button>
          <button class="prod-btn-detail" onclick="openModal('${p.id}')">Details</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded',function(){
  renderFeatured();
  renderFilters();
  renderCatalog();
  updateCartUI();
});
