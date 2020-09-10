import React from 'react';
import { ClickAwayListener, Portal, makeStyles, Button } from '@material-ui/core';

const SmallButton = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          position: 'relative',
          float: 'right',
          maxWidth:'400px',
          margin:'auto',
          
        },
        dropdown: {
          position: 'relative',
          color: 'red',
          fontSize: '20px',
          borderRadius:'15px',
          width:'400px',
          margin:'auto',
          top:200,
          zIndex: 1,
          border: '3px solid red',
          padding: theme.spacing(2),
          backgroundColor: 'tranparent',
        },
      }));
      const classes = useStyles();
      const [open, setOpen] = React.useState(false);
      const handleClick = () => {
        setOpen((prev) => !prev);
      };
    
      const handleClickAway = () => {
        setOpen(false);
      };
    return (
        <div>
            <ClickAwayListener onClickAway={handleClickAway}>
  <div>
    <Button variant="outlined" color="secondary" type="button" onClick={handleClick} style={{float:'right',marginRight:'75px',top:80,fontWeight:'800',border:'2px solid'}}>
    Learn about Password
    </Button>
    
    {open ? (
      <Portal>
        <div className={classes.dropdown}>
          <center><span style={{color:'green'}}> Please Use "admin" as a password</span> </center>
          
          <br></br>
          <center><h6 style={{fontSize:'small' , fontFamily:'roboto' , fontWeight:800}}>If your have already used an user-name and password but still getting error , then click the button twich</h6></center>
        </div>
      </Portal>
    ) : null}
  </div>
</ClickAwayListener>
        </div>
    );
};

export default SmallButton;