const books = [
    {
        id: 1,
        name: "Метро 2033",
        author: "Дмитрий Глуховский"
    },
    {
        id: 2,
        name: "Преступление и наказание",
        author: "Федор Достоевский"
    },
    {
        id: 3,
        name: "Сумерки",
        author: "Стефани Майер"
    },
]

export const Books = () => {
    return (
        books.map(book => {
            return (
                <div key={book.id} className={"book-item"}>
                    <div>{book.name}</div>
                    <div>{book.author}</div>
                </div>
            );
        })
    );
}