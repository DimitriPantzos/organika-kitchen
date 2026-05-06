export type MenuItem = {
  name: string
  description: string
  price: number
  priceNote?: string
}

export type MenuCategory = {
  slug: string
  name: string
  tagline: string
  emoji: string
  items: MenuItem[]
  note?: string
}

export const MENU_CATEGORIES: MenuCategory[] = [
  // ── ORGANIC BREAKFAST ─────────────────────────────────────
  {
    slug: "organic-breakfast",
    name: "Organic Breakfast",
    tagline: "Start your morning with wholesome plant-based fuel",
    emoji: "🥞",
    items: [
      {
        name: "Morning Steel Cut Oats",
        description: "Banana, blueberry, ground flax, walnuts, maple syrup.",
        price: 10,
        priceNote: "Add-ons: strawberry, goji berry, coconut flakes or cacao nibs $1.00 each",
      },
      {
        name: "Super Oats",
        description: "Steel cut oats, ground flax, hemp seed, walnuts, mixed berries, banana, cinnamon.",
        price: 12.5,
        priceNote: "Add-ons: chocolate chips, hemp seeds or blueberries $1.50 each",
      },
      {
        name: "Multigrain Pancakes",
        description: "Strawberries, bananas, coconut flakes, maple syrup.",
        price: 13.5,
        priceNote: "Add-ons: chocolate chips, hemp seeds or strawberries $1.50 each",
      },
      {
        name: "Buckwheat Waffle",
        description: "Blueberries, banana, maple syrup.",
        price: 13.5,
        priceNote: "Add-ons: chocolate chips, hemp seeds or blueberries $1.50 each",
      },
      {
        name: "Almond Butter Bagel",
        description: "Sprouted bagel, almond butter, raw honey, banana slices, almond slices, cinnamon.",
        price: 9,
      },
      {
        name: "Bagels & Shmear",
        description: "With our double whipped cream cheese shmear, sprouted bagel.",
        price: 7.5,
        priceNote: "Add-ons: strawberry, goji berry, coconut flakes or cacao nibs $1.00 each",
      },
      {
        name: "Carrot Lox and Cream Cheese Bagel",
        description: "Violife cream cheese, carrot dill lox, cucumber, red onions, capers, chive on a sprouted bagel.",
        price: 12.95,
      },
      {
        name: "Tofu Scramble",
        description: "Sautéed peppers, onions, spinach, tomato, avocado, mozzarella, whole wheat wrap.",
        price: 12,
        priceNote: "Gluten free wrap +$1.50 · Over quinoa +$2.00",
      },
      {
        name: "Sausage Egg N' Cheese",
        description: "Beyond sausage, \"just egg\", provolone on sourdough.",
        price: 12,
      },
      {
        name: "Breakfast Burrito",
        description: "Just egg, black beans, rice, avocado, sautéed onions, peppers, chipotle sauce.",
        price: 12.95,
        priceNote: "Gluten free wrap +$1.50",
      },
    ],
  },

  // ── ORGANIC TOAST ──────────────────────────────────────────
  {
    slug: "organic-toast",
    name: "Organic Toast",
    tagline: "Ezekiel bread toasts made to order",
    emoji: "🥑",
    items: [
      {
        name: "Sliced Avocado Toast",
        description: "Ezekiel bread, cayenne, sea salt, black & white sesame seeds.",
        price: 11.5,
      },
      {
        name: "Smashed Avocado",
        description: "Arugula, scallions, cherry tomatoes, radish, za'atar spice on ezekiel bread.",
        price: 12.75,
        priceNote: "Gluten free +$1.50",
      },
      {
        name: "The Fancy Green",
        description: "Ezekiel bread, avocado, tomato, cucumber, hummus and broccoli sprouts.",
        price: 12.95,
      },
      {
        name: "Plant Based Rawtella",
        description: "Raspberry compote, hemp seeds, cinnamon, granola on ezekiel bread.",
        price: 13,
      },
    ],
  },

  // ── ORGANIC SALADS ─────────────────────────────────────────
  {
    slug: "organic-salads",
    name: "Organic Salads",
    tagline: "Fresh, vibrant salads with house-made dressings",
    emoji: "🥗",
    note: "Add Chick'N +$5 · Tofu +$2.50 · Tempeh +$2.50 · Tuna +$4 · Avocado +$2.75",
    items: [
      {
        name: "Kale Caesar",
        description: "Kale, romaine, parmesan, tomatoes, chickpea croutons, cashew caesar dressing.",
        price: 13,
      },
      {
        name: "Taco Salad",
        description: "Romaine, avocado, sweet corn, tomato, farro chorizo, black beans, toasted tortilla strips, lime crema dressing.",
        price: 14,
      },
      {
        name: "Falafel Tabouli Salad",
        description: "Kale, romaine, baked falafels, onion, cucumber, tomato, parsley, chickpeas, radishes, quinoa tabouli, lemon tahini dressing.",
        price: 15,
      },
      {
        name: "Greek Salad",
        description: "Arugula, romaine, tomatoes, cucumber, peppers, radish, olives, feta cheese, oregano, olive oil, apple cider vinegar.",
        price: 14,
      },
      {
        name: "Buddha Salad",
        description: "Arugula, spinach, sweet potatoes, quinoa, lentils, avocado, cabbage slaw, hippocrates dressing.",
        price: 14,
      },
      {
        name: "Asian Salad",
        description: "Arugula, kale, edamame, green & red cabbage, carrots, sesame seeds, scallions, radishes, broccoli, miso vinaigrette.",
        price: 14.5,
      },
      {
        name: "Nicoise Tuna Salad",
        description: "Romaine, chickpea tuna, olives, beets, tomatoes, string beans, sweet potato, hippocrates dressing.",
        price: 16,
      },
      {
        name: "Build Your Own",
        description: "1. Pick your greens (romaine, kale, spinach — arugula +$0.75) · 2. Pick four toppings · 3. Pick your dressing · 4. Additional toppings $1.00 each",
        price: 12.5,
      },
    ],
  },

  // ── HEALTHY BITES ──────────────────────────────────────────
  {
    slug: "healthy-bites",
    name: "Healthy Bites",
    tagline: "Snacks, sides, and shareables",
    emoji: "🥙",
    items: [
      { name: "Nachos", description: "", price: 13.5 },
      { name: "Empanadas", description: "", price: 6.5, priceNote: "Each" },
      { name: "Hummus & Pita", description: "", price: 9.5 },
      { name: "Guac & Chips", description: "", price: 9.5 },
      { name: "Sweet Potato Fries with Chipotle Sauce", description: "", price: 6.5 },
      { name: "Soup of the Day", description: "", price: 7, priceNote: "SM $7 · LG $8" },
      { name: "Sauteed Broccoli", description: "With garlic and oil.", price: 10 },
    ],
  },

  // ── KIDS ──────────────────────────────────────────────────
  {
    slug: "kids",
    name: "Kids",
    tagline: "Wholesome meals for little ones",
    emoji: "👶",
    items: [
      { name: "Mini Cheese Pizza", description: "", price: 10 },
      { name: "Mac & Cheese", description: "", price: 9.5 },
      { name: "Grilled Cheese", description: "", price: 9.5 },
      { name: "Cheese Quesadilla", description: "", price: 10 },
      { name: "Penne with Tomato Sauce", description: "", price: 11 },
      { name: "Almond Butter N' Jelly", description: "On ezekiel bread — add banana $1.", price: 10 },
      { name: "Rice & Beans", description: "", price: 10 },
    ],
  },

  // ── ORGANIC PROTEIN BOWLS ──────────────────────────────────
  {
    slug: "organic-protein-bowls",
    name: "Organic Protein Bowls",
    tagline: "Hearty plant-powered bowls packed with protein",
    emoji: "🍚",
    note: "Add Tempeh, Tofu, or Grilled Seitan +$2.50 · Grilled Chick'N +$5.50",
    items: [
      {
        name: "Asian Vegetable Stir Fry",
        description: "Fresh vegetables, brown rice, tamari soy sauce topped with sesame seeds, scallions and sprouts.",
        price: 16.95,
      },
      {
        name: "The Mediterranean",
        description: "Baked falafel, red and white quinoa, cucumbers, tomatoes, mint, cabbage slaw, red onions, chickpeas, lemon tahini dressing.",
        price: 16.95,
      },
      {
        name: "South of the Border",
        description: "Brown rice, beans, corn, tomatoes, pico de gallo, farro sausage, guacamole, lime crema.",
        price: 16.95,
      },
      {
        name: "Nirvana Lentil Dal",
        description: "Lentils, brown rice, red onions, parsley, vegetables, cherry tomatoes.",
        price: 16.95,
      },
      {
        name: "Macro Bowl",
        description: "Lemon basmati rice, shredded carrots, butternut squash, red beans, avocado, pumpkin seeds, kimchi, lemon tahini dressing.",
        price: 16.95,
      },
      {
        name: "Curry in a Hurry",
        description: "Chickpeas, red pepper, carrots, cauliflower, scallions, garlic, onion, ginger, coconut milk, cilantro, coriander seeds, brown rice.",
        price: 16.95,
      },
      {
        name: "Nourish Bowl",
        description: "Red and white quinoa with portobello meatballs, sweet potato, spinach, tomatoes, topped with cashew cheese and basil pesto.",
        price: 17.5,
      },
    ],
  },

  // ── ORGANIC SANDWICHES ─────────────────────────────────────
  {
    slug: "organic-sandwiches",
    name: "Organic Sandwiches",
    tagline: "Burgers, wraps, tacos, and handhelds made plant-based",
    emoji: "🥪",
    note: "Gluten free wrap +$1.50",
    items: [
      {
        name: "Kalifornia Burger",
        description: "Quinoa, sweet potato, black beans patty, lettuce, tomatoes, onions, chipotle sauce, guacamole on organic multigrain bun.",
        price: 13.25,
      },
      {
        name: "Plant Burger",
        description: "Vegetable, beets, lentils, sunflower seed patty, provolone cheese, lettuce, onion, tomato, truffle aioli on organic multigrain bun.",
        price: 13.25,
      },
      {
        name: "Beyond Burger Melt",
        description: "Beyond burger with caramelized onions, provolone cheese on grilled sourdough bread.",
        price: 14.5,
      },
      {
        name: "Italian Meatball Sandwich",
        description: "Mushroom meatballs, cashew cheese, pesto, peppers and onions, tomato sauce, parmesan on multigrain ciabatta bread.",
        price: 14,
      },
      {
        name: "Spicy \"Chick'N\"",
        description: "Pickles, lettuce, tomatoes, cajun mayo on organic multigrain bun.",
        price: 14.5,
      },
      {
        name: "Grown Up Grilled Cheese",
        description: "Provolone cheese, avocado, tomato on sourdough bread.",
        price: 12.5,
      },
      {
        name: "Falafel on Pita",
        description: "Baked falafel, hummus, tabouli salad, cabbage, chickpeas, lemon tahini on organic whole wheat pocket pita.",
        price: 14,
      },
      {
        name: "Buffalo Cauliflower Wrap",
        description: "Roasted buffalo cauliflower, cashew caesar dressing, romaine, parmesan cheese on organic whole wheat wrap.",
        price: 14,
      },
      {
        name: "Tuna Wrap",
        description: "Chickpeas, carrots, onion, celery, kelp, lettuce, tomato on organic whole wheat wrap.",
        price: 14,
      },
      {
        name: "The Vurito",
        description: "Brown rice, beans, guacamole, onions, lettuce, pico de gallo, jalapeno lime sauce on whole wheat wrap.",
        price: 13.5,
      },
      {
        name: "Veggie Wrap",
        description: "Hummus, cucumber, chickpeas, quinoa, avocado, carrots, tomato, romaine, sprouts, jalapeno lime sauce, whole wheat wrap.",
        price: 14,
      },
      {
        name: "Mushroom + Spinach Quesadilla",
        description: "With provolone cheese, caramelized onions, pico de gallo on whole wheat wrap. Side of tomatillo sauce.",
        price: 13.95,
      },
      {
        name: "Buffalo Jackfruit Tacos",
        description: "Cabbage slaw, guacamole, cheese, buffalo sauce, organic corn tortilla, lime crema.",
        price: 14.5,
      },
      {
        name: "Mushrooms Tacos",
        description: "Portobello, avocado, cilantro, pico de gallo, jalapeno lime sauce.",
        price: 15,
      },
    ],
  },

  // ── ORGANIC PIZZA ──────────────────────────────────────────
  {
    slug: "organic-pizza",
    name: "Organic Pizza",
    tagline: "Plant-based pies made with real ingredients",
    emoji: "🍕",
    note: "Gluten free +$3.00",
    items: [
      {
        name: "Margarita",
        description: "Tomato sauce, basil, parmesan, mozzarella.",
        price: 13,
      },
      {
        name: "Pizza Salad",
        description: "Light tomato sauce, topped with arugula, cucumber, red onions, olives, tomatoes, parmesan, extra virgin olive oil.",
        price: 15,
      },
      {
        name: "Veggie Pizza",
        description: "Mushrooms, spinach, broccoli, mozzarella, peppers, onions, olives.",
        price: 16,
      },
      {
        name: "The Italian",
        description: "Tomato sauce, mozzarella, pepperoni, hot sausage, red onion.",
        price: 16.5,
      },
      {
        name: "Buffalo Cauliflower",
        description: "Spicy buffalo cauliflower, mozzarella, parmesan cheese, scallions, cashew cheese and tomato sauce.",
        price: 16,
      },
      {
        name: "Portobello",
        description: "Cashew cheese, parsley, caramelized onions, parmesan.",
        price: 16,
      },
    ],
  },

  // ── GLUTEN FREE PASTA ──────────────────────────────────────
  {
    slug: "gluten-free-pasta",
    name: "Gluten Free Pasta",
    tagline: "Comfort pasta dishes, 100% gluten free",
    emoji: "🍝",
    note: "Any substitutions will be charged accordingly",
    items: [
      {
        name: "Penne Tomato Sauce",
        description: "Tomato sauce, garlic, basil, parmesan cheese, extra virgin olive oil.",
        price: 13.75,
      },
      {
        name: "Fusilli with Broccoli",
        description: "Sautéed with garlic, olive oil, chili flakes.",
        price: 15.95,
        priceNote: "Garlic +$1.00",
      },
      {
        name: "Fettuccine Alfredo",
        description: "Rice noodles, mushrooms, peas, spinach in creamy cashew cheese sauce, parmesan.",
        price: 16.5,
      },
      {
        name: "Truffle Mac N' Cheese",
        description: "Fusilli, mushrooms, truffle oil paste, cashew cheese, parmesan.",
        price: 16.5,
      },
      {
        name: "Fusilli with Butternut Squash",
        description: "Kale, cashew béchamel cream sauce.",
        price: 15.75,
      },
      {
        name: "Pesto Pasta",
        description: "Penne in basil pesto sauce with parmesan and cherry tomatoes.",
        price: 16,
      },
    ],
  },

  // ── ORGANIC ACAI BOWLS ─────────────────────────────────────
  {
    slug: "organic-acai-bowls",
    name: "Organic Acai Bowls",
    tagline: "Blended superfruit bowls topped with crunchy goodness",
    emoji: "🫐",
    items: [
      {
        name: "Almond Crunch Bowl",
        description: "Banana, blueberry, acai, almond mylk blended together and topped with strawberry, banana, granola, almond slices, almond butter, raw honey.",
        price: 13.25,
      },
      {
        name: "OGK Bowl",
        description: "Banana, mango, acai, almond mylk blended together and topped with pineapple, strawberry, goji berry, granola, coconut flakes, raw honey.",
        price: 13.25,
      },
      {
        name: "Dragon Bowl",
        description: "Banana, mango, pineapple, dragon fruit, coconut water blended together and topped with blueberry, pineapple, coconut flakes, raw honey.",
        price: 13.5,
      },
      {
        name: "Superfood Bowl",
        description: "Spinach, kale, banana, pineapple, coconut water blended together and topped with banana, blueberry, granola, coconut flakes, chia seeds, flax seed, raw honey, hemp seeds.",
        price: 14.5,
      },
      {
        name: "Rawtella Bowl",
        description: "Banana, blueberry, mango, almond mylk blended together and topped with granola, hazelnut rawtella, strawberry and coconut flakes.",
        price: 14.5,
      },
      {
        name: "Hawaiin Bowl",
        description: "Blue majik spirulina, banana, pineapple, mango, coconut water blended together and topped with granola, coconut flakes, hemp seeds, almond slices, blueberry, raw honey.",
        price: 14.5,
      },
    ],
  },

  // ── ORGANIC SMOOTHIES ──────────────────────────────────────
  {
    slug: "organic-smoothies",
    name: "Organic Smoothies",
    tagline: "16 oz blended organic smoothies made to order",
    emoji: "🥤",
    note: "Add Rice, Hemp, or Pea Protein +$1.00",
    items: [
      {
        name: "Super Green",
        description: "Banana, mango, kale, spinach, coconut water.",
        price: 10.95,
      },
      {
        name: "Berrylicious",
        description: "Strawberry, raspberry, mango, banana, raw honey, coconut water.",
        price: 10.95,
      },
      {
        name: "Tropical Twist",
        description: "Banana, mango, pineapple, basil, mint, coconut water.",
        price: 10.95,
      },
      {
        name: "The Classic",
        description: "Strawberry, banana, raw honey, almond mylk.",
        price: 10.95,
      },
      {
        name: "AB&J",
        description: "Blueberry, raspberry, banana, almond butter, raw honey, almond mylk.",
        price: 10.95,
      },
      {
        name: "Protein Boost",
        description: "Banana, almond butter, cacao powder, cinnamon, rice protein, raw honey, almond mylk.",
        price: 11.5,
      },
      {
        name: "Blue Majik",
        description: "Banana, pineapple, mango, coconut water, blue spirulina, hemp seed, coconut flakes.",
        price: 12,
      },
      {
        name: "Emergen-CY",
        description: "Banana, blueberry, lemon, maca, raw honey, flax and coconut water.",
        price: 11.5,
      },
      {
        name: "Cool Mint",
        description: "Banana, spinach, maple syrup, mint, salt, almond mylk, cacao nibs.",
        price: 10.5,
      },
      {
        name: "Express-O",
        description: "Banana, cacao, vanilla, maple syrup, almond mylk, shot of espresso.",
        price: 11.75,
      },
      {
        name: "Chocolate Avocado Mylk Shake",
        description: "Banana, avocado, raw honey, cacao, almond mylk.",
        price: 11.5,
      },
      {
        name: "Liquid Gold",
        description: "Banana, mango, turmeric, ginger, cardamon, coconut oil, maple syrup, almond mylk.",
        price: 12.5,
      },
      {
        name: "Green Guru",
        description: "Banana, pineapple, spinach, spirulina and coconut water.",
        price: 11.5,
      },
    ],
  },

  // ── ORGANIC SMOOTHIE BOMBS ─────────────────────────────────
  {
    slug: "organic-smoothie-bombs",
    name: "Organic Smoothie Bombs",
    tagline: "Grab-and-go smoothie bombs ready to blend",
    emoji: "💥",
    items: [
      {
        name: "Berry Acai Bomb",
        description: "Acai, mango, pineapple, raspberry, coconut water, topped with strawberry, blueberry and goji berries.",
        price: 12,
      },
      {
        name: "Dragon Bomb",
        description: "Mango, pineapple, banana, dragon fruit, coconut water, topped with pineapple, granola, coconut flakes, raw honey.",
        price: 12,
      },
      {
        name: "Green Machine",
        description: "Banana, spinach, kale, almond mylk, almond butter, topped with granola, coconut flakes, chia seeds and banana.",
        price: 12,
      },
      {
        name: "Ocean Blue",
        description: "Pineapple, banana, blue spirulina and coconut mylk topped with pineapple, coconut flakes, chia seeds, raw honey.",
        price: 12.5,
      },
    ],
  },

  // ── ORGANIC FRESH JUICES ───────────────────────────────────
  {
    slug: "fresh-juices",
    name: "Organic Fresh Juices",
    tagline: "Cold-pressed organic juices made fresh daily",
    emoji: "🍊",
    items: [
      { name: "Good Morning", description: "Cucumber, celery, lemon and ginger.", price: 10.5 },
      { name: "Beets by OGK", description: "Beet, lemon, ginger, apple, celery.", price: 10.5 },
      { name: "Refresher", description: "Cucumber, kale, apple, lemon.", price: 10.5 },
      { name: "Kailed It", description: "Spinach, kale, cucumber, celery.", price: 10.5 },
      { name: "Hippocrates", description: "Celery, cucumber.", price: 10.5 },
      { name: "Green Ginger", description: "Celery, kale, lemon, ginger.", price: 10.5 },
      { name: "The Trio", description: "Carrot, apple, ginger, lemon.", price: 10.5 },
    ],
  },

  // ── SHOTS ──────────────────────────────────────────────────
  {
    slug: "organic-shots",
    name: "Shots",
    tagline: "Concentrated wellness in every shot",
    emoji: "🌿",
    items: [
      { name: "Wheatgrass Shot", description: "1 oz.", price: 2.5 },
      { name: "Ginger Shot", description: "1 oz.", price: 2.5 },
      { name: "Turmeric Shot", description: "1 oz.", price: 2.5 },
      { name: "Reboot Shot", description: "2 oz. Ginger, turmeric, lemon, cayenne, black pepper, apple cider vinegar.", price: 7.5 },
    ],
  },

  // ── ORGANIC COFFEE BAR ─────────────────────────────────────
  {
    slug: "organic-coffee-bar",
    name: "Organic Coffee Bar",
    tagline: "Specialty organic coffee and warm beverages",
    emoji: "☕",
    items: [
      { name: "Coffee", description: "SM $3.50 · LG $4", price: 3.5 },
      { name: "Espresso", description: "", price: 3.75 },
      { name: "Americano", description: "", price: 3.75 },
      { name: "Cappuccino", description: "", price: 5.5 },
      { name: "Iced Coffee", description: "", price: 5 },
      { name: "Latte", description: "12 oz $5.50 · 16 oz $6.50", price: 5.5 },
      { name: "Hot Tea", description: "16 oz.", price: 4 },
      { name: "Iced Tea", description: "16 oz.", price: 4 },
      { name: "Matcha Latte", description: "Ceremonial grade matcha, raw honey, oat mylk. 12 oz $6.50 · 16 oz $7", price: 6.5 },
      { name: "Golden Latte", description: "Turmeric, cinnamon, black pepper, raw honey, oat mylk. 12 oz $6.50 · 16 oz $7", price: 6.5 },
      { name: "Cinnamon Latte", description: "Oat mylk with cinnamon, honey. 12 oz $6.50 · 16 oz $7", price: 6.5 },
      { name: "Chai Latte", description: "Choice of mylk. 12 oz $6.50 · 16 oz $7", price: 6.5 },
      { name: "Pumpkin Spice Latte", description: "Choice of mylk. 12 oz $6.50 · 16 oz $7", price: 6.5 },
      { name: "Raw Hot Chocolate", description: "Choice of mylk. 12 oz $6.50 · 16 oz $7", price: 6.5 },
      { name: "Spicy Hot Chocolate", description: "Oat mylk, cacao, cinnamon, nutmeg, vanilla, cayenne. 12 oz $6.50 · 16 oz $7", price: 6.5 },
    ],
  },
]
