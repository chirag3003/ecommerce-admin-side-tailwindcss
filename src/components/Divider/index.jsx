import React from 'react';

function Divider(props) {
    return (
        <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
        </div>
    );
}

export default Divider;