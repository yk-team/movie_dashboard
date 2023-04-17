import React, { ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ListProps<T> {
    data: T[];
    children?: ReactNode;
}

const List = <T extends unknown>({ data, children }: ListProps<T>) => {
    const listItem = data.map(item =>
        <li key={uuidv4()}>
            {children}
        </li>
    );

    return <ul>{listItem}</ul>
};

export default List;
