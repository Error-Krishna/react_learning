const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const defaultOffer = {
    header: "Special offer",
    subHeader: "Available on selected items",
};

const themeCatalog = [
    {
        keywords: ["pizza", "domino", "pizzeria"],
        description:
            "Hand-tossed pizzas, creamy dips, and cheesy sides that land hot and fast.",
        sections: [
            {
                title: "Recommended",
                subtitle: "Most ordered from this pizza kitchen",
                items: [
                    {
                        name: "Margherita Feast",
                        description: "Classic tomato, mozzarella, and basil on a crisp base.",
                        price: "₹249",
                        type: "Veg",
                        badge: "Popular",
                    },
                    {
                        name: "Farmhouse Pizza",
                        description: "Loaded with vegetables and finished with oregano spice.",
                        price: "₹349",
                        type: "Veg",
                    },
                    {
                        name: "Cheese Burst Combo",
                        description: "A heavy cheese pizza paired with garlic bread and dip.",
                        price: "₹429",
                        type: "Best seller",
                        badge: "Combo",
                    },
                ],
            },
            {
                title: "Sides and dips",
                subtitle: "Add-ons that make the box feel complete",
                items: [
                    {
                        name: "Garlic Breadsticks",
                        description: "Baked breadsticks with a buttery garlic glaze.",
                        price: "₹129",
                        type: "Side",
                    },
                    {
                        name: "Cheesy Dip",
                        description: "Rich dip that works with every slice.",
                        price: "₹59",
                        type: "Add-on",
                    },
                    {
                        name: "Loaded Potato Wedges",
                        description: "Crunchy wedges topped with seasoning and cheese sauce.",
                        price: "₹149",
                        type: "Side",
                    },
                ],
            },
            {
                title: "Beverages",
                subtitle: "Cold drinks to balance the spice",
                items: [
                    {
                        name: "Iced Lemon Soda",
                        description: "Refreshing fizzy drink with a citrus hit.",
                        price: "₹89",
                        type: "Drink",
                    },
                    {
                        name: "Cold Coffee",
                        description: "Creamy coffee shake with a chilled finish.",
                        price: "₹119",
                        type: "Drink",
                    },
                ],
            },
        ],
    },
    {
        keywords: ["burger", "kfc", "fried chicken", "fast food"],
        description:
            "Juicy burgers, crunchy fries, and comfort food combos built for quick cravings.",
        sections: [
            {
                title: "Top picks",
                subtitle: "Fast food that people come back for",
                items: [
                    {
                        name: "Double Cheeseburger",
                        description: "Two patties, melted cheese, pickles, and signature sauce.",
                        price: "₹219",
                        type: "Non-veg",
                        badge: "Popular",
                    },
                    {
                        name: "Chicken Crunch Burger",
                        description: "Crispy chicken fillet with fresh lettuce and mayo.",
                        price: "₹239",
                        type: "Non-veg",
                    },
                    {
                        name: "Loaded Fries Meal",
                        description: "Burger, fries, and a cold drink in one value combo.",
                        price: "₹329",
                        type: "Combo",
                    },
                ],
            },
            {
                title: "Sides",
                subtitle: "The extra bite people usually add",
                items: [
                    {
                        name: "Peri Peri Fries",
                        description: "Spiced fries with a tangy heat.",
                        price: "₹99",
                        type: "Side",
                    },
                    {
                        name: "Chicken Popcorn",
                        description: "Bite-sized crispy chicken pieces.",
                        price: "₹159",
                        type: "Snack",
                    },
                    {
                        name: "Onion Rings",
                        description: "Golden rings with a crisp coating.",
                        price: "₹109",
                        type: "Side",
                    },
                ],
            },
            {
                title: "Drinks",
                subtitle: "Quick refreshers for the meal",
                items: [
                    {
                        name: "Classic Cola",
                        description: "Chilled and fizzy.",
                        price: "₹69",
                        type: "Drink",
                    },
                    {
                        name: "Mango Float",
                        description: "Thick mango drink with a dessert vibe.",
                        price: "₹99",
                        type: "Drink",
                    },
                ],
            },
        ],
    },
    {
        keywords: ["coffee", "starbucks", "beverages", "cafe"],
        description:
            "Espresso drinks, frappes, and bakery pairings for a slower kind of order.",
        sections: [
            {
                title: "Coffee bar",
                subtitle: "Signature drinks people tend to bookmark",
                items: [
                    {
                        name: "Cappuccino",
                        description: "Foamy milk and balanced espresso.",
                        price: "₹179",
                        type: "Hot",
                        badge: "Classic",
                    },
                    {
                        name: "Cold Brew",
                        description: "Slow-steeped coffee served over ice.",
                        price: "₹199",
                        type: "Cold",
                    },
                    {
                        name: "Caramel Frappe",
                        description: "Creamy blended coffee with caramel syrup.",
                        price: "₹239",
                        type: "Cold",
                    },
                ],
            },
            {
                title: "Bakery",
                subtitle: "Small bites that pair well with coffee",
                items: [
                    {
                        name: "Blueberry Muffin",
                        description: "Soft muffin with a sweet berry center.",
                        price: "₹129",
                        type: "Bakery",
                    },
                    {
                        name: "Chocolate Croissant",
                        description: "Buttery pastry with a chocolate ribbon.",
                        price: "₹149",
                        type: "Bakery",
                    },
                    {
                        name: "Banana Loaf Slice",
                        description: "Moist loaf slice with a warm cinnamon note.",
                        price: "₹119",
                        type: "Bakery",
                    },
                ],
            },
        ],
    },
    {
        keywords: ["dessert", "cake", "ice cream", "bakery"],
        description:
            "Sweet treats, cakes, and scoops that make the whole page feel like dessert first.",
        sections: [
            {
                title: "Best sellers",
                subtitle: "The sweetest things on the board",
                items: [
                    {
                        name: "Chocolate Truffle Slice",
                        description: "Dense, glossy, and rich in cocoa flavor.",
                        price: "₹189",
                        type: "Dessert",
                        badge: "Popular",
                    },
                    {
                        name: "Belgian Waffle Stack",
                        description: "Crisp waffles topped with cream and chocolate sauce.",
                        price: "₹239",
                        type: "Dessert",
                    },
                    {
                        name: "Ice Cream Sundae",
                        description: "Scoops, sauce, and crunch in one bowl.",
                        price: "₹199",
                        type: "Dessert",
                    },
                ],
            },
            {
                title: "Cakes and boxes",
                subtitle: "For birthdays, celebrations, and late cravings",
                items: [
                    {
                        name: "Half-kg Chocolate Cake",
                        description: "Soft sponge layered with creamy chocolate frosting.",
                        price: "₹499",
                        type: "Cake",
                    },
                    {
                        name: "Red Velvet Box",
                        description: "Slices packed with cream cheese frosting.",
                        price: "₹279",
                        type: "Cake",
                    },
                    {
                        name: "Assorted Brownie Pack",
                        description: "A mix of gooey brownies with different toppings.",
                        price: "₹249",
                        type: "Dessert",
                    },
                ],
            },
        ],
    },
    {
        keywords: ["south indian", "dosa", "idli", "spice"],
        description:
            "Comforting South Indian meals, filter coffee, and dosa plates with generous portions.",
        sections: [
            {
                title: "Breakfast favorites",
                subtitle: "Always good, any time of day",
                items: [
                    {
                        name: "Masala Dosa",
                        description: "Crispy dosa rolled around a spiced potato filling.",
                        price: "₹149",
                        type: "Veg",
                        badge: "Best seller",
                    },
                    {
                        name: "Idli Sambar",
                        description: "Steamed idlis served with sambar and chutney.",
                        price: "₹119",
                        type: "Veg",
                    },
                    {
                        name: "Podi Uttapam",
                        description: "Soft uttapam topped with podi and onions.",
                        price: "₹159",
                        type: "Veg",
                    },
                ],
            },
            {
                title: "Meals",
                subtitle: "A full plate when you want something filling",
                items: [
                    {
                        name: "Mini Tiffin",
                        description: "A little bit of everything on one plate.",
                        price: "₹229",
                        type: "Veg",
                    },
                    {
                        name: "Meals Combo",
                        description: "Rice, curries, chutneys, and a sweet finish.",
                        price: "₹279",
                        type: "Veg",
                    },
                ],
            },
        ],
    },
];

const genericSections = [
    {
        title: "Recommended",
        subtitle: "Handpicked items for the first scroll",
        items: [
            {
                name: "Chef Special Bowl",
                description: "A balanced mix of the kitchen's most popular flavors.",
                price: "₹229",
                type: "House special",
                badge: "Popular",
            },
            {
                name: "Signature Combo",
                description: "Main dish, side, and drink bundled together.",
                price: "₹299",
                type: "Combo",
            },
            {
                name: "Quick Bite Plate",
                description: "A lighter option for smaller cravings.",
                price: "₹179",
                type: "Snack",
            },
        ],
    },
    {
        title: "Bestsellers",
        subtitle: "The menu items people keep repeating",
        items: [
            {
                name: "Loaded Main Course",
                description: "Hearty and filling with balanced spices.",
                price: "₹349",
                type: "Main",
            },
            {
                name: "Crunchy Side Platter",
                description: "A set of crispy add-ons for the main order.",
                price: "₹149",
                type: "Side",
            },
            {
                name: "Fresh Beverage",
                description: "A chilled drink to round out the meal.",
                price: "₹99",
                type: "Drink",
            },
        ],
    },
];

const getThemeForRestaurant = (restaurant = {}) => {
    const searchableText = [
        restaurant.name,
        ...(restaurant.cuisines || []),
        restaurant.areaName,
        restaurant.locality,
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    return (
        themeCatalog.find((theme) =>
            theme.keywords.some((keyword) => searchableText.includes(keyword))
        ) || null
    );
};

const buildFallbackImage = (name = "restaurant") =>
    `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80&${encodeURIComponent(
        name
    )}`;

export const getRestaurantDetail = (resId, restaurant = {}) => {
    const theme = getThemeForRestaurant(restaurant);
    const cuisines =
        restaurant.cuisines?.filter(Boolean) || ["Signature dishes", "Local favourites"];
    const deliveryTime = restaurant.sla?.deliveryTime || 30;
    const avgRating = restaurant.avgRating || "4.4";
    const costForTwo = restaurant.costForTwo || "₹399 for two";
    const area = restaurant.areaName || restaurant.locality || "Popular city spot";
    const offer = restaurant.aggregatedDiscountInfoV3 || defaultOffer;
    const image = restaurant.cloudinaryImageId
        ? `${CDN_URL}${restaurant.cloudinaryImageId}`
        : buildFallbackImage(restaurant.name || resId);

    return {
        id: resId,
        name: restaurant.name || `Restaurant ${resId}`,
        description:
            theme?.description ||
            "A mock restaurant detail page with a full menu, styled to feel like a real ordering experience.",
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        area,
        image,
        offerLabel: offer.header || "Special offer",
        offerText: offer.subHeader || "Available right now",
        highlights: [
            `${avgRating} rating from diners`,
            `${deliveryTime} min delivery estimate`,
            "Mock menu data for the detail page",
            theme ? "Menu adapted to the restaurant type" : "Generic menu fallback",
        ],
        menuSections: theme?.sections || genericSections,
    };
};
