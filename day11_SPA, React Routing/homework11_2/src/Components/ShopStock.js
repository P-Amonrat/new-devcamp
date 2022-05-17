import {useParams, Link} from "react-router-dom"

function ShopStock() {
    const productList = [
        { id: '01', name: 'Earphone' },
        { id: '02', name: 'Speaker' },
        { id: '03', name: 'Tablet' },
        { id: '04', name: 'Mobile' },
        { id: '05', name: 'Watch' },
    ]
    return (
        <>
            <h2>Product</h2>
            <ul>
                {productList.map(x =>
                    <li>
                        <Link to={`${x.id}`}>{x.name}</Link>
                    </li>
                )}
            </ul>
        </>
    )
}

function ProductDetail() {
    let param = useParams();
    console.log(param);
    return (
        <>
            <h2>Product Detail</h2>
            <p>You open product {param.id}</p>
        </>
    )
}

export {ShopStock, ProductDetail};