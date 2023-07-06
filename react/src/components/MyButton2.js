export const MyButton2 = ({count, onClick}) => {
    return (
        <button onClick={onClick}>
            Нажато {count} раз
        </button>
    );
}