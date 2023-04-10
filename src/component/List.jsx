import React from 'react';

const List = ({ jl }) => {
    return (
        <div>
            <div className='mb-5'>
                <img className='w-16 h-16' src={jl.logo} alt="" />
            </div>

            <p className='font-bold'>{jl.title}</p>
            <p>{jl.available}</p>
        </div>
    );
};

export default List;