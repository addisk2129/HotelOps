// Using cabin names and guest emails as references
export const bookings = [
  {
    startDate: "2026-03-15",
    endDate: "2026-03-20",
    numNights: 5,
    numGuests: 2,
    cabinId: "Ocean View Suite",  // Referencing cabin name
    guestId: "john.smith@email.com",  // Referencing guest email
    hasBreakfast: true,
    extrasPrice: 150,  // 5 nights * 2 guests * $15
    totalPrice: 1850,  // (350 * 5) + 150
    status: "checked-out",
    observations: "Loved the ocean view! Requested late checkout but not possible.",
    isPaid: true
  },
  {
    startDate: "2026-03-18",
    endDate: "2026-03-22",
    numNights: 4,
    numGuests: 4,
    cabinId: "Family Deluxe Villa",
    guestId: "emma.wilson@email.com",
    hasBreakfast: true,
    extrasPrice: 240,  // 4 nights * 4 guests * $15
    totalPrice: 2440,  // (550 * 4) + 240
    status: "checked-in",
    observations: "Kids are excited! Requested extra towels and baby cot.",
    isPaid: true
  },
  {
    startDate: "2026-03-25",
    endDate: "2026-03-28",
    numNights: 3,
    numGuests: 2,
    cabinId: "Mountain Retreat Cabin",
    guestId: "marco.rossi@email.com",
    hasBreakfast: false,
    extrasPrice: 0,
    totalPrice: 660,  // 220 * 3
    status: "unconfirmed",
    observations: "Celebrating anniversary. Hoping for mountain view.",
    isPaid: false
  },
  {
    startDate: "2026-03-22",
    endDate: "2026-03-27",
    numNights: 5,
    numGuests: 2,
    cabinId: "Romantic Getaway",
    guestId: "sophie.dubois@email.com",
    hasBreakfast: true,
    extrasPrice: 150,  // 5 nights * 2 guests * $15
    totalPrice: 1550,  // (280 * 5) + 150
    status: "checked-in",
    observations: "Honeymoon trip! Would love champagne upon arrival.",
    isPaid: true
  },
  {
    startDate: "2026-04-01",
    endDate: "2026-04-05",
    numNights: 4,
    numGuests: 4,
    cabinId: "Lakefront Paradise",
    guestId: "hans.mueller@email.com",
    hasBreakfast: true,
    extrasPrice: 240,  // 4 nights * 4 guests * $15
    totalPrice: 1520,  // (320 * 4) + 240
    status: "unconfirmed",
    observations: "Planning to fish. Is fishing equipment available?",
    isPaid: false
  },
  {
    startDate: "2026-03-28",
    endDate: "2026-03-31",
    numNights: 3,
    numGuests: 1,
    cabinId: "Forest Hideaway",
    guestId: "maria.garcia@email.com",
    hasBreakfast: false,
    extrasPrice: 0,
    totalPrice: 570,  // 190 * 3
    status: "unconfirmed",
    observations: "Digital detox - need peace and quiet. No phone signal is perfect!",
    isPaid: false
  },
  {
    startDate: "2026-03-20",
    endDate: "2026-03-24",
    numNights: 4,
    numGuests: 4,
    cabinId: "Luxury Penthouse",
    guestId: "yuki.tanaka@email.com",
    hasBreakfast: true,
    extrasPrice: 240,  // 4 nights * 4 guests * $15
    totalPrice: 2840,  // (650 * 4) + 240
    status: "checked-in",
    observations: "Business meeting in area. Need high-speed internet confirmed.",
    isPaid: true
  },
  {
    startDate: "2026-04-10",
    endDate: "2026-04-15",
    numNights: 5,
    numGuests: 3,
    cabinId: "Riverside Cottage",
    guestId: "david.chen@email.com",
    hasBreakfast: true,
    extrasPrice: 225,  // 5 nights * 3 guests * $15
    totalPrice: 1425,  // (240 * 5) + 225
    status: "unconfirmed",
    observations: "Family reunion. Need recommendations for local hiking trails.",
    isPaid: false
  },
  {
    startDate: "2026-03-19",
    endDate: "2026-03-23",
    numNights: 4,
    numGuests: 4,
    cabinId: "Eco-Friendly Dome",
    guestId: "anna.kowalski@email.com",
    hasBreakfast: false,
    extrasPrice: 0,
    totalPrice: 1160,  // 290 * 4
    status: "checked-out",
    observations: "Amazing stargazing! Would definitely return.",
    isPaid: true
  },
  {
    startDate: "2026-04-05",
    endDate: "2026-04-12",
    numNights: 7,
    numGuests: 6,
    cabinId: "Vineyard View Villa",
    guestId: "carlos.mendoza@email.com",
    hasBreakfast: true,
    extrasPrice: 630,  // 7 nights * 6 guests * $15
    totalPrice: 5880,  // (750 * 7) + 630
    status: "unconfirmed",
    observations: "Family gathering with 6 adults. Need wine tasting recommendations.",
    isPaid: true
  },
  {
    startDate: "2026-03-16",
    endDate: "2026-03-19",
    numNights: 3,
    numGuests: 2,
    cabinId: "Ocean View Suite",
    guestId: "sarah.j@email.com",
    hasBreakfast: true,
    extrasPrice: 90,  // 3 nights * 2 guests * $15
    totalPrice: 1140,  // (350 * 3) + 90
    status: "checked-out",
    observations: "Perfect weekend getaway. Will recommend to friends!",
    isPaid: true
  },
  {
    startDate: "2026-03-26",
    endDate: "2026-03-30",
    numNights: 4,
    numGuests: 2,
    cabinId: "Romantic Getaway",
    guestId: "lars.andersen@email.com",
    hasBreakfast: true,
    extrasPrice: 120,  // 4 nights * 2 guests * $15
    totalPrice: 1240,  // (280 * 4) + 120
    status: "unconfirmed",
    observations: "Surprise birthday for partner. Any special arrangements possible?",
    isPaid: false
  },
  {
    startDate: "2026-04-02",
    endDate: "2026-04-06",
    numNights: 4,
    numGuests: 2,
    cabinId: "Mountain Retreat Cabin",
    guestId: "fatima.alsayed@email.com",
    hasBreakfast: false,
    extrasPrice: 0,
    totalPrice: 880,  // 220 * 4
    status: "unconfirmed",
    observations: "First time in mountains. Need rental car recommendations.",
    isPaid: false
  },
  {
    startDate: "2026-03-21",
    endDate: "2026-03-25",
    numNights: 4,
    numGuests: 4,
    cabinId: "Family Deluxe Villa",
    guestId: "liam.obrien@email.com",
    hasBreakfast: true,
    extrasPrice: 240,  // 4 nights * 4 guests * $15
    totalPrice: 2440,  // (550 * 4) + 240
    status: "checked-in",
    observations: "Kids' spring break. Is the pool heated?",
    isPaid: true
  },
  {
    startDate: "2026-03-29",
    endDate: "2026-04-02",
    numNights: 4,
    numGuests: 2,
    cabinId: "Lakefront Paradise",
    guestId: "elena.popescu@email.com",
    hasBreakfast: true,
    extrasPrice: 120,  // 4 nights * 2 guests * $15
    totalPrice: 1400,  // (320 * 4) + 120
    status: "unconfirmed",
    observations: "Photography trip. Need best spots for sunrise photos.",
    isPaid: false
  }
];