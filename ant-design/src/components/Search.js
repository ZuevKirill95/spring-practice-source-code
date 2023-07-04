import {AutoComplete, Input} from 'antd';
import {useState} from 'react';

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

const searchResult = (query) => {
    return data
        .filter(book => book.name.toLowerCase().includes(query.toLowerCase()))
        .map(book => {
            console.log(book.name)
            return {
                value: <div>{book.name}</div>
            }
        })
}
const Search = () => {
    const [options, setOptions] = useState([]);
    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : []);
    };
    const onSelect = (value) => {
        console.log('onSelect', value);
    };
    return (
        <AutoComplete
            popupMatchSelectWidth={252}
            style={{
                width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input.Search size="large" placeholder="input here" enterButton/>
        </AutoComplete>
    );
};
export default Search;
