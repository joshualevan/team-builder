import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';

const teamList = [
    {
        id: uuid(),
        name: 'Jim Halpert',
        email: 'jhalpert@dundermifflinpaper.com',
        role: 'Sales'
    }
];

const initialFormValues = {
  id: uuid(),
  name: '',
  email: '',
  role: ''
}

const change = e =>

export default function App() {
  const [teamMembers, setTeamMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div>
      <Form team = {teamMembers} values = {formValues} change = {change}/>
    </div>
  );
}
