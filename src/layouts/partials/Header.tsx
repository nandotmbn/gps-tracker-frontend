import React from 'react';

function Header() {
  return (
    <div className="w-full sticky flex-1 bg-teal-700 flex flex-row justify-end text-white">
      <div className="flex flex-row items-center justify-center px-4">
        <i className='material-icons text-4xl mr-8'>notifications</i>
        <p className='mr-2'>Account Name</p>
        <i className='material-icons text-4xl'>account_circle</i>
      </div>
    </div>
  );
}

export default Header;