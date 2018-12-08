import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Leaderboard from '../components/leaderboard/Leaderboards';
import Card from '../components/patch-notes/Card';

const styles = {
  patchNotesContainer: {
    position: 'relative',
    zIndex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  patchNotes: {
    minWidth: '100%',
    maxHeight: 'calc(100% - 64px)',
    overflowX: 'hidden',
    overflowY: 'auto',
  }
};

export default () => {
  return (
    <React.Fragment>
      <div style={styles.patchNotesContainer}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Patch Notes
          </Typography>
        </Toolbar>
        <div style={styles.patchNotes}>
          {Array(15).fill(undefined).map((card, index) => (
            <Card key={index} title="wololo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta sagittis aliquet. Vestibulum scelerisque scelerisque molestie. Cras ornare tempor vehicula. Nulla egestas, magna vel eleifend scelerisque, ante enim congue mauris, a eleifend turpis nisl et enim. Morbi iaculis orci vel pretium faucibus. Curabitur posuere et leo eget sagittis. In pulvinar elit ac sodales porta. Nullam eget eleifend urna. Suspendisse eget arcu ligula. Integer in porttitor sem. Nullam nec sapien erat. Praesent velit odio, cursus id ullamcorper at, lacinia et neque. Morbi scelerisque lectus ipsum. Nulla gravida vulputate metus in varius. Ut vulputate, quam vel placerat cursus, nulla erat imperdiet enim, a accumsan mi magna eget risus.<br /><br />
              Donec rhoncus mi magna, quis pharetra ante molestie quis. Proin a dui nec lectus dignissim scelerisque. Morbi vel dolor volutpat, dictum est eu, vulputate nunc. Quisque auctor leo nec dolor pretium fringilla. Nullam pellentesque nec nisi eget scelerisque. Aliquam ex mi, volutpat in feugiat ac, pharetra non sapien. Morbi et diam at turpis porta ultricies sed ac sapien. Aenean non eros ac lectus egestas ultricies dapibus at enim. Suspendisse tempor diam dolor, sed efficitur erat aliquam nec. Cras eros felis, tempor ultricies velit id, mattis aliquet augue. Nam sodales tellus nec vestibulum sollicitudin. Mauris non massa a leo consequat interdum. Pellentesque ac nulla at odio sodales laoreet. Mauris posuere suscipit eros. Phasellus sit amet facilisis mauris. Donec sit amet tempor nisl.<br /><br />
              Morbi efficitur molestie lobortis. Vestibulum placerat molestie mi, a imperdiet quam egestas in. Vivamus nunc justo, ornare sit amet velit et, luctus scelerisque lorem. Fusce ante massa, blandit eget gravida ac, condimentum id tellus. Integer nec purus et risus condimentum ultricies. Maecenas pellentesque ipsum non tellus tristique, imperdiet auctor dolor rhoncus. Curabitur vulputate porttitor tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vehicula mi sed venenatis molestie. Phasellus blandit venenatis posuere. Ut at mauris et urna blandit tempor. Aliquam posuere rutrum sapien, vel bibendum magna auctor eu.<br /><br />
              Vestibulum ac turpis fermentum arcu sollicitudin auctor sed vel mauris. Cras eleifend enim turpis, nec molestie mi lacinia sit amet. Ut sit amet libero ac sem ornare tempus vitae eu orci. Mauris ullamcorper id nibh sed viverra. Phasellus dictum diam nec diam feugiat viverra. Nullam posuere malesuada nibh, vitae gravida ex convallis non. Sed a euismod est, eget porttitor sapien. Sed convallis lacus et ipsum semper, ut varius ligula sodales. Nunc nulla mi, fringilla a dui eget, tempor mollis nulla. Pellentesque ut condimentum urna, in semper odio. In id suscipit ligula.<br /><br />
              Aliquam eget nibh diam. Nunc vitae augue ut justo egestas lobortis. Etiam congue ut magna eget rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc efficitur molestie odio, ac dignissim nisl tempor et. Vivamus id lectus vitae mi commodo tempus eget volutpat lectus. Curabitur luctus accumsan turpis. Curabitur eget velit at mauris blandit vulputate. In sit amet tempor felis, nec tempus dolor. Proin volutpat, leo et tempus accumsan, nunc felis pretium velit, et tristique est mi quis nisl. Etiam ac diam malesuada, consequat arcu ut, tempor lorem.
          </Card>))}
        </div>
      </div>
      <div style={{ flexShrink: 1, minWidth: 240, minHeight: '100%', float: 'right' }}>
        <Leaderboard />
      </div>
    </React.Fragment>
  )
};