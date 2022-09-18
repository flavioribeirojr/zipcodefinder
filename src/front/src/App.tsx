import React from 'react';
import { AppBar, Toolbar, Typography, Grid, TextField, Select, MenuItem, InputLabel, FormControl, Button, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import FolderIcon from '@mui/icons-material/FmdGood';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ZipCodeFinder
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, paddingTop: 20, paddingBottom: 6, width: '70%', margin: '0 auto' }}>
        <Grid alignItems="center" container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField label="Zip Code" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select labelId="country-label" sx={{ width: '100%' }} label="Country" variant="outlined">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" size="large">
              SEARCH
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h6" textAlign="center">
        Search History
      </Typography>
      <List dense style={{ margin: '0 30%' }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Chandler, AZ 85225"
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default App;
