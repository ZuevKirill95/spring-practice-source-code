import {Space, Table} from 'antd';


const BooksTable = ({books, handleDeleteBooks}) => {
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
                <Space size="middle" onClick={handleDeleteBooks}>
                    <a>Удалить</a>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={books} />
    );
}
export default BooksTable;
