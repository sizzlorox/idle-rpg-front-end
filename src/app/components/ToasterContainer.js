import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { hideToaster } from '../redux/actions/uiAction';

// Material UI
import { withSnackbar } from 'notistack';

class ToasterContainer extends Component {
  displayed = [];

  storeDisplayed = id => {
    this.displayed = [...this.displayed, id];
  };

  shouldComponentUpdate({ toasters: newSnacks = [] }) {
    const { toasters: currentSnacks } = this.props;
    let notExists = false;
    for (let i = 0; i < newSnacks.length; i++) {
        if (notExists) continue;
        notExists = notExists || !currentSnacks.filter(({ key }) => newSnacks[i].key === key).length;
    }
    return notExists;
  }

  componentDidUpdate() {
    const { toasters = [] } = this.props;

    toasters.forEach(toaster => {
      if (this.displayed.includes(toaster.key)) return;
      this.props.enqueueSnackbar(toaster.message, { variant: toaster.variant });
      this.storeDisplayed(toaster.key);
      this.props.hideToaster(toaster.key);
    });
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  toasters: state.ui.toasters
});

export default withSnackbar((connect(mapStateToProps, { hideToaster })(ToasterContainer)));
