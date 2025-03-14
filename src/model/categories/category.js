import gamming from "../../assets/images/gaming.png";
import slider1 from "../../assets/images/slider1.png";


export const BasicCategories = [
    {
        id: 1,
        img: gamming,
        name: "Women's Fashion",
        link: "/category/1",
        subcategories: [
            { name: "Dresses", img: slider1, link: "/category/1/dresses" },
            { name: "Tops", img: slider1, link: "/category/1/tops" },
            { name: "Shoes", img: slider1, link: "/category/1/shoes" },
            { name: "Accessories", img: slider1, link: "/category/1/accessories" }
        ]
    },
    {
        id: 2,
        img: gamming,
        name: "Men's Fashion",
        link: "/category/2",
        subcategories: [
            { name: "Shirts", img: slider1, link: "/category/2/shirts" },
            { name: "Pants", img: slider1, link: "/category/2/pants" },
            { name: "Shoes", img: slider1, link: "/category/2/shoes" },
            { name: "Watches", img: slider1, link: "/category/2/watches" }
        ]
    },
    {
        id: 3,
        img: gamming,
        name: "Electronics",
        link: "/category/3",
        subcategories: [
            { name: "Smartphones", img: slider1, link: "/category/3/smartphones" },
            { name: "Laptops", img: slider1, link: "/category/3/laptops" },
            { name: "Gaming Accessories", img: slider1, link: "/category/3/gaming-accessories" },
            { name: "Cameras", img: slider1, link: "/category/3/cameras" }
        ]
    },
    {
        id: 4,
        img: gamming,
        name: "Home & Lifestyle",
        link: "/category/4",
        subcategories: [
            { name: "Furniture", img: slider1, link: "/category/4/furniture" },
            { name: "Decor", img: slider1, link: "/category/4/decor" },
            { name: "Kitchen Appliances", img: slider1, link: "/category/4/kitchen-appliances" }
        ]
    },
    {
        id: 5,
        img: gamming,
        name: "Medicine",
        link: "/category/5",
        subcategories: [
            { name: "Prescription Drugs", img: slider1, link: "/category/5/prescription-drugs" },
            { name: "Supplements", img: slider1, link: "/category/5/supplements" },
            { name: "Medical Equipment", img: slider1, link: "/category/5/medical-equipment" }
        ]
    },
    {
        id: 6,
        img: gamming,
        name: "Sports & Fitness",
        link: "/category/6",
        subcategories: [
            { name: "Fitness Equipment", img: slider1, link: "/category/6/fitness-equipment" },
            { name: "Athletic Wear", img: slider1, link: "/category/6/athletic-wear" },
            { name: "Outdoor Gear", img: slider1, link: "/category/6/outdoor-gear" }
        ]
    },
    {
        id: 7,
        img: gamming,
        name: "Toys & Games",
        link: "/category/7",
        subcategories: [
            { name: "Action Figures", img: slider1, link: "/category/7/action-figures" },
            { name: "Board Games", img: slider1, link: "/category/7/board-games" }
        ]
    },
];

export const moreCategories = [
    {
        id: 8,
        img: gamming,
        name: "Beauty & Personal Care",
        link: "/category/8",
        subcategories: [
            { name: "Makeup", img: slider1, link: "/category/8/makeup" },
            { name: "Skincare", img: slider1, link: "/category/8/skincare" }
        ]
    },
    {
        id: 9,
        img: gamming,
        name: "Automotive",
        link: "/category/9",
        subcategories: [
            { name: "Car Accessories", img: slider1, link: "/category/9/car-accessories" },
            { name: "Motorcycle Gear", img: slider1, link: "/category/9/motorcycle-gear" }
        ]
    },
    {
        id: 10,
        img: gamming,
        name: "Grocery & Essentials",
        link: "/category/10",
        subcategories: [
            { name: "Fresh Produce", img: slider1, link: "/category/10/fresh-produce" },
            { name: "Beverages", img: slider1, link: "/category/10/beverages" }
        ]
    },
    {
        id: 11,
        img: gamming,
        name: "Books & Stationery",
        link: "/category/11",
        subcategories: [
            { name: "Fiction", img: slider1, link: "/category/11/fiction" },
            { name: "Non-Fiction", img: slider1, link: "/category/11/non-fiction" }
        ]
    },
    {
        id: 12,
        img: gamming,
        name: "Baby & Kids",
        link: "/category/12",
        subcategories: [
            { name: "Baby Clothing", img: slider1, link: "/category/12/baby-clothing" },
            { name: "Toys", img: slider1, link: "/category/12/toys" }
        ]
    },
    {
        id: 13,
        img: gamming,
        name: "Pet Supplies",
        link: "/category/13",
        subcategories: [
            { name: "Pet Food", img: slider1, link: "/category/13/pet-food" },
            { name: "Pet Toys", img: slider1, link: "/category/13/pet-toys" }
        ]
    },
    {
        id: 14,
        img: gamming,
        name: "Office & School Supplies",
        link: "/category/14",
        subcategories: [
            { name: "Notebooks", img: slider1, link: "/category/14/notebooks" },
            { name: "Pens & Markers", img: slider1, link: "/category/14/pens-markers" }
        ]
    }
]

export const getCategoryById = (categories, id) => {
    const parsedId = parseInt(id, 10);
    return categories.find(category => category.id === parsedId) || null;
};