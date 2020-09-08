const { forwardTo } = require('prisma-binding');
const { hasPermissions } = require('../utils');

const Query = {
    items: forwardTo('db'),
    item: forwardTo('db'),
    itemsConnection: forwardTo('db'),
    me(parent, args, ctx, info) {
        // Check if there is a current usr ID
        if (!ctx.request.userId) return null;
        return ctx.db.query.user(
            {
                where: { id: ctx.request.userId }
            },
            info
        );
    },
    async users(parent, args, ctx, info) {
        // 1. Check if the user is loggen in
        if (!ctx.request.userId) {
            throw new Error('You must be logged in!');
        }
        // 2. Check if the user has the permissions to query all users
        hasPermissions(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

        // 3. If they do, query the users
        return ctx.db.users({}, info);
    }
};

module.exports = Query;
