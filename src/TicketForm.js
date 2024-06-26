import React, { useState, useEffect } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import menuItems from './menuItems.json';

const TicketForm = () => {
  const theme = useTheme();

  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  useEffect(() => {
    // You can fetch menu items from an API here if needed
  }, []);

  const handleStartLocationChange = (e) => {
    setStartLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleNumTicketsChange = (e) => {
    setNumTickets(parseInt(e.target.value));
  };

  const incrementNumTickets = () => {
    setNumTickets(numTickets + 1);
  };

  const decrementNumTickets = () => {
    if (numTickets > 1) {
      setNumTickets(numTickets - 1);
    }
  };

  const handleGetTicket = () => {
    if (startLocation === destination) {
      toast.error('Start and destination cannot be the same!');
      return;
    }
    // Logic to handle ticket generation or navigation to ticket page
    console.log('Start Location:', startLocation);
    console.log('Destination:', destination);
    console.log('Number of Tickets:', numTickets);
  };

  return (
    <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', color: theme.palette.text.primary }}>
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="startLocationLabel" style={{ color: theme.palette.text.primary }}>From:</InputLabel>
            <Select
              labelId="startLocationLabel"
              id="startLocation"
              value={startLocation}
              label="From"
              onChange={handleStartLocationChange}
              style={{ color: theme.palette.text.primary }}
            >
              <MenuItem value="">Select start location</MenuItem>
              {menuItems.map((item) => (
                <MenuItem key={item.id} value={item.label}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="destinationLabel" style={{ color: theme.palette.text.primary }}>To:</InputLabel>
            <Select
              labelId="destinationLabel"
              id="destination"
              value={destination}
              label="To"
              onChange={handleDestinationChange}
              style={{ color: theme.palette.text.primary }}
            >
              <MenuItem value="">Select destination</MenuItem>
              {menuItems.map((item) => (
                <MenuItem key={item.id} value={item.label}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" onClick={decrementNumTickets} color="primary" >-</Button>
          <TextField
            type="number"
            id="numTickets"
            value={numTickets}
            onChange={handleNumTicketsChange}
            inputProps={{
              min: 1,
              style: { textAlign: 'center', color: theme.palette.text.primary }
            }}
            style={{ margin: '0 10px', color: theme.palette.text.primary }}
          />
          <Button variant="contained" color="primary" onClick={incrementNumTickets} >+</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleGetTicket}>Get Ticket</Button>
        </Grid>
        <ToastContainer />
      </Grid>
    </div>
  );
};

export default TicketForm;
