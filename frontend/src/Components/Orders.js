import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';
const dataList = [
    { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
    { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
    { id: 3, name: 'c', email: 'c@email.com', avartar: '...' }
  ];
function Orders(){
    return 
    (
        <>
         <Table data={dataList}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell>
        {(rowData, rowIndex) => {
          return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
        }}
      </Cell>
    </Column>

  </Table>
        </>
    )
}  
export default Orders;