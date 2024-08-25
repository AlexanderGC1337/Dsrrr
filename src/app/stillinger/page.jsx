'use client'

import React, { useState, useEffect } from 'react';
import useRequestData from '@/app/components/UseRequestData';
import { Tooltip } from 'react-tooltip'

const Stillinger = () => {
    const { data, makeRequest } = useRequestData();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedKlasse, setSelectedKlasse] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    useEffect(() => {
        makeRequest("https://dansksuperrally-cms.pockethost.io/api/collections/stilling/records?perPage=100");
    }, []);

    const items = data?.items || [];

    const calculateColumnTotal = (item, column) => {
        return Number(item[`ge${column}`] || 0) + Number(item[`kl${column}`] || 0) + Number(item[`ps${column}`] || 0);
    };

    const calculateTotalSum = (item) => {
        let sum = 0;
        for (let i = 1; i <= 6; i++) {
            const suffix = i === 1 ? '' : i;
            sum += calculateColumnTotal(item, suffix);
        }
        return sum;
    };

    const filteredData = items.filter(item => {
        const matchesKlasse = selectedKlasse ? item.klasse === selectedKlasse : true;
        const matchesSearch = searchTerm
            ? item.forstekore.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.andenkore.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        return matchesKlasse && matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleKlasseClick = (klasse) => {
        setSelectedKlasse(klasse === selectedKlasse ? null : klasse);
        setCurrentPage(1);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const uniqueKlasses = [...new Set(items.map(item => item.klasse))].sort((a, b) => a.localeCompare(b));


    /* if (!data) {
        return <div>Loading...</div>;
    } */
    return (
        <>

            <h1 className='text-center my-14 text-4xl text-secondary uppercase font-semibold'>
                Aktuelle stillinger
            </h1>
            <div className="container mx-auto mb-4">
                <h2 className="text-xl mb-2">Filtrér ud fra klasser</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                    <button
                        onClick={() => setSelectedKlasse(null)}
                        className={`px-3 py-1 border rounded ${selectedKlasse === null ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    >
                        Alle
                    </button>
                    {uniqueKlasses.map(klasse => (
                        <button
                            key={klasse}
                            onClick={() => handleKlasseClick(klasse)}
                            className={`px-3 py-1 border rounded ${selectedKlasse === klasse ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                        >
                            {klasse}
                        </button>
                    ))}
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Søg efter kører..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>
            <div className="overflow-x-auto container mx-auto border border-primary rounded">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className='text-sm'>Nummer</th>
                            <th className='text-sm'>Første kører</th>
                            <th className='text-sm'>Anden kører</th>
                            <th className='text-sm'>Bil</th>
                            <th className='text-sm'>Klasse</th>
                            <th className='text-sm'>DSR 1</th>
                            <th className='text-sm'>DSR 2</th>
                            <th className='text-sm'>DSR 3</th>
                            <th className='text-sm'>DSR 4</th>
                            <th className='text-sm'>DSR 5</th>
                            <th className='text-sm'>DSR 6</th>
                            <th className='text-sm'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td>{indexOfFirstItem + index + 1}</td>
                                <td>{item.forstekore}</td>
                                <td>{item.andenkore}</td>
                                <td>{item.bil}</td>
                                <td>{item.klasse}</td>
                                <td>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Gen: ${item.ge} Kl: ${item.kl} PS: ${item.ps}`}>
                                        {calculateColumnTotal(item, '')}
                                    </a>
                                    <Tooltip id="my-tooltip" />


                                </td>
                                <td>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Gen: ${item.ge2} Kl: ${item.kl2} PS: ${item.ps2}`}>
                                        {calculateColumnTotal(item, '2')}
                                    </a>
                                    <Tooltip id="my-tooltip" />


                                </td>
                                <td>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Gen: ${item.ge3} Kl: ${item.kl3} PS: ${item.ps3}`}>
                                        {calculateColumnTotal(item, '3')}
                                    </a>
                                    <Tooltip id="my-tooltip" />


                                </td>
                                <td>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Gen: ${item.ge4} Kl: ${item.kl4} PS: ${item.ps4}`}>
                                        {calculateColumnTotal(item, '4')}
                                    </a>
                                    <Tooltip id="my-tooltip" />


                                </td>
                                <td>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Gen: ${item.ge5} Kl: ${item.kl5} PS: ${item.ps5}`}>
                                        {calculateColumnTotal(item, '5')}
                                    </a>
                                    <Tooltip id="my-tooltip" />


                                </td>
                                <td>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Gen: ${item.ge6} Kl: ${item.kl6} PS: ${item.ps6}`}>
                                        {calculateColumnTotal(item, '6')}
                                    </a>
                                    <Tooltip id="my-tooltip" />


                                </td>
                               {/*  <td>{calculateColumnTotal(item, '2')}</td>
                                <td>{calculateColumnTotal(item, '3')}</td>
                                <td>{calculateColumnTotal(item, '4')}</td>
                                <td>{calculateColumnTotal(item, '5')}</td>
                                <td>{calculateColumnTotal(item, '6')}</td> */}
                                <td>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination flex justify-center space-x-2 mt-5 mb-20'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className={`page-link px-3 py-1 border rounded ${currentPage === number ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Stillinger;