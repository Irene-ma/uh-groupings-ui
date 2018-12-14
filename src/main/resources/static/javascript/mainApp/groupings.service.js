(function () {

    /**
     * Service for requesting data from the groupings API.
     * @name groupingsService
     * NOTE: All API requests defined here require at least two parameters, namely onSuccess and onError, which are
     * controller handlers for manipulating data on a successful or unsuccessful request.
     */
    UHGroupingsApp.factory("groupingsService", function (dataProvider, BASE_URL) {
        return {
            /**
             * Gets information about a grouping.
             * @param {string} path - the path to the grouping
             */
            getGrouping: function (path, onSuccess) {
                var endpoint = BASE_URL + path + "/grouping";
                dataProvider.loadData(onSuccess, endpoint);
            },

            /**
             * Gets the list of admins and groupings.
             */
            getAdminLists: function (onSuccess) {
                var endpoint = BASE_URL + "adminLists";
                dataProvider.loadData(onSuccess, endpoint);
            },

            /**
             * Adds a member to the include group of a grouping.
             * @param {string} path - the path to the grouping
             * @param {string} userToAdd - the username of the member to add
             */
            addMemberToInclude: function (path, userToAdd, onSuccess) {
                var endpoint = BASE_URL + path + "/" + userToAdd + "/addMemberToIncludeGroup";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Adds a member to the exclude group of a grouping.
             * @param {string} path - the path to the grouping
             * @param {string} userToAdd - the username of the member to add
             */
            addMemberToExclude: function (path, userToAdd, onSuccess) {
                var endpoint = BASE_URL + path + "/" + userToAdd + "/addMemberToExcludeGroup";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Adds a member to the exclude group of a grouping.
             * @param {string} path - the path to the grouping
             * @param {string} newOwner - the new owner to add to the grouping
             */
            assignOwnership: function (path, newOwner, onSuccess) {
                var endpoint = BASE_URL + path + "/" + newOwner + "/assignOwnership";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Adds a user to the list of admins
             * @param {string} adminToAdd - the username of the admin to add
             */
            addAdmin: function (adminToAdd, onSuccess) {
                var endpoint = BASE_URL + adminToAdd + "/addAdmin";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Removes a member from the include group of a grouping.
             * @param {string} path - the path to the grouping
             * @param {string} member - the member to remove
             */
            removeMemberFromInclude: function (path, member, onSuccess) {
                var endpoint = BASE_URL + path + "/" + member + "/deleteMemberFromIncludeGroup";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Removes a member from the exclude group of a grouping.
             * @param {string} path - the path to the grouping
             * @param {string} member - the member to remove
             */
            removeMemberFromExclude: function (path, member, onSuccess) {
                var endpoint = BASE_URL + path + "/" + member + "/deleteMemberFromExcludeGroup";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Removes a member from the owners group of a grouping.
             * @param {string} path - the path to the grouping
             * @param {string} member - the member to remove
             */
            removeOwner: function (path, ownerToRemove, onSuccess) {
                var endpoint = BASE_URL + path + "/" + ownerToRemove + "/removeOwnership";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Removes a member from the list of admins.
             * @param {string} path - the path to the grouping
             * @param {string} member - the member to remove
             */
            removeAdmin: function (adminToRemove, onSuccess) {
                var endpoint = BASE_URL + adminToRemove + "/deleteAdmin";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Gets the attributes of a user, which includes their name, uid, and uuid.
             * @param {string} member - the UH username of the member
             */
            getMemberAttributes: function (member, onSuccess) {
                var endpoint = BASE_URL + "members/" + member;
                dataProvider.loadData(onSuccess, endpoint);
            },

            /**
             * Opts a member out of a grouping.
             * @param {string} path - the path of the grouping to opt out of
             */
            optOut: function (path, onSuccess) {
                var endpoint = BASE_URL + path + "/optOut";
                console.log(endpoint);
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Opts a user into a grouping.
             * @param {string} path - the path of the grouping to opt in to
             */
            optIn: function (path, onSuccess) {
                var endpoint = BASE_URL + path + "/optIn";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Gets the groupings a user is a part of, the groupings they can opt in to, and the groupings they own.
             */
            getMembershipAssignment: function (onSuccess) {
                var endpoint = BASE_URL + "members/groupings";
                console.log(endpoint);
                dataProvider.loadData(onSuccess, endpoint);
            },

            /**
             * Toggles the preference option to allow users to opt into a grouping.
             * @param {string} path - the path of the grouping to update
             * @param {boolean} optInOn - true if users should be allowed to opt into the grouping, otherwise false
             */
            setOptIn: function (path, optInOn, onSuccess) {
                var endpoint = BASE_URL + path + "/" + optInOn + "/setOptIn";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Toggles the preference option to allow users to opt out of a grouping.
             * @param {string} path - the path of the grouping to update
             * @param {boolean} optInOn - true if users should be allowed to opt out of the grouping, otherwise false
             */
            setOptOut: function (path, optOutOn, onSuccess) {
                var endpoint = BASE_URL + path + "/" + optOutOn + "/setOptOut";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Toggles the publication destination for listserv.
             * @param {string} path - the path of the grouping to update
             * @param {boolean} listservOn - true if the listserv destination should be enabled, otherwise false
             */
            setListserv: function (path, listservOn, onSuccess) {
                var endpoint = BASE_URL + path + "/" + listservOn + "/setListserv";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Toggles the publication destination for uhReleasedGroupings.
             * @param {string} path - the path of the grouping to update
             * @param {boolean} ldapOn - true if the uhReleasedGroupings destination should be enabled, otherwise
             * false
             */
            setLdap: function (path, ldapOn, onSuccess) {
                var endpoint = BASE_URL + path + "/" + ldapOn + "/setLdap";
                dataProvider.updateData(onSuccess, endpoint);
            },

            /**
             * Gets the groupings a member owns.
             */
            getGroupingsOwned: function (onSuccess) {
                var endpoint = BASE_URL + "owners/groupings";
                dataProvider.loadData(onSuccess, endpoint);
            }

        };
    });

})();
