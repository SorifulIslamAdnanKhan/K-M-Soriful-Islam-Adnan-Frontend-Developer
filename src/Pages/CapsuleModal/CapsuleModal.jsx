import React from 'react';

const CapsuleModal = ({ isOpen, onClose, capsule }) => {
    const {status, original_launch, missions, landings, type, details} = capsule;
    return (
        <div className={`fixed inset-0 z-10 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 opacity-25"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-indigo-200 rounded-lg p-6">
                    <div className="mb-4">
                        <h2 className="text-lg font-medium">Capsule Details</h2>
                    </div>
                    <div className="mb-4 text-left text-slate-900">
                        <p className='text-lg'>Status: {status}</p>
                        <p className='text-lg'> Original Launch: {original_launch}</p>
                        <p className='text-lg'>Missions: {missions?.[0]?.name}</p>
                        <p className='text-lg'>Missions: {missions?.[0]?.flight}</p>
                        <p className='text-lg'>Landing: {landings}</p>
                        <p className='text-lg'>Type: {type}</p>
                        <p className='text-lg'>Details: {details}</p>
                    </div>
                    <div className="text-right">
                        <button
                            type="button"
                            className="px-4 py-2 text-white rounded-md bg-indigo-700 hover:bg-slate-950"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapsuleModal;