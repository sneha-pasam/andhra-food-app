'use client';
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  { id: 1, name: "Andhra Chicken Curry", price: 180 },
  { id: 2, name: "Gongura Mutton", price: 250 },
  { id: 3, name: "Pesarattu Dosa", price: 90 },
  { id: 4, name: "Andhra Veg Meals", price: 120 },
];

export default function AndhraFoodApp() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert(`Order placed for ₹${totalPrice}. Thank you! 🍽️`);
      setCart([]);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-600">
        Welcome to Andhra Food
      </h1>

      <h2 className="text-xl font-semibold mb-3">Menu</h2>
      <div className="grid gap-4">
        {menuItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-gray-500">₹{item.price}</p>
              </div>
              <Button onClick={() => addToCart(item)}>Add</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3">Cart</h2>
      <div className="space-y-2">
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <Card key={index}>
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                  <Button variant="outline" onClick={() => removeFromCart(index)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* ✅ Total price */}
            <div className="text-right font-semibold text-lg mt-4">
              Total: ₹{totalPrice}
            </div>

            {/* ✅ Place Order button */}
            <div className="text-center mt-4">
              <Button className="w-full" onClick={placeOrder}>
                Place Order
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
