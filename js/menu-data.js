/* Menu data. Edit items and prices here; the page builds the menu from this file.
   Items marked "listed" have prices taken from the shop's online listings (EatEasy,
   Tastyfind). Everything else is a placeholder until the owner confirms.
   Optional fields: desc, from: true ("from £…"), hot: true (shows a "Hot" tag). */
window.MENU = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Oriental Mixed Hors d'Oeuvres", desc: "Per person", price: "4.80" }, // listed
      { name: "Chicken on Skewers", desc: "With satay sauce", price: "5.00" }, // listed
      { name: "Salt & Chilli King Prawns", price: "6.20", hot: true }, // listed
      { name: "Crispy Lamb", desc: "With pancakes, cucumber, spring onion and hoi sin sauce", price: "7.80" }, // listed
      { name: "Spare Ribs", desc: "Barbecue, sweet & sour, or salt & chilli", price: "4.00", from: true }, // listed (sweet & sour)
      { name: "Sesame Prawn Toast", price: "4.20" },
      { name: "Vegetable Spring Rolls", desc: "Four pieces", price: "3.20" },
      { name: "Crispy Seaweed", price: "3.50" },
      { name: "Salt & Chilli Chicken Wings", price: "4.80", hot: true },
      { name: "Prawn Crackers", price: "2.00" }
    ]
  },
  {
    id: "duck",
    title: "Crispy Aromatic Duck",
    note: "Served with pancakes, cucumber, spring onion and hoi sin sauce.",
    items: [
      { name: "Quarter Duck", price: "8.50" }, // listed
      { name: "Half Duck", price: "16.00" } // listed
    ]
  },
  {
    id: "sweet-sour",
    title: "Sweet & Sour",
    items: [
      { name: "Sweet & Sour Chicken Balls", price: "4.80" }, // listed
      { name: "Hong Kong Style Sweet & Sour Chicken", desc: "With pineapple, peppers and onions", price: "5.00" }, // listed
      { name: "Sweet & Sour Pork Balls", price: "4.80" }, // listed
      { name: "Hong Kong Style Sweet & Sour Pork", desc: "With pineapple, peppers and onions", price: "5.00" }, // listed
      { name: "Sweet & Sour King Prawn Balls", price: "6.20" } // listed
    ]
  },
  {
    id: "chicken",
    title: "Chicken",
    items: [
      { name: "Chicken in Black Bean Sauce", price: "5.20" },
      { name: "Chicken in Curry Sauce", price: "5.00" },
      { name: "Chicken with Cashew Nuts", price: "5.40" },
      { name: "Kung Po Chicken", price: "5.40", hot: true },
      { name: "Lemon Chicken", price: "5.20" },
      { name: "Chicken in Satay Sauce", price: "5.20" },
      { name: "Salt & Chilli Chicken", price: "5.40", hot: true }
    ]
  },
  {
    id: "beef-pork",
    title: "Beef & Pork",
    items: [
      { name: "Beef in Black Bean Sauce", price: "5.40" },
      { name: "Beef with Green Peppers", price: "5.40" },
      { name: "Crispy Shredded Chilli Beef", price: "5.80", hot: true },
      { name: "Beef in Oyster Sauce", price: "5.40" },
      { name: "Char Siu (Roast Pork) with Mixed Vegetables", price: "5.20" },
      { name: "Salt & Chilli Pork", price: "5.40", hot: true }
    ]
  },
  {
    id: "seafood",
    title: "King Prawns",
    items: [
      { name: "King Prawns in Black Bean Sauce", price: "6.40" },
      { name: "King Prawns with Cashew Nuts", price: "6.60" },
      { name: "Szechuan King Prawns", price: "6.40", hot: true },
      { name: "King Prawns with Mixed Vegetables", price: "6.20" }
    ]
  },
  {
    id: "chow-mein",
    title: "Chow Mein & Noodles",
    note: "Soft noodles stir-fried with bean sprouts and onions.",
    items: [
      { name: "Special Chow Mein", desc: "Chicken, roast pork and prawns", price: "5.80" },
      { name: "Chicken Chow Mein", price: "5.20" },
      { name: "Beef Chow Mein", price: "5.40" },
      { name: "King Prawn Chow Mein", price: "6.20" },
      { name: "Singapore Noodles", desc: "Rice vermicelli with curry spices", price: "5.80", hot: true },
      { name: "Vegetable Chow Mein", price: "4.50" },
      { name: "Plain Chow Mein", price: "3.50" }
    ]
  },
  {
    id: "rice",
    title: "Rice",
    items: [
      { name: "Special Fried Rice", desc: "Chicken, roast pork and prawns", price: "5.80" },
      { name: "Chicken Fried Rice", price: "5.20" },
      { name: "King Prawn Fried Rice", price: "6.20" },
      { name: "Egg Fried Rice", price: "2.80" },
      { name: "Boiled Rice", price: "2.50" },
      { name: "Mushroom Fried Rice", price: "3.20" }
    ]
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      { name: "Mixed Vegetables in Black Bean Sauce", price: "4.50" },
      { name: "Bean Curd with Mixed Vegetables", price: "4.60" },
      { name: "Sweet & Sour Mixed Vegetables", price: "4.50" },
      { name: "Stir-Fried Bean Sprouts", price: "3.50" }
    ]
  },
  {
    id: "english",
    title: "English Dishes & Sides",
    items: [
      { name: "Chicken & Chips", price: "5.20" },
      { name: "Chips", price: "2.20" },
      { name: "Curry Sauce", price: "2.00" },
      { name: "Sweet & Sour Sauce", price: "2.00" },
      { name: "Black Bean Sauce", price: "2.00" }
    ]
  }
];
