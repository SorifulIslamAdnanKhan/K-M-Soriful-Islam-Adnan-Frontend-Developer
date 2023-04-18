import React, { useEffect, useState } from 'react';
import CapsuleModal from '../CapsuleModal/CapsuleModal';
import Pagination from '../Pagination/Pagination';

const Capsules = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [capsulesPerPage, setCapsulesPerPage] = useState(10);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const [singleCapsule, setSingleCapsule] = useState([]);

    const handleClick = (capsule) => {
        setIsModalOpen(true);
        setSingleCapsule(capsule);
    };

    const [capsules, setCapsules] = useState([]);

    const [searchOne, setSearchOne] = useState("");
    const [searchTwo, setSearchTwo] = useState("");
    const [searchThree, setSearchThree] = useState("");
    const [filteredCapsules, setFilteredCapsules] = useState([]);

    const url = 'https://api.spacexdata.com/v3/capsules';

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCapsules(data)
                setFilteredCapsules(data);
            })
    }, []);

    const handleSearchOne = (event) => {
        setSearchOne(event.target.value);
    };

    const handleSearchTwo = (event) => {
        setSearchTwo(event.target.value);
    };

    const handleSearchThree = (event) => {
        setSearchThree(event.target.value);
    };

    useEffect(() => {
        const filteredData = capsules.filter((capsule) => {
            const filterOne =
                searchOne === '' ||
                capsule.status?.toLowerCase().includes(searchOne.toLowerCase());
            const filterTwo =
                searchTwo === '' ||
                capsule.original_launch?.toLowerCase().includes(searchTwo.toLowerCase());
            const filterThree =
                searchThree === '' || capsule.type?.toLowerCase().includes(searchThree.toLowerCase());
            return filterOne && filterTwo && filterThree;
        });
        setFilteredCapsules(filteredData);
    }, [capsules, searchOne, searchTwo, searchThree]);

    const lastPage = currentPage * capsulesPerPage;
    const firstPage = lastPage - capsulesPerPage;
    const currentCapsulesPerPage = filteredCapsules.slice(firstPage, lastPage)

    return (
        <div>
            <section className='py-8 p-4'>
                <h2 className='text-center text-xl p-4 font-bold'>Please Search Capsules</h2>
                <div className='md:flex justify-evenly items-center py-8 p-4 gap-3 text-center'>
                    <input
                        value={searchOne}
                        onChange={handleSearchOne}
                        type='text' className='py-4 w-full p-2 mb-2 rounded-md bg-slate-100'
                        placeholder='Find Rockets By Status'
                    />
                    <input
                        value={searchTwo}
                        onChange={handleSearchTwo}
                        type='text'
                        className='py-4 w-full p-2 mb-2 rounded-md bg-slate-100'
                        placeholder='Find Rockets By Original_launch'
                    />
                    <input
                        value={searchThree}
                        onChange={handleSearchThree}
                        type='text'
                        className='py-4 w-full p-2 mb-2 rounded-md bg-slate-100'
                        placeholder=' Rockets By Type' />
                </div>
            </section>
            <section className='py-10 p-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                    {
                        currentCapsulesPerPage.map(capsule => <div key={capsule.capsule_serial} className='text-left border p-2 rounded-lg shadow-lg shadow-slate-500/50'>
                            <p className='text-lg'>Status: {capsule.status}</p>
                            <p className='text-lg'>Original Launch: {capsule.original_launch}</p>
                            <p className='text-lg'>Missions: {capsule.missions[0]?.name}</p>
                            <p className='text-lg'>Landing: {capsule.landings}</p>
                            <p className='text-lg'>Type: {capsule.type}</p>
                            <div className='py-6'>
                                <button onClick={() => handleClick(capsule)} className='w-full rounded-md text-white bg-slate-950 hover:bg-indigo-700 p-4 text-sm'>View Details</button>
                                <CapsuleModal isOpen={isModalOpen} onClose={handleModalClose} capsule={singleCapsule}></CapsuleModal>
                            </div>
                        </div>)
                    }
                </div>
                <Pagination
                    totalCapsules={capsules.length}
                    capsulesPerPage={capsulesPerPage} 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                >
                </Pagination>
            </section>
        </div>
    );
};

export default Capsules;