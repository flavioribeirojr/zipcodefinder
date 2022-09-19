import React from 'react';
import { Box } from '@mui/system';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl, Button, Collapse, Alert, IconButton } from '@mui/material';
import { useZipCodeFinderForm } from './useZipCodeFinderForm';
import Countries from '../../../resources/countries.json';
import CloseIcon from '@mui/icons-material/Close';

export function ZipCodeFinderForm() {
    const {
      formValues,
      setFormValues,
      findZipCode,
      errorMessage,
      clearErrorMessage
    } = useZipCodeFinderForm();

    return (
        <Box sx={{ flexGrow: 1, paddingTop: 20, paddingBottom: 6, width: '70%', margin: '0 auto' }}>
        <Grid alignItems="center" container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label="Zip Code"
                variant="outlined"
                value={formValues.zipCode}
                onChange={event => setFormValues({
                  ...formValues,
                  zipCode: event.target.value
                })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                sx={{ width: '100%' }}
                label="Country"
                variant="outlined"
                value={formValues.countryCode}
                onChange={event => setFormValues({
                  ...formValues,
                  countryCode: event.target.value
                })}
              >
                {
                  Countries.map(country => (
                    <MenuItem key={country.code} value={country.code}>
                      { country.emoji } { country.name }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={findZipCode} variant="contained" size="large">
              SEARCH
            </Button>
          </Grid>
        </Grid>
        <Collapse in={errorMessage !== ''}>
          <Alert
            color="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={clearErrorMessage}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mt: 2 }}
          >
            { errorMessage }
          </Alert>
        </Collapse>
      </Box>
    )
}