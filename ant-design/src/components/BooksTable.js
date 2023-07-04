import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Автор',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'Год',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];


const data = [
    {
        id: '1',
        name: 'Метро 2033',
        author: 'Дмитрий Глуховский',
        year: 2002,
    },
    {
        id: '2',
        name: 'Преступление и наказание',
        author: 'Федор Достоевский',
        year: 1866,
    },
    {
        id: '3',
        name: 'Сумерки',
        author: 'Стефани Майер',
        year: 2005,
    },
];
const BooksTable = () => <Table columns={columns} dataSource={data} />;
export default BooksTable;
