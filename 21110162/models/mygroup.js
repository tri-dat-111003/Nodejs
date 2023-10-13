const mygroup = [
    { id: '21110162', name: 'Tran Nguyen Tri Dat' },
];

const getAll = () => mygroup;

const exists = (id) => mygroup.some(item => item.id === id);

const get = (id) => mygroup.find(item => item.id === id);

const add = (item) => mygroup.push(item);

module.exports = {
    getAll,
    exists,
    get,
    add,
};
