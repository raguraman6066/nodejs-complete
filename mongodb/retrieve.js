const mongoose = require("mongoose");

// Schema
const OrderSchema = new mongoose.Schema({
  name: String,
  status: String,
  amount: Number,
});

// Model
const OrderModel = mongoose.model("orders", OrderSchema);

// Connect to DB
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

// Separate method for finding data
async function findOrder() {
  try {
    const data = await OrderModel.findOne(); // Get one order
    console.log("📌 Retrieved Order:", data);
  } catch (err) {
    console.error("❌ Error fetching order:", err);
  } finally {
    mongoose.connection.close(); // Close DB connection
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Execute functions
connectDB().then(findOrder);

console.log("done"); // This will execute before the async functions complete
