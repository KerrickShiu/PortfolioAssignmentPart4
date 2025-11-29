import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, List, ListItem } from '@mui/material';

export default function Education() {
  const [formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '',
    description: ''
  });
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/qualifications')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/qualifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      setEntries([...entries, data]);
      setFormData({ title: '', firstname: '', lastname: '', email: '', completion: '', description: '' });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Education</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Title" name="title" value={formData.title} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="First Name" name="firstname" value={formData.firstname} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Email" name="email" value={formData.email} onChange={handleChange} />
        <TextField fullWidth margin="normal" type="date" label="Completion Date" name="completion" value={formData.completion} onChange={handleChange} InputLabelProps={{ shrink: true }} />
        <TextField fullWidth margin="normal" label="Description" name="description" value={formData.description} onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>

      <List>
        {entries.map((entry) => (
          <ListItem key={entry._id}>
            <div>
              <Typography variant="subtitle1">{entry.title}</Typography>
              <Typography>{entry.firstname} {entry.lastname}</Typography>
              <Typography>{entry.email}</Typography>
              <Typography>{new Date(entry.completion).toLocaleDateString()}</Typography>
              <Typography>{entry.description}</Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}