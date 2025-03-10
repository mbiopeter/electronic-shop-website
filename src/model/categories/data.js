import phone from "../../assets/images/phone.png";
import camera from "../../assets/images/camera.png";
import computer from "../../assets/images/computer.png";
import gamming from "../../assets/images/gaming.png";
import headphone from "../../assets/images/headphone.png";
import watch from "../../assets/images/watch.png";


export const categories = [
    {
        name: "Woman’s Fashion",
        link: "/womens-fashion",
        subcategories: [
            { name: "Dresses", link: "/womens-fashion/dresses" },
            { name: "Tops", link: "/womens-fashion/tops" }
        ]
    },
    {
        name: "Men’s Fashion",
        link: "/mens-fashion",
        subcategories: [
            { name: "Shirts", link: "/mens-fashion/shirts" },
            { name: "Pants", link: "/mens-fashion/pants" }
        ]
    },
    { name: "Electronics", link: "/electronics" },
    { name: "Home & Lifestyle", link: "/home-lifestyle" },
    { name: "Medicine", link: "/medicine" },
];

export const moreCategories = [
    { name: "Phones", link: '/phones', img: phone },
    { name: "Computers", link: '/computers', img: computer },
    { name: "Smart Watch", link: '/smartwatch', img: watch },
    { name: "Headphones", link: '/headphones', img: headphone },
    { name: "Gamming", link: '/gamming', img: gamming },
    { name: "Camera", link: '/camera', img: camera },
]