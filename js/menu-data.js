/* Menu data. Edit items and prices here; the page builds the menu from this file.
   Transcribed from the shop's 2023 printed menu. Prices are placeholders until
   the owner confirms the current menu.

   Item fields:
     num     menu number, as printed
     name    dish name
     desc    optional description
     price   a single price, e.g. "7.60"
     prices  several prices, one per label in the category's `sizes`
             (or the item's own `sizes`), e.g. ["6.10", "7.70"]
     veg     suitable for vegetarians (green on the printed menu)
     hot     spicy (red on the printed menu)
     nuts    contains nuts */
window.MENU = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { num: 1, name: "Oriental Mixed Hors d'Oeuvres", desc: "Per head. Sesame prawn toast, spare ribs, chicken on skewers with spicy peanut sauce, crispy seaweed and mini spring roll, with a pot of sweet chilli dip", price: "7.40", nuts: true },
      { num: 2, name: "Crispy Aromatic Duck", desc: "Succulent marinated duck, full of flavour and spices. Served with pancakes, spring onions, cucumber and special hoi sin sauce", sizes: ["Quarter", "Half"], prices: ["11.80", "22.00"] },
      { num: 4, name: "Chicken on Skewers (4)", desc: "Marinated chicken, deep fried, with Chalfont Oriental's own spicy peanut sauce", price: "7.10", nuts: true },
      { num: 5, name: "Barbecued Spare Ribs", sizes: ["Half", "Full"], prices: ["5.90", "7.60"] },
      { num: 6, name: "King Do Spare Ribs", desc: "Pork ribs in a spicy, fruity sauce", price: "7.60" },
      { num: 7, name: "Salt & Chilli Ribs", desc: "Stir fried with a touch of fresh chilli, salt and garlic", price: "7.60" },
      { num: 8, name: "Spare Ribs in Chalfont Oriental's Special Sauce", desc: "Pork ribs in a sweet, spicy garlic sauce", price: "7.60" },
      { num: 9, name: "Honey Barbecued Ribs", desc: "In a honey syrup sauce, with a lemon wedge", price: "7.60" },
      { num: 10, name: "Sweet & Sour Spare Ribs", price: "7.60" },
      { num: 11, name: "King Prawns in Salt & Chilli", desc: "Stir fried with a touch of fresh chilli, salt and garlic", price: "8.50" },
      { num: 12, name: "Squid with Salt & Chilli", price: "8.30" },
      { num: 13, name: "Chicken with Salt & Chilli", price: "7.10" },
      { num: 14, name: "Crispy Seaweed", price: "5.40" },
      { num: 15, name: "Crispy Spring Rolls (2)", desc: "With shredded roast pork and beansprouts", price: "5.00" },
      { num: 16, name: "Vegetarian Mini Rolls (8)", price: "5.00", veg: true },
      { num: 17, name: "Sesame Prawn Toast", desc: "Marinated minced prawns on toast, topped with sesame seeds", price: "6.10" },
      { num: 18, name: "King Prawns in Breadcrumbs", desc: "In golden breadcrumbs, with a lemon wedge", price: "8.50" },
      { num: 19, name: "Thai Crispy Chicken Rolls", desc: "With a pot of sweet chilli dip", price: "6.50" },
      { num: 20, name: "Crispy Chicken Wings", desc: "With a touch of fresh chilli, salt and garlic", price: "7.20" }
    ]
  },
  {
    id: "soup",
    title: "Soup",
    items: [
      { num: 21, name: "Hot & Sour Soup", price: "4.70" },
      { num: 22, name: "Won Ton Soup", desc: "Minced pork and prawn dumplings in a clear soup", price: "4.70" },
      { num: 23, name: "Sweetcorn & Crabmeat Soup", price: "4.70" },
      { num: 24, name: "Sweetcorn & Chicken Soup", price: "4.30" },
      { num: 25, name: "Sweetcorn & Mushroom Soup", price: "4.30", veg: true },
      { num: 26, name: "Chicken & Noodle Soup", price: "4.30" },
      { num: 27, name: "Vegetarian Hot & Sour Soup", price: "4.30", veg: true }
    ]
  },
  {
    id: "set-dinners",
    title: "Special Set Dinners",
    items: [
      { name: "Set Dinner A", desc: "Barbecued spare ribs, sweet & sour chicken Hong Kong style, beef with peppers and black bean sauce, chicken with mushrooms, egg fried rice", sizes: ["For two", "For three", "For four"], prices: ["29.90", "44.50", "58.00"] },
      { name: "Set Dinner B", desc: "Oriental mixed hors d'oeuvres, crispy aromatic duck with pancakes, prawns with peppers and black bean sauce, crispy shredded beef, chicken in chilli Szechuan style, egg fried rice", sizes: ["For two", "For three", "For four"], prices: ["44.50", "66.00", "88.00"], nuts: true },
      { name: "Set Dinner C", desc: "For one person. Sweet & sour chicken balls, chicken chop suey, egg fried rice", price: "12.30" }
    ]
  },
  {
    id: "sweet-sour",
    title: "Sweet & Sour",
    items: [
      { num: 79, name: "Sweet & Sour King Prawn Balls (8)", desc: "In crispy batter, with a pot of our special sweet & sour sauce", price: "8.50" },
      { num: 80, name: "Sweet & Sour King Prawns Hong Kong Style", desc: "In light batter with pineapple, peppers and onions in sweet & sour sauce", price: "8.50" },
      { num: 81, name: "Sweet & Sour Chicken Balls", desc: "In crispy batter, with a pot of our special sweet & sour sauce", price: "7.60" },
      { num: 82, name: "Sweet & Sour Chicken Hong Kong Style", desc: "In light batter with pineapple, peppers and onions in sweet & sour sauce", price: "7.60" },
      { num: 83, name: "Sweet & Sour Pork Balls", desc: "In crispy batter, with a pot of our special sauce", price: "7.60" },
      { num: 85, name: "Sweet & Sour Mixed Vegetables", price: "6.30", veg: true },
      { num: 86, name: "Sweet & Sour Tofu", price: "6.70", veg: true }
    ]
  },
  {
    id: "chicken",
    title: "Chicken",
    items: [
      { num: 108, name: "Chicken with Mushrooms", price: "7.60" },
      { num: 109, name: "Chicken with Mixed Vegetables", price: "7.60" },
      { num: 110, name: "Chicken with Pineapple", price: "7.60" },
      { num: 111, name: "Chicken with Bamboo Shoots & Water Chestnuts", price: "7.60" },
      { num: 112, name: "Chicken with Cashew Nuts", price: "7.70", nuts: true },
      { num: 113, name: "Chicken with Cashew Nuts & Yellow Bean Sauce", price: "7.70", nuts: true },
      { num: 114, name: "Chicken with Chilli Szechuan Style", price: "7.60", hot: true },
      { num: 115, name: "Lemon Chicken", desc: "With a pot of lemon sauce", price: "7.60" },
      { num: 116, name: "Kung Po Chicken", desc: "Sweet and spicy, with a touch of fresh red chilli", price: "7.60", hot: true },
      { num: 117, name: "Chicken with Peppers & Black Bean Sauce", price: "7.50" },
      { num: 118, name: "Chicken in Satay Sauce", price: "7.50", nuts: true },
      { num: 119, name: "Chicken in Chalfont Oriental Special Sauce", desc: "In a sweet, spicy garlic sauce", price: "7.50" },
      { num: 120, name: "Chicken in Oyster Sauce", price: "7.50" },
      { num: 121, name: "Chicken with Ginger & Spring Onions", price: "7.50" },
      { num: 122, name: "Roast Chicken Cantonese Style", desc: "On a bed of steamed beansprouts with BBQ sauce", price: "7.50" },
      { num: 123, name: "Crispy Shredded Chicken", price: "7.50" },
      { num: 124, name: "Chicken with Breadcrumbs", desc: "In golden breadcrumbs, with a wedge of lemon", price: "7.50" }
    ]
  },
  {
    id: "duck",
    title: "Duck",
    items: [
      { num: 125, name: "Roast Duck Cantonese Style", desc: "Traditional roast duck on a bed of steamed beansprouts with BBQ sauce", price: "8.50" },
      { num: 126, name: "Roast Duck with Pineapple", price: "8.50" },
      { num: 127, name: "Roast Duck with Cashew Nuts & Yellow Bean Sauce", price: "8.50", nuts: true },
      { num: 128, name: "Roast Duck in Plum Sauce", price: "8.50" },
      { num: 129, name: "Rainbow Duck", desc: "Shredded roast duck with mixed vegetables", price: "8.50" },
      { num: 130, name: "Roast Duck with Peppers & Black Bean Sauce", price: "8.50" }
    ]
  },
  {
    id: "beef",
    title: "Beef",
    items: [
      { num: 131, name: "Beef with Mushrooms", price: "7.90" },
      { num: 132, name: "Beef with Mixed Vegetables", price: "7.90" },
      { num: 133, name: "Beef with Bamboo Shoots & Water Chestnuts", price: "7.90" },
      { num: 134, name: "Beef with Cashew Nuts", price: "7.90", nuts: true },
      { num: 135, name: "Beef with Cashew Nuts & Yellow Bean Sauce", price: "7.90", nuts: true },
      { num: 136, name: "Beef Cantonese Style", desc: "In a spicy, fruity sauce with peppers and onions", price: "7.90" },
      { num: 138, name: "Beef with Peppers & Black Bean Sauce", price: "7.90" },
      { num: 139, name: "Beef with Ginger & Spring Onions", price: "7.90" },
      { num: 140, name: "Beef with Oyster Sauce", price: "7.90" },
      { num: 141, name: "Crispy Shredded Beef", price: "7.90" },
      { num: 142, name: "Beef with Satay Sauce", price: "7.90", nuts: true },
      { num: 143, name: "Beef with Black Pepper Sauce", price: "7.90" },
      { num: 144, name: "Kung Po Beef", desc: "Sweet and spicy, with a touch of fresh red chilli", price: "7.90", hot: true },
      { num: 145, name: "Beef in Chilli Szechuan Style", desc: "Stir fried in Szechuan garlic bean paste sauce with fresh red chillies", price: "7.90", hot: true }
    ]
  },
  {
    id: "pork",
    title: "Roast Pork",
    items: [
      { num: 146, name: "Char Siu Roast Pork", desc: "Traditional BBQ pork on a bed of steamed beansprouts with BBQ sauce", price: "7.60" },
      { num: 147, name: "Double Cooked Pork Szechuan Style", desc: "Slices of roast pork cooked with fresh chilli in an aromatic, spicy hot bean paste", price: "7.60" },
      { num: 148, name: "Roast Pork with Peppers & Black Bean Sauce", price: "7.60" },
      { num: 149, name: "Roast Pork with Ginger & Spring Onions", price: "7.60" },
      { num: 150, name: "Kung Po Roast Pork", price: "7.60" },
      { num: 151, name: "Roast Pork with Mushrooms", price: "7.60" }
    ]
  },
  {
    id: "seafood",
    title: "Seafood",
    items: [
      { num: 92, name: "King Prawns with Mushrooms", price: "8.40" },
      { num: 93, name: "King Prawns with Mixed Vegetables", price: "8.40" },
      { num: 94, name: "King Prawns with Bamboo Shoots & Water Chestnuts", price: "8.40" },
      { num: 95, name: "King Prawns with Cashew Nuts", price: "8.40", nuts: true },
      { num: 96, name: "King Prawns with Garlic Sauce", price: "8.40" },
      { num: 97, name: "King Prawns in Chalfont Oriental Special Sauce", desc: "In a sweet, spicy garlic sauce", price: "8.40" },
      { num: 98, name: "King Prawns Szechuan Style", desc: "Stir fried in Szechuan garlic bean paste sauce with fresh red chillies", price: "8.40", hot: true },
      { num: 99, name: "Kung Po King Prawns", desc: "Sweet and spicy, with a touch of fresh red chillies", price: "8.40", hot: true },
      { num: 100, name: "King Prawns in Oyster Sauce", price: "8.40" },
      { num: 101, name: "King Prawns with Ginger & Spring Onions", price: "8.40" },
      { num: 102, name: "King Prawns with Peppers & Black Bean Sauce", price: "8.40" },
      { num: 103, name: "King Prawns with Cashew Nuts & Yellow Bean Sauce", price: "8.40", nuts: true },
      { num: 104, name: "King Prawns with Satay Sauce", price: "8.40", nuts: true },
      { num: 105, name: "King Prawns with Black Pepper Sauce", price: "8.40" },
      { num: 106, name: "Squid in Szechuan Style", price: "8.00", hot: true },
      { num: 107, name: "Squid with Peppers & Black Bean Sauce", price: "8.00" }
    ]
  },
  {
    id: "chop-suey",
    title: "Chop Suey",
    note: "A quick stir fry with beansprouts.",
    items: [
      { num: 28, name: "Special Chop Suey", desc: "With shredded roast pork, chicken and king prawns", price: "7.20" },
      { num: 29, name: "King Prawn Chop Suey", price: "8.40" },
      { num: 30, name: "Chicken Chop Suey", price: "7.50" },
      { num: 31, name: "Beef Chop Suey", price: "7.50" },
      { num: 32, name: "Shrimp Chop Suey", price: "7.50" },
      { num: 33, name: "Roast Pork Chop Suey", price: "7.50" },
      { num: 34, name: "Mushroom Chop Suey", price: "6.20", veg: true }
    ]
  },
  {
    id: "foo-young",
    title: "Foo Young",
    note: "Chinese egg omelette.",
    items: [
      { num: 87, name: "Special Foo Young", desc: "With shredded roast pork, chicken and prawns", price: "7.70" },
      { num: 88, name: "King Prawn Foo Young", price: "8.40" },
      { num: 89, name: "Chicken Foo Young", price: "7.50" },
      { num: 90, name: "Shredded Roast Pork Foo Young", price: "7.50" },
      { num: 91, name: "Mixed Vegetables Foo Young", price: "6.20", veg: true }
    ]
  },
  {
    id: "curry",
    title: "Curry",
    items: [
      { num: 70, name: "Special Curry", desc: "With roast pork, chicken and king prawns", price: "7.70" },
      { num: 71, name: "Shredded Roast Duck Curry", price: "8.40" },
      { num: 72, name: "King Prawn Curry", price: "8.40" },
      { num: 73, name: "Chicken Curry", price: "7.50" },
      { num: 74, name: "Beef Curry", price: "7.50" },
      { num: 75, name: "Roast Pork Curry", price: "7.50" },
      { num: 76, name: "Mixed Vegetables Curry", price: "6.10", veg: true },
      { num: 77, name: "Tofu Curry", price: "6.60", veg: true },
      { num: 78, name: "Mushroom Curry", price: "6.40", veg: true }
    ]
  },
  {
    id: "chow-mein",
    title: "Chow Mein",
    note: "Egg noodles with onions and beansprouts.",
    sizes: ["Small", "Large"],
    items: [
      { num: 51, name: "Special Chow Mein", desc: "Large only. With roast pork, chicken, shrimps and prawns", price: "7.70" },
      { num: 52, name: "Shredded Roast Duck Chow Mein", prices: ["7.70", "9.30"] },
      { num: 53, name: "King Prawn Chow Mein", prices: ["8.00", "9.60"] },
      { num: 54, name: "Chicken Chow Mein", prices: ["6.30", "7.90"] },
      { num: 55, name: "Beef Chow Mein", prices: ["6.30", "7.90"] },
      { num: 56, name: "Shredded Roast Pork Chow Mein", prices: ["6.30", "7.90"] },
      { num: 57, name: "Shrimp Chow Mein", prices: ["6.30", "7.90"] },
      { num: 58, name: "Plain Chow Mein", prices: ["5.50", "7.10"] },
      { num: 59, name: "Seafood Chow Mein", desc: "With shrimps, squid and king prawns", prices: ["8.20", "9.80"] },
      { num: 60, name: "Mixed Vegetables Chow Mein", prices: ["5.80", "7.40"], veg: true },
      { num: 61, name: "Mushroom Chow Mein", prices: ["5.80", "7.40"], veg: true },
      { num: 62, name: "Tofu Chow Mein", prices: ["6.10", "7.70"], veg: true }
    ]
  },
  {
    id: "vermicelli",
    title: "Vermicelli Rice Noodles",
    sizes: ["Small", "Large"],
    items: [
      { num: 63, name: "Shredded Roast Duck Vermicelli Rice Noodles", prices: ["7.80", "9.40"] },
      { num: 64, name: "King Prawns with Vermicelli Rice Noodles", prices: ["8.00", "9.60"] },
      { num: 65, name: "Chicken with Vermicelli Rice Noodles", prices: ["6.30", "7.90"] },
      { num: 66, name: "Beef with Vermicelli Rice Noodles", prices: ["6.50", "8.10"] },
      { num: 67, name: "Shredded Roast Pork with Vermicelli Rice Noodles", prices: ["6.50", "8.10"] },
      { num: 68, name: "Singapore Vermicelli Rice Noodles", desc: "With shredded roast pork, chicken, shrimps and fresh hot chillies", price: "7.80", hot: true },
      { num: 69, name: "Vegetarian Vermicelli Rice Noodles", price: "7.50", veg: true, hot: true }
    ]
  },
  {
    id: "rice",
    title: "Rice",
    sizes: ["Small", "Large"],
    items: [
      { num: 35, name: "Special Fried Rice", desc: "With shredded roast pork, chicken and shrimps", prices: ["6.10", "7.70"] },
      { num: 36, name: "Seafood Fried Rice", desc: "With shrimps, squid and king prawns", prices: ["8.10", "9.70"] },
      { num: 37, name: "King Prawn Fried Rice", prices: ["8.10", "9.70"] },
      { num: 38, name: "Chicken Fried Rice", prices: ["6.00", "7.60"] },
      { num: 39, name: "Shrimp Fried Rice", prices: ["6.00", "7.60"] },
      { num: 40, name: "Shredded Roast Pork Fried Rice", prices: ["6.00", "7.60"] },
      { num: 41, name: "Shredded Roast Duck Fried Rice", prices: ["7.90", "9.50"] },
      { num: 42, name: "Singapore Fried Rice", desc: "Spicy rice with shredded roast pork, chicken, shrimps and hot chillies", prices: ["6.40", "8.00"], hot: true },
      { num: 43, name: "Vegetarian Singapore Fried Rice", desc: "Spicy rice with mixed vegetables and hot chillies", prices: ["5.90", "7.50"], veg: true, hot: true },
      { num: 44, name: "House Rice (in Gravy)", desc: "Large only. Egg fried rice with roast pork, chicken and prawns in light soy sauce", price: "8.30" },
      { num: 45, name: "Egg Fried Rice", prices: ["4.90", "6.50"], veg: true },
      { num: 46, name: "Plain Boiled Rice", prices: ["4.20", "5.80"], veg: true },
      { num: 47, name: "Mixed Vegetables Fried Rice", prices: ["5.60", "7.20"], veg: true },
      { num: 48, name: "Pineapple Fried Rice with Cashew Nuts", prices: ["6.20", "7.80"], veg: true, nuts: true },
      { num: 49, name: "Mushroom Fried Rice", prices: ["5.60", "7.20"], veg: true },
      { num: 50, name: "Beef Fried Rice", prices: ["6.40", "8.00"] }
    ]
  },
  {
    id: "tofu-veg",
    title: "Tofu & Vegetables",
    note: "Everything in this section is suitable for vegetarians.",
    items: [
      { num: 152, name: "Tofu with Chilli Szechuan Style", price: "6.60", veg: true },
      { num: 153, name: "Tofu with Peppers & Black Bean Sauce", price: "6.60", veg: true },
      { num: 154, name: "Kung Po Tofu", price: "6.60", veg: true },
      { num: 155, name: "Tofu with Cashew Nuts", price: "6.70", veg: true, nuts: true },
      { num: 156, name: "Tofu with Mixed Vegetables", price: "6.60", veg: true },
      { num: 157, name: "Tofu with Cashew Nuts & Yellow Bean Sauce", price: "6.70", veg: true, nuts: true },
      { num: 158, name: "Tofu with Salt & Chilli", price: "6.60", veg: true },
      { num: 163, name: "Broccoli in Oyster Sauce", price: "5.80", veg: true },
      { num: 164, name: "Mixed Vegetables with Peppers & Black Bean Sauce", price: "5.80", veg: true },
      { num: 165, name: "Stir-Fried Mixed Vegetables", price: "5.80", veg: true },
      { num: 166, name: "Stir-Fried Bamboo Shoots & Water Chestnuts", price: "5.70", veg: true },
      { num: 167, name: "Stir-Fried Beansprouts", price: "5.70", veg: true },
      { num: 168, name: "Stir-Fried Mushrooms", price: "5.70", veg: true },
      { num: 169, name: "Mixed Vegetables in Chilli Szechuan Style", price: "5.80", veg: true },
      { num: 170, name: "Kung Po Mixed Vegetables", price: "5.80", veg: true },
      { num: 171, name: "Mixed Vegetables with Cashew Nuts & Yellow Bean Sauce", price: "5.90", veg: true, nuts: true }
    ]
  },
  {
    id: "extras",
    title: "Extras & Desserts",
    items: [
      { num: 172, name: "Prawn Crackers", price: "3.00" },
      { num: 174, name: "Chilli Oil", price: "2.00" },
      { num: 175, name: "Curry Sauce", price: "3.00" },
      { num: 176, name: "BBQ Sauce", price: "2.70" },
      { num: 177, name: "Sweet & Sour Sauce", price: "2.70" },
      { num: 178, name: "Hoi Sin Sauce", price: "3.00" },
      { num: 179, name: "Extra Pancakes", desc: "Six per pack, for crispy aromatic duck", price: "2.20" },
      { num: 180, name: "Chalfont Oriental's Spicy Peanut Sauce", price: "2.60", nuts: true },
      { num: 183, name: "Smoked Chicken", price: "7.60" },
      { num: 185, name: "Mongolian Spare Ribs (Large)", price: "7.60" },
      { num: 186, name: "Chips", price: "3.20" },
      { num: 187, name: "Salt & Pepper Chips", price: "5.00" },
      { num: 181, name: "Banana Fritters in Syrup", price: "4.50" },
      { num: 182, name: "Pineapple Fritters in Syrup", price: "4.50" }
    ]
  }
];
