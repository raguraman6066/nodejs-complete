const mongoose = require("mongoose");

// Define Schema
const orderSchema = new mongoose.Schema({
  name: String,
  status: String,
  amount: Number,
});

// Create Model
const OrderModel = mongoose.model("orders", orderSchema);

async function insertData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("✅ Connected to MongoDB");

    // Create new order
    const newdata = new OrderModel({
      name: "ajay",
      status: "processing",
      amount: 444,
    });

    // Save to DB
    const result = await newdata.save();
    console.log("📌 Data Inserted:", result);
  } catch (err) {
    console.error("❌ Error inserting data:", err);
  } finally {
    mongoose.connection.close(); // Close connection after insertion
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Run function
insertData();
