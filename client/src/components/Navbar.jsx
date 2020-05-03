import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#212121",
    color: "#b3b3b3",
  },
}));

const NavBar = ({ history }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleCallToRouter = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Paper square>
      <Tabs
        classes={classes}
        value={value}
        onChange={handleCallToRouter}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab
          classes={classes}
          icon={<PhoneIcon />}
          label="RECENTS"
          value="/test"
        >
          <div>Test</div>
        </Tab>
        <Tab classes={classes} icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab classes={classes} icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </Paper>
  );
};

export default withRouter(NavBar);
