import {AutoComplete, Input} from 'antd';
import {useState} from 'react';
import {useSelector} from "react-redux";


const Search = ({style}) => {
    const books = useSelector((state) => state.books.books)
    const [options, setOptions] = useState([]);
    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : []);
    };
    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    const searchResult = (query) => {
        return books
            .filter(book => book.name.toLowerCase().includes(query.toLowerCase()))
            .map(book => {
                return {
                    value: book.id,
                    label: <div key={book.id}>{book.name}</div>
                }
            })
    }

    return (
        <AutoComplete
            popupMatchSelectWidth={252}
            style={{
                width: 300,
                ...style
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
