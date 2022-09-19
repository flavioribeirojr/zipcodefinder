import React, { useContext } from 'react';
import { Typography, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/FmdGood';
import DeleteIcon from '@mui/icons-material/Delete';
import { ZipCodeSearchHistoryContext } from '../../zip-code-search-history.context';
import { Box } from '@mui/system';
import { useZipCodeSearchHistory } from './useZipCodeSearchHistory';

export function ZipCodeSearchHistory() {
    const { history } = useContext(ZipCodeSearchHistoryContext);
    const { clearHistory, removeZipCode } = useZipCodeSearchHistory();

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h6" textAlign="center">
                Search History
            </Typography>
            <Button onClick={clearHistory}>
                Clear History
            </Button>
            <List dense style={{ width: '25%' }}>
                {
                    history.map((zipCodeInfo, index) => (
                        <ListItem
                            key={`${zipCodeInfo.zipCode}-${index}`}
                            secondaryAction={
                                <IconButton
                                    onClick={() => removeZipCode(zipCodeInfo.zipCode)}
                                    edge="end"
                                    aria-label="delete"
                                >
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
                                primary={`${zipCodeInfo.city}, ${zipCodeInfo.stateCode} ${zipCodeInfo.zipCode}`}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}