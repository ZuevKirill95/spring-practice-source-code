const isEdit = false;

const books = [
    {
        name: "Метро 2033",
        author: "Дмитрий Глуховский"
    },
    {
        name: "Преступление и наказание",
        author: "Федор Достоевский"
    },
    {
        name: "Сумерки",
        author: "Стефани Майер"
    },
]

export const Books = () => {
    return (
        <>
            <h2>Авторы</h2>
            {
                books.map(book => {
                    return (
                        <div>
                            <div>{book.name}</div>
                            <div>{book.author}</div>
                            <br/>
                        </div>
                    );
                })
            }
        </>
    );
}