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
        title: 'Жанр',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tags.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
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
        tags: ['Роман', 'Научная фантастика'],
    },
    {
        id: '2',
        name: 'Преступление и наказание',
        author: 'Федор Достоевский',
        year: 1866,
        tags: ['Роман', 'Криминал'],
    },
    {
        id: '3',
        name: 'Сумерки',
        author: 'Стефани Майер',
        year: 2005,
        tags: ['Роман', 'Для подростков'],
    },
];
const BooksTable = () => <Table columns={columns} dataSource={data} />;
export default BooksTable;
