import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { faBars, faPhone, faEnvelope, faQrcode, faListCheck, faClipboard, faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Shared/Navbar';
import OnGoning from './OnGoning';
import AddProject from './AddProject';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    background: '#2E5D88',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    background: '#2E5D88',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    background: '#EEFEFF',
    boxShadow:'none',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        background: '#EEFEFF',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const iconArr = [faQrcode, faListCheck, faClipboard, faPlus, faPenToSquare]

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                
                <Toolbar className='drawer-toolbar'>
                    <div className={`drawer-toolbar-div ${open && 'div-special'}`}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} color="white" />
                        </IconButton>
                    </div>
                    <Navbar admin={true}/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <h2 style={{ margin: 0, padding: '15px 15px 0', display: `${open ? 'block' : 'none'}` }}>UdoyLab</h2>
                <DrawerHeader>

                    <IconButton style={{ display: `${open ? 'block' : 'none'}` }} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <FontAwesomeIcon icon={faPhone} /> : <FontAwesomeIcon style={{ color: 'white' }} icon={faBars} />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {['Projects', 'Completed', 'OnGoning', 'Add', 'Skills'].map((text, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                background:'#264058',
                                margin:'10px 0'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}
                            >
                                <FontAwesomeIcon icon={iconArr[index]} />
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    ))}
                </List >
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <AddProject/>
            </Box>
        </Box>
    );
}