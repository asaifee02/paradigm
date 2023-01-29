import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import data from "./admin.json"
import { PostList } from './PostList';

const Orders = () => (
    <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com/posts')} >
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default Orders;