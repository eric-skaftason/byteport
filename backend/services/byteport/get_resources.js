const RedFSModel = require('../../models/byteport.js');

module.exports = async (folder_id) => {
    const root_folders = await RedFSModel.getFolderContents(folder_id);

    return root_folders;
}