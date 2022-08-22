import {
  AccountBox,
  Groups,
  Home,
  ModeNight,
  PagesRounded,
  Person,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: { xs: "none", sm: "block" },
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <PagesRounded />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="">
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};
export default Sidebar;
