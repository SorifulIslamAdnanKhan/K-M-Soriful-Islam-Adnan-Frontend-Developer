import React, { useEffect, useState } from 'react';
import CapsuleModal from '../CapsuleModal/CapsuleModal';

const Capsules = () => {

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

    const url = 'https://api.spacexdata.com/v3/capsules';

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setCapsules(data))
    }, []);

    return (
        <section className='py-10 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    capsules.map(capsule => <div key={capsule.capsule_serial} className='text-left border p-2 rounded-lg shadow-lg shadow-slate-500/50'>
                        <p className='text-lg'>Status: {capsule.status}</p>
                        <p className='text-lg'> Original Launch: {capsule.original_launch}</p>
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
            <div className='py-10 text-center grid grid-cols-5 md:grid-cols-10'>
                <span className='border px-6 py-2 bg-slate-100'>1</span>
                <span className='border px-6 py-2 bg-slate-100'>2</span>
                <span className='border px-6 py-2 bg-slate-100'>3</span>
                <span className='border px-6 py-2 bg-slate-100'>4</span>
                <span className='border px-6 py-2 bg-slate-100'>5</span>
                <span className='border px-6 py-2 bg-slate-100'>6</span>
                <span className='border px-6 py-2 bg-slate-100'>7</span>
                <span className='border px-6 py-2 bg-slate-100'>8</span>
                <span className='border px-6 py-2 bg-slate-100'>9</span>
                <span className='border px-6 py-2 bg-slate-100'>10</span>
            </div>
        </section>
    );
};

export default Capsules;