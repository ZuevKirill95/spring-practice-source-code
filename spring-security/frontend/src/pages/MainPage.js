import CreateBookForm from "../components/CreateBookForm";
import BooksTable from "../components/BooksTable";

export const MainPage = () => {
    return (
        <>
            <CreateBookForm/>
            <div className="site-layout-content">
                <BooksTable/>
            </div>
        </>
    )
}
