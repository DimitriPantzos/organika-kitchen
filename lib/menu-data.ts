export type MenuItem = {
  name: string
  description: string
  price: number
}

export type MenuCategory = {
  slug: string
  name: string
  tagline: string
  emoji: string
  items: MenuItem[]
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    slug: "organic-acai-bowls",
    name: "Organic Acai Bowls",
    tagline: "Blended superfruit bowls topped with crunchy goodness",
    emoji: "\uD83E\uDED0",
    items: [
      {
        name: "Almond Crunch Bowl",
        description:
          "Banana, blueberry, acai, almond milk blended together and topped with strawberry, granola, almond slices, almond butter, raw honey",
        price: 13.25,
      },
      {
        name: "OGK Bowl",
        description:
          "Banana, mango, acai, almond milk blended together and topped with pineapple, strawberry, goji berry, granola, coconut flakes, raw honey",
        price: 13.25,
      },
      {
        name: "Dragon Bowl",
        description:
          "Banana, mango, pineapple, dragon fruit, coconut water blended together and topped with blueberry, pineapple, coconut flakes, raw honey",
        price: 13.5,
      },
      {
        name: "Superfood Bowl",
        description:
          "Spinach, kale, banana, pineapple, coconut water blended together and topped with banana, blueberry, granola, coconut flakes, chia seeds, flax seed, raw honey, hemp seeds",
        price: 14.5,
      },
      {
        name: "Rawtella Bowl",
        description:
          "Banana, blueberry, mango, almond milk blended together and topped with banana, strawberry, cacao nibs, granola, almond butter, raw honey, chocolate drizzle",
        price: 14.5,
      },
      {
        name: "Hawaiian Bowl",
        description:
          "Banana, mango, pineapple, coconut water blended together and topped with pineapple, strawberry, granola, coconut flakes, macadamia nut, raw honey",
        price: 14.5,
      },
    ],
  },
  {
    slug: "organic-smoothies",
    name: "Organic Smoothies",
    tagline: "16 oz blended organic smoothies made to order",
    emoji: "\uD83E\uDD64",
    items: [
      {
        name: "Super Green",
        description: "Banana, mango, kale, spinach, coconut water",
        price: 10.95,
      },
      {
        name: "Berrylicious",
        description: "Banana, blueberry, strawberry, almond mylk",
        price: 10.95,
      },
      {
        name: "Tropical Twist",
        description: "Banana, mango, pineapple, coconut water",
        price: 10.95,
      },
      {
        name: "The Classic",
        description: "Banana, strawberry, almond mylk",
        price: 10.95,
      },
      {
        name: "AB&J",
        description:
          "Blueberry, raspberry, banana, almond butter, raw honey, almond mylk",
        price: 10.95,
      },
      {
        name: "Protein Boost",
        description:
          "Banana, almond butter, cacao powder, cinnamon, rice protein, raw honey, almond mylk",
        price: 11.5,
      },
      {
        name: "Blue Majik",
        description: "Banana, mango, blue spirulina, coconut water",
        price: 12.0,
      },
      {
        name: "Emergen-CY",
        description:
          "Orange, pineapple, mango, ginger, turmeric, coconut water",
        price: 11.5,
      },
      {
        name: "Cool Mint",
        description: "Banana, cacao powder, fresh mint, almond mylk",
        price: 10.5,
      },
      {
        name: "Express-O",
        description:
          "Banana, almond butter, espresso, cinnamon, almond mylk",
        price: 11.75,
      },
      {
        name: "Chocolate Avocado Mylk Shake",
        description: "Banana, avocado, cacao powder, raw honey, almond mylk",
        price: 11.5,
      },
      {
        name: "Liquid Gold",
        description:
          "Mango, pineapple, turmeric, ginger, black pepper, coconut water",
        price: 12.5,
      },
      {
        name: "Green Guru",
        description: "Kale, spinach, banana, avocado, almond mylk",
        price: 11.5,
      },
      {
        name: "Pumpkin Spice Smoothie",
        description:
          "Pumpkin puree, banana, cinnamon, nutmeg, almond mylk",
        price: 11.95,
      },
    ],
  },
  {
    slug: "organic-shots",
    name: "Organic Shots",
    tagline: "Concentrated wellness in every shot",
    emoji: "\uD83C\uDF3F",
    items: [
      { name: "Wheatgrass Shot", description: "", price: 7.5 },
      { name: "Ginger Shot", description: "", price: 7.5 },
      { name: "Turmeric Shot", description: "", price: 7.5 },
      { name: "Reboot Shot", description: "", price: 7.5 },
    ],
  },
  {
    slug: "organic-protein-bowls",
    name: "Organic Protein Bowls",
    tagline: "Hearty plant-powered bowls packed with protein",
    emoji: "\uD83C\uDF5A",
    items: [
      {
        name: "Asian Vegetable Stir Fry",
        description:
          "Rice noodles, broccoli, edamame, carrots, cabbage, tofu, sesame seeds, with teriyaki or peanut sauce",
        price: 16.95,
      },
      {
        name: "The Mediterranean",
        description:
          "Quinoa, hummus, falafel, cucumber, tomato, red onion, kalamata olives, tahini sauce",
        price: 16.95,
      },
      {
        name: "South Of The Border",
        description:
          "Brown rice, black beans, sweet potato, avocado, corn, pico de gallo, cashew cream",
        price: 16.95,
      },
      {
        name: "Nirvana Lentil Dal",
        description:
          "Red lentil dal, brown rice, roasted cauliflower, spinach, cilantro",
        price: 16.95,
      },
      {
        name: "Nourish Bowl",
        description:
          "Quinoa, roasted sweet potato, avocado, kale, chickpeas, tahini dressing",
        price: 17.5,
      },
      {
        name: "Curry In A Hurry",
        description:
          "Coconut curry, brown rice, roasted vegetables, chickpeas, cilantro",
        price: 16.95,
      },
      {
        name: "Macro Bowl",
        description:
          "Brown rice, black beans, avocado, roasted sweet potato, kale, tahini",
        price: 16.95,
      },
    ],
  },
  {
    slug: "organic-coffee-bar",
    name: "Organic Coffee Bar",
    tagline: "Specialty organic coffee and warm beverages",
    emoji: "\u2615",
    items: [
      { name: "Coffee", description: "", price: 3.75 },
      { name: "Americano", description: "", price: 4.0 },
      { name: "Chagaccino", description: "", price: 6.95 },
      { name: "Cappuccino", description: "", price: 5.0 },
      { name: "Latte", description: "", price: 5.5 },
      { name: "Iced Tea", description: "", price: 3.0 },
      { name: "Hot Tea", description: "", price: 3.0 },
      { name: "Cold Buster Tea", description: "", price: 5.75 },
      { name: "Chai Latte", description: "", price: 5.75 },
      { name: "Matcha Latte", description: "", price: 6.75 },
      { name: "Pumpkin Spice Latte", description: "", price: 6.95 },
      { name: "Raw Hot Chocolate", description: "", price: 5.75 },
      { name: "Golden Latte", description: "", price: 6.5 },
      { name: "Cinnamon Latte", description: "", price: 5.95 },
      { name: "Spicy Hot Chocolate", description: "", price: 5.95 },
      { name: "The Blues", description: "", price: 6.5 },
      { name: "Espresso Shot", description: "", price: 2.75 },
    ],
  },
  {
    slug: "organic-pizza",
    name: "Organic Pizza",
    tagline: "Plant-based pies with cashew mozzarella",
    emoji: "\uD83C\uDF55",
    items: [
      {
        name: "Margarita Pizza",
        description: "Tomato sauce, cashew mozzarella, fresh basil",
        price: 17.0,
      },
      {
        name: "The Italian Pizza",
        description:
          "Tomato sauce, beyond sausage, cashew mozzarella, roasted peppers",
        price: 18.0,
      },
      {
        name: "Portobello Pizza",
        description:
          "Truffle cream, portobello mushroom, cashew mozzarella, arugula",
        price: 18.0,
      },
      {
        name: "Buffalo Cauliflower Pizza",
        description:
          "Buffalo sauce, breaded cauliflower, cashew mozzarella, ranch drizzle",
        price: 18.5,
      },
      {
        name: "Veggie Pizza",
        description: "Tomato sauce, cashew mozzarella, roasted vegetables",
        price: 18.0,
      },
      {
        name: "Pizza Salad",
        description:
          "Tomato sauce, cashew mozzarella, arugula, tomato, balsamic glaze",
        price: 18.5,
      },
      {
        name: "Pesto Pizza",
        description:
          "Pesto sauce, cashew mozzarella, sun-dried tomato, arugula",
        price: 18.0,
      },
    ],
  },
  {
    slug: "organic-sandwiches",
    name: "Organic Sandwiches",
    tagline: "Burgers, wraps, and handhelds made plant-based",
    emoji: "\uD83E\uDD6A",
    items: [
      {
        name: "Kalifornia Burger",
        description:
          "Plant patty, avocado, lettuce, tomato, onion, pickles, special sauce",
        price: 15.5,
      },
      {
        name: "Plant Burger",
        description:
          "Plant patty, lettuce, tomato, onion, pickles, ketchup, mustard",
        price: 14.5,
      },
      {
        name: "Meatball Sandwich",
        description: "Plant meatballs, marinara sauce, cashew mozzarella",
        price: 15.0,
      },
      {
        name: "Beyond Burger Melt",
        description:
          "Beyond patty, cashew cheese, caramelized onion, special sauce",
        price: 15.5,
      },
      {
        name: "Buffalo Cauliflower Wrap",
        description:
          "Breaded cauliflower, buffalo sauce, lettuce, tomato, ranch",
        price: 14.5,
      },
      {
        name: "Tuna Wrap",
        description:
          "Chickpea tuna, lettuce, tomato, cucumber, red onion",
        price: 14.25,
      },
      {
        name: "Veggie Wrap",
        description: "Hummus, avocado, roasted vegetables, mixed greens",
        price: 14.25,
      },
      {
        name: "The Mozz",
        description:
          "Cashew mozzarella, tomato, basil, balsamic glaze on sourdough",
        price: 13.0,
      },
      {
        name: "Lentil Meat Tacos",
        description:
          "Lentil meat, pico de gallo, avocado, cashew cream, tortillas",
        price: 15.0,
      },
      {
        name: "Healthy BLT",
        description:
          "Coconut bacon, lettuce, tomato, avocado, mayo on sourdough",
        price: 13.0,
      },
    ],
  },
  {
    slug: "gluten-free-pasta",
    name: "Gluten Free Pasta",
    tagline: "Comfort pasta dishes, 100% gluten free",
    emoji: "\uD83C\uDF5D",
    items: [
      {
        name: "Penne Tomato Sauce",
        description: "Gluten free penne, marinara sauce",
        price: 14.0,
      },
      {
        name: "Fusilli With Broccoli",
        description: "Gluten free fusilli, broccoli, garlic, olive oil",
        price: 15.95,
      },
      {
        name: "Fettuccine Alfredo",
        description: "Gluten free fettuccine, cashew alfredo sauce",
        price: 16.5,
      },
      {
        name: "Truffle Mac N Cheese",
        description: "Gluten free pasta, cashew cheese, truffle oil",
        price: 16.5,
      },
      {
        name: "Fusilli With Butternut Squash",
        description:
          "Gluten free fusilli, roasted butternut squash, sage",
        price: 15.75,
      },
      {
        name: "Pesto Pasta",
        description:
          "Gluten free pasta, house pesto, sun-dried tomato, arugula",
        price: 16.0,
      },
      {
        name: "Vegetable Lasagna",
        description:
          "Layered with roasted vegetables, cashew ricotta, marinara",
        price: 19.0,
      },
      {
        name: "Fusilli With Hot Sausage & Peas",
        description:
          "Gluten free fusilli, beyond sausage, peas, garlic",
        price: 16.0,
      },
    ],
  },
  {
    slug: "fresh-juices",
    name: "Fresh Juices",
    tagline: "Cold-pressed organic juices made fresh daily",
    emoji: "\uD83C\uDF4A",
    items: [
      {
        name: "Good Morning",
        description: "Apple, carrot, ginger",
        price: 10.5,
      },
      {
        name: "Beets By OGK",
        description: "Beet, apple, carrot, ginger",
        price: 10.5,
      },
      {
        name: "Refresher",
        description: "Cucumber, apple, celery, lemon",
        price: 10.5,
      },
      {
        name: "Kailed It",
        description: "Kale, apple, cucumber, lemon, ginger",
        price: 10.5,
      },
      {
        name: "Sunshine",
        description: "Orange, carrot, ginger, turmeric",
        price: 10.5,
      },
      {
        name: "Hippocrates",
        description: "Celery, cucumber, kale, spinach, lemon, ginger",
        price: 10.5,
      },
      {
        name: "Green Ginger",
        description: "Kale, spinach, apple, ginger, lemon",
        price: 10.5,
      },
      {
        name: "The Trio",
        description: "Beet, carrot, apple",
        price: 10.5,
      },
      { name: "Just Celery", description: "", price: 10.5 },
      { name: "Carrot Juice", description: "", price: 10.5 },
      { name: "Apple Juice", description: "", price: 10.5 },
      { name: "Cucumber Juice", description: "", price: 10.5 },
      {
        name: "Apple Lemonade",
        description: "Apple, lemon",
        price: 7.0,
      },
    ],
  },
  {
    slug: "organic-smoothie-bombs",
    name: "Organic Smoothie Bombs",
    tagline: "Grab-and-go smoothie bombs ready to blend",
    emoji: "\uD83D\uDCA5",
    items: [
      { name: "Berry Acai Bomb", description: "", price: 12.0 },
      { name: "Dragon Bomb", description: "", price: 12.0 },
      { name: "Green Machine", description: "", price: 12.0 },
      { name: "Ocean Blue", description: "", price: 12.5 },
      { name: "Crunch Up", description: "", price: 12.0 },
    ],
  },
  {
    slug: "organic-breakfast",
    name: "Organic Breakfast",
    tagline: "Start your morning with wholesome plant-based fuel",
    emoji: "\uD83E\uDD5E",
    items: [
      { name: "Morning Steel Cut Oats", description: "", price: 10.0 },
      { name: "Super Oats", description: "", price: 12.5 },
      { name: "Multigrain Pancakes", description: "", price: 13.5 },
      { name: "Buckwheat Waffle G/F", description: "", price: 13.5 },
      { name: "Almond Butter Bagel", description: "", price: 9.0 },
      { name: "Bagel & Shmear", description: "", price: 7.5 },
      { name: "Breakfast Bagel", description: "", price: 10.0 },
      { name: "Organic Toast", description: "", price: 7.0 },
    ],
  },
  {
    slug: "organic-salads",
    name: "Organic Salads",
    tagline: "Fresh, vibrant salads with house-made dressings",
    emoji: "\uD83E\uDD57",
    items: [
      { name: "Build Your Own Salad", description: "", price: 14.5 },
      { name: "Asian Salad", description: "", price: 15.5 },
      { name: "Buddha Salad", description: "", price: 15.5 },
      { name: "Falafel Tabouli Salad", description: "", price: 15.5 },
      { name: "Greek Salad", description: "", price: 14.5 },
      { name: "Caesar Salad", description: "", price: 13.5 },
      { name: "Kale Salad", description: "", price: 14.5 },
    ],
  },
  {
    slug: "organic-soups",
    name: "Organic Soups",
    tagline: "Warm, nourishing soups made from scratch",
    emoji: "\uD83C\uDF72",
    items: [
      { name: "Soup Of The Day", description: "", price: 8.5 },
    ],
  },
  {
    slug: "baked-goods",
    name: "Baked Goods",
    tagline: "Freshly baked plant-based treats",
    emoji: "\uD83C\uDF5E",
    items: [
      { name: "Banana Bread", description: "", price: 5.5 },
      { name: "Blueberry Muffin", description: "", price: 5.0 },
      { name: "Chocolate Chip Cookie", description: "", price: 4.5 },
      { name: "Zucchini Bread", description: "", price: 5.5 },
      { name: "Peanut Butter Cookie", description: "", price: 4.5 },
      { name: "Pumpkin Bread", description: "", price: 5.5 },
    ],
  },
]
