import Users from "meteor/vulcan:users";


Users.addField([
  /**
    Legacy: Boolean used to indicate that post was imported from old LW database
  */
  {
    fieldName: 'legacy',
    fieldSchema: {
      type: Boolean,
      optional: true,
      defaultValue: false,
      hidden: true,
      viewableBy: ['guests'],
      editableBy: ['members'],
      insertableBy: ['members'],
    }
  },

  /**
    Intercom: Will the user display the intercom while logged in?
  */
  {
    fieldName: 'hideIntercom',
    fieldSchema: {
      order: 70,
      type: Boolean,
      optional: true,
      defaultValue: false,
      viewableBy: ['guests'],
      editableBy: ['members'],
      insertableBy: ['members'],
      control: 'checkbox',
      label: "Hide Intercom"
    }
  },
  {
    fieldName: 'email',
    fieldSchema: {
      order: 20,
    }
  },

  {
    fieldName: 'website',
    fieldSchema: {
      order: 30,
    }
  },

  {
    fieldName: 'bio',
    fieldSchema: {
      order: 40,
    }
  },

  {
    fieldName: 'twitterUsername',
    fieldSchema: {
      hidden: true,
    }
  },

  /**
    Legacy ID: ID used in the original LessWrong database
  */
  {
    fieldName: 'legacyId',
    fieldSchema: {
      type: String,
      hidden: true,
      optional: true,
      viewableBy: ['guests'],
      editableBy: ['admins'],
      insertableBy: ['members'],
    }
  },

  /**
    Deleted: Boolean indicating whether user has been deleted
                (initially used in the LW database transfer )
  */
  {
    fieldName: 'deleted',
    fieldSchema: {
      type: Boolean,
      optional: true,
      defaultValue: false,
      viewableBy: ['guests'],
      editableBy: ['admins'],
      insertableBy: ['members'],
      label: 'Delete this user',
      control: 'checkbox'
    }
  },

  /**
    legacyData: A complete dump of all the legacy data we have on this post in a
    single blackbox object. Never queried on the client, but useful for a lot
    of backend functionality, and simplifies the data import from the legacy
    LessWrong database
  */

  {
    fieldName: 'legacyData',
    fieldSchema: {
      type: Object,
      optional: true,
      viewableBy: ['admins'],
      insertableBy: ['admins'],
      editableBy: ['admins'],
      hidden: true,
      blackbox: true,
    }
  },

  /**
    algoliaIndexAt: Last time the record was indexed by algolia. Undefined if it hasn't yet been indexed.
  */

  {
    fieldName: 'algoliaIndexAt',
    fieldSchema: {
      type: Date,
      optional: true,
      viewableBy: ['guests']
    }
  },

  /**
    banned: Whether the user is banned or not. Can be set by moderators and admins.
  */

  {
    fieldName: 'banned',
    fieldSchema: {
      type: Boolean,
      optional: true,
      viewableBy: ['guests'],
      editableBy: ['sunshineRegiment', 'admins'],
      insertableBy: ['admins'],
      control: 'checkbox',
      label: 'Ban this user'
    }
  },

  /**
    voteBanned: All future votes of this user have weight 0
  */

  {
    fieldName: 'voteBanned',
    fieldSchema: {
      type: Boolean,
      optional: true,
      viewableBy: ['guests'],
      editableBy: ['sunshineRegiment', 'admins'],
      insertableBy: ['admins'],
      control: 'checkbox',
      label: 'Set all future votes of this user to have zero weight'
    }
  },

  /**
    nullifyVotes: Set all historical votes of this user to 0, and make any future votes have a vote weight of 0
  */

  {
    fieldName: 'nullifyVotes',
    fieldSchema: {
      type: Boolean,
      optional: true,
      viewableBy: ['guests'],
      editableBy: ['sunshineRegiment', 'admins'],
      insertableBy: ['admins'],
      control: 'checkbox',
      label: 'Nullify all past votes'
    }
  },

  /**
    Overwrite newsletter subscribe field to be hidden (for now) TODO: Get newsletter to run properly
  */

  {
    fieldName: 'newsletter_subscribeToNewsletter',
    fieldSchema: {
      hidden: true,
    }
  },

  /**
    Overwrite email notification settings to be hidden (for now) TODO: Get email notifications to run properly
  */
  {
    fieldName: 'notifications_comments',
    fieldSchema: {
      hidden: true,
    }
  },
  {
    fieldName: 'notifications_replies',
    fieldSchema: {
      hidden: true,
    }
  },

  /**
    New Notifications settings
  */
  {
    fieldName: 'auto_subscribe_to_my_posts',
    fieldSchema: {
      group: null,
      label: "Notifications for Comments on My Posts"
    }
  },
  {
    fieldName: 'auto_subscribe_to_my_comments',
    fieldSchema: {
      group: null,
      label: "Notifications For Replies to My Comments"
    }
  },
  {
    fieldName: 'notifications_posts',
    fieldSchema: {
      group: null
    }
  },
  /**
    Hide the option to change your displayName (for now) TODO: Create proper process for changing name
  */

  {
    fieldName: 'displayName',
    fieldSchema: {
      editableBy: ['sunshineRegiment', 'admins'],
      insertableBy: ['sunshineRegiment', 'admins'],
    }
  },

  /**
    frontpagePostCount: count of how many posts of yours were posted on the frontpage
  */

  {
    fieldName: 'frontpagePostCount',
    fieldSchema: {
      type: Number,
      optional: true,
      viewableBy: ['guests'],
      editableBy: ['admins'],
      insertableBy: ['admins'],
      onInsert: (document, currentUser) => 0,
    }
  }
]);
