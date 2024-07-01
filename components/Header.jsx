import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='flex p-5 items-center justify-between'>
      <h1>Logo</h1>
      <ul className='hidden md:flex items-center gap-10 font-medium'>
        <li>Restaurants</li>
        <li>Recieps</li>
        <li>About</li>
        <li>Page</li>
      </ul>

      <div className='flex gap-2'>
        <Button variant="ghost">Login</Button>
        <Button className="rounded-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
