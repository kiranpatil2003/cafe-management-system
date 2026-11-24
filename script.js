/**
 * BREWORA – ARTISAN CAFE MANAGEMENT SYSTEM
 * Complete, Modern, Vanilla JavaScript Application Engine
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DEFAULT DATASETS (Realistic Demo State)
  // ==========================================

  const DEFAULT_MENU_ITEMS = [
    {
      id: 'item-1',
      name: 'Classic Cappuccino',
      category: 'Coffee',
      price: 220,
      description: 'Velvety micro-foamed whole milk poured over a rich double shot of dark roasted Arabica beans.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 142
    },
    {
      id: 'item-2',
      name: 'Spanish Iced Latte',
      category: 'Coffee',
      price: 280,
      description: 'Sweet condensed milk infused with double espresso, whole milk, and served over crystal ice cubes.',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 118
    },
    {
      id: 'item-3',
      name: 'Espresso Solo / Doppio',
      category: 'Coffee',
      price: 160,
      description: 'Intense single-origin South Indian estate espresso pull crowned with a thick hazelnut crema.',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 64
    },
    {
      id: 'item-4',
      name: 'Caramel Macchiato',
      category: 'Coffee',
      price: 260,
      description: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and artisanal caramel drizzle.',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 96
    },
    {
      id: 'item-5',
      name: 'Cold Brew Reserve',
      category: 'Coffee',
      price: 240,
      description: '18-hour cold water extraction resulting in an exceptionally smooth, low-acidity chocolate note sip.',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 78
    },
    {
      id: 'item-6',
      name: 'Cascara Hibiscus Tea',
      category: 'Tea',
      price: 210,
      description: 'Sun-dried coffee cherry tea brewed with organic Egyptian hibiscus petals and wild mountain honey.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 42
    },
    {
      id: 'item-7',
      name: 'Masala Chai Artisan',
      category: 'Tea',
      price: 180,
      description: 'Slow-simmered Assam whole leaf tea with crushed cardamom, Ceylon cinnamon, cloves and ginger.',
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 88
    },
    {
      id: 'item-8',
      name: 'Matcha Green Tea Latte',
      category: 'Tea',
      price: 290,
      description: 'Uji ceremonial grade Japanese matcha whisked with oat milk and lightly sweetened with organic agave.',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 104
    },
    {
      id: 'item-9',
      name: 'Belgian Chocolate Frappe',
      category: 'Cold Drinks',
      price: 310,
      description: 'Blended Belgian dark cocoa ganache, espresso shot, full-cream milk topped with fresh whipped cream.',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 92
    },
    {
      id: 'item-10',
      name: 'Cold Coffee Classic',
      category: 'Cold Drinks',
      price: 230,
      description: 'Thick, creamy cafe-style cold coffee whipped to frothy perfection with vanilla bean essence.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 130
    },
    {
      id: 'item-11',
      name: 'Passionfruit Mint Cooler',
      category: 'Cold Drinks',
      price: 220,
      description: 'Crushed passionfruit pulp, fresh garden mint, sparkling soda water and a twist of Meyer lemon.',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 52
    },
    {
      id: 'item-12',
      name: 'Grilled Herb Chicken Sandwich',
      category: 'Snacks',
      price: 320,
      description: 'Marinated rosemary chicken breast, garlic aioli, sun-dried tomatoes and rocket on grilled ciabatta.',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: false,
      isPopular: true,
      soldCount: 115
    },
    {
      id: 'item-13',
      name: 'Avocado Sourdough Toast',
      category: 'Snacks',
      price: 340,
      description: 'Hass avocado mash, pomegranate jewels, feta crumble and toasted seeds on artisan seeded sourdough.',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 84
    },
    {
      id: 'item-14',
      name: 'Truffle Mushroom Panini',
      category: 'Snacks',
      price: 310,
      description: 'Sauteed wild portobello mushrooms, fontina cheese and white truffle oil toasted in a golden baguette.',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 68
    },
    {
      id: 'item-15',
      name: 'Chocolate Lava Brownie',
      category: 'Desserts',
      price: 250,
      description: 'Warm fudgy 70% dark Valrhona chocolate brownie served with Madagascar vanilla gelato.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: true,
      soldCount: 112
    },
    {
      id: 'item-16',
      name: 'Basque Burnt Cheesecake',
      category: 'Desserts',
      price: 290,
      description: 'Caramelized crust with a rich, molten cream cheese center infused with Tahitian vanilla bean.',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
      available: true,
      isVeg: true,
      isPopular: false,
      soldCount: 76
    }
  ];

  const DEFAULT_TABLES = [
    { id: 'T-01', number: 1, seats: 2, zone: 'Indoor Lounge', status: 'available', orderId: null, orderAmount: 0, guest: null, time: null },
    { id: 'T-02', number: 2, seats: 4, zone: 'Indoor Lounge', status: 'occupied', orderId: '#BRW-1082', orderAmount: 840, guest: 'Ananya Roy', time: '35 mins' },
    { id: 'T-03', number: 3, seats: 4, zone: 'Indoor Lounge', status: 'reserved', orderId: null, orderAmount: 0, guest: 'Aarav Sharma', time: '19:30' },
    { id: 'T-04', number: 4, seats: 2, zone: 'Indoor Lounge', status: 'available', orderId: null, orderAmount: 0, guest: null, time: null },
    { id: 'T-05', number: 5, seats: 6, zone: 'Indoor Lounge', status: 'occupied', orderId: '#BRW-1085', orderAmount: 1620, guest: 'Devendra Sen', time: '18 mins' },
    
    { id: 'T-06', number: 6, seats: 2, zone: 'Window Bar', status: 'available', orderId: null, orderAmount: 0, guest: null, time: null },
    { id: 'T-07', number: 7, seats: 2, zone: 'Window Bar', status: 'occupied', orderId: '#BRW-1084', orderAmount: 460, guest: 'Vikram Malhotra', time: '42 mins' },
    { id: 'T-08', number: 8, seats: 2, zone: 'Window Bar', status: 'available', orderId: null, orderAmount: 0, guest: null, time: null },
    
    { id: 'T-09', number: 9, seats: 4, zone: 'Garden Patio', status: 'occupied', orderId: '#BRW-1086', orderAmount: 920, guest: 'Pooja Reddy', time: '12 mins' },
    { id: 'T-10', number: 10, seats: 4, zone: 'Garden Patio', status: 'available', orderId: null, orderAmount: 0, guest: null, time: null },
    { id: 'T-11', number: 11, seats: 6, zone: 'Garden Patio', status: 'reserved', orderId: null, orderAmount: 0, guest: 'Priya Kapoor', time: '20:00' },
    { id: 'T-12', number: 12, seats: 2, zone: 'Garden Patio', status: 'available', orderId: null, orderAmount: 0, guest: null, time: null },
    
    { id: 'T-13', number: 13, seats: 8, zone: 'Mezzanine VIP', status: 'occupied', orderId: '#BRW-1080', orderAmount: 2850, guest: 'Kavya Iyer', time: '55 mins' },
    { id: 'T-14', number: 14, seats: 4, zone: 'Mezzanine VIP', status: 'reserved', orderId: null, orderAmount: 0, guest: 'Sameer Joshi', time: '20:30' }
  ];

  const DEFAULT_ORDERS = [
    {
      id: '#BRW-1086',
      customerName: 'Pooja Reddy',
      customerPhone: '+91 98765 88990',
      type: 'Dine-In',
      tableId: 'T-09',
      tableName: 'Table 09',
      items: [
        { id: 'item-2', name: 'Spanish Iced Latte', qty: 2, price: 280 },
        { id: 'item-13', name: 'Avocado Sourdough Toast', qty: 1, price: 340 }
      ],
      subtotal: 900,
      tax: 45,
      total: 945,
      date: 'Today, 05:42 PM',
      paymentMethod: 'UPI',
      paymentStatus: 'Paid',
      status: 'preparing'
    },
    {
      id: '#BRW-1085',
      customerName: 'Devendra Sen',
      customerPhone: '+91 98765 44332',
      type: 'Dine-In',
      tableId: 'T-05',
      tableName: 'Table 05',
      items: [
        { id: 'item-1', name: 'Classic Cappuccino', qty: 3, price: 220 },
        { id: 'item-12', name: 'Grilled Herb Chicken Sandwich', qty: 2, price: 320 },
        { id: 'item-15', name: 'Chocolate Lava Brownie', qty: 1, price: 250 }
      ],
      subtotal: 1550,
      tax: 77.5,
      total: 1627.5,
      date: 'Today, 05:25 PM',
      paymentMethod: 'Card',
      paymentStatus: 'Paid',
      status: 'preparing'
    },
    {
      id: '#BRW-1084',
      customerName: 'Vikram Malhotra',
      customerPhone: '+91 98765 33221',
      type: 'Dine-In',
      tableId: 'T-07',
      tableName: 'Table 07',
      items: [
        { id: 'item-5', name: 'Cold Brew Reserve', qty: 1, price: 240 },
        { id: 'item-14', name: 'Truffle Mushroom Panini', qty: 1, price: 310 }
      ],
      subtotal: 550,
      tax: 27.5,
      total: 577.5,
      date: 'Today, 05:08 PM',
      paymentMethod: 'UPI',
      paymentStatus: 'Paid',
      status: 'ready'
    },
    {
      id: '#BRW-1083',
      customerName: 'Neha Verma',
      customerPhone: '+91 98765 77665',
      type: 'Takeaway',
      tableId: null,
      tableName: 'Takeaway #12',
      items: [
        { id: 'item-8', name: 'Matcha Green Tea Latte', qty: 1, price: 290 },
        { id: 'item-16', name: 'Basque Burnt Cheesecake', qty: 1, price: 290 }
      ],
      subtotal: 580,
      tax: 29,
      total: 609,
      date: 'Today, 04:54 PM',
      paymentMethod: 'UPI',
      paymentStatus: 'Paid',
      status: 'pending'
    },
    {
      id: '#BRW-1082',
      customerName: 'Ananya Roy',
      customerPhone: '+91 98765 11223',
      type: 'Dine-In',
      tableId: 'T-02',
      tableName: 'Table 02',
      items: [
        { id: 'item-1', name: 'Classic Cappuccino', qty: 2, price: 220 },
        { id: 'item-15', name: 'Chocolate Lava Brownie', qty: 2, price: 250 }
      ],
      subtotal: 940,
      tax: 47,
      total: 987,
      date: 'Today, 04:40 PM',
      paymentMethod: 'Card',
      paymentStatus: 'Paid',
      status: 'completed'
    },
    {
      id: '#BRW-1081',
      customerName: 'Aditya Rao',
      customerPhone: '+91 98765 99887',
      type: 'Takeaway',
      tableId: null,
      tableName: 'Takeaway #11',
      items: [
        { id: 'item-10', name: 'Cold Coffee Classic', qty: 2, price: 230 }
      ],
      subtotal: 460,
      tax: 23,
      total: 483,
      date: 'Today, 04:20 PM',
      paymentMethod: 'Cash',
      paymentStatus: 'Paid',
      status: 'completed'
    },
    {
      id: '#BRW-1080',
      customerName: 'Kavya Iyer',
      customerPhone: '+91 98765 66554',
      type: 'Dine-In',
      tableId: 'T-13',
      tableName: 'Table 13 (VIP)',
      items: [
        { id: 'item-4', name: 'Caramel Macchiato', qty: 4, price: 260 },
        { id: 'item-12', name: 'Grilled Herb Chicken Sandwich', qty: 3, price: 320 },
        { id: 'item-16', name: 'Basque Burnt Cheesecake', qty: 3, price: 290 }
      ],
      subtotal: 2870,
      tax: 143.5,
      total: 3013.5,
      date: 'Today, 03:50 PM',
      paymentMethod: 'Card',
      paymentStatus: 'Paid',
      status: 'preparing'
    },
    {
      id: '#BRW-1079',
      customerName: 'Siddharth Nair',
      customerPhone: '+91 98765 55443',
      type: 'Takeaway',
      tableId: null,
      tableName: 'Takeaway #10',
      items: [
        { id: 'item-3', name: 'Espresso Solo / Doppio', qty: 2, price: 160 }
      ],
      subtotal: 320,
      tax: 16,
      total: 336,
      date: 'Today, 03:15 PM',
      paymentMethod: 'UPI',
      paymentStatus: 'Paid',
      status: 'completed'
    },
    {
      id: '#BRW-1078',
      customerName: 'Rohan Mehta',
      customerPhone: '+91 98765 22110',
      type: 'Dine-In',
      tableId: 'T-01',
      tableName: 'Table 01',
      items: [
        { id: 'item-7', name: 'Masala Chai Artisan', qty: 2, price: 180 }
      ],
      subtotal: 360,
      tax: 18,
      total: 378,
      date: 'Today, 02:40 PM',
      paymentMethod: 'Cash',
      paymentStatus: 'Unpaid',
      status: 'cancelled'
    }
  ];

  const DEFAULT_INVENTORY = [
    { id: 'inv-1', name: 'Arabica Coffee Beans (Estate Blend)', category: 'Coffee & Beans', qty: 4.5, unit: 'kg', minBuffer: 10.0, supplier: 'Chikmagalur Heritage Estate', status: 'Low Stock' },
    { id: 'inv-2', name: 'Fresh Whole Milk (Farm Pasteurized)', category: 'Dairy & Milk', qty: 6.0, unit: 'L', minBuffer: 25.0, supplier: 'Local Dairy Co-op', status: 'Low Stock' },
    { id: 'inv-3', name: 'Raw Organic Sugar / Demerara', category: 'Kitchen & Bakery', qty: 3.2, unit: 'kg', minBuffer: 8.0, supplier: 'Organic Valley Mills', status: 'Low Stock' },
    { id: 'inv-4', name: 'Dark Chocolate Ganache Syrup', category: 'Syrups & Flavor', qty: 1.2, unit: 'L', minBuffer: 4.0, supplier: 'Valrhona Artisans', status: 'Low Stock' },
    { id: 'inv-5', name: 'Oat Milk (Barista Edition)', category: 'Dairy & Milk', qty: 18.0, unit: 'L', minBuffer: 10.0, supplier: 'Oatly Barista Partners', status: 'In Stock' },
    { id: 'inv-6', name: 'Almond Milk (Unsweetened)', category: 'Dairy & Milk', qty: 14.0, unit: 'L', minBuffer: 8.0, supplier: 'Nutty Farms', status: 'In Stock' },
    { id: 'inv-7', name: 'Uji Ceremonial Matcha Powder', category: 'Coffee & Beans', qty: 1.5, unit: 'kg', minBuffer: 0.5, supplier: 'Kyoto Import Direct', status: 'In Stock' },
    { id: 'inv-8', name: 'Artisan Sourdough Loaves', category: 'Kitchen & Bakery', qty: 12.0, unit: 'loaves', minBuffer: 6.0, supplier: 'Daily Woodfired Bakery', status: 'In Stock' },
    { id: 'inv-9', name: 'Mascarpone & Cream Cheese', category: 'Kitchen & Bakery', qty: 7.5, unit: 'kg', minBuffer: 4.0, supplier: 'Gourmet Dairy Dist.', status: 'In Stock' },
    { id: 'inv-10', name: 'Salted Caramel Drizzle Bottle', category: 'Syrups & Flavor', qty: 0.0, unit: 'L', minBuffer: 3.0, supplier: 'Monin Specialty Syrups', status: 'Out of Stock' },
    { id: 'inv-11', name: 'Eco Paper Cups 12oz & Lids', category: 'Packaging', qty: 380, unit: 'pcs', minBuffer: 150, supplier: 'GreenPack Solutions', status: 'In Stock' },
    { id: 'inv-12', name: 'Biodegradable Straws & Sleeves', category: 'Packaging', qty: 95, unit: 'pcs', minBuffer: 200, supplier: 'EcoStraw Supplies', status: 'Low Stock' }
  ];

  const DEFAULT_CUSTOMERS = [
    { id: 'cust-1', name: 'Ananya Roy', phone: '+91 98765 11223', email: 'ananya.roy@example.com', tier: 'VIP Gold', totalOrders: 18, totalSpent: 4620, lastVisit: 'Today, 04:40 PM', favorite: 'Classic Cappuccino' },
    { id: 'cust-2', name: 'Rohan Mehta', phone: '+91 98765 22110', email: 'rohan.m@example.com', tier: 'Silver Regular', totalOrders: 11, totalSpent: 2840, lastVisit: 'Yesterday, 03:15 PM', favorite: 'Cold Coffee Classic' },
    { id: 'cust-3', name: 'Vikram Malhotra', phone: '+91 98765 33221', email: 'v.malhotra@corporate.com', tier: 'VIP Gold', totalOrders: 24, totalSpent: 6980, lastVisit: 'Today, 05:08 PM', favorite: 'Cold Brew Reserve' },
    { id: 'cust-4', name: 'Sneha Patel', phone: '+91 98765 44556', email: 'sneha.patel@design.io', tier: 'Bronze Member', totalOrders: 6, totalSpent: 1650, lastVisit: '21 Nov 2026', favorite: 'Matcha Green Tea Latte' },
    { id: 'cust-5', name: 'Aarav Sharma', phone: '+91 98765 55667', email: 'aarav.sharma@gmail.com', tier: 'Silver Regular', totalOrders: 9, totalSpent: 2420, lastVisit: '20 Nov 2026', favorite: 'Caramel Macchiato' },
    { id: 'cust-6', name: 'Kavya Iyer', phone: '+91 98765 66554', email: 'kavya.iyer@fintech.co', tier: 'VIP Gold', totalOrders: 31, totalSpent: 8740, lastVisit: 'Today, 03:50 PM', favorite: 'Belgian Chocolate Frappe' },
    { id: 'cust-7', name: 'Devendra Sen', phone: '+91 98765 44332', email: 'devendra.sen@studio.org', tier: 'Silver Regular', totalOrders: 14, totalSpent: 3950, lastVisit: 'Today, 05:25 PM', favorite: 'Grilled Herb Chicken Sandwich' }
  ];

  const DEFAULT_SETTINGS = {
    cafeName: 'Brewora – Artisan Cafe & Roastery',
    tagline: 'Specialty Coffee, Fresh Brews & Confectionery',
    contactPhone: '+91 98765 43210',
    contactEmail: 'hello@brewora.cafe',
    address: '42 Heritage Promenade, 12th Main, Indiranagar, Bengaluru, Karnataka 560038',
    gstin: '29AABCU9603R1ZM',
    fssai: '11223334000189',
    currency: '₹',
    taxRate: 5,
    serviceCharge: 0,
    receiptFooter: 'Thank you for visiting Brewora! Come back for fresh roasts.',
    autoPrintReceipt: true,
    playSound: true,
    theme: 'warm',
    admin: {
      name: 'Aria Sen',
      role: 'Head Barista & Admin',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  };

  const DEFAULT_NOTIFICATIONS = [
    { id: 'notif-1', title: 'Low stock alert: Arabica Coffee Beans', text: 'Stock level at 4.5kg (min threshold is 10kg)', time: '10 mins ago', type: 'warn', unread: true },
    { id: 'notif-2', title: 'Table 09 placed new order #BRW-1086', text: '2x Spanish Iced Latte, 1x Avocado Toast', time: '22 mins ago', type: 'info', unread: true },
    { id: 'notif-3', title: 'Daily Revenue Target Reached!', text: 'Surpassed ₹12,000 threshold for Monday service', time: '1 hour ago', type: 'success', unread: true }
  ];

  // Storage key
  const STORAGE_KEY = 'brewora_cafe_system_state_v1';

  // State container
  let state = {
    menu: [],
    tables: [],
    orders: [],
    inventory: [],
    customers: [],
    settings: {},
    notifications: []
  };

  // Pos Cart in-memory state
  let posCart = [];

  // Chart instances holders
  let salesChartInstance = null;
  let reportTrendChartInstance = null;
  let reportCategoryChartInstance = null;
  let reportHourlyChartInstance = null;

  // Track active filters
  let menuCategoryFilter = 'all';
  let menuSearchQuery = '';
  let menuDietFilter = 'all';
  let menuAvailFilter = 'all';
  let menuCurrentView = 'grid';

  let orderStatusFilter = 'all';
  let orderSearchQuery = '';
  let orderTypeFilter = 'all';
  let orderPaymentFilter = 'all';
  let orderSortFilter = 'newest';

  let tableZoneFilter = 'all';
  let tableStatusFilter = 'all';

  let currentViewingOrder = null;
  let currentViewingCustomer = null;

  // ==========================================
  // 2. STATE INITIALIZATION & PERSISTENCE
  // ==========================================

  function loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        state = JSON.parse(stored);
      } else {
        initStateWithDefaults();
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
      initStateWithDefaults();
    }
  }

  function initStateWithDefaults() {
    state = {
      menu: JSON.parse(JSON.stringify(DEFAULT_MENU_ITEMS)),
      tables: JSON.parse(JSON.stringify(DEFAULT_TABLES)),
      orders: JSON.parse(JSON.stringify(DEFAULT_ORDERS)),
      inventory: JSON.parse(JSON.stringify(DEFAULT_INVENTORY)),
      customers: JSON.parse(JSON.stringify(DEFAULT_CUSTOMERS)),
      settings: JSON.parse(JSON.stringify(DEFAULT_SETTINGS)),
      notifications: JSON.parse(JSON.stringify(DEFAULT_NOTIFICATIONS))
    };
    saveState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error persisting state to localStorage:', e);
    }
  }

  // ==========================================
  // 3. MAIN APPLICATION CONTROLLER (BREWORA)
  // ==========================================

  const Brewora = {
    // --- Navigation ---
    navigateTo: function (pageId) {
      // Hide all page views
      const views = document.querySelectorAll('.page-view');
      views.forEach(v => v.classList.remove('active'));

      // Show selected page
      const target = document.getElementById('page-' + pageId);
      if (target) {
        target.classList.add('active');
      }

      // Update Sidebar links
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(l => {
        if (l.dataset.page === pageId) {
          l.classList.add('active');
        } else {
          l.classList.remove('active');
        }
      });

      // Update Top Nav Title & Breadcrumb
      const topPageTitle = document.getElementById('topPageTitle');
      const breadcrumbActive = document.getElementById('breadcrumbActive');
      const pageTitles = {
        dashboard: 'Dashboard',
        menu: 'Menu Management',
        orders: 'Orders Management',
        tables: 'Table Management',
        inventory: 'Inventory & Stock',
        customers: 'Customer Relationship',
        reports: 'Sales & Financial Reports',
        settings: 'Cafe Settings'
      };

      if (topPageTitle && pageTitles[pageId]) {
        topPageTitle.textContent = pageTitles[pageId];
      }
      if (breadcrumbActive && pageTitles[pageId]) {
        breadcrumbActive.textContent = pageTitles[pageId];
      }

      // Close mobile drawer if open
      this.closeMobileSidebar();

      // Rerender page specific charts or tables
      if (pageId === 'dashboard') {
        this.renderDashboard();
      } else if (pageId === 'menu') {
        this.renderMenu();
      } else if (pageId === 'orders') {
        this.renderOrders();
      } else if (pageId === 'tables') {
        this.renderTables();
      } else if (pageId === 'inventory') {
        this.renderInventory();
      } else if (pageId === 'customers') {
        this.renderCustomers();
      } else if (pageId === 'reports') {
        this.renderReports();
      } else if (pageId === 'settings') {
        this.loadSettingsForm();
      }

      // Sync window URL hash without reload
      if (window.location.hash !== '#' + pageId) {
        history.replaceState(null, null, '#' + pageId);
      }

      // Scroll top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    toggleMobileSidebar: function () {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
      }
    },

    closeMobileSidebar: function () {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
      }
    },

    // --- Real-Time Clock ---
    startLiveClock: function () {
      const liveDate = document.getElementById('liveDate');
      const liveTime = document.getElementById('liveTime');

      function updateClock() {
        const now = new Date();
        const optionsDate = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        if (liveDate) liveDate.textContent = now.toLocaleDateString('en-US', optionsDate);
        if (liveTime) liveTime.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }

      updateClock();
      setInterval(updateClock, 1000);
    },

    // --- Toast Notifications ---
    showToast: function (message, type = 'info', title = '') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;

      const iconMap = {
        success: 'fa-circle-check',
        warning: 'fa-triangle-exclamation',
        alert: 'fa-circle-xmark',
        info: 'fa-circle-info'
      };

      const titleMap = {
        success: title || 'Success',
        warning: title || 'Attention',
        alert: title || 'Alert',
        info: title || 'Notice'
      };

      toast.innerHTML = `
        <i class="fa-solid ${iconMap[type] || 'fa-bell'} toast-icon"></i>
        <div class="toast-content">
          <div class="toast-title">${titleMap[type]}</div>
          <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" title="Dismiss">&times;</button>
      `;

      toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.remove();
      });

      container.appendChild(toast);

      // Auto dismiss after 4 seconds
      setTimeout(() => {
        if (toast.parentNode) {
          toast.style.animation = 'slideToastIn 0.25s reverse forwards';
          setTimeout(() => toast.remove(), 250);
        }
      }, 4000);
    },

    // --- Generic Modal Controls ---
    openModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    },

    closeModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    },

    confirmAction: function (message, onConfirmCallback) {
      const msgElem = document.getElementById('confirmModalMessage');
      const actionBtn = document.getElementById('confirmModalActionBtn');
      if (msgElem) msgElem.textContent = message;

      if (actionBtn) {
        // Clone button to wipe old event listeners
        const newBtn = actionBtn.cloneNode(true);
        actionBtn.parentNode.replaceChild(newBtn, actionBtn);
        newBtn.addEventListener('click', () => {
          Brewora.closeModal('confirmModal');
          if (typeof onConfirmCallback === 'function') {
            onConfirmCallback();
          }
        });
      }

      this.openModal('confirmModal');
    },

    // ==========================================
    // 4. DASHBOARD RENDERER
    // ==========================================
    renderDashboard: function () {
      // 1. Calculate stats from state
      const totalRevenue = state.orders
        .filter(o => o.status !== 'cancelled')
        .reduce((sum, o) => sum + (Number(o.total) || 0), 0);

      const totalOrdersCount = state.orders.length;
      const occupiedTablesCount = state.tables.filter(t => t.status === 'occupied').length;
      const totalTablesCount = state.tables.length;
      const pendingOrdersCount = state.orders.filter(o => o.status === 'pending' || o.status === 'preparing').length;

      // Update stat cards
      const currency = state.settings.currency || '₹';
      const statTodayRevenue = document.getElementById('statTodayRevenue');
      const statTotalOrders = document.getElementById('statTotalOrders');
      const statActiveTables = document.getElementById('statActiveTables');
      const statPendingOrders = document.getElementById('statPendingOrders');

      if (statTodayRevenue) statTodayRevenue.textContent = `${currency}${totalRevenue.toLocaleString('en-IN')}`;
      if (statTotalOrders) statTotalOrders.textContent = totalOrdersCount;
      if (statActiveTables) statActiveTables.innerHTML = `${occupiedTablesCount} <span class="stat-sub-val">/ ${totalTablesCount}</span>`;
      if (statPendingOrders) statPendingOrders.textContent = pendingOrdersCount;

      // Update Badges in Sidebar
      const sidebarActiveTablesCount = document.getElementById('sidebarActiveTablesCount');
      const menuCountBadge = document.getElementById('menuCountBadge');
      const ordersPendingBadge = document.getElementById('ordersPendingBadge');
      const tablesOccupiedBadge = document.getElementById('tablesOccupiedBadge');
      const lowStockBadge = document.getElementById('lowStockBadge');

      if (sidebarActiveTablesCount) sidebarActiveTablesCount.textContent = `${occupiedTablesCount}/${totalTablesCount} Tables Occupied`;
      if (menuCountBadge) menuCountBadge.textContent = state.menu.length;
      if (ordersPendingBadge) ordersPendingBadge.textContent = pendingOrdersCount;
      if (tablesOccupiedBadge) tablesOccupiedBadge.textContent = occupiedTablesCount;

      const lowStockItems = state.inventory.filter(i => i.qty <= i.minBuffer);
      if (lowStockBadge) lowStockBadge.textContent = `${lowStockItems.length} Low`;

      // 2. Render Weekly Sales Chart with Chart.js
      this.initWeeklySalesChart();

      // 3. Render Low Stock Alerts Card
      const lowStockList = document.getElementById('dashboardLowStockList');
      const lowStockCount = document.getElementById('dashboardLowStockCount');
      if (lowStockCount) lowStockCount.textContent = `${lowStockItems.length} Items`;

      if (lowStockList) {
        if (lowStockItems.length === 0) {
          lowStockList.innerHTML = `<div class="p-3 text-center text-muted">All ingredient levels are healthy!</div>`;
        } else {
          lowStockList.innerHTML = lowStockItems.slice(0, 4).map(item => {
            const isOut = item.qty === 0;
            const badgeClass = isOut ? 'badge-alert' : 'badge-warning';
            const badgeText = isOut ? 'Out of Stock' : `${item.qty} ${item.unit} left`;
            return `
              <div class="low-stock-item">
                <div class="stock-info">
                  <span class="stock-name">${item.name}</span>
                  <span class="stock-detail">Buffer limit: ${item.minBuffer} ${item.unit} • ${item.category}</span>
                </div>
                <span class="badge ${badgeClass}">${badgeText}</span>
              </div>
            `;
          }).join('');
        }
      }

      // 4. Render Popular Items Section
      const popularItemsList = document.getElementById('dashboardPopularItemsList');
      if (popularItemsList) {
        // Sort items by soldCount
        const topPopular = [...state.menu]
          .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
          .slice(0, 5);

        const maxSold = topPopular[0] ? topPopular[0].soldCount : 100;

        popularItemsList.innerHTML = topPopular.map(item => {
          const percentage = Math.min(100, Math.round(((item.soldCount || 0) / maxSold) * 100));
          return `
            <div class="popular-item-row">
              <img src="${item.image}" alt="${item.name}" class="popular-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=120&q=80'">
              <div class="popular-item-info">
                <div class="popular-item-title">${item.name}</div>
                <div class="popular-item-meta">
                  <span class="popular-item-price">${currency}${item.price}</span>
                  <span>•</span>
                  <span>${item.soldCount || 0} orders today</span>
                </div>
                <div class="popular-bar-wrapper">
                  <div class="popular-bar-fill" style="width: ${percentage}%;"></div>
                </div>
              </div>
              <button class="btn btn-sm btn-ghost" onclick="Brewora.quickOrderSingleItem('${item.id}')" title="Quick Add to Cart">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          `;
        }).join('');
      }

      // 5. Render Recent Orders Table
      const recentOrdersTbody = document.getElementById('dashboardRecentOrdersTbody');
      if (recentOrdersTbody) {
        const recents = [...state.orders].slice(0, 5);
        if (recents.length === 0) {
          recentOrdersTbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No orders placed today yet.</td></tr>`;
        } else {
          recentOrdersTbody.innerHTML = recents.map(order => {
            const itemsBrief = order.items.map(i => `${i.qty}x ${i.name}`).join(', ');
            return `
              <tr>
                <td><strong>${order.id}</strong></td>
                <td>
                  <div>${order.customerName}</div>
                  <small class="text-muted">${order.tableName || order.type}</small>
                </td>
                <td style="max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsBrief}">${itemsBrief}</td>
                <td><strong>${currency}${order.total}</strong></td>
                <td><small class="text-muted">${order.date.replace('Today, ', '')}</small></td>
                <td>${Brewora.renderStatusBadge(order.status)}</td>
                <td class="text-right">
                  <button class="btn btn-sm btn-secondary" onclick="Brewora.viewOrderDetails('${order.id}')" title="View Bill & Details">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  ${order.status !== 'completed' && order.status !== 'cancelled' ? `
                    <button class="btn btn-sm btn-primary" onclick="Brewora.quickCompleteOrder('${order.id}')" title="Mark as Completed">
                      <i class="fa-solid fa-check"></i>
                    </button>
                  ` : ''}
                </td>
              </tr>
            `;
          }).join('');
        }
      }
    },

    // Chart.js Weekly Sales chart
    initWeeklySalesChart: function (metric = 'both') {
      const canvas = document.getElementById('weeklySalesChart');
      if (!canvas) return;

      if (salesChartInstance) {
        salesChartInstance.destroy();
      }

      const ctx = canvas.getContext('2d');

      // Gradients
      const caramelGradient = ctx.createLinearGradient(0, 0, 0, 260);
      caramelGradient.addColorStop(0, 'rgba(192, 138, 85, 0.45)');
      caramelGradient.addColorStop(1, 'rgba(192, 138, 85, 0.02)');

      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const revenueData = [11240, 12840, 14200, 13900, 17800, 21450, 19800];
      const ordersData = [76, 86, 92, 88, 114, 148, 135];

      const datasets = [];

      if (metric === 'both' || metric === 'revenue') {
        datasets.push({
          label: 'Revenue (₹)',
          data: revenueData,
          borderColor: '#C08A55',
          backgroundColor: caramelGradient,
          borderWidth: 3,
          fill: true,
          tension: 0.38,
          pointBackgroundColor: '#FFFDF9',
          pointBorderColor: '#C08A55',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          yAxisID: 'y'
        });
      }

      if (metric === 'both' || metric === 'orders') {
        datasets.push({
          label: 'Orders Count',
          data: ordersData,
          borderColor: '#3B2416',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [5, 5],
          tension: 0.35,
          pointBackgroundColor: '#3B2416',
          pointRadius: 3,
          yAxisID: metric === 'orders' ? 'y' : 'y1'
        });
      }

      salesChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#22140B',
              titleFont: { family: 'Poppins', size: 13, weight: 'bold' },
              bodyFont: { family: 'Poppins', size: 12 },
              padding: 12,
              cornerRadius: 8,
              boxPadding: 6,
              callbacks: {
                label: function (context) {
                  if (context.dataset.label.includes('Revenue')) {
                    return ` Revenue: ₹${context.parsed.y.toLocaleString('en-IN')}`;
                  } else {
                    return ` Orders: ${context.parsed.y} orders`;
                  }
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#8E7E73', font: { family: 'Poppins', size: 12 } }
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              grid: { color: '#EFE6DC' },
              ticks: {
                color: '#8E7E73',
                font: { family: 'Poppins', size: 11 },
                callback: value => (metric === 'orders' ? value : '₹' + (value / 1000) + 'k')
              }
            },
            y1: {
              type: 'linear',
              display: metric === 'both',
              position: 'right',
              grid: { drawOnChartArea: false },
              ticks: {
                color: '#8E7E73',
                font: { family: 'Poppins', size: 11 }
              }
            }
          }
        }
      });
    },

    renderStatusBadge: function (status) {
      const s = (status || '').toLowerCase();
      const labels = {
        completed: '<span class="order-status-badge status-completed"><i class="fa-solid fa-circle-check"></i> Completed</span>',
        preparing: '<span class="order-status-badge status-preparing"><i class="fa-solid fa-fire-burner"></i> Preparing</span>',
        ready: '<span class="order-status-badge status-ready"><i class="fa-solid fa-bell-concierge"></i> Ready</span>',
        pending: '<span class="order-status-badge status-pending"><i class="fa-solid fa-clock"></i> Pending</span>',
        cancelled: '<span class="order-status-badge status-cancelled"><i class="fa-solid fa-ban"></i> Cancelled</span>'
      };
      return labels[s] || `<span class="order-status-badge">${status}</span>`;
    },

    // ==========================================
    // 5. MENU MANAGEMENT RENDERER & ACTIONS
    // ==========================================
    renderMenu: function () {
      const grid = document.getElementById('menuItemsGrid');
      const emptyState = document.getElementById('menuEmptyState');
      if (!grid) return;

      // Update category counts
      const counts = {
        all: state.menu.length,
        Coffee: state.menu.filter(i => i.category === 'Coffee').length,
        Tea: state.menu.filter(i => i.category === 'Tea').length,
        'Cold Drinks': state.menu.filter(i => i.category === 'Cold Drinks').length,
        Snacks: state.menu.filter(i => i.category === 'Snacks').length,
        Desserts: state.menu.filter(i => i.category === 'Desserts').length
      };

      const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setEl('catCountAll', counts.all);
      setEl('catCountCoffee', counts['Coffee']);
      setEl('catCountTea', counts['Tea']);
      setEl('catCountCold', counts['Cold Drinks']);
      setEl('catCountSnacks', counts['Snacks']);
      setEl('catCountDesserts', counts['Desserts']);

      // Filter items
      let filtered = state.menu.filter(item => {
        // Category filter
        if (menuCategoryFilter !== 'all' && item.category !== menuCategoryFilter) {
          return false;
        }
        // Search query
        if (menuSearchQuery.trim() !== '') {
          const q = menuSearchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchDesc = (item.description || '').toLowerCase().includes(q);
          const matchCat = item.category.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }
        // Dietary filter
        if (menuDietFilter === 'veg' && !item.isVeg) return false;
        if (menuDietFilter === 'non-veg' && item.isVeg) return false;
        // Availability filter
        if (menuAvailFilter === 'available' && !item.available) return false;
        if (menuAvailFilter === 'unavailable' && item.available) return false;

        return true;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
      }

      if (emptyState) emptyState.classList.add('hidden');

      const currency = state.settings.currency || '₹';

      grid.innerHTML = filtered.map(item => `
        <div class="menu-card" data-item-id="${item.id}">
          <div class="menu-card-img-wrap">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80'">
            <span class="menu-category-tag">${item.category}</span>
            <span class="menu-diet-tag ${item.isVeg ? 'veg' : 'non-veg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
              <i class="fa-solid fa-circle" style="font-size: 8px;"></i>
            </span>
            ${item.isPopular ? `<span class="menu-popular-badge"><i class="fa-solid fa-fire"></i> Popular</span>` : ''}
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-row">
              <h3 class="menu-item-name">${item.name}</h3>
              <span class="menu-item-price">${currency}${item.price}</span>
            </div>
            <p class="menu-item-desc">${item.description || 'Artisan cafe selection made fresh to order with premium ingredients.'}</p>
            <div class="menu-card-footer">
              <label class="switch-wrapper">
                <span class="toggle-switch">
                  <input type="checkbox" ${item.available ? 'checked' : ''} onchange="Brewora.toggleItemAvailability('${item.id}', this.checked)">
                  <span class="slider"></span>
                </span>
                <span>${item.available ? 'Available' : 'Sold Out'}</span>
              </label>
              <div class="menu-card-actions">
                <button class="btn-icon-action" onclick="Brewora.openEditMenuItemModal('${item.id}')" title="Edit Item">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-icon-action delete-action" onclick="Brewora.deleteMenuItem('${item.id}')" title="Delete Item">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    },

    toggleItemAvailability: function (itemId, isAvailable) {
      const item = state.menu.find(i => i.id === itemId);
      if (item) {
        item.available = isAvailable;
        saveState();
        this.showToast(`${item.name} marked as ${isAvailable ? 'Available' : 'Sold Out'}`, 'info');
        this.renderMenu();
      }
    },

    openMenuItemModal: function () {
      document.getElementById('menuItemEditId').value = '';
      document.getElementById('menuModalTitle').textContent = 'Add New Menu Item';
      document.getElementById('menuItemForm').reset();
      document.getElementById('menuInputAvailable').checked = true;
      document.getElementById('menuInputPopular').checked = false;
      document.getElementById('menuImagePreview').src = 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80';
      this.openModal('menuItemModal');
    },

    openEditMenuItemModal: function (itemId) {
      const item = state.menu.find(i => i.id === itemId);
      if (!item) return;

      document.getElementById('menuItemEditId').value = item.id;
      document.getElementById('menuModalTitle').textContent = 'Edit Menu Item';
      document.getElementById('menuInputName').value = item.name;
      document.getElementById('menuInputPrice').value = item.price;
      document.getElementById('menuInputCategory').value = item.category;
      document.getElementById('menuInputDiet').value = item.isVeg ? 'veg' : 'non-veg';
      document.getElementById('menuInputDesc').value = item.description || '';
      document.getElementById('menuInputImage').value = item.image || '';
      document.getElementById('menuInputAvailable').checked = Boolean(item.available);
      document.getElementById('menuInputPopular').checked = Boolean(item.isPopular);

      const preview = document.getElementById('menuImagePreview');
      if (preview) preview.src = item.image || 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80';

      this.openModal('menuItemModal');
    },

    pickRandomImage: function () {
      const sampleImages = [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80'
      ];
      const randomUrl = sampleImages[Math.floor(Math.random() * sampleImages.length)];
      document.getElementById('menuInputImage').value = randomUrl;
      document.getElementById('menuImagePreview').src = randomUrl;
    },

    handleSaveMenuItem: function (e) {
      e.preventDefault();
      const editId = document.getElementById('menuItemEditId').value;
      const name = document.getElementById('menuInputName').value.trim();
      const price = parseFloat(document.getElementById('menuInputPrice').value);
      const category = document.getElementById('menuInputCategory').value;
      const isVeg = document.getElementById('menuInputDiet').value === 'veg';
      const description = document.getElementById('menuInputDesc').value.trim();
      let image = document.getElementById('menuInputImage').value.trim();
      const available = document.getElementById('menuInputAvailable').checked;
      const isPopular = document.getElementById('menuInputPopular').checked;

      if (!image) {
        image = 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80';
      }

      if (editId) {
        // Edit existing
        const item = state.menu.find(i => i.id === editId);
        if (item) {
          item.name = name;
          item.price = price;
          item.category = category;
          item.isVeg = isVeg;
          item.description = description;
          item.image = image;
          item.available = available;
          item.isPopular = isPopular;
          this.showToast(`Updated "${name}" successfully`, 'success');
        }
      } else {
        // Add new
        const newItem = {
          id: 'item-' + Date.now(),
          name,
          category,
          price,
          description,
          image,
          available,
          isVeg,
          isPopular,
          soldCount: 0
        };
        state.menu.unshift(newItem);
        this.showToast(`Added new item "${name}" to menu`, 'success');
      }

      saveState();
      this.closeModal('menuItemModal');
      this.renderMenu();
      this.renderDashboard();
    },

    deleteMenuItem: function (itemId) {
      const item = state.menu.find(i => i.id === itemId);
      if (!item) return;

      this.confirmAction(`Are you sure you want to permanently remove "${item.name}" from the menu?`, () => {
        state.menu = state.menu.filter(i => i.id !== itemId);
        saveState();
        Brewora.showToast(`Deleted "${item.name}" from menu`, 'alert');
        Brewora.renderMenu();
        Brewora.renderDashboard();
      });
    },

    // ==========================================
    // 6. ORDERS MANAGEMENT RENDERER & ACTIONS
    // ==========================================
    renderOrders: function () {
      const tbody = document.getElementById('ordersMasterTbody');
      const emptyState = document.getElementById('ordersEmptyState');
      if (!tbody) return;

      // Status counters
      const counts = {
        all: state.orders.length,
        pending: state.orders.filter(o => o.status === 'pending').length,
        preparing: state.orders.filter(o => o.status === 'preparing').length,
        ready: state.orders.filter(o => o.status === 'ready').length,
        completed: state.orders.filter(o => o.status === 'completed').length,
        cancelled: state.orders.filter(o => o.status === 'cancelled').length
      };

      const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      setVal('orderCountAll', counts.all);
      setVal('orderCountPending', counts.pending);
      setVal('orderCountPreparing', counts.preparing);
      setVal('orderCountReady', counts.ready);
      setVal('orderCountCompleted', counts.completed);
      setVal('orderCountCancelled', counts.cancelled);

      // Filtering orders
      let filtered = state.orders.filter(order => {
        // Status filter
        if (orderStatusFilter !== 'all' && order.status !== orderStatusFilter) {
          return false;
        }
        // Search query
        if (orderSearchQuery.trim() !== '') {
          const q = orderSearchQuery.toLowerCase();
          const matchId = order.id.toLowerCase().includes(q);
          const matchCust = order.customerName.toLowerCase().includes(q);
          const matchTable = (order.tableName || '').toLowerCase().includes(q);
          if (!matchId && !matchCust && !matchTable) return false;
        }
        // Type filter
        if (orderTypeFilter === 'dine-in' && order.type !== 'Dine-In') return false;
        if (orderTypeFilter === 'takeaway' && order.type !== 'Takeaway') return false;
        // Payment status filter
        if (orderPaymentFilter !== 'all' && order.paymentStatus !== orderPaymentFilter) return false;

        return true;
      });

      // Sorting
      if (orderSortFilter === 'amount-high') {
        filtered.sort((a, b) => b.total - a.total);
      } else if (orderSortFilter === 'amount-low') {
        filtered.sort((a, b) => a.total - b.total);
      } else if (orderSortFilter === 'oldest') {
        // reversed order
      } else {
        // default newest first
      }

      if (filtered.length === 0) {
        tbody.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
      }

      if (emptyState) emptyState.classList.add('hidden');

      const currency = state.settings.currency || '₹';

      tbody.innerHTML = filtered.map(order => {
        const itemsTags = order.items.map(i => `<span class="order-items-preview-tag">${i.qty}x ${i.name}</span>`).join('');
        const isPaid = order.paymentStatus === 'Paid';

        return `
          <tr>
            <td><strong>${order.id}</strong></td>
            <td>
              <div class="font-medium">${order.customerName}</div>
              <small class="text-muted">${order.customerPhone || 'Walk-in'}</small>
            </td>
            <td>
              <span class="badge ${order.type === 'Dine-In' ? 'badge-info' : 'badge-caramel'}">
                <i class="fa-solid ${order.type === 'Dine-In' ? 'fa-chair' : 'fa-bag-shopping'}"></i>
                ${order.tableName || order.type}
              </span>
            </td>
            <td style="max-width: 260px;">${itemsTags}</td>
            <td><strong>${currency}${order.total}</strong></td>
            <td><small class="text-muted">${order.date}</small></td>
            <td>
              <span class="badge ${isPaid ? 'badge-success' : 'badge-alert'}">
                ${order.paymentMethod} • ${order.paymentStatus}
              </span>
            </td>
            <td>${Brewora.renderStatusBadge(order.status)}</td>
            <td class="text-right">
              <div class="order-table-actions">
                <button class="btn btn-sm btn-secondary" onclick="Brewora.viewOrderDetails('${order.id}')" title="View Bill & Details">
                  <i class="fa-solid fa-receipt"></i>
                </button>
                ${order.status !== 'completed' && order.status !== 'cancelled' ? `
                  <button class="btn btn-sm btn-primary" onclick="Brewora.quickCompleteOrder('${order.id}')" title="Mark as Completed">
                    <i class="fa-solid fa-check"></i>
                  </button>
                ` : ''}
              </div>
            </td>
          </tr>
        `;
      }).join('');
    },

    quickCompleteOrder: function (orderId) {
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = 'completed';
        order.paymentStatus = 'Paid';

        // If order had a dine-in table, check if we should release table
        if (order.tableId) {
          const tbl = state.tables.find(t => t.id === order.tableId);
          if (tbl && tbl.status === 'occupied') {
            tbl.status = 'available';
            tbl.orderId = null;
            tbl.orderAmount = 0;
            tbl.guest = null;
            tbl.time = null;
          }
        }

        saveState();
        this.showToast(`Order ${order.id} marked as Completed & Paid!`, 'success');
        this.renderOrders();
        this.renderDashboard();
        this.renderTables();
      }
    },

    refreshOrders: function () {
      this.renderOrders();
      this.showToast('Orders list refreshed', 'info');
    },

    viewOrderDetails: function (orderId) {
      const order = state.orders.find(o => o.id === orderId);
      if (!order) return;

      currentViewingOrder = order;

      const currency = state.settings.currency || '₹';

      document.getElementById('receiptModalOrderTitle').textContent = `Order ${order.id}`;
      document.getElementById('receiptModalDateTime').textContent = order.date;

      document.getElementById('recOrderId').textContent = order.id;
      document.getElementById('recDate').textContent = order.date;
      document.getElementById('recCustomer').textContent = order.customerName;
      document.getElementById('recTable').textContent = order.tableName || order.type;

      // Items table
      const tbody = document.getElementById('recItemsTbody');
      tbody.innerHTML = order.items.map(item => `
        <tr>
          <td>${item.name}</td>
          <td class="text-center">${item.qty}</td>
          <td class="text-right">${currency}${item.price}</td>
          <td class="text-right">${currency}${(item.qty * item.price).toFixed(2)}</td>
        </tr>
      `).join('');

      document.getElementById('recSubtotal').textContent = `${currency}${order.subtotal.toFixed(2)}`;
      document.getElementById('recTax').textContent = `${currency}${order.tax.toFixed(2)}`;
      document.getElementById('recTotal').textContent = `${currency}${order.total.toFixed(2)}`;
      document.getElementById('recPayment').textContent = `${order.paymentMethod} (${order.paymentStatus})`;

      this.openModal('orderDetailsModal');
    },

    setOrderStatusFromModal: function (newStatus) {
      if (!currentViewingOrder) return;
      currentViewingOrder.status = newStatus;
      if (newStatus === 'completed') {
        currentViewingOrder.paymentStatus = 'Paid';
        if (currentViewingOrder.tableId) {
          const tbl = state.tables.find(t => t.id === currentViewingOrder.tableId);
          if (tbl && tbl.status === 'occupied') {
            tbl.status = 'available';
            tbl.orderId = null;
            tbl.orderAmount = 0;
            tbl.guest = null;
            tbl.time = null;
          }
        }
      }
      saveState();
      this.showToast(`Order status updated to "${newStatus}"`, 'info');
      this.closeModal('orderDetailsModal');
      this.renderOrders();
      this.renderDashboard();
      this.renderTables();
    },

    printCurrentReceipt: function () {
      window.print();
    },

    // ==========================================
    // 7. POS NEW ORDER MODAL & CART ENGINE
    // ==========================================
    openNewOrderModal: function (preselectedTableId = null) {
      posCart = [];
      this.renderPosCart();
      this.renderPosMenu('all');

      // Populate tables dropdown
      const tblSelect = document.getElementById('posTableSelect');
      if (tblSelect) {
        tblSelect.innerHTML = state.tables.map(t => `
          <option value="${t.id}" ${t.id === preselectedTableId ? 'selected' : ''} ${t.status === 'occupied' && t.id !== preselectedTableId ? 'disabled' : ''}>
            Table ${String(t.number).padStart(2, '0')} (${t.zone}) - ${t.status.toUpperCase()}
          </option>
        `).join('');
      }

      // If preselected table, select Dine-In
      if (preselectedTableId) {
        const typeSelect = document.getElementById('posOrderType');
        if (typeSelect) typeSelect.value = 'Dine-In';
        this.handlePosTypeChange('Dine-In');
      }

      this.openModal('newOrderModal');
    },

    quickOrderSingleItem: function (itemId) {
      const item = state.menu.find(i => i.id === itemId);
      if (item) {
        this.openNewOrderModal();
        this.addToPosCart(item.id);
      }
    },

    handlePosTypeChange: function (type) {
      const tblGroup = document.getElementById('posTableSelectGroup');
      if (tblGroup) {
        tblGroup.style.display = type === 'Dine-In' ? 'block' : 'none';
      }
    },

    filterPosCategory: function (cat) {
      const tags = document.querySelectorAll('.pos-tag-btn');
      tags.forEach(t => {
        if (t.textContent.trim().toLowerCase() === cat.toLowerCase() || (cat === 'all' && t.textContent.trim() === 'All')) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });
      this.renderPosMenu(cat);
    },

    filterPosMenu: function (query) {
      this.renderPosMenu('all', query);
    },

    renderPosMenu: function (category = 'all', searchQuery = '') {
      const grid = document.getElementById('posMenuGrid');
      if (!grid) return;

      const currency = state.settings.currency || '₹';

      let items = state.menu.filter(i => i.available);
      if (category !== 'all') {
        items = items.filter(i => i.category === category);
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        items = items.filter(i => i.name.toLowerCase().includes(q));
      }

      grid.innerHTML = items.map(item => `
        <div class="pos-item-tile" onclick="Brewora.addToPosCart('${item.id}')">
          <img src="${item.image}" alt="${item.name}" class="pos-tile-img" onerror="this.src='https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=150&q=80'">
          <div class="pos-tile-name">${item.name}</div>
          <div class="pos-tile-price">${currency}${item.price}</div>
        </div>
      `).join('');
    },

    addToPosCart: function (itemId) {
      const menuItem = state.menu.find(i => i.id === itemId);
      if (!menuItem) return;

      const existing = posCart.find(i => i.id === itemId);
      if (existing) {
        existing.qty += 1;
      } else {
        posCart.push({
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          qty: 1
        });
      }

      this.renderPosCart();
    },

    updateCartQty: function (itemId, delta) {
      const item = posCart.find(i => i.id === itemId);
      if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
          posCart = posCart.filter(i => i.id !== itemId);
        }
      }
      this.renderPosCart();
    },

    removeFromPosCart: function (itemId) {
      posCart = posCart.filter(i => i.id !== itemId);
      this.renderPosCart();
    },

    clearPosCart: function () {
      posCart = [];
      this.renderPosCart();
    },

    renderPosCart: function () {
      const list = document.getElementById('posCartItemsList');
      const subtotalEl = document.getElementById('posCalcSubtotal');
      const taxEl = document.getElementById('posCalcTax');
      const totalEl = document.getElementById('posCalcTotal');

      const currency = state.settings.currency || '₹';

      if (!list) return;

      if (posCart.length === 0) {
        list.innerHTML = `
          <div class="empty-cart-message">
            <i class="fa-solid fa-basket-shopping"></i>
            <p>No items in cart yet. Click any menu item on the left to add!</p>
          </div>
        `;
        if (subtotalEl) subtotalEl.textContent = `${currency}0.00`;
        if (taxEl) taxEl.textContent = `${currency}0.00`;
        if (totalEl) totalEl.textContent = `${currency}0.00`;
        return;
      }

      let subtotal = 0;

      list.innerHTML = posCart.map(item => {
        const itemTotal = item.qty * item.price;
        subtotal += itemTotal;
        return `
          <div class="cart-item-row">
            <div class="cart-item-details">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-unit-price">${currency}${item.price} each</div>
            </div>
            <div class="cart-qty-stepper">
              <button class="cart-qty-btn" onclick="Brewora.updateCartQty('${item.id}', -1)">-</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" onclick="Brewora.updateCartQty('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-total">${currency}${itemTotal}</div>
            <button class="cart-remove-btn" onclick="Brewora.removeFromPosCart('${item.id}')" title="Remove">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        `;
      }).join('');

      const taxRate = state.settings.taxRate || 5;
      const tax = (subtotal * taxRate) / 100;
      const grandTotal = subtotal + tax;

      if (subtotalEl) subtotalEl.textContent = `${currency}${subtotal.toFixed(2)}`;
      if (taxEl) taxEl.textContent = `${currency}${tax.toFixed(2)}`;
      if (totalEl) totalEl.textContent = `${currency}${grandTotal.toFixed(2)}`;
    },

    submitPosOrder: function () {
      if (posCart.length === 0) {
        this.showToast('Please add at least one item to the cart first', 'warning');
        return;
      }

      const orderType = document.getElementById('posOrderType').value;
      const customerName = document.getElementById('posCustomerName').value.trim() || 'Guest Patron';
      const customerPhone = document.getElementById('posCustomerPhone').value.trim() || '+91 98765 00000';
      const paymentMethodRadio = document.querySelector('input[name="posPayment"]:checked');
      const paymentMethod = paymentMethodRadio ? paymentMethodRadio.value : 'UPI';

      let tableId = null;
      let tableName = 'Takeaway';

      if (orderType === 'Dine-In') {
        tableId = document.getElementById('posTableSelect').value;
        const tbl = state.tables.find(t => t.id === tableId);
        tableName = tbl ? `Table ${String(tbl.number).padStart(2, '0')}` : 'Table 01';
      }

      const subtotal = posCart.reduce((sum, i) => sum + (i.qty * i.price), 0);
      const taxRate = state.settings.taxRate || 5;
      const tax = (subtotal * taxRate) / 100;
      const total = subtotal + tax;

      const orderNumber = 1087 + state.orders.length;
      const newOrderId = `#BRW-${orderNumber}`;

      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      const newOrder = {
        id: newOrderId,
        customerName,
        customerPhone,
        type: orderType,
        tableId: tableId,
        tableName: tableName,
        items: JSON.parse(JSON.stringify(posCart)),
        subtotal: subtotal,
        tax: tax,
        total: total,
        date: `Today, ${timeStr}`,
        paymentMethod: paymentMethod,
        paymentStatus: 'Paid',
        status: 'preparing'
      };

      state.orders.unshift(newOrder);

      // If dine-in, mark table as occupied
      if (tableId) {
        const tbl = state.tables.find(t => t.id === tableId);
        if (tbl) {
          tbl.status = 'occupied';
          tbl.orderId = newOrderId;
          tbl.orderAmount = total;
          tbl.guest = customerName;
          tbl.time = 'Just seated';
        }
      }

      // Increment sold count for menu items
      posCart.forEach(cartItem => {
        const mi = state.menu.find(m => m.id === cartItem.id);
        if (mi) {
          mi.soldCount = (mi.soldCount || 0) + cartItem.qty;
        }
      });

      // Update customer or create customer profile
      let existingCustomer = state.customers.find(c => c.name.toLowerCase() === customerName.toLowerCase() || (customerPhone && c.phone === customerPhone));
      if (existingCustomer) {
        existingCustomer.totalOrders += 1;
        existingCustomer.totalSpent += total;
        existingCustomer.lastVisit = `Today, ${timeStr}`;
      } else if (customerName !== 'Guest Patron') {
        state.customers.unshift({
          id: 'cust-' + Date.now(),
          name: customerName,
          phone: customerPhone,
          email: `${customerName.toLowerCase().replace(/\s+/g, '.')}@example.com`,
          tier: 'Bronze Member',
          totalOrders: 1,
          totalSpent: total,
          lastVisit: `Today, ${timeStr}`,
          favorite: posCart[0] ? posCart[0].name : 'Coffee'
        });
      }

      saveState();

      this.showToast(`Order ${newOrderId} created and sent to Barista Kitchen!`, 'success');
      this.closeModal('newOrderModal');

      // Reset cart
      posCart = [];

      // Refresh displays
      this.renderOrders();
      this.renderDashboard();
      this.renderTables();
      this.renderCustomers();

      // Show receipt
      this.viewOrderDetails(newOrderId);
    },

    // ==========================================
    // 8. TABLE MANAGEMENT RENDERER & ACTIONS
    // ==========================================
    renderTables: function () {
      const grid = document.getElementById('tablesFloorGrid');
      if (!grid) return;

      const totalTables = state.tables.length;
      const availTables = state.tables.filter(t => t.status === 'available').length;
      const occTables = state.tables.filter(t => t.status === 'occupied').length;
      const resTables = state.tables.filter(t => t.status === 'reserved').length;
      const occRate = Math.round((occTables / totalTables) * 100);

      const setT = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      setT('floorTotalTables', totalTables);
      setT('floorAvailableTables', availTables);
      setT('floorOccupiedTables', occTables);
      setT('floorReservedTables', resTables);
      setT('floorOccupancyRate', `${occRate}%`);

      let filtered = state.tables;
      if (tableZoneFilter !== 'all') {
        filtered = filtered.filter(t => t.zone === tableZoneFilter);
      }
      if (tableStatusFilter !== 'all') {
        filtered = filtered.filter(t => t.status === tableStatusFilter);
      }

      const currency = state.settings.currency || '₹';

      grid.innerHTML = filtered.map(t => {
        const isAvail = t.status === 'available';
        const isOcc = t.status === 'occupied';
        const isRes = t.status === 'reserved';

        const statusClass = isAvail ? 'table-available' : (isOcc ? 'table-occupied' : 'table-reserved');
        const pillClass = isAvail ? 'pill-avail' : (isOcc ? 'pill-occ' : 'pill-res');
        const statusLabel = isAvail ? 'Available' : (isOcc ? 'Occupied' : 'Reserved');

        return `
          <div class="table-card ${statusClass}">
            <div class="table-card-header">
              <span class="table-number-title">Table ${String(t.number).padStart(2, '0')}</span>
              <span class="table-zone-badge">${t.zone}</span>
            </div>
            <div class="table-info-meta">
              <span class="table-seats"><i class="fa-solid fa-users"></i> ${t.seats} Seater</span>
            </div>
            <div>
              <span class="table-status-pill ${pillClass}">
                <i class="fa-solid ${isAvail ? 'fa-circle-check' : (isOcc ? 'fa-circle-dot' : 'fa-clock')}"></i>
                ${statusLabel}
              </span>
            </div>

            ${isOcc ? `
              <div class="table-occupied-details">
                <div class="table-occ-row">
                  <span>Guest:</span>
                  <span class="table-occ-val">${t.guest || 'Patron'}</span>
                </div>
                <div class="table-occ-row">
                  <span>Active Bill:</span>
                  <span class="table-occ-val">${currency}${t.orderAmount || 0}</span>
                </div>
                <div class="table-occ-row">
                  <span>Duration:</span>
                  <span class="table-occ-val">${t.time || '15 mins'}</span>
                </div>
              </div>
            ` : ''}

            ${isRes ? `
              <div class="table-occupied-details">
                <div class="table-occ-row">
                  <span>Reserved for:</span>
                  <span class="table-occ-val">${t.guest || 'Guest'}</span>
                </div>
                <div class="table-occ-row">
                  <span>Time:</span>
                  <span class="table-occ-val">${t.time || '19:30'}</span>
                </div>
              </div>
            ` : ''}

            <div class="table-card-actions">
              ${isAvail ? `
                <button class="btn btn-sm btn-primary" onclick="Brewora.openNewOrderModal('${t.id}')">
                  <i class="fa-solid fa-plus"></i> Seat & Order
                </button>
                <button class="btn btn-sm btn-secondary" onclick="Brewora.openReserveSpecificTable('${t.id}')" title="Reserve Table">
                  <i class="fa-solid fa-calendar-check"></i>
                </button>
              ` : ''}

              ${isOcc ? `
                <button class="btn btn-sm btn-secondary" onclick="Brewora.viewTableOrder('${t.orderId}')">
                  <i class="fa-solid fa-receipt"></i> Bill
                </button>
                <button class="btn btn-sm btn-primary" onclick="Brewora.clearTable('${t.id}')">
                  <i class="fa-solid fa-check"></i> Release
                </button>
              ` : ''}

              ${isRes ? `
                <button class="btn btn-sm btn-primary" onclick="Brewora.openNewOrderModal('${t.id}')">
                  <i class="fa-solid fa-chair"></i> Seat Guests
                </button>
                <button class="btn btn-sm btn-secondary" onclick="Brewora.clearTable('${t.id}')" title="Cancel Reservation">
                  <i class="fa-solid fa-ban"></i>
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    },

    viewTableOrder: function (orderId) {
      if (orderId) {
        this.viewOrderDetails(orderId);
      } else {
        this.showToast('No active bill linked to this table', 'info');
      }
    },

    clearTable: function (tableId) {
      const tbl = state.tables.find(t => t.id === tableId);
      if (tbl) {
        tbl.status = 'available';
        tbl.orderId = null;
        tbl.orderAmount = 0;
        tbl.guest = null;
        tbl.time = null;
        saveState();
        this.showToast(`Table ${tbl.number} marked as Available`, 'success');
        this.renderTables();
        this.renderDashboard();
      }
    },

    openReserveTableModal: function () {
      const select = document.getElementById('resSelectTable');
      if (select) {
        select.innerHTML = state.tables
          .filter(t => t.status === 'available')
          .map(t => `<option value="${t.id}">Table ${t.number} (${t.seats} seats - ${t.zone})</option>`)
          .join('');
      }
      this.openModal('reserveTableModal');
    },

    openReserveSpecificTable: function (tableId) {
      const select = document.getElementById('resSelectTable');
      if (select) {
        select.innerHTML = state.tables
          .map(t => `<option value="${t.id}" ${t.id === tableId ? 'selected' : ''}>Table ${t.number} (${t.seats} seats - ${t.zone})</option>`)
          .join('');
      }
      this.openModal('reserveTableModal');
    },

    handleSaveReservation: function (e) {
      e.preventDefault();
      const tableId = document.getElementById('resSelectTable').value;
      const guestName = document.getElementById('resGuestName').value.trim();
      const guestPhone = document.getElementById('resGuestPhone').value.trim();
      const time = document.getElementById('resReservationTime').value;

      const tbl = state.tables.find(t => t.id === tableId);
      if (tbl) {
        tbl.status = 'reserved';
        tbl.guest = guestName;
        tbl.time = time;
        saveState();

        this.showToast(`Table ${tbl.number} reserved for ${guestName} at ${time}`, 'success');
        this.closeModal('reserveTableModal');
        this.renderTables();
        this.renderDashboard();
      }
    },

    // ==========================================
    // 9. INVENTORY MANAGEMENT RENDERER & ACTIONS
    // ==========================================
    renderInventory: function () {
      const tbody = document.getElementById('inventoryMasterTbody');
      if (!tbody) return;

      const totalItems = state.inventory.length;
      const healthyItems = state.inventory.filter(i => i.qty > i.minBuffer).length;
      const lowItems = state.inventory.filter(i => i.qty <= i.minBuffer && i.qty > 0).length;
      const outItems = state.inventory.filter(i => i.qty === 0).length;

      const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      setVal('invTotalCount', totalItems);
      setVal('invHealthyCount', healthyItems);
      setVal('invLowStockCount', lowItems);
      setVal('invOutCount', outItems);

      const warningBanner = document.getElementById('stockWarningBanner');
      if (warningBanner) {
        warningBanner.style.display = (lowItems + outItems > 0) ? 'flex' : 'none';
      }

      // Filter
      const search = (document.getElementById('inventorySearchInput')?.value || '').toLowerCase();
      const cat = document.getElementById('inventoryCategoryFilter')?.value || 'all';
      const statusF = document.getElementById('inventoryStatusFilter')?.value || 'all';

      let filtered = state.inventory.filter(item => {
        if (cat !== 'all' && item.category !== cat) return false;
        if (statusF !== 'all' && item.status !== statusF) return false;
        if (search.trim() !== '') {
          const matchName = item.name.toLowerCase().includes(search);
          const matchSup = (item.supplier || '').toLowerCase().includes(search);
          if (!matchName && !matchSup) return false;
        }
        return true;
      });

      tbody.innerHTML = filtered.map(item => {
        const isOut = item.qty === 0;
        const isLow = !isOut && item.qty <= item.minBuffer;
        const status = isOut ? 'Out of Stock' : (isLow ? 'Low Stock' : 'In Stock');
        item.status = status; // sync

        const badgeClass = isOut ? 'badge-alert' : (isLow ? 'badge-warning' : 'badge-success');
        const thumbClass = isOut ? 'stock-thumb-out' : (isLow ? 'stock-thumb-low' : 'stock-thumb-healthy');

        const ratio = Math.min(100, Math.round((item.qty / (item.minBuffer * 2.5)) * 100));

        return `
          <tr>
            <td>
              <div class="font-medium">${item.name}</div>
              <small class="text-muted">Supplier: ${item.supplier || 'Standard Roaster'}</small>
            </td>
            <td><span class="badge badge-caramel">${item.category}</span></td>
            <td><strong>${item.qty} ${item.unit}</strong></td>
            <td><span class="text-muted">${item.minBuffer} ${item.unit}</span></td>
            <td>
              <div class="stock-progress-track">
                <div class="stock-progress-thumb ${thumbClass}" style="width: ${ratio}%;"></div>
              </div>
            </td>
            <td><span class="badge ${badgeClass}">${status}</span></td>
            <td class="text-right">
              <div class="quick-stock-stepper">
                <button class="stepper-btn" onclick="Brewora.adjustStock('${item.id}', -1)" title="Decrease Stock">-</button>
                <button class="stepper-btn" onclick="Brewora.adjustStock('${item.id}', 1)" title="Increase Stock">+</button>
              </div>
              <button class="btn btn-sm btn-ghost ml-2" onclick="Brewora.openEditInventoryModal('${item.id}')" title="Edit Ingredient">
                <i class="fa-solid fa-pen"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    },

    adjustStock: function (invId, delta) {
      const item = state.inventory.find(i => i.id === invId);
      if (item) {
        item.qty = Math.max(0, parseFloat((item.qty + delta).toFixed(1)));
        if (item.qty === 0) item.status = 'Out of Stock';
        else if (item.qty <= item.minBuffer) item.status = 'Low Stock';
        else item.status = 'In Stock';

        saveState();
        this.renderInventory();
        this.renderDashboard();
      }
    },

    quickRestockAll: function () {
      state.inventory.forEach(item => {
        if (item.qty <= item.minBuffer) {
          item.qty = parseFloat((item.minBuffer * 2).toFixed(1));
          item.status = 'In Stock';
        }
      });
      saveState();
      this.showToast('Restocked all low inventory items above buffer limits', 'success');
      this.renderInventory();
      this.renderDashboard();
    },

    openRestockModal: function () {
      document.getElementById('inventoryEditId').value = '';
      document.getElementById('restockModalTitle').textContent = 'Add New Inventory Ingredient';
      document.getElementById('restockForm').reset();
      this.openModal('restockModal');
    },

    openEditInventoryModal: function (invId) {
      const item = state.inventory.find(i => i.id === invId);
      if (!item) return;

      document.getElementById('inventoryEditId').value = item.id;
      document.getElementById('restockModalTitle').textContent = 'Edit Inventory Item';
      document.getElementById('invInputName').value = item.name;
      document.getElementById('invInputCategory').value = item.category;
      document.getElementById('invInputUnit').value = item.unit;
      document.getElementById('invInputQty').value = item.qty;
      document.getElementById('invInputMin').value = item.minBuffer;
      document.getElementById('invInputSupplier').value = item.supplier || '';

      this.openModal('restockModal');
    },

    handleSaveInventory: function (e) {
      e.preventDefault();
      const editId = document.getElementById('inventoryEditId').value;
      const name = document.getElementById('invInputName').value.trim();
      const category = document.getElementById('invInputCategory').value;
      const unit = document.getElementById('invInputUnit').value;
      const qty = parseFloat(document.getElementById('invInputQty').value);
      const minBuffer = parseFloat(document.getElementById('invInputMin').value);
      const supplier = document.getElementById('invInputSupplier').value.trim();

      const status = qty === 0 ? 'Out of Stock' : (qty <= minBuffer ? 'Low Stock' : 'In Stock');

      if (editId) {
        const item = state.inventory.find(i => i.id === editId);
        if (item) {
          item.name = name;
          item.category = category;
          item.unit = unit;
          item.qty = qty;
          item.minBuffer = minBuffer;
          item.supplier = supplier;
          item.status = status;
          this.showToast(`Updated ingredient "${name}"`, 'success');
        }
      } else {
        state.inventory.unshift({
          id: 'inv-' + Date.now(),
          name,
          category,
          unit,
          qty,
          minBuffer,
          supplier,
          status
        });
        this.showToast(`Added ingredient "${name}"`, 'success');
      }

      saveState();
      this.closeModal('restockModal');
      this.renderInventory();
      this.renderDashboard();
    },

    exportInventoryCSV: function () {
      let csv = 'Item Name,Category,Quantity,Unit,Min Buffer,Status,Supplier\n';
      state.inventory.forEach(i => {
        csv += `"${i.name}","${i.category}",${i.qty},"${i.unit}",${i.minBuffer},"${i.status}","${i.supplier || ''}"\n`;
      });
      this.downloadBlob(csv, 'brewora_inventory_report.csv', 'text/csv');
      this.showToast('Downloaded inventory CSV report', 'info');
    },

    // ==========================================
    // 10. CUSTOMERS MANAGEMENT
    // ==========================================
    renderCustomers: function () {
      const tbody = document.getElementById('customersMasterTbody');
      if (!tbody) return;

      const totalCust = state.customers.length;
      const vipCust = state.customers.filter(c => c.tier.includes('VIP')).length;
      const totalSpendAll = state.customers.reduce((sum, c) => sum + (c.totalSpent || 0), 0);
      const avgSpend = totalCust > 0 ? Math.round(totalSpendAll / totalCust) : 0;

      const currency = state.settings.currency || '₹';

      const setT = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      setT('custTotalCount', totalCust);
      setT('custVipCount', vipCust);
      setT('custAvgSpend', `${currency}${avgSpend}`);

      const search = (document.getElementById('customerSearchInput')?.value || '').toLowerCase();
      const tierFilter = document.getElementById('customerTierFilter')?.value || 'all';

      let filtered = state.customers.filter(cust => {
        if (tierFilter !== 'all' && cust.tier !== tierFilter) return false;
        if (search.trim() !== '') {
          const matchName = cust.name.toLowerCase().includes(search);
          const matchPhone = cust.phone.includes(search);
          const matchEmail = (cust.email || '').toLowerCase().includes(search);
          if (!matchName && !matchPhone && !matchEmail) return false;
        }
        return true;
      });

      tbody.innerHTML = filtered.map(cust => {
        const initials = cust.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        const tierBadge = cust.tier.includes('VIP') ? 'badge-warning' : (cust.tier.includes('Silver') ? 'badge-info' : 'badge-caramel');

        return `
          <tr>
            <td>
              <div class="customer-avatar-cell">
                <div class="cust-initials">${initials}</div>
                <div>
                  <span class="cust-name-text">${cust.name}</span>
                  <span class="cust-favorite-tag">Fav: ${cust.favorite || 'Specialty Coffee'}</span>
                </div>
              </div>
            </td>
            <td>${cust.phone}</td>
            <td><small class="text-muted">${cust.email || 'N/A'}</small></td>
            <td><span class="badge ${tierBadge}">${cust.tier}</span></td>
            <td><strong>${cust.totalOrders} orders</strong></td>
            <td><strong>${currency}${cust.totalSpent.toLocaleString('en-IN')}</strong></td>
            <td><small class="text-muted">${cust.lastVisit}</small></td>
            <td class="text-right">
              <button class="btn btn-sm btn-secondary" onclick="Brewora.viewCustomerProfile('${cust.id}')" title="Customer Profile">
                <i class="fa-solid fa-user"></i>
              </button>
              <button class="btn btn-sm btn-ghost" onclick="Brewora.openEditCustomerModal('${cust.id}')" title="Edit Customer">
                <i class="fa-solid fa-pen"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    },

    viewCustomerProfile: function (custId) {
      const cust = state.customers.find(c => c.id === custId);
      if (!cust) return;

      currentViewingCustomer = cust;

      const currency = state.settings.currency || '₹';

      document.getElementById('custHistFullName').textContent = cust.name;
      document.getElementById('custHistPhone').textContent = cust.phone;
      document.getElementById('custHistEmail').textContent = cust.email || 'No email on record';
      document.getElementById('custHistFavoriteBadge').textContent = `Fav: ${cust.favorite || 'Cappuccino'}`;

      document.getElementById('custHistTotalOrders').textContent = cust.totalOrders;
      document.getElementById('custHistTotalSpent').textContent = `${currency}${cust.totalSpent.toLocaleString('en-IN')}`;
      document.getElementById('custHistPoints').textContent = Math.round(cust.totalSpent / 10);

      const initials = cust.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
      document.getElementById('custHistAvatar').textContent = initials;

      // Injected orders list for this customer
      const historyList = document.getElementById('custHistOrdersList');
      const custOrders = state.orders.filter(o => o.customerName.toLowerCase() === cust.name.toLowerCase() || o.customerPhone === cust.phone);

      if (custOrders.length === 0) {
        historyList.innerHTML = `<div class="p-3 text-center text-muted">No prior recorded orders in this session.</div>`;
      } else {
        historyList.innerHTML = custOrders.map(o => `
          <div class="cust-hist-item">
            <div>
              <strong>${o.id}</strong> • <small class="text-muted">${o.date}</small>
            </div>
            <div>
              <strong>${currency}${o.total}</strong> • ${Brewora.renderStatusBadge(o.status)}
            </div>
          </div>
        `).join('');
      }

      this.openModal('customerHistoryModal');
    },

    openNewOrderForCustomer: function () {
      if (currentViewingCustomer) {
        this.closeModal('customerHistoryModal');
        this.openNewOrderModal();
        const nameInput = document.getElementById('posCustomerName');
        const phoneInput = document.getElementById('posCustomerPhone');
        if (nameInput) nameInput.value = currentViewingCustomer.name;
        if (phoneInput) phoneInput.value = currentViewingCustomer.phone;
      }
    },

    openCustomerModal: function () {
      document.getElementById('customerEditId').value = '';
      document.getElementById('customerModalTitle').textContent = 'Add New Customer Profile';
      document.getElementById('customerForm').reset();
      this.openModal('customerModal');
    },

    openEditCustomerModal: function (custId) {
      const cust = state.customers.find(c => c.id === custId);
      if (!cust) return;

      document.getElementById('customerEditId').value = cust.id;
      document.getElementById('customerModalTitle').textContent = 'Edit Customer Profile';
      document.getElementById('custInputName').value = cust.name;
      document.getElementById('custInputPhone').value = cust.phone;
      document.getElementById('custInputEmail').value = cust.email || '';
      document.getElementById('custInputTier').value = cust.tier;
      document.getElementById('custInputFavorite').value = cust.favorite || '';

      this.openModal('customerModal');
    },

    handleSaveCustomer: function (e) {
      e.preventDefault();
      const editId = document.getElementById('customerEditId').value;
      const name = document.getElementById('custInputName').value.trim();
      const phone = document.getElementById('custInputPhone').value.trim();
      const email = document.getElementById('custInputEmail').value.trim();
      const tier = document.getElementById('custInputTier').value;
      const favorite = document.getElementById('custInputFavorite').value.trim();

      if (editId) {
        const cust = state.customers.find(c => c.id === editId);
        if (cust) {
          cust.name = name;
          cust.phone = phone;
          cust.email = email;
          cust.tier = tier;
          cust.favorite = favorite;
          this.showToast(`Updated customer profile for "${name}"`, 'success');
        }
      } else {
        state.customers.unshift({
          id: 'cust-' + Date.now(),
          name,
          phone,
          email,
          tier,
          totalOrders: 1,
          totalSpent: 420,
          lastVisit: 'Just now',
          favorite
        });
        this.showToast(`Added customer "${name}"`, 'success');
      }

      saveState();
      this.closeModal('customerModal');
      this.renderCustomers();
    },

    // ==========================================
    // 11. SALES & REPORTS PAGE
    // ==========================================
    renderReports: function (timeframe = 'week') {
      const currency = state.settings.currency || '₹';

      // Aggregate revenue & metrics based on timeframe
      let revenue = 94620;
      let orderCount = 564;
      let aov = 368;

      if (timeframe === 'today') {
        revenue = state.orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + (o.total || 0), 0) || 12840;
        orderCount = state.orders.length || 86;
        aov = Math.round(revenue / (orderCount || 1));
      } else if (timeframe === 'month') {
        revenue = 384500;
        orderCount = 2240;
        aov = 372;
      } else if (timeframe === 'year') {
        revenue = 4580000;
        orderCount = 27800;
        aov = 365;
      }

      document.getElementById('reportRevenueValue').textContent = `${currency}${revenue.toLocaleString('en-IN')}`;
      document.getElementById('reportOrdersValue').textContent = orderCount;
      document.getElementById('reportAovValue').textContent = `${currency}${aov}`;

      // Render Charts
      this.initReportsCharts(timeframe);

      // Render Top 5 Products Leaderboard
      const leaderboard = document.getElementById('reportsLeaderboardList');
      if (leaderboard) {
        const top5 = [...state.menu].sort((a, b) => b.soldCount - a.soldCount).slice(0, 5);
        leaderboard.innerHTML = top5.map((item, index) => {
          const itemRev = item.soldCount * item.price;
          return `
            <div class="leaderboard-row">
              <div class="leaderboard-rank top-${index + 1}">${index + 1}</div>
              <div class="leaderboard-info">
                <div class="leaderboard-name">${item.name}</div>
                <div class="leaderboard-sales">${item.soldCount} units sold • ${item.category}</div>
              </div>
              <div class="leaderboard-revenue">${currency}${itemRev.toLocaleString('en-IN')}</div>
            </div>
          `;
        }).join('');
      }
    },

    initReportsCharts: function (timeframe) {
      // 1. Revenue & Orders Trend Chart
      const trendCanvas = document.getElementById('reportsTrendChart');
      if (trendCanvas) {
        if (reportTrendChartInstance) reportTrendChartInstance.destroy();
        const ctx = trendCanvas.getContext('2d');

        const labels = timeframe === 'today'
          ? ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM']
          : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        const revData = timeframe === 'today'
          ? [1200, 2400, 1800, 950, 2200, 2800, 1100, 390]
          : [11240, 12840, 14200, 13900, 17800, 21450, 19800];

        const ordData = timeframe === 'today'
          ? [8, 16, 12, 7, 15, 19, 7, 2]
          : [76, 86, 92, 88, 114, 148, 135];

        reportTrendChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                type: 'bar',
                label: 'Revenue (₹)',
                data: revData,
                backgroundColor: '#C08A55',
                borderRadius: 6,
                yAxisID: 'y'
              },
              {
                type: 'line',
                label: 'Orders',
                data: ordData,
                borderColor: '#3B2416',
                borderWidth: 3,
                tension: 0.3,
                pointBackgroundColor: '#FFF',
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top', labels: { font: { family: 'Poppins' } } }
            },
            scales: {
              x: { grid: { display: false } },
              y: {
                position: 'left',
                ticks: { callback: v => '₹' + v }
              },
              y1: {
                position: 'right',
                grid: { drawOnChartArea: false }
              }
            }
          }
        });
      }

      // 2. Sales by Category Doughnut Chart
      const categoryCanvas = document.getElementById('reportsCategoryChart');
      if (categoryCanvas) {
        if (reportCategoryChartInstance) reportCategoryChartInstance.destroy();
        const ctx = categoryCanvas.getContext('2d');

        reportCategoryChartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Coffee', 'Cold Drinks', 'Snacks', 'Desserts', 'Tea'],
            datasets: [
              {
                data: [46, 20, 18, 12, 4],
                backgroundColor: ['#3B2416', '#C08A55', '#6F4E37', '#D49B64', '#8A9A80'],
                borderWidth: 2,
                borderColor: '#FFFDF9'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom', labels: { font: { family: 'Poppins', size: 11 } } },
              tooltip: {
                callbacks: {
                  label: ctx => ` ${ctx.label}: ${ctx.parsed}% of sales`
                }
              }
            },
            cutout: '65%'
          }
        });
      }

      // 3. Hourly Traffic Bar Chart
      const hourlyCanvas = document.getElementById('reportsHourlyChart');
      if (hourlyCanvas) {
        if (reportHourlyChartInstance) reportHourlyChartInstance.destroy();
        const ctx = hourlyCanvas.getContext('2d');

        reportHourlyChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['8-10 AM', '10-12 PM', '12-2 PM', '2-4 PM', '4-6 PM', '6-8 PM', '8-10 PM'],
            datasets: [
              {
                label: 'Guests Footfall',
                data: [42, 65, 38, 28, 74, 88, 52],
                backgroundColor: ctx => {
                  const val = ctx.parsed.y;
                  return val >= 70 ? '#C08A55' : 'rgba(111, 78, 55, 0.4)';
                },
                borderRadius: 4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false } },
              y: { beginAtZero: true }
            }
          }
        });
      }
    },

    exportSalesCSV: function () {
      let csv = 'Order ID,Customer Name,Date,Type,Table,Total Amount,Payment Mode,Status\n';
      state.orders.forEach(o => {
        csv += `"${o.id}","${o.customerName}","${o.date}","${o.type}","${o.tableName || ''}",${o.total},"${o.paymentMethod}","${o.status}"\n`;
      });
      this.downloadBlob(csv, 'brewora_sales_report.csv', 'text/csv');
      this.showToast('Downloaded sales analytics report', 'info');
    },

    // ==========================================
    // 12. SETTINGS MANAGEMENT
    // ==========================================
    loadSettingsForm: function () {
      const s = state.settings;
      const setVal = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined) el.value = v; };

      setVal('settingCafeName', s.cafeName);
      setVal('settingTagline', s.tagline);
      setVal('settingContactPhone', s.contactPhone);
      setVal('settingContactEmail', s.contactEmail);
      setVal('settingAddress', s.address);
      setVal('settingGstin', s.gstin);
      setVal('settingFssai', s.fssai);
      setVal('settingCurrencySymbol', s.currency);
      setVal('settingTaxRate', s.taxRate);
      setVal('settingServiceCharge', s.serviceCharge);
      setVal('settingReceiptFooter', s.receiptFooter);

      const chkAuto = document.getElementById('settingAutoPrintReceipt');
      if (chkAuto) chkAuto.checked = Boolean(s.autoPrintReceipt);

      const chkSound = document.getElementById('settingPlaySound');
      if (chkSound) chkSound.checked = Boolean(s.playSound);

      // Admin Profile
      if (s.admin) {
        setVal('settingUserName', s.admin.name);
        setVal('settingUserRole', s.admin.role);
        setVal('settingUserAvatarUrl', s.admin.avatar);

        const img = document.getElementById('settingProfilePreviewImg');
        if (img) img.src = s.admin.avatar;
        const nameH = document.getElementById('settingProfileNameHeading');
        if (nameH) nameH.textContent = s.admin.name;
        const roleH = document.getElementById('settingProfileRoleHeading');
        if (roleH) roleH.textContent = s.admin.role;
      }
    },

    saveAllSettings: function () {
      const s = state.settings;
      s.cafeName = document.getElementById('settingCafeName')?.value || s.cafeName;
      s.tagline = document.getElementById('settingTagline')?.value || s.tagline;
      s.contactPhone = document.getElementById('settingContactPhone')?.value || s.contactPhone;
      s.contactEmail = document.getElementById('settingContactEmail')?.value || s.contactEmail;
      s.address = document.getElementById('settingAddress')?.value || s.address;
      s.gstin = document.getElementById('settingGstin')?.value || s.gstin;
      s.fssai = document.getElementById('settingFssai')?.value || s.fssai;
      s.currency = document.getElementById('settingCurrencySymbol')?.value || s.currency;
      s.taxRate = parseFloat(document.getElementById('settingTaxRate')?.value || 5);
      s.serviceCharge = parseFloat(document.getElementById('settingServiceCharge')?.value || 0);
      s.receiptFooter = document.getElementById('settingReceiptFooter')?.value || s.receiptFooter;

      const chkAuto = document.getElementById('settingAutoPrintReceipt');
      if (chkAuto) s.autoPrintReceipt = chkAuto.checked;

      const chkSound = document.getElementById('settingPlaySound');
      if (chkSound) s.playSound = chkSound.checked;

      // Admin
      const adminName = document.getElementById('settingUserName')?.value || 'Aria Sen';
      const adminRole = document.getElementById('settingUserRole')?.value || 'Head Barista & Admin';
      const adminAvatar = document.getElementById('settingUserAvatarUrl')?.value || s.admin.avatar;

      s.admin = { name: adminName, role: adminRole, avatar: adminAvatar };

      // Apply across DOM
      const topAdminName = document.getElementById('topAdminName');
      if (topAdminName) topAdminName.textContent = adminName;
      const heroUserName = document.getElementById('heroUserName');
      if (heroUserName) heroUserName.textContent = adminName.split(' ')[0];
      const sidebarUserName = document.getElementById('sidebarUserName');
      if (sidebarUserName) sidebarUserName.textContent = adminName;
      const sidebarUserRole = document.getElementById('sidebarUserRole');
      if (sidebarUserRole) sidebarUserRole.textContent = adminRole;
      const sidebarUserAvatar = document.getElementById('sidebarUserAvatar');
      if (sidebarUserAvatar) sidebarUserAvatar.src = adminAvatar;

      saveState();
      this.showToast('All cafe settings saved successfully!', 'success');
      this.renderDashboard();
    },

    setTheme: function (themeKey) {
      document.body.className = `theme-${themeKey}`;
      state.settings.theme = themeKey;
      saveState();

      const cards = document.querySelectorAll('.theme-choice-card');
      cards.forEach(c => {
        if (c.dataset.themeChoice === themeKey) c.classList.add('active');
        else c.classList.remove('active');
      });

      this.showToast(`Switched theme to ${themeKey.toUpperCase()}`, 'info');
    },

    resetDemoData: function () {
      this.confirmAction('Reset all data to default demo state? Custom edits will be restored.', () => {
        localStorage.removeItem(STORAGE_KEY);
        initStateWithDefaults();
        Brewora.showToast('All data has been reset to defaults', 'success');
        location.reload();
      });
    },

    // --- Helpers ---
    downloadBlob: function (content, filename, contentType) {
      const blob = new Blob([content], { type: contentType });
      const url = URL.createObjectURL(blob);
      const pom = document.createElement('a');
      pom.href = url;
      pom.setAttribute('download', filename);
      pom.click();
      URL.revokeObjectURL(url);
    }
  };

  // Expose Brewora globally for inline HTML events
  window.Brewora = Brewora;

  // ==========================================
  // 13. DOM INITIALIZATION & EVENT LISTENERS
  // ==========================================
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Load state
    loadState();

    // 2. Apply theme
    if (state.settings && state.settings.theme) {
      document.body.className = `theme-${state.settings.theme}`;
    }

    // 3. Start Live Clock
    Brewora.startLiveClock();

    // 4. Initial Navigation check from hash
    const initialHash = window.location.hash.replace('#', '') || 'dashboard';
    Brewora.navigateTo(initialHash);

    // 5. Sidebar Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.dataset.page;
        Brewora.navigateTo(page);
      });
    });

    // 6. Mobile Sidebar toggles
    const mobileToggleBtn = document.getElementById('mobileToggleBtn');
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener('click', () => Brewora.toggleMobileSidebar());
    }
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', () => Brewora.closeMobileSidebar());
    }
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', () => Brewora.closeMobileSidebar());
    }

    // 7. Sidebar & Top Nav Quick New Order buttons
    const sidebarNewOrderBtn = document.getElementById('sidebarNewOrderBtn');
    if (sidebarNewOrderBtn) {
      sidebarNewOrderBtn.addEventListener('click', () => Brewora.openNewOrderModal());
    }
    const topNavNewOrderBtn = document.getElementById('topNavNewOrderBtn');
    if (topNavNewOrderBtn) {
      topNavNewOrderBtn.addEventListener('click', () => Brewora.openNewOrderModal());
    }

    // 8. Notifications Bell dropdown
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationsPanel = document.getElementById('notificationsPanel');
    if (notificationBtn && notificationsPanel) {
      notificationBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        notificationsPanel.classList.toggle('show');
      });

      document.addEventListener('click', function (e) {
        if (!notificationsPanel.contains(e.target) && e.target !== notificationBtn) {
          notificationsPanel.classList.remove('show');
        }
      });
    }

    // Render Notifications
    function renderNotifs() {
      const list = document.getElementById('notificationsList');
      const badge = document.getElementById('notificationBadge');
      const unreadText = document.getElementById('notificationsUnreadText');

      if (!list) return;

      const unreadCount = state.notifications.filter(n => n.unread).length;
      if (badge) badge.textContent = unreadCount;
      if (unreadText) unreadText.textContent = `${unreadCount} unread alerts`;

      list.innerHTML = state.notifications.map(n => `
        <li class="notification-item ${n.unread ? 'unread' : ''}">
          <div class="notif-icon ${n.type}">
            <i class="fa-solid ${n.type === 'warn' ? 'fa-triangle-exclamation' : (n.type === 'success' ? 'fa-circle-check' : 'fa-bell')}"></i>
          </div>
          <div class="notif-text">
            <strong>${n.title}</strong>
            <div>${n.text}</div>
            <span class="notif-time">${n.time}</span>
          </div>
        </li>
      `).join('');
    }
    renderNotifs();

    const markAllReadBtn = document.getElementById('markAllNotificationsRead');
    if (markAllReadBtn) {
      markAllReadBtn.addEventListener('click', () => {
        state.notifications.forEach(n => n.unread = false);
        saveState();
        renderNotifs();
        Brewora.showToast('All notifications marked as read', 'info');
      });
    }

    // 9. Global Search (Ctrl + K / Cmd + K)
    const globalSearchInput = document.getElementById('globalSearchInput');
    const searchQuickResults = document.getElementById('searchQuickResults');

    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (globalSearchInput) {
          globalSearchInput.focus();
          globalSearchInput.select();
        }
      }
    });

    if (globalSearchInput && searchQuickResults) {
      globalSearchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        if (query.length < 2) {
          searchQuickResults.classList.remove('show');
          return;
        }

        const matchMenu = state.menu.filter(i => i.name.toLowerCase().includes(query)).slice(0, 3);
        const matchOrders = state.orders.filter(o => o.id.toLowerCase().includes(query) || o.customerName.toLowerCase().includes(query)).slice(0, 3);
        const matchCust = state.customers.filter(c => c.name.toLowerCase().includes(query) || c.phone.includes(query)).slice(0, 3);

        let html = '';
        if (matchMenu.length > 0) {
          html += `<div class="search-result-group-title">Menu Items</div>`;
          matchMenu.forEach(i => {
            html += `
              <div class="search-result-item" onclick="Brewora.navigateTo('menu'); Brewora.openEditMenuItemModal('${i.id}')">
                <div class="search-res-icon"><i class="fa-solid fa-mug-hot"></i></div>
                <div>
                  <div class="search-res-title">${i.name}</div>
                  <div class="search-res-sub">Menu • ${i.category} • ₹${i.price}</div>
                </div>
              </div>
            `;
          });
        }

        if (matchOrders.length > 0) {
          html += `<div class="search-result-group-title">Orders</div>`;
          matchOrders.forEach(o => {
            html += `
              <div class="search-result-item" onclick="Brewora.navigateTo('orders'); Brewora.viewOrderDetails('${o.id}')">
                <div class="search-res-icon"><i class="fa-solid fa-receipt"></i></div>
                <div>
                  <div class="search-res-title">${o.id} – ${o.customerName}</div>
                  <div class="search-res-sub">${o.tableName || o.type} • ₹${o.total} • ${o.status}</div>
                </div>
              </div>
            `;
          });
        }

        if (matchCust.length > 0) {
          html += `<div class="search-result-group-title">Customers</div>`;
          matchCust.forEach(c => {
            html += `
              <div class="search-result-item" onclick="Brewora.navigateTo('customers'); Brewora.viewCustomerProfile('${c.id}')">
                <div class="search-res-icon"><i class="fa-solid fa-user"></i></div>
                <div>
                  <div class="search-res-title">${c.name}</div>
                  <div class="search-res-sub">${c.phone} • ${c.tier}</div>
                </div>
              </div>
            `;
          });
        }

        if (html === '') {
          html = `<div class="p-3 text-center text-muted">No matches found for "${query}"</div>`;
        }

        searchQuickResults.innerHTML = html;
        searchQuickResults.classList.add('show');
      });

      document.addEventListener('click', function (e) {
        if (!globalSearchInput.contains(e.target) && !searchQuickResults.contains(e.target)) {
          searchQuickResults.classList.remove('show');
        }
      });
    }

    // 10. Menu Category Pills
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        menuCategoryFilter = this.dataset.category;
        Brewora.renderMenu();
      });
    });

    // Menu search & filters
    const menuSearchInput = document.getElementById('menuSearchInput');
    if (menuSearchInput) {
      menuSearchInput.addEventListener('input', function () {
        menuSearchQuery = this.value;
        Brewora.renderMenu();
      });
    }
    const menuDietaryFilter = document.getElementById('menuDietaryFilter');
    if (menuDietaryFilter) {
      menuDietaryFilter.addEventListener('change', function () {
        menuDietFilter = this.value;
        Brewora.renderMenu();
      });
    }
    const menuAvailabilityFilter = document.getElementById('menuAvailabilityFilter');
    if (menuAvailabilityFilter) {
      menuAvailabilityFilter.addEventListener('change', function () {
        menuAvailFilter = this.value;
        Brewora.renderMenu();
      });
    }

    // Menu View Switchers (Grid vs List)
    const menuGridViewBtn = document.getElementById('menuGridViewBtn');
    const menuListViewBtn = document.getElementById('menuListViewBtn');
    const menuItemsGrid = document.getElementById('menuItemsGrid');

    if (menuGridViewBtn && menuListViewBtn && menuItemsGrid) {
      menuGridViewBtn.addEventListener('click', function () {
        menuGridViewBtn.classList.add('active');
        menuListViewBtn.classList.remove('active');
        menuItemsGrid.classList.remove('list-view');
      });

      menuListViewBtn.addEventListener('click', function () {
        menuListViewBtn.classList.add('active');
        menuGridViewBtn.classList.remove('active');
        menuItemsGrid.classList.add('list-view');
      });
    }

    // Dashboard Sales Chart Metric Toggle
    document.querySelectorAll('#salesChartToggle .toggle-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#salesChartToggle .toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        Brewora.initWeeklySalesChart(this.dataset.chartMetric);
      });
    });

    // 11. Order Status Counters & Filters
    document.querySelectorAll('.status-counter-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.status-counter-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        orderStatusFilter = this.dataset.orderStatus;
        Brewora.renderOrders();
      });
    });

    const orderSearchInput = document.getElementById('orderSearchInput');
    if (orderSearchInput) {
      orderSearchInput.addEventListener('input', function () {
        orderSearchQuery = this.value;
        Brewora.renderOrders();
      });
    }
    const orderTypeFilterSelect = document.getElementById('orderTypeFilter');
    if (orderTypeFilterSelect) {
      orderTypeFilterSelect.addEventListener('change', function () {
        orderTypeFilter = this.value;
        Brewora.renderOrders();
      });
    }
    const orderPaymentFilterSelect = document.getElementById('orderPaymentFilter');
    if (orderPaymentFilterSelect) {
      orderPaymentFilterSelect.addEventListener('change', function () {
        orderPaymentFilter = this.value;
        Brewora.renderOrders();
      });
    }
    const orderSortFilterSelect = document.getElementById('orderSortFilter');
    if (orderSortFilterSelect) {
      orderSortFilterSelect.addEventListener('change', function () {
        orderSortFilter = this.value;
        Brewora.renderOrders();
      });
    }

    // 12. Table Zones & Status Filters
    document.querySelectorAll('.zone-tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.zone-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        tableZoneFilter = this.dataset.zone;
        Brewora.renderTables();
      });
    });
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', function () {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        tableStatusFilter = this.dataset.tableStatus;
        Brewora.renderTables();
      });
    });

    // 13. Inventory filters
    const inventorySearchInput = document.getElementById('inventorySearchInput');
    if (inventorySearchInput) {
      inventorySearchInput.addEventListener('input', () => Brewora.renderInventory());
    }
    const inventoryCategoryFilter = document.getElementById('inventoryCategoryFilter');
    if (inventoryCategoryFilter) {
      inventoryCategoryFilter.addEventListener('change', () => Brewora.renderInventory());
    }
    const inventoryStatusFilter = document.getElementById('inventoryStatusFilter');
    if (inventoryStatusFilter) {
      inventoryStatusFilter.addEventListener('change', () => Brewora.renderInventory());
    }

    // 14. Customer filters
    const customerSearchInput = document.getElementById('customerSearchInput');
    if (customerSearchInput) {
      customerSearchInput.addEventListener('input', () => Brewora.renderCustomers());
    }
    const customerTierFilter = document.getElementById('customerTierFilter');
    if (customerTierFilter) {
      customerTierFilter.addEventListener('change', () => Brewora.renderCustomers());
    }

    // 15. Reports Timeframe buttons
    document.querySelectorAll('#reportsTimeframeToggle .toggle-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#reportsTimeframeToggle .toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        Brewora.renderReports(this.dataset.timeframe);
      });
    });

    // 16. Settings Tabs & Theme choices
    document.querySelectorAll('.settings-tab').forEach(tab => {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const tabKey = this.dataset.settingsTab;
        document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
        const targetPanel = document.getElementById(`settings-panel-${tabKey}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    document.querySelectorAll('.theme-choice-card').forEach(card => {
      card.addEventListener('click', function () {
        Brewora.setTheme(this.dataset.themeChoice);
      });
    });

    // 17. Payment radio button selectors in POS cart
    document.querySelectorAll('.payment-opt').forEach(opt => {
      opt.addEventListener('click', function () {
        document.querySelectorAll('.payment-opt').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        const radio = this.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    // 18. Logout trigger
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        Brewora.confirmAction('Do you wish to lock the register and sign off the shift?', () => {
          Brewora.showToast('Register locked. Have a great evening!', 'info');
        });
      });
    }

    // Image URL Previewer in Add Menu Modal
    const menuInputImage = document.getElementById('menuInputImage');
    if (menuInputImage) {
      menuInputImage.addEventListener('input', function () {
        const preview = document.getElementById('menuImagePreview');
        if (preview && this.value.trim()) {
          preview.src = this.value.trim();
        }
      });
    }
  });

})();
