import "../../styles/fav.css"
const Favourites = ({ cart, setCart }) => {
    return (
        <div className="favourites">
            {cart.map(data => (
                <div className="fav_book">
                    <img src={data.thumbnailUrl} alt="" />
                    <h1 id="kk">{data.title}</h1>
                    <div>{data.pageCount}</div>
                    <div>{data.categories}</div>
                </div>
            ))}
        </div>
    );
}

export default Favourites;  