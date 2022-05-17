import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/setting">Setting</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/noodle">Noodle</Link></li>
          <li><Link to="/bh"> Here</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  //เป็นหน้าที่แสดง default เรียก element Home มาแสดง
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} /> //แสดงที่ URL
          <Route path="noodle" element={<Noodle />} />
          <Route path="noodle/detail" element={<NoodleDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function Home() {
  return (<h2>Home</h2>);
}

function About() {
  return (<h2>About</h2>);
}

function Dashboard() {
  return (<h2>Dashboard</h2>);
}

const Setting = () => {
  return (<h2>Setting</h2>)
}

function Product() {
  const productList = [
    { id: '01', name: 'iPhone 11' },
    { id: '02', name: 'iPhone 12' },
    { id: '03', name: 'iPhone 13' }
  ]
  return (<><h2>Product</h2><ul>
    {productList.map(x => <li><Link to={`${x.name}`}>{x.name}</Link></li>)} //x."" ส่งข้อมูลไป param เป็นข้อมูลจริงๆจากใน obj
  </ul></>
  );
}

function ProductDetail() {
  let param = useParams(); //เพื่อดึงข้อมูลบางอย่างเข้ามาให้รู้ว่าตัวนั้นๆ คืออะไรเพื่อมาแสงดบนหน้าจอ
  console.log(param);
  return (<><h2>Product Detail</h2><p>You open product {param.id}</p></>); //param.id จะเท่ากับ path path เป็นอะไร param. "" ต้องเป็นอันนั้น แต่ค่าที่แสดง จะขึ้นอยู่กับ x ว่า . อะไรมา
}

function Noodle() {
  let navigate = useNavigate(); //คำสั่งเปลี่ยน path

  function handleChange(e) {
    e.preventDefault()
    let form = e.currentTarget;
    console.log(form);
    let formData = new FormData(form);
    let data = { topping: formData.getAll('toppings'), noodle: formData.get('noodle'), size: formData.get('size') }
    navigate('/noodle/detail',
      { replace: true, state: { data } }) //กด submit แล้วไปที่ path "noodle/detail" เพื่อไปแสดงค่า data
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <p>What would you like?</p>
        <p>
          <label>
            <input type="radio" name="noodle" value="small" />
            เส้นเล็ก
          </label>
          <br />
          <label>
            <input type="radio" name="noodle" value="big" />
            เส้นใหญ่
          </label>
          <br />
        </p>

        <p>
          <label>
            <input type="checkbox" name="toppings" value="meatBall" />
            ลูกชิ้น
          </label>
          <br />
          <label>
            <input type="checkbox" name="toppings" value="meat" />
            เนื้อ
          </label>
          <br />
          <label>
            <input
              type="checkbox" name="toppings" value="vegetable" />
            ผัก
          </label>
        </p>
        <p>
          <label>
            <input type="radio" name="size" value="normal" />
            ธรรมดา
          </label>
          <br />
          <label>
            <input type="radio" name="size" value="large" />
            พิเศษ
          </label>
          <br />
        </p>

        <input type='submit' />
      </form>
    </>
  );
}

function NoodleDetail() {
  const location = useLocation();  //ดูว่าสิ่งที่เรียกมา ส่งอะไรมาบ้าง
  let order = location.state.data //ให้ order เท่ากับค่าที่เรียกมา
  return (<><h2>Noodel Detail</h2>
    <h3>คุณสั่งเส้น {order.noodle}</h3>
    <h3>คุณสั่ง Topping {order.topping.map(x => <span>{x} - </span>)}</h3>
    <h3>คุณสั่ง ขนาด {order.size}</h3>
  </>);
}



function NoMatch() {
  return (
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}

export default App;


