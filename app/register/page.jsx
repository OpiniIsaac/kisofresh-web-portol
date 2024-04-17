'use client'
import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

export default function FarmerRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [location, setLocation] = useState('');
  const [cropInterests, setCropInterests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Farm Size (acres)"
            variant="outlined"
            fullWidth
            type="number"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Crop Interests"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={cropInterests}
            onChange={(e) => setCropInterests(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
