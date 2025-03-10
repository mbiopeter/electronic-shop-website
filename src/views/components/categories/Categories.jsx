import React, { useState } from "react";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { categories } from "../../../model/categories/data";


const Categories = () => {
    const [openCategories, setOpenCategories] = useState({});

    const toggleCategory = (index) => {
        setOpenCategories((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="w-[217px] max-h-[344px] overflow-y-auto bg-white border-r-[#f0eeee] border-r-[1px] p-4">
            {categories.map((category, index) => (
                <div key={index} className="border-0 py-2">
                    <div
                        className="flex justify-between items-center text-[16px] cursor-pointer text-[#000000] font-[400]"
                        onClick={() => toggleCategory(index)}>
                        <Link to={category.link}>{category.name}</Link>
                        {category.subcategories && (
                            <div className={`transition-transform duration-700 ${openCategories[index] ? "rotate-90" : ""}`}>
                                <ChevronRight />
                            </div>
                        )}
                    </div>
                    {category.subcategories && (
                        <div
                            className={`overflow-hidden transition-all duration-700 ${
                                openCategories[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                            <div className="ml-4 mt-2 text-gray-500">
                                {category.subcategories.map((sub, subIndex) => (
                                    <div key={subIndex} className="py-1">
                                        <Link to={sub.link}>{sub.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Categories;
