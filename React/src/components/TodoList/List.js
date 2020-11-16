import React from 'react';
import ListItem from './ListItem'
// 函数组件
function List({list=[], toggleCompleted, deleteItem}) {
    return <div>
        {list.map(item => <ListItem
            item={item}
            key={item.id}
            toggleCompleted={toggleCompleted}
            deleteItem={deleteItem}
        />)}
    </div>
}
export default List