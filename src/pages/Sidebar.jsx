import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function Sidebar() {
  return (
    <Box sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Inbox"
                sx={{color: (theme) => theme.palette.text.primary}}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Miau"
                sx={{color: (theme) => theme.palette.text.primary}}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Trash"
                sx={{color: (theme) => theme.palette.text.primary}}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="Spam"
                sx={{color: (theme) => theme.palette.text.primary}}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
