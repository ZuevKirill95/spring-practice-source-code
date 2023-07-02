const isEdit = false;

export const Edit = () => {
    return (
        isEdit ? (
            <>
                <h2>Сменить имя</h2>
                <input type="text" defaultValue={"Кирилл"}/>
            </>
        ) : (
            <>
                <h2>Имя</h2>
                <text>Кирилл</text>
            </>
        ));
}