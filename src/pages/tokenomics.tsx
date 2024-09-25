import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BasicPage from '../components/basic/BasicPage';

export default function AllPresales() {
    const [activeCategory, setActiveCategory] = useState(null);

    const data = {
        total: "92.88T",
        categories: [
            { name: "Liquidity", value: 51, color: "green" },
            { name: "Presale", value: 39, color: "blue" },
            { name: "Development Team", value: 10, color: "red" },
        ],
    };

    const totalValue = data.categories.reduce((sum, category) => sum + category.value, 0);

    const getStrokeDasharray = (value) => {
        const percentage = (value / totalValue) * 100;
        return `${percentage} ${100 - percentage}`;
    };

    return (
        <BasicPage activePage={'tokenomics'}>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
                <div className="relative w-64 h-64">
                    <svg className="absolute inset-0" viewBox="0 0 32 32">
                        {data.categories.map((category, index) => {
                            const offset = data.categories.slice(0, index).reduce((sum, cat) => sum + cat.value, 0);
                            const isActive = activeCategory === category.name;

                            return (
                                <motion.circle
                                    key={index}
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="transparent"
                                    stroke={isActive ? 'yellow' : category.color} // Highlight color for active category
                                    strokeWidth={isActive ? 6 : 4} // Thicker stroke for active category
                                    strokeDasharray={getStrokeDasharray(category.value)}
                                    strokeDashoffset={offset}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => setActiveCategory(isActive ? null : category.name)} // Toggle active category
                                    transition={{ duration: 0.2 }}
                                />
                            );
                        })}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold">{data.total}</span>
                    </div>
                </div>
                {activeCategory && (
                    <motion.div
                        className="mt-4 p-4 bg-gray-800 text-white rounded shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-lg font-bold">{activeCategory}</h3>
                        <p>{data.categories.find(cat => cat.name === activeCategory).value} units</p>
                    </motion.div>
                )}
            </div>
        </BasicPage>
    );
}
