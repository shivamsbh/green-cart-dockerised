import mongoose from 'mongoose';
import Product from './models/Product.js';
import productSeedData from './seeds/productSeed.js';
import { config } from 'dotenv';

config();

const runSeed = async () => {
  try {
    // Check if products already exist
    const existingProducts = await Product.countDocuments();
    
    if (existingProducts > 0) {
      console.log(`✅ Database already contains ${existingProducts} products. Skipping seed.`);
      return;
    }

    console.log('🌱 Starting database seeding...');
    
    // Insert all seed data
    const insertedProducts = await Product.insertMany(productSeedData);
    
    console.log(`✅ Successfully seeded ${insertedProducts.length} products to the database!`);
    console.log('📦 Categories seeded:');
    
    // Show seeded categories
    const categories = [...new Set(productSeedData.map(p => p.category))];
    categories.forEach(category => {
      const count = productSeedData.filter(p => p.category === category).length;
      console.log(`   • ${category}: ${count} products`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
};

export default runSeed;