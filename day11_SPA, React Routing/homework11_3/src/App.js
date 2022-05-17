import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LayoutComponent from './Components/Layout';
import Home from './Components/Home';
import DepartmentList from './Components/DepartmentList';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetail from './Components/EmployeeDetail';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout >
      <Header>
        <h2>Header</h2>
      </Header>
      <Content>
        <div>
          <Routes>
            <Route path="/" element={<LayoutComponent />}>
              <Route index element={<Home />} />
              <Route path="departmentList" element={<DepartmentList />} />
              <Route path="employee/:department" element={<EmployeeList />} />
              <Route path="employeeList" element={<EmployeeList />} />
              <Route path="employee-detail" element={<EmployeeDetail />} />
            </Route>
          </Routes>

          <hr />
        </div>
      </Content>
      <Footer>
        <h2>Footer</h2>
      </Footer>
    </Layout>

  );
}

export default App;

// import React from "react";
// import "./App.css";
// import {
//   Routes,
//   Route,
//   Outlet,
//   Link,
//   Navigate,
//   useNavigate,
//   useLocation,
//   useParams,
// } from "react-router-dom";

// const mockData = [
//   {
//     id: "0001",
//     firstname: "Robert",
//     lastname: "Kyle",
//     age: 45,
//     department: "Marketing",
//     salary: 66000,
//   },
//   {
//     id: "0002",
//     firstname: "Dalia",
//     lastname: "Macpie",
//     age: 42,
//     department: "Sale",
//     salary: 44000,
//   },
//   {
//     id: "0003",
//     firstname: "Jenifer",
//     lastname: "Lamp",
//     age: 41,
//     department: "Account",
//     salary: 71000,
//   },
//   {
//     id: "0004",
//     firstname: "Fathom",
//     lastname: "Merry",
//     age: 35,
//     department: "Marketing",
//     salary: 43000,
//   },
//   {
//     id: "0005",
//     firstname: "Dadaria",
//     lastname: "Munchy",
//     age: 38,
//     department: "Sale",
//     salary: 25000,
//   },
//   {
//     id: "0006",
//     firstname: "Conrand",
//     lastname: "Blue",
//     age: 35,
//     department: "Account",
//     salary: 38000,
//   },
//   {
//     id: "0007",
//     firstname: "Ryla",
//     lastname: "Arkham",
//     age: 38,
//     department: "Marketing",
//     salary: 42000,
//   },
// ];

// function App() {
//   return <Routing />;
// }

// function Routing() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="employee-List" element={<EmployeeListComp />} />
//         <Route
//           path="employee-List/:department"
//           element={<EmployeeListComp />}
//         />
//         <Route path="employee-detail" element={<EmployeeDetailComp />} />
//         <Route path="department-list" element={<DepartmentListComp />} />
//       </Route>
//     </Routes>
//   );
// }

// function Layout() {
//   return (
//     <ContainerComp>
//       <HeaderComp></HeaderComp>
//       <MenuComp></MenuComp>
//       <ContentComp mockData={mockData}></ContentComp>
//       <FooterComp></FooterComp>
//     </ContainerComp>
//   );
// }

// function ContainerComp(props) {
//   return props.children;
// }

// function HeaderComp() {
//   return (
//     <>
//       <h1>Header</h1>
//       <hr />
//     </>
//   );
// }

// function MenuComp() {
//   return (
//     <>
//       <h1>Menu</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employee-list">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/department-list">Department List</Link>
//           </li>
//         </ul>
//       </nav>
//       <hr />
//     </>
//   );
// }

// function ContentComp() {
//   return (
//     <>
//       <Outlet />
//       <hr />
//     </>
//   );
// }

// function FooterComp() {
//   return (
//     <>
//       <h1>Footer</h1>
//       <hr />
//     </>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function EmployeeListComp() {
//   let navigate = useNavigate();
//   let param = useParams();
  
//   let renderData = [];
//   if (param.department) {
//     renderData = mockData.filter((x) => x.department === param.department);
//   } else {
//     renderData = mockData;
//   }
//   console.log(renderData);

//   const employeeDetailFunc = (e, index) => {
//     e.preventDefault();
//     navigate("/employee-detail", { replace: true, state: mockData[index] });
//   };

//   return (
//     <>
//       <h2>Employee List</h2>
//       <ul>
//         {renderData.map((x, i) => (
//           <li key={`list${x.firstname}`}>
//             <p>
//               {x.firstname} : {x.department}{" "}
//               <input
//                 type="button"
//                 value="employee detail"
//                 onClick={(e) => employeeDetailFunc(e, i)}
//               ></input>
//             </p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function EmployeeDetailComp() {
//   const location = useLocation();
//   console.log(location)
//   let employeeDetail = location.state;
//   return (
//     <>
//       <h3>Employee Detail</h3>
//       <ul>
//         <li>ID : {employeeDetail.id}</li>
//         <li>firstname : {employeeDetail.firstname}</li>
//         <li>lastname : {employeeDetail.lastname}</li>
//         <li>age : {employeeDetail.age}</li>
//         <li>department : {employeeDetail.department}</li>
//         <li>salary : {employeeDetail.salary}</li>
//       </ul>
//     </>
//   );
// }

// function DepartmentListComp() {
//   let departmentData = [];
//   mockData.map((x) => {
//     !departmentData.find((y) => y === x.department) &&
//       departmentData.push(x.department);
//   });
//   let navigate = useNavigate();

//   const employeeListFunc = (e, department) => {
//     e.preventDefault();
//     navigate(`/employee-list/${department}`);
//   };
//   return (
//     <>
//       <h2>DepartmentList</h2>
//       <ul>
//         {departmentData.map((x, i) => (
//           <li key={`department${x}`}>
//             <p>
//               {x}{" "}
//               <input
//                 type="button"
//                 value="department detail"
//                 onClick={(e) => employeeListFunc(e, x)}
//               ></input>
//             </p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

