import React from 'react';
import { Components, registerComponent, getSetting } from '../../lib/vulcan-lib';
import { withSingle } from '../../lib/crud/withSingle';
import { Comments } from '../../lib/collections/comments';

const styles = theme => ({
  dividerMargins: {
    marginTop: 150,
    marginBottom: 150,
  },
  permalinkLabel: {
    ...theme.typography.body2,
    ...theme.typography.commentStyle,
    color: theme.palette.grey[600],
    marginBottom: theme.spacing.unit*2,
    marginLeft: 10,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing.unit*2
    }
  },
  seeInContext: {
    ...theme.typography.body2,
    ...theme.typography.commentStyle,
    textAlign: "right",
    color: theme.palette.lwTertiary.main,
    marginRight: 10
  },
})

const CommentPermalink = (props) => {
  const { documentId, post, document: comment, classes, data: {refetch}, loading, error} = props
  const { Loading, Divider, CommentWithReplies } = Components;

  if (error || (!comment && !loading)) return <div>Comment not found</div>

  if (!documentId) return null

  // NB: classes.root is not in the above styles, but is used by eaTheme
  return <div className={classes.root}>
      <div className={classes.permalinkLabel}>Comment Permalink</div>
      {loading ? <Loading /> : <div>
        <CommentWithReplies key={comment._id} post={post} comment={comment} refetch={refetch} showTitle={false}/>
        <div className={classes.seeInContext}><a href={`#${documentId}`}>See in context</a></div>
      </div>}
      {getSetting('forumType') !== 'EAForum' && <div className={classes.dividerMargins}><Divider /></div>}
    </div>
}

const CommentPermalinkComponent = registerComponent(
  "CommentPermalink", CommentPermalink, { styles, hocs: [
    withSingle({
      collection: Comments,
      fragmentName: 'CommentWithReplies',
    })
  ]}
);


declare global {
  interface ComponentTypes {
    CommentPermalink: typeof CommentPermalinkComponent,
  }
}