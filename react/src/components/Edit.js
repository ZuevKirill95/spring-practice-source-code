const isEdit = true;

export const Edit = () => {
    return (
        <>
            <h4>isEdit = {isEdit.toString()}</h4>
            {isEdit && <div>Редактирование</div>}
            {isEdit ? (
                <input type="text" defaultValue={"Иван"}/>
            ) : (
                <div>Иван</div>
            )
            }
        </>
    )
}