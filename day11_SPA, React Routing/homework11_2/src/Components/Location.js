import { useLocation, Link, useNavigate } from "react-router-dom"

function Location() {
    let navigate = useNavigate();

    function navigatorFunc(e, x) {
        e.preventDefault()
        navigate('/location/detail', { state: x }) //ส่งค่าไป path อื่น
    }

    const locationList = [
        { id: '01', name: 'WAREHOUSE#101', latitude: '1234', longitude: '5678', tel: '091-234-5678', fax: '02-123-1234' },
        { id: '01', name: 'WAREHOUSE#102', latitude: '2345', longitude: '6789', tel: '092-224-5678', fax: '02-123-5678' },
        { id: '01', name: 'WAREHOUSE#103', latitude: '3456', longitude: '9876', tel: '093-233-5378', fax: '02-123-3865' }, ,
        { id: '01', name: 'WAREHOUSE#104', latitude: '7890', longitude: '8765', tel: '094-234-4448', fax: '02-123-9031' },
        { id: '01', name: 'WAREHOUSE#105', latitude: '0123', longitude: '4321', tel: '095-234-5555', fax: '02-123-2890' },
    ]
    return (
        <>
            <h2>Location</h2>
            <ul>
                {locationList.map(x =>
                    <ol style={{ marginTop: "10px" }}><button onClick={e => navigatorFunc(e, x)}>{x.name}</button></ol>
                )}
            </ul>
        </>
    )
}

const LocationDetail = () => {

    const location = useLocation();
    const data = location.state

    return (
        <>
            <h2 style={{marginLeft: "20px"}}>Location Detail</h2>
            <ul style={{ listStyleType: "none" }}>
                <li><b>ID : </b>{data.id}</li>
                <li><b>NAME : </b>{data.name}</li>
                <li><b>LATITUDE : </b>{data.latitude}</li>
                <li><b>LONGITUDE : </b>{data.longitude}</li>
                <li><b>TEL : </b>{data.tel}</li>
                <li><b>FAX : </b>{data.fax}</li>

            </ul></>

    )

}

export { Location, LocationDetail };

