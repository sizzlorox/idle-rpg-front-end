import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({ isOpen, onClose }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
  >
    <DialogTitle>
      Login
    </DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="username"
        label="Username"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Login
      </Button>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);