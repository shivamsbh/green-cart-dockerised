const productSeedData = [
  // Fruits
  {
    name: "Fresh Red Apples",
    description: ["Premium quality red apples", "Rich in vitamins and fiber", "Perfect for snacking", "Freshly picked"],
    price: 150,
    offerPrice: 120,
    image: [
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400",
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=400"
    ],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Ripe Bananas",
    description: ["Sweet and ripe bananas", "High in potassium", "Great for energy", "Natural and fresh"],
    price: 60,
    offerPrice: 50,
    image: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400"
    ],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Juicy Mangoes",
    description: ["Sweet alphonso mangoes", "King of fruits", "Rich in vitamin C", "Seasonal special"],
    price: 200,
    offerPrice: 180,
    image: [
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
      "https://images.unsplash.com/photo-1605440846964-c2b9c47e8bb4?w=400",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400"
    ],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Fresh Grapes",
    description: ["Sweet green grapes", "Antioxidant rich", "Perfect for kids", "Seedless variety"],
    price: 120,
    offerPrice: 100,
    image: [
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      "https://images.unsplash.com/photo-1609501676725-7186f62ba115?w=400"
    ],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Juicy Oranges",
    description: ["Fresh naval oranges", "High vitamin C content", "Perfect for juice", "Sweet and tangy"],
    price: 100,
    offerPrice: 85,
    image: [
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=400",
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400"
    ],
    category: "Fruits",
    inStock: true
  },
  {
    name: "Fresh Strawberries",
    description: ["Premium strawberries", "Sweet and juicy", "Rich in antioxidants", "Perfect for desserts"],
    price: 250,
    offerPrice: 220,
    image: [
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
      "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400",
      "https://images.unsplash.com/photo-1565005981756-0584935154f0?w=400"
    ],
    category: "Fruits",
    inStock: true
  },
  
  // Vegetables
  {
    name: "Fresh Tomatoes",
    description: ["Red ripe tomatoes", "Perfect for cooking", "Rich in lycopene", "Farm fresh"],
    price: 40,
    offerPrice: 35,
    image: [
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
      "https://images.unsplash.com/photo-1571193828514-4c8bd71c2b37?w=400",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Red Onions",
    description: ["Fresh red onions", "Essential for cooking", "Sharp and flavorful", "Long lasting"],
    price: 30,
    offerPrice: 25,
    image: [
      "https://images.unsplash.com/photo-1508313880080-c4bef43d8e20?w=400",
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400",
      "https://images.unsplash.com/photo-1606242909138-6d0b9155ad37?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Fresh Potatoes",
    description: ["High quality potatoes", "Perfect for all dishes", "Rich in carbohydrates", "Versatile ingredient"],
    price: 25,
    offerPrice: 22,
    image: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
      "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400",
      "https://images.unsplash.com/photo-1606242909138-6d0b9155ad37?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Fresh Carrots",
    description: ["Orange carrots", "Rich in beta carotene", "Great for salads", "Crunchy and sweet"],
    price: 45,
    offerPrice: 40,
    image: [
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
      "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Fresh Spinach",
    description: ["Green leafy spinach", "Rich in iron", "Perfect for health", "Organic variety"],
    price: 30,
    offerPrice: 25,
    image: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400",
      "https://images.unsplash.com/photo-1515543904379-3d0e229be463?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Green Broccoli",
    description: ["Fresh broccoli", "Superfood vegetable", "Rich in vitamins", "Great for steaming"],
    price: 80,
    offerPrice: 70,
    image: [
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400",
      "https://images.unsplash.com/photo-1553395572-0b8d9c2be7c4?w=400",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Fresh Cauliflower",
    description: ["White cauliflower", "Versatile vegetable", "Low in calories", "Perfect for curries"],
    price: 50,
    offerPrice: 45,
    image: [
      "https://images.unsplash.com/photo-1568584711271-29825eaf38b5?w=400",
      "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=400",
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Green Bell Peppers",
    description: ["Fresh bell peppers", "Crunchy and colorful", "Rich in vitamin C", "Great for stir-fry"],
    price: 60,
    offerPrice: 55,
    image: [
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=400",
      "https://images.unsplash.com/photo-1544466141-4d9b4efd1c3a?w=400"
    ],
    category: "Vegetables",
    inStock: true
  },

  // Dairy
  {
    name: "Fresh Milk",
    description: ["Pure cow milk", "Rich in calcium", "Daily fresh supply", "Homogenized"],
    price: 55,
    offerPrice: 50,
    image: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400"
    ],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Cheese Slices",
    description: ["Processed cheese", "Perfect for sandwiches", "Rich and creamy", "High protein"],
    price: 180,
    offerPrice: 160,
    image: [
      "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400",
      "https://images.unsplash.com/photo-1569856077-6bff32c7ebc9?w=400",
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400"
    ],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Greek Yogurt",
    description: ["Thick Greek yogurt", "Probiotic rich", "High protein content", "Natural and healthy"],
    price: 120,
    offerPrice: 110,
    image: [
      "https://images.unsplash.com/photo-1571212515416-faa5b23dfa9d?w=400",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
      "https://images.unsplash.com/photo-1571212515416-faa5b23dfa9d?w=400"
    ],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Fresh Butter",
    description: ["Unsalted butter", "Premium quality", "Perfect for baking", "Rich and creamy"],
    price: 200,
    offerPrice: 180,
    image: [
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
      "https://images.unsplash.com/photo-1571212515416-faa5b23dfa9d?w=400",
      "https://images.unsplash.com/photo-1571193828514-4c8bd71c2b37?w=400"
    ],
    category: "Dairy",
    inStock: true
  },
  {
    name: "Fresh Paneer",
    description: ["Homemade paneer", "High protein", "Fresh and soft", "Perfect for curries"],
    price: 250,
    offerPrice: 230,
    image: [
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400",
      "https://images.unsplash.com/photo-1571212515416-faa5b23dfa9d?w=400",
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400"
    ],
    category: "Dairy",
    inStock: true
  },

  // Grains
  {
    name: "Basmati Rice",
    description: ["Premium basmati rice", "Long grain variety", "Aromatic and fluffy", "Perfect for biryani"],
    price: 150,
    offerPrice: 130,
    image: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400",
      "https://images.unsplash.com/photo-1428557044797-8c5a35b35100?w=400"
    ],
    category: "Grains",
    inStock: true
  },
  {
    name: "Whole Wheat Flour",
    description: ["Pure wheat flour", "Finely ground", "High fiber content", "Perfect for rotis"],
    price: 80,
    offerPrice: 75,
    image: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400"
    ],
    category: "Grains",
    inStock: true
  },
  {
    name: "Quinoa",
    description: ["Organic quinoa", "Superfood grain", "High protein", "Gluten-free option"],
    price: 400,
    offerPrice: 350,
    image: [
      "https://images.unsplash.com/photo-1593048833814-15b2b6395c7b?w=400",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400"
    ],
    category: "Grains",
    inStock: true
  },
  {
    name: "Rolled Oats",
    description: ["Premium oats", "Heart healthy", "High fiber", "Perfect for breakfast"],
    price: 120,
    offerPrice: 100,
    image: [
      "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400",
      "https://images.unsplash.com/photo-1593048833814-15b2b6395c7b?w=400",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400"
    ],
    category: "Grains",
    inStock: true
  },
  {
    name: "Brown Rice",
    description: ["Organic brown rice", "Whole grain variety", "High in fiber", "Healthy alternative"],
    price: 130,
    offerPrice: 115,
    image: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400",
      "https://images.unsplash.com/photo-1428557044797-8c5a35b35100?w=400"
    ],
    category: "Grains",
    inStock: true
  },

  // Bakery
  {
    name: "Whole Wheat Bread",
    description: ["Fresh baked bread", "100% whole wheat", "High fiber", "Soft and fresh"],
    price: 45,
    offerPrice: 40,
    image: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400"
    ],
    category: "Bakery",
    inStock: true
  },
  {
    name: "Butter Croissants",
    description: ["French croissants", "Buttery and flaky", "Fresh baked", "Perfect for breakfast"],
    price: 80,
    offerPrice: 70,
    image: [
      "https://images.unsplash.com/photo-1555507036-ab794f77665e?w=400",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    ],
    category: "Bakery",
    inStock: true
  },
  {
    name: "Vanilla Muffins",
    description: ["Sweet vanilla muffins", "Soft and moist", "Fresh baked daily", "Perfect with tea"],
    price: 120,
    offerPrice: 100,
    image: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1555507036-ab794f77665e?w=400",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    ],
    category: "Bakery",
    inStock: true
  },
  {
    name: "Chocolate Cake",
    description: ["Rich chocolate cake", "Moist and decadent", "Perfect for celebrations", "Fresh baked"],
    price: 500,
    offerPrice: 450,
    image: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400",
      "https://images.unsplash.com/photo-1555507036-ab794f77665e?w=400"
    ],
    category: "Bakery",
    inStock: true
  },

  // Drinks
  {
    name: "Coca Cola",
    description: ["Classic cola drink", "Refreshing taste", "Chilled and ready", "Perfect for meals"],
    price: 40,
    offerPrice: 35,
    image: [
      "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400",
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400",
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400"
    ],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Fresh Orange Juice",
    description: ["Freshly squeezed", "100% natural", "No preservatives", "Rich in vitamin C"],
    price: 80,
    offerPrice: 70,
    image: [
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400",
      "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400",
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400"
    ],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Pepsi",
    description: ["Cola soft drink", "Refreshing taste", "Chilled bottle", "Great with snacks"],
    price: 40,
    offerPrice: 35,
    image: [
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400",
      "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400",
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400"
    ],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Sprite",
    description: ["Lemon lime soda", "Clear and refreshing", "Caffeine free", "Perfect thirst quencher"],
    price: 40,
    offerPrice: 35,
    image: [
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400",
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400",
      "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400"
    ],
    category: "Drinks",
    inStock: true
  },
  {
    name: "Mineral Water",
    description: ["Pure mineral water", "Natural source", "Essential minerals", "Healthy hydration"],
    price: 20,
    offerPrice: 18,
    image: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400",
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400"
    ],
    category: "Drinks",
    inStock: true
  },

  // Instant
  {
    name: "Maggi Instant Noodles",
    description: ["2-minute noodles", "Masala flavor", "Quick and tasty", "Perfect snack"],
    price: 25,
    offerPrice: 22,
    image: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1571167530149-c9b4df33f32a?w=400",
      "https://images.unsplash.com/photo-1555507036-ab794f77665e?w=400"
    ],
    category: "Instant",
    inStock: true
  },
  {
    name: "Top Ramen",
    description: ["Curry flavor noodles", "Instant preparation", "Spicy and delicious", "Student favorite"],
    price: 20,
    offerPrice: 18,
    image: [
      "https://images.unsplash.com/photo-1571167530149-c9b4df33f32a?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1555507036-ab794f77665e?w=400"
    ],
    category: "Instant",
    inStock: true
  },
  {
    name: "Knorr Soup",
    description: ["Instant tomato soup", "Rich and creamy", "Just add hot water", "Comfort food"],
    price: 35,
    offerPrice: 30,
    image: [
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
      "https://images.unsplash.com/photo-1571167530149-c9b4df33f32a?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    ],
    category: "Instant",
    inStock: true
  },
  {
    name: "Yippee Noodles",
    description: ["Fun shaped noodles", "Colorful and tasty", "Kids favorite", "Quick preparation"],
    price: 30,
    offerPrice: 25,
    image: [
      "https://images.unsplash.com/photo-1571167530149-c9b4df33f32a?w=400",
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    ],
    category: "Instant",
    inStock: true
  },
  {
    name: "Maggi Oats",
    description: ["Healthy instant oats", "Masala flavor", "High fiber", "Nutritious breakfast"],
    price: 45,
    offerPrice: 40,
    image: [
      "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400",
      "https://images.unsplash.com/photo-1571167530149-c9b4df33f32a?w=400",
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
    ],
    category: "Instant",
    inStock: true
  }
];

export default productSeedData;