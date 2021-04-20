import React, { useState, useEffect } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';

export const intialTeamMembers = [
    {
        id: uuid(),
        username: 'Jim Halpert',
        email: 'jhalpert@dundermifflinpaper.com',
        role: 'sales'
    }
];

function App() {
  return (
    <div>
      <p>hi</p>
      <Form />
    </div>
  );
}

export default App;
