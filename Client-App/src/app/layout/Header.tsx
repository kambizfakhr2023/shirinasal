import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
]

const rightLinks = [
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    padding: 1,
    '&:hover': {
        color: 'grey.900',
        backgroundColor: '#ab47bc',
        borderRadius: 4,
        marginY: 0,
        padding: 1
    },
    '&.active': {
        color: 'text.secondary',
        backgroundColor: '#ab47bc',
        borderRadius: 4,
        marginX:2
    }
}
interface Props {
    darkMode: boolean,
    handleChangetheme: () => void
}
export default function Header({ darkMode, handleChangetheme }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4, backgroundColor: '#7b1fa2' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to={''}
                        sx={{ color: 'inherit', textDecoration: 'none', }}
                    >
                        Fakhr's Shopping System
                    </Typography>
                    <Switch onChange={handleChangetheme} checked={darkMode}></Switch>
                </Box>
                
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            sx={navStyles}
                            key={title}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent='4' color='warning'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>

                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            sx={navStyles}
                            key={title}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                    </List>
                </Box>
            </Toolbar>
           
        </AppBar>
    )
}