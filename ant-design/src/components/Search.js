import {AutoComplete, Input} from 'antd';
import {useState} from 'react';


const Search = ({books}) => {
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
                console.log(book.name)
                return {
                    value: <div>{book.name}</div>
                }
            })
    }

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
