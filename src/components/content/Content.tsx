import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {Switch, Route } from 'react-router-dom';
import { UsersPageContiner } from '../usersPage/UsersPageContiner';
import kabanBoardPageContiner from '../kabanBoardPage/kabanBoardPageContiner';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: 'flex',
      flexDirection: 'column-reverse',
      backgroundColor: '#512da8',
      height: 100,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      height: 100,
      ...theme.mixins.toolbar,
    },
    content: {
      marginTop: 100,
      flexGrow: 1,
      padding: theme.spacing(3),
      zIndex: 10000000,
    },
    logOutBtn: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 500,
    },
    circleBtnTolBarWrap: {
      display: 'flex',
      flexDirection: 'row-reverse',
      padding: '8px 18px',
    },
    circleBtnTolBar: {
      zIndex: 10,
      width: 34,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#673ab7',
      borderRadius: 100,
      color: '#fff',
      '& :hover': {
        cursor: 'pointer'
      }
    }
  }),
);

interface Iprops {
  logOutUser: () => void
}

export default function MiniDrawer(props:Iprops) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

 

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar style={{display: 'flex', justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap>
            НОВАЯ ГАЗЕТА / ADMIN
          </Typography>
          <Button onClick={props.logOutUser}
                  startIcon={<ExitToAppIcon/>} 
                  className={classes.logOutBtn} 
                  color="primary">
            ВЫХОД
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div className={classes.circleBtnTolBarWrap} >
            <div className={classes.circleBtnTolBar} onClick={() => setOpen(r => !r)}>
              {
                (open) ? <ChevronLeftIcon/> : <ChevronRightIcon/>
              }
            </div>
          </div>
          <Link to='/kanbanBoard'>
            <ListItem button>
                <ListItemIcon>{<ListAltIcon/>}</ListItemIcon>
                <ListItemText primary={'kanban board'} />
            </ListItem>
          </Link>
          <Link to='/users'>
            <ListItem button>
                <ListItemIcon>{<PersonIcon/>}</ListItemIcon>
                <ListItemText primary={'users'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route path={'/kanbanBoard'} component={kabanBoardPageContiner}/>
          <Route path={'/users'} component={UsersPageContiner}/>
        </Switch>
      </main>
    </div>
  );
}
