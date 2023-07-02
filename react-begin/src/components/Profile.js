const user = {
    name: 'Eminem',
    imageUrl: 'https://imgur.com/PpKxMP4.jpg',
    imageSize: 90,
}
export const Profile = () => {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Фото ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}