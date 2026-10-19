'use client';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
// can add below for tooltip for coming soon pages if needed
// import { Tooltip, type TooltipPassThroughOptions } from 'primereact/tooltip';

// const tooltipPt: TooltipPassThroughOptions = {
//     arrow: {
//         style: {
//             borderBottomColor: 'rgba(31, 41, 55, 0.92)'
//         }
//     },
//     text: {
//         style: {
//             background: 'rgba(31, 41, 55, 0.92)',
//             color: '#fff',
//             padding: '6px 10px',
//             borderRadius: '6px',
//             fontSize: '12px',
//             lineHeight: '1.4',
//             whiteSpace: 'nowrap',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
//         }
//     }
// };

const Navbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => setY(window.scrollY));
        return () => window.removeEventListener('scroll', () => setY(window.scrollY));
    }, []);

    const navItems = [{ label: 'page1', path: '/page-1', comingSoon: false, id: 'page1' }];

    return (
        <div
            className={`sticky top-0 flex flex-row gap-4 items-center px-4 w-full bg-white py-1 z-20 ${
                y > 10 ? 'shadow-xl' : 'shadow-sm'
            }`}
        >
            {/* <Tooltip target=".page-#" position="right" content="Coming Soon!" pt={tooltipPt} mouseTrack={false} /> */}
            <div className="flex flex-row gap-6">
                <img
                    src="/logos/vite.svg"
                    alt="logo"
                    className="w-14 hover:cursor-pointer transition-transform duration-300 ease-out hover:-rotate-12"
                    onClick={() => navigate('/')}
                />

                <div className="flex flex-row gap-4 items-center">
                    {navItems.map(item =>
                        item.comingSoon ? (
                            <button
                                key={item.path}
                                className={`items-center justify-center my-auto hover:cursor-not-allowed group inline-grid place-items-center ${item.id}`}
                            >
                                <span
                                    className="col-start-1 row-start-1 text-headingSm font-medium invisible select-none"
                                    aria-hidden="true"
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`col-start-1 row-start-1 text-headingSm text-text-secondary/50 group-hover:text-text-secondary/50 group-hover:font-medium font-light`}
                                >
                                    {item.label}
                                </span>
                            </button>
                        ) : (
                            <button
                                key={item.path}
                                className="items-center justify-center my-auto hover:cursor-pointer group inline-grid place-items-center"
                                onClick={() => navigate(item.path)}
                            >
                                {/* Grid wrapper stacks visible text over invisible bold width placeholder */}
                                <span
                                    className="col-start-1 row-start-1 text-headingSm font-medium invisible select-none"
                                    aria-hidden="true"
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`col-start-1 row-start-1 text-headingSm group-hover:text-primary group-hover:font-medium ${
                                        location.pathname === item.path
                                            ? 'text-primary font-medium'
                                            : 'text-text-secondary font-light'
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
