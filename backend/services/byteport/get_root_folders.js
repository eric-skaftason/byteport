const RedFSModel = require('../../models/byteport.js');

module.exports = async (account_id) => {
    const root_folders = await RedFSModel.getAccessibleRootFolders(account_id);

    return root_folders;
}