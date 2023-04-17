import React from 'react';

const Pagination = ({totalCapsules, capsulesPerPage, setCurrentPage, currentPage}) => {

    let pages = [];

    for(let i = 1; i<= Math.ceil(totalCapsules/capsulesPerPage); i++){
        pages.push(i);
    }

    return (
        <div className='py-10 text-center'>
            {
                pages.map((page, index)=>{
                    return <button key={index} onClick={()=> setCurrentPage(page)} className={page == currentPage ? 'rounded px-6 py-2 bg-blue-500 text-white' : 'rounded px-6 py-2 bg-slate-100 text-slate-950'}>{page}</button>
                })
            }
            
        </div>
    );
};

export default Pagination;