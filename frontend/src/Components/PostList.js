import { List, Datagrid, TextField, DateField, BooleanField, EmailField } from 'react-admin';

export const PostList = () => (
    <List>
         <Datagrid>
            <TextField source="userId" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
