import axios from 'axios';

const $ = jQuery;

export const getList = (lists, selected) => {
    for (let i in lists) {
        if (lists.hasOwnProperty(i) && lists[i].name == selected) {
            return lists[i];
        }
    }

    return null;
};

export const processList = (lists, selected, cb) => {
    let list = getList(lists, selected);

    if (typeof cb == 'function') {
        cb(list);
    }
};
