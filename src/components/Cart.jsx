const Cart = () => {
  return (
    <main className="min-h-[calc(100vh-85px)] py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
      <section className="max-w-3xl mx-auto text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
          Cart
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Review your order before checkout.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Keep track of what you&apos;ve added, check the total, and make quick
          adjustments from one simple screen.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-6 max-w-6xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <div className="flex justify-between items-start gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Your Items</h2>
              <p className="text-gray-600">2 items saved for checkout</p>
            </div>
            <span className="bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
              Saved for later
            </span>
          </div>

          <div className="grid grid-cols-[72px_1fr_auto] gap-4 items-center p-4 bg-orange-50/50 rounded-xl border border-orange-100 mb-4">
            <div className="w-18 h-18 rounded-xl flex items-center justify-center bg-gradient-to-b from-orange-200 to-orange-300 text-gray-700 font-bold">
              Veg
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Margherita Pizza</h3>
              <p className="text-gray-600">Classic cheese and tomato base</p>
              <div className="flex gap-3 text-sm font-semibold text-gray-400 mt-1">
                <span>Qty 1</span>
                <span>15-20 mins</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <strong className="text-2xl text-gray-800">449</strong>
              <button type="button" className="text-red-600 font-bold hover:underline">Remove</button>
            </div>
          </div>

          <div className="grid grid-cols-[72px_1fr_auto] gap-4 items-center p-4 bg-orange-50/50 rounded-xl border border-orange-100 mb-4">
            <div className="w-18 h-18 rounded-xl flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 text-gray-700 font-bold">
              New
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Paneer Wrap</h3>
              <p className="text-gray-600">Spiced paneer with fresh veggies</p>
              <div className="flex gap-3 text-sm font-semibold text-gray-400 mt-1">
                <span>Qty 1</span>
                <span>10-15 mins</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <strong className="text-2xl text-gray-800">299</strong>
              <button type="button" className="text-red-600 font-bold hover:underline">Remove</button>
            </div>
          </div>

          <div className="bg-orange-50/80 p-4 rounded-xl text-orange-800 font-semibold border border-orange-200">
            Tip: add a drink or dessert to complete the meal.
          </div>
        </div>

        <aside className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md sticky top-24 self-start">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>

          <div className="flex justify-between text-gray-600 font-semibold mb-2">
            <span>Item total</span>
            <strong className="text-gray-800">748</strong>
          </div>
          <div className="flex justify-between text-gray-600 font-semibold mb-2">
            <span>Delivery fee</span>
            <strong className="text-gray-800">29</strong>
          </div>
          <div className="flex justify-between text-gray-600 font-semibold mb-4">
            <span>Taxes and charges</span>
            <strong className="text-gray-800">42</strong>
          </div>

          <div className="flex justify-between text-xl font-bold pt-4 border-t border-orange-100 mb-4">
            <span>To pay</span>
            <strong className="text-gray-800">819</strong>
          </div>

          <button type="button" className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-orange-600 transition transform hover:-translate-y-0.5">
            Proceed to Checkout
          </button>

          <div className="mt-4 p-4 bg-orange-50/80 rounded-xl border border-dashed border-orange-300">
            <span className="font-bold text-gray-800 block">Apply coupon</span>
            <p className="text-gray-600 text-sm">Use a promo code before placing your order.</p>
          </div>
        </aside>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">You may also like</h2>
            <p className="text-gray-600">Quick add-ons to finish the order</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">Cold Coffee</h3>
            <p className="text-gray-600">Refreshing drink to pair with your meal</p>
            <span className="text-orange-500 font-bold text-lg">129</span>
          </article>
          <article className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">Chocolate Brownie</h3>
            <p className="text-gray-600">Warm dessert with a rich finish</p>
            <span className="text-orange-500 font-bold text-lg">149</span>
          </article>
          <article className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">Garlic Bread</h3>
            <p className="text-gray-600">Simple side that fits any order</p>
            <span className="text-orange-500 font-bold text-lg">99</span>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Cart;