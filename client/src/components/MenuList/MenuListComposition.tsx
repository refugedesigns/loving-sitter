import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import classes from "./useStyles.module.css"

interface Props {
  open: boolean;
  anchorRef: React.RefObject<HTMLButtonElement>;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  handleListKeyDown: (event: React.KeyboardEvent) => void;
}

const MenuListComposition: React.FC<Props> = ({
  open,
  anchorRef,
  handleClose,
  handleListKeyDown,
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Box
                      component={MenuItem}
                      onClick={handleClose}
                    >
                      <Link className={classes.link} to="/profile">Profile</Link>
                    </Box>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default MenuListComposition;
