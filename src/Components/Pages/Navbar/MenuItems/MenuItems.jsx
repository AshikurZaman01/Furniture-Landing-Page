import React, { useState } from 'react';
import Items from './Items';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const MenuItems = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Shop', path: '/shop' },
        { id: 3, name: 'About Us', path: '/about' },
        { id: 4, name: 'Contact', path: '/contact' },
    ];

    const handleOpenBtn = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:py-6">


                    {/* Mobile Toggle Button */}
                    <div className="md:hidden cursor-pointer text-3xl text-primary">
                        {isOpen ? (
                            <IoMdClose onClick={handleOpenBtn} />
                        ) : (
                            <FaBarsStaggered onClick={handleOpenBtn} />
                        )}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <ul className="flex items-center space-x-8">
                            {routes.map((route) => (
                                <Items key={route.id} route={route} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-40">
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50"
                    >
                        <div className="flex justify-end p-4">
                            <IoMdClose
                                className="text-3xl text-primary cursor-pointer"
                                onClick={handleOpenBtn}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-8 py-6">
                            <ul className="flex flex-col items-center gap-6">
                                {routes.map((route) => (
                                    <Items key={route.id} route={route} />
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            )}
        </nav>
    );
};

export default MenuItems;
