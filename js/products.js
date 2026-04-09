// ============================================================
// EGS PRODUCTS — Edit this file to add/remove/update products
// ============================================================

const PRODUCTS = [

  // ===== SONOFF =====
  {brand:'sonoff',id:'basicr2',featured:true,cat:'switch',tag:'BESTSELLER',tc:'blue',name:'Basic Smart Switch',model:'Sonoff BASICR2',price:4.85,pd:'$4.85',img:'basicr2_real',desc:'WiFi relay switch. Installs behind any wall switch or appliance. Remote control, voice control, scheduling. Magic Switch Mode keeps app control even when wall switch is off. 10A / 2200W.',specs:[['Protocol','Wi-Fi 2.4GHz'],['Max Load','10A / 2200W'],['Input','100–240V AC'],['Size','90×41×27mm']]},
  {brand:'sonoff',id:'minir2',featured:true,cat:'switch',tag:'MINI',tc:'green',name:'Mini Smart Switch',model:'Sonoff MINI R2',price:9.9,pd:'~$10',img:'minir2_real',desc:'Designed for Lebanese wiring — installs hidden behind your existing wall switch. No neutral wire required. Your switch stays exactly as it looks but now you control it from your phone. Fits inside any standard wall box.',specs:[['Protocol','Wi-Fi 2.4GHz'],['Max Load','10A / 2200W'],['Size','48×30×46mm'],['Neutral','Optional']]},
  {brand:'sonoff',id:'dualr3',featured:true,cat:'switch',tag:'',tc:'',name:'Dual Relay + Power Meter',model:'Sonoff DUALR3',price:16,pd:'~$16',img:'dualr3',desc:'Two independent relay channels, each with power metering. Ideal for curtains, shutters, or 2 separate circuits.',specs:[['Channels','2 Independent'],['Max Load','10A/gang, 15A total'],['Power Meter','Per channel'],['Protocol','Wi-Fi 2.4GHz']]},
  {brand:'sonoff',id:'powr3',cat:'switch',tag:'25A',tc:'gold',name:'Power Meter Switch 25A',model:'Sonoff POWR3',price:22,pd:'~$22',img:'powr3',desc:'High-power smart switch up to 25A / 5500W. Perfect for generator monitoring, heavy appliances and DIN rail. Overload protection included.',specs:[['Max Load','25A / 5500W'],['Protocol','Wi-Fi 2.4GHz'],['Protection','Overload, Voltage, Current'],['Size','166×125×49mm']]},
  {brand:'sonoff',id:'4chpro',cat:'switch',tag:'',tc:'',name:'4-Gang Smart Switch',model:'Sonoff 4CHPRO R3',price:24,pd:'~$24',img:'4chpro',desc:'Control 4 appliances independently. WiFi + RF 433MHz. Inching, self-locking and interlock modes. Perfect for 4-circuit panels.',specs:[['Channels','4 Independent'],['Control','WiFi + RF 433MHz'],['Max Load','10A per gang'],['Modes','Normal/Inching/Interlock']]},
  {brand:'sonoff',id:'s26',featured:true,cat:'plug',tag:'ENERGY MONITOR',tc:'gold',name:'Smart Plug + Energy Monitor',model:'Sonoff S26',price:8,pd:'~$8',img:'s26',desc:'Plug-in smart socket (EU/UK formats). Real-time energy monitoring with daily and monthly stats. Overload protection.',specs:[['Protocol','Wi-Fi 2.4GHz'],['Max Load','10A / 2200W'],['Types','EU, UK, US, AU'],['Power Monitor','Yes']]},
  {brand:'sonoff',id:'led_strip',cat:'lighting',tag:'RGB',tc:'gold',name:'Smart LED Light Strip',model:'Sonoff L1 (2M/5M)',price:16,pd:'$16–22',img:'led_strip',desc:'WiFi LED strip with 16 million colors. Music reactive mode. Waterproof, flexible, self-adhesive. App, BT or IR remote control.',specs:[['Colors','16M RGB'],['Sizes','2M or 5M'],['Waterproof','Yes'],['Control','App / BT / IR']]},
  {brand:'sonoff',id:'bulb_white',cat:'lighting',tag:'',tc:'',name:'Smart LED Bulb (White)',model:'Sonoff B02-B-A60',price:10,pd:'~$10',img:'bulb_white',desc:'WiFi smart bulb, warm to cool white (2700K–6500K). Stepless dimming. E27 base. 9W, 806 lumens, 10,000 hour lifespan.',specs:[['Base','E27'],['Power','9W / 806lm'],['CCT','2700K–6500K'],['Life','~10,000h']]},
  {brand:'sonoff',id:'bulb_rgb',cat:'lighting',tag:'RGB',tc:'gold',name:'Smart RGB Color Bulb',model:'Sonoff B05-BL-A60',price:12,pd:'~$12',img:'bulb_rgb',desc:'Full RGB color bulb with 16 million colors. Stepless dimming. App and voice control. Create dynamic lighting scenes.',specs:[['Base','E27'],['Power','9W / 806lm'],['Colors','Full RGB + White'],['Control','App + Voice']]},
  {brand:'sonoff',id:'rf_bridge',cat:'security',tag:'',tc:'',name:'RF Bridge — Sensor Hub',model:'Sonoff RF BridgeR2',price:12,pd:'~$12',img:'rf_bridge_real',desc:'WiFi bridge connecting 433MHz sensors to eWeLink app. Supports motion, door, and remote sensors. One hub for multiple devices.',specs:[['Wireless','WiFi + 433MHz'],['Input','5V 1A'],['Sensors','Multiple supported'],['Size','64×64×23mm']]},
  {brand:'sonoff',id:'pir_motion',cat:'sensor',tag:'',tc:'',name:'Motion Sensor',model:'Sonoff PIR3-RF',price:9,pd:'~$9',img:'pir_motion_real',desc:'Wireless PIR motion sensor. 8m range, 100° angle. Works with RF Bridge to trigger lights or alarms. Battery powered.',specs:[['Range','Up to 8m'],['Angle','100°'],['Battery','CR2450'],['Protocol','RF 433MHz']]},
  {brand:'sonoff',id:'door_sensor',cat:'sensor',tag:'',tc:'',name:'Door / Window Sensor',model:'Sonoff DW2 Wi-Fi',price:9,pd:'~$9',img:'door_sensor_real',desc:'Direct WiFi door/window sensor — no RF bridge needed. Instant phone alert on open. Trigger smart scenes on events.',specs:[['Protocol','Wi-Fi 2.4GHz'],['Battery','2× AAA 1.5V'],['Gap','< 5mm'],['Alerts','Push notification']]},
  {brand:'sonoff',id:'snzb_01',cat:'sensor',tag:'ZIGBEE',tc:'green',name:'Zigbee Sensors',model:'Sonoff SNZB Series',price:8,pd:'$7–9 each',img:'snzb_01',desc:'Zigbee sensor range: wireless button (SNZB-01), temp & humidity (SNZB-02), motion (SNZB-03), door/window (SNZB-04). Requires Zigbee hub.',specs:[['Protocol','Zigbee 3.0'],['Battery','CR2450 / CR2032'],['Hub Required','Yes'],['Range','~30m indoor']]},

  // ===== TUYA PRODUCTS =====
  {brand:'tuya',id:'ty_control_panel',cat:'security',tag:'PREMIUM ⭐',tc:'blue',name:'Smart Control Panel 7"',model:'Tuya TPP06 Mini',price:0,pd:'Contact for price',img:'control_panel',desc:'All-in-one smart home control panel. 3.5" touch screen with built-in Bluetooth Mesh and IR gateway. Control 110+ device categories.',specs:[['Screen','3.5 inch Touch'],['Gateway','BT Mesh + IR Built-in'],['Protocols','Wi-Fi + BT + IR'],['Install','EU Wall Mount']]},
  {brand:'tuya',id:'ty_panel_pro',cat:'security',tag:'PREMIUM ⭐',tc:'blue',name:'Smart Control Panel Pro 8"',model:'Tuya TPA08-M3',price:0,pd:'Contact for price',img:'sm_panel_pro',desc:'Premium 8-inch Android smart home panel with Alexa built-in. Zigbee and Bluetooth Mesh gateway, 2 relay gangs, dual speakers.',specs:[['Screen','8 inch Android'],['Voice','Alexa Built-in'],['Gateway','Zigbee + BT Mesh'],['Relay','2 Gang']]},
  {brand:'tuya',id:'ty_doorbell',cat:'security',tag:'2K ⭐',tc:'blue',name:'2K Smart Video Doorbell',model:'Tuya SC162-WCD3',price:0,pd:'Contact for price',img:'doorbell_2k',desc:'2K HD video doorbell with indoor chime. 170° wide angle lens. Push notifications for humans and packages. Battery powered with IP65 rating.',specs:[['Resolution','2K 1536×2048'],['Lens','170° Wide Angle'],['Battery','5200mAh IP65'],['Detection','Human + Package']]},
  {brand:'tuya',id:'ty_door_lock',featured:true,cat:'security',tag:'FACE ID ⭐',tc:'gold',name:'Smart Video Door Lock',model:'Tuya I8 Smart Video Lock',price:0,pd:'Contact for price',img:'door_lock_ty',desc:'Premium smart door lock with video camera. Unlock via Face ID, fingerprint, PIN, card, app or key. Store 300 fingerprints/PINs/cards.',specs:[['Unlock','Face/Fingerprint/PIN/Card/App'],['Video','Live Communication'],['Storage','300 Users'],['Battery','4200mAh']]},
  {brand:'tuya',id:'ty_mcb',cat:'security',tag:'CIRCUIT ⭐',tc:'blue',name:'AI Smart Circuit Breaker',model:'Tuya AICB2SP',price:0,pd:'Contact for price',img:'circuit_breaker',desc:'AI-powered smart circuit breaker with remote on/off, real-time energy monitoring and overload protection. Available in 1P/2P/3P/4P up to 100A. Essential for Lebanon generator management.',specs:[['Rating','6A to 100A'],['Poles','1P/2P/3P/4P'],['Monitoring','Voltage/Current/Power'],['Lifespan','20,000 operations']]},
  {brand:'tuya',id:'ty_energy_meter',cat:'switch',tag:'ENERGY',tc:'gold',name:'Smart Energy Meter',model:'Tuya DAC21C Series',price:0,pd:'Contact for price',img:'energy-meter',desc:'DIN rail smart energy meter with LCD display. Bi-directional metering, daily and monthly stats. Perfect for generator monitoring in Lebanon.',specs:[['Display','LCD'],['Metering','Bi-directional'],['Install','DIN Rail'],['Monitor','V/A/W/kWh']]},
  {brand:'tuya',id:'ty_presence_sensor',cat:'sensor',tag:'AI RADAR',tc:'green',name:'Human Presence Sensor',model:'Tuya HP222-Z',price:0,pd:'Contact for price',img:'presence_sensor',desc:'Advanced 60GHz radar sensor. Detects people even when still. Covers 24 sqm. Zigbee. Trigger lights, AC and automations automatically.',specs:[['Technology','60GHz Radar'],['Coverage','24 sqm'],['Detection','Presence + Motion'],['Protocol','Zigbee']]},
  {brand:'tuya',id:'ty_water_sensor',cat:'sensor',tag:'',tc:'',name:'Zigbee Water Leak Sensor',model:'Tuya WD100-Z',price:0,pd:'Contact for price',img:'water_sensor',desc:'Zigbee water leak detector. Real-time monitoring and instant push alert. Can auto-close water valve when leak detected. Battery powered.',specs:[['Protocol','Zigbee'],['Detection','Water Contact'],['Action','Scene Linkage'],['Install','Tool-free']]},
  {brand:'tuya',id:'ty_smart_plug',cat:'plug',tag:'MATTER',tc:'blue',name:'Matter Smart Plug EU 16A',model:'Tuya F1203-EU',price:0,pd:'Contact for price',img:'plug',desc:'Matter-certified smart plug. 16A max. Works with Alexa, Google, Apple HomeKit, SmartThings. Remote control, scheduling and power monitoring.',specs:[['Standard','Matter over Wi-Fi'],['Current','16A Max'],['Ecosystems','Alexa/Google/Apple/SmartThings'],['Monitor','Power (Optional)']]},
  {brand:'tuya',id:'ty_scene_switch',cat:'switch',tag:'',tc:'',name:'Smart Scene Switch',model:'Tuya PS162-W-EU',price:0,pd:'Contact for price',img:'smart_scence',desc:'WiFi scene switch to trigger multiple automations with one tap. Two-way and multi-way control. 16A output.',specs:[['Protocol','Wi-Fi + Bluetooth'],['Output','16A'],['Control','Multi-way Wireless'],['Sensor','Proximity Screen']]},

  // ===== SUMMAO CATALOG =====
  // ===== SUMMAO ACCESSORIES & PLUGS =====

{
  brand: 'summao',
  id: 'sm_smart_plugs',
  cat: 'plug',
  tag: 'PORTABLE',
  tc: 'blue',
  name: 'Smart WiFi Plug Adapter',
  nameAr: 'فيشة ذكية متحركة',
  model: 'SP-Series',
  price: 0,
  pd: '$8 - $12',
  img: 'sm_plug_eu', // Default image
  desc: 'Portable smart plug adapter. Turn any appliance into a smart device instantly. Supports scheduling and remote control via phone.',
  descAr: 'فيشة ذكية متحركة. حول أي جهاز عندك لجهاز ذكي فوراً. بتدعم التوقيت والتحكم من التليفون.',
  specs: [
    ['Voltage', '100-240V'], // 
    ['Current', '16A'], // 
    ['Material', 'ABS+PC Fireproof'], // 
    ['Life', '25,000 Hours'] // 
  ],
  variants: [
    { name: 'EU Plug', price: 10, img: 'sm_plug_eu', model: 'Item 15' }, // 
    { name: 'UK Plug', price: 12, img: 'sm_plug_uk', model: 'Item 13' }, // 
    { name: 'US Plug', price: 10, img: 'sm_plug_us', model: 'Item 14' }  // 
  ]
},
{
  brand: 'summao',
  id: 'sm_wifi_breaker_10a',
  cat: 'switch',
  tag: 'DIY',
  tc: 'green',
  name: 'WiFi Smart Breaker (10A)',
  nameAr: 'قاطع ذكي 10 أمبير',
  model: 'Item 16',
  price: 6,
  pd: '$6.00',
  img: 'sm_wifi_breaker',
  desc: 'Small WiFi relay for basic light circuits or small appliances. Easy to hide in ceilings or boxes.',
  descAr: 'ريلاي واي فاي صغير لدوائر الإضاءة أو الأجهزة الصغيرة. سهل التخبئة بالديكور أو العلب.',
  specs: [
    ['Voltage', 'AC 100-240V'], // 
    ['Max Load', '10A'], // 
    ['Material', 'ABS+PC Fireproof'], // 
    ['Safety', '94-v0 Fire Rating'] // 
  ]
},
{
  brand: 'summao',
  id: 'sm_mini_switch_16a',
  cat: 'switch',
  tag: 'MONITOR',
  tc: 'gold',
  name: 'WiFi Mini Switch + Power Monitor',
  nameAr: 'مفتاح ميني مع مراقبة طاقة',
  model: 'Item 17',
  price: 9,
  pd: '$9.00',
  img: 'sm_mini_switch_mon',
  desc: 'Ultra-small smart switch with built-in power monitoring. Fits behind your existing wall switch to track electricity usage.',
  descAr: 'مفتاح ذكي صغير جداً مع خاصية مراقبة استهلاك الكهرباء. بيركب خلف المفتاح العادي وبخليك تعرف قديش عم تصرف.',
  specs: [
    ['Voltage', 'AC 100-240V'], // 
    ['Current', '16A'], // 
    ['Feature', 'Power Monitor'], // 
    ['Life', '25,000 Hours'] // 
  ]
},
{
  brand: 'summao',
  id: 'sm_wifi_bulb_rgb',
  cat: 'lighting',
  tag: 'RGB',
  tc: 'gold',
  name: 'Smart WiFi RGB Light Bulb',
  nameAr: 'لمبة واي فاي ملونة',
  model: 'Item 18',
  price: 8,
  pd: '$8.00',
  img: 'sm_wifi_bulb',
  desc: '10W RGB smart bulb. Change colors, dim brightness, and sync with music from the app.',
  descAr: 'لمبة ذكية 10 واط ملونة. غير الألوان، خفف الضوء، أو خليها تتفاعل مع الموسيقى من التطبيق.',
  specs: [
    ['Power', '10W'], // 
    ['Colors', 'RGB + White'], // 
    ['Voltage', 'AC 85-265V'], // 
    ['Control', 'WiFi App'] // 
  ]
},{
    brand:'summao',
    id:'sm_lock_802pro',
    cat:'security',
    tag:'POPULAR',
    tc:'blue',
    name:'Smart Video Lock 802 Pro',
    model:'Sum-802pro',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_802pro',
    desc:'Smart lock with built-in camera and Tuya WiFi. See who is at the door from your phone.',
    specs:[['Unlock','Camera, Fingerprint, App, Key'],['Power','8x AA Alkaline Battery'],['Material','Aluminum & Tempered Glass'],['App','Tuya / Smart Life']]
  },
  {
    brand:'summao',
    id:'sm_lock_907max',
    cat:'security',
    tag:'WATERPROOF',
    tc:'blue',
    name:'Automatic Waterproof Lock',
    model:'Sum-907Max',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_907max',
    desc:'Fully automatic lock with waterproof front panel. Ideal for external doors and villas.',
    specs:[['Feature','IP65 Waterproof Front'],['Battery','Lithium-ion Rechargeable'],['Unlock','Face, Fingerprint, App, Card'],['Video','Live Video Calling']]
  },
  {
    brand:'summao',
    id:'sm_stg_touch',
    cat:'switch',
    tag:'GLASS TOUCH',
    tc:'gold',
    name:'Smart Glass Touch Switch',
    model:'STG Series',
    price:0,
    pd:'$12 – $18',
    img:'sm_touch_1g',
    desc:'Luxury tempered glass touch switch. Available in 1 to 4 gangs to control all your lights.',
    specs:[['Voltage','110-240VAC'],['Load','3-300W/gang'],['Standard','EU/UK 86x86mm'],['WiFi','2.4GHz IEEE 802.11 b/g/n']],
    variants: [
      { name: '1 Gang', price: 12, img: 'sm_touch_1g', model: 'STG-01' },
      { name: '2 Gang', price: 14, img: 'sm_touch_2g', model: 'STG-02' },
      { name: '3 Gang', price: 16, img: 'sm_touch_3g', model: 'STG-03' },
      { name: '4 Gang', price: 18, img: 'sm_touch_4g', model: 'STG-04' }
    ]
  },
  {
    brand:'summao',
    id:'sm_combo_eu',
    cat:'plug',
    tag:'COMBO',
    tc:'blue',
    name:'Switch & EU Socket Combo',
    model:'STG-09/11',
    price:0,
    pd:'$22 – $28',
    img:'sm_combo_eu_1g',
    desc:'Sleek glass panel combining smart switches with a high-power 16A EU socket.',
    specs:[['Socket','16A / 3500W Max'],['Standard','EU Type F'],['Size','146 x 86 mm'],['Material','Tempered Glass']],
    variants: [
      { name: '1 Gang + Socket', price: 22, img: 'sm_combo_eu_1g', model: 'STG-09' },
      { name: '2 Gang + Socket', price: 25, img: 'sm_combo_eu_2g', model: 'STG-10' },
      { name: '3 Gang + Socket', price: 28, img: 'sm_combo_eu_3g', model: 'STG-11' }
    ]
  },
  {
    brand:'summao',
    id:'sm_combo_usb',
    cat:'plug',
    tag:'USB CHARGE',
    tc:'green',
    name:'Switch & USB Socket Combo',
    model:'STG-15/17',
    price:0,
    pd:'$25 – $32',
    img:'sm_combo_usb_1g',
    desc:'Modern smart panel with switches, a universal socket, and dual USB ports for charging.',
    specs:[['USB Power','5V / 2.1A'],['Socket','13A Universal'],['Size','146 x 86 mm'],['Protection','Fireproof ABS/Glass']],
    variants: [
      { name: '1 Gang + USB', price: 25, img: 'sm_combo_usb_1g', model: 'STG-15' },
      { name: '2 Gang + USB', price: 28, img: 'sm_combo_usb_2g', model: 'STG-16' },
      { name: '3 Gang + USB', price: 32, img: 'sm_combo_usb_3g', model: 'STG-17' }
    ]
  },
  {
    brand:'summao',
    id:'sm_heater_20a',
    cat:'switch',
    tag:'HIGH POWER',
    tc:'red',
    name:'Smart Water Heater Switch',
    model:'STG-05',
    price:0,
    pd:'Contact for price',
    img:'sm_heater_20a',
    desc:'Heavy-duty 20A switch for water heaters. Control your hot water from anywhere.',
    specs:[['Rated Power','4000W Max'],['Current','20A'],['Input','100-240VAC'],['Size','86 x 86 x 35mm']]
  },
  {
    brand:'summao',
    id:'sm_heavy_40a',
    cat:'switch',
    tag:'8000W MAX',
    tc:'red',
    name:'Ultra Power Smart Switch (40A)',
    model:'STGT-04-2',
    price:0,
    pd:'Contact for price',
    img:'sm_heavy_40a',
    desc:'The strongest smart switch for water pumps, large ACs, and industrial loads.',
    specs:[['Max Power','8000W'],['Current','40A'],['Voltage','AC 90-240V'],['App','Tuya / Smart Life']]
  },
  {
    brand:'summao',
    id:'sm_curtain_sw',
    cat:'curtain',
    tag:'AUTOMATION',
    tc:'green',
    name:'Smart Curtain Switch',
    model:'STGT-05',
    price:0,
    pd:'Contact for price',
    img:'sm_curtain_sw',
    desc:'Control motorized curtains or shutters from your phone. Supports percentage control.',
    specs:[['Power','2200W Max'],['Output','AC 90-240V'],['Design','Glass Touch'],['App','Tuya / Smart Life']]
  },
  {
    brand:'summao',
    id:'sm_lock_666',
    cat:'security',
    tag:'LUXURY',
    tc:'gold',
    name:'3D Face Recognition Lock',
    model:'Sum-666',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_666',
    desc:'The ultimate security lock using 3D Face ID technology. Premium Gun Black finish.',
    specs:[['Technology','3D Face Recognition'],['Battery','5000mAh Rechargeable'],['Emergency','Micro USB Power Port'],['Video','Active Video Calling']]
  },
  {
    brand:'summao',
    id:'sm_lock_rim',
    cat:'security',
    tag:'GATE LOCK',
    tc:'green',
    name:'Smart Waterproof Rim Lock',
    model:'Sum-812-4',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_rim',
    desc:'Specialized smart lock for garden gates and aluminum doors. Durable and waterproof.',
    specs:[['Type','Waterproof Rim Lock'],['Material','Aluminum & Stainless Steel'],['Unlock','Fingerprint, Card, App'],['App','Tuya / TTlock Support']]
  },
  {
    brand:'summao',
    id:'sm_lock_811',
    cat:'security',
    tag:'BEST VALUE',
    tc:'green',
    name:'Smart Classic Lock 811',
    model:'Sum-811',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_811',
    desc:'Affordable and reliable smart lock. Perfect for standard wooden doors with full App control.',
    specs:[['Unlock','Fingerprint, Code, Card, Key'],['Power','4x AA Alkaline Battery'],['Material','Aluminum Alloy'],['App','Tuya / Smart Life']]
  },
  {
    brand:'summao',
    id:'sm_lock_937max',
    cat:'security',
    tag:'PREMIUM 3D',
    tc:'gold',
    name:'Luxury 3D Face Lock 937',
    model:'Sum-937Max',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_937max',
    desc:'High-end 3D Face recognition with active video calling. Premium Mocha Gold or Gun Black finish.',
    specs:[['Technology','3D Face & Video Call'],['Battery','4200mAh Lithium-ion'],['Material','Aluminum Alloy'],['Unlock','Face, App, Code, Fingerprint']]
  },
  {
    brand:'summao',
    id:'sm_lock_929',
    cat:'security',
    tag:'SMART VALUE',
    tc:'blue',
    name:'3D Face ID Entry Lock',
    model:'Sum-929-3',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_929',
    desc:'The most affordable way to get 3D Face Recognition for your home. Simple and secure.',
    specs:[['Technology','3D Face Recognition'],['Battery','3200mAh Lithium-ion'],['Material','Durable ABS'],['App','Wishome App Support']]
  },
  {
    brand:'summao',
    id:'sm_lock_608',
    cat:'security',
    tag:'SLIM DESIGN',
    tc:'red',
    name:'Narrow Frame Smart Lock',
    model:'Sum-608',
    price:0,
    pd:'Contact for price',
    img:'sm_lock_608',
    desc:'Specialized slim lock for aluminum or narrow-frame doors. Weather-resistant and durable.',
    specs:[['Special','Fits 92/72/85 Mortise'],['Width','Only 37mm Wide'],['Unlock','Fingerprint, App, Key'],['Protection','IP65 Weather Resistant']]
  }
];

// ============================================================
// FILTERS — Add a new brand here if you add a new brand
// ============================================================
const FILTERS = [
  {id:'all',en:'All',ar:'الكل'},
  {id:'sonoff',en:'Sonoff',ar:'Sonoff'},
  {id:'tuya',en:'Tuya',ar:'Tuya'},
  {id:'summao', en:'Summao', ar:'Summao'},
  {id:'switch',en:'Switches',ar:'مفاتيح'},
  {id:'plug',en:'Plugs',ar:'فيشات'},
  {id:'sensor',en:'Sensors',ar:'حساسات'},
  {id:'lighting',en:'Lighting',ar:'إضاءة'},
  {id:'security',en:'Security',ar:'أمان'},
  {id:'curtain',en:'Curtains',ar:'ستائر'},
  {id:'thermostat',en:'Thermostats',ar:'ثرموستات'},
];
