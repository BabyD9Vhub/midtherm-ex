import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Table } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes, NavLink } from 'react-router-dom';
import Contact from './Contact';
import { useRef } from 'react';
import { useState } from 'react';


export function Layout() {

  return (

    <nav className=' p-2 mb-3 text-center '>
      <nav class="navbar navbar-expand-lg bg-body-orange">
        <div class="container-fluid">
          <div className='icon'>
            <img src='/card-01.jpg' />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>

          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">

              <a class="nav-link active" aria-current="page" href="#">
                <NavLink to="/" className="link" style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "underline",

                  };
                }}>หน้าแรก</NavLink>
              </a>
              <a class="nav-link " href="#">
                <NavLink to="/product" className="link"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "none" : "underline",

                    };
                  }}>ตารางเทียบแคลลอรี่</NavLink>
              </a>
              <a class="nav-link" href="#">
                <NavLink to="/contact" className="link"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "none" : "underline",

                    };
                  }}
                >
                  ผู้จัดทำ

                </NavLink>
              </a>

            </div>

          </div>
        </div>
      </nav>
    </nav>




  );

}
function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />

      <div className='cover-page'>

        <p style={{ textAlign: 'center' }}><a href='#' style={{ color: 'black' }}><h5 className='PP'>อาการพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี</h5></a></p>
        <FoodList />
      </div>
    </>
  );
}
function FoodList() {
  return (
    <div className='cover-card' >
      <div class="card-list" style={{ width: '18rem' }}>
        <img src="/f0101.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"><b className='MM'>หอมแดง</b></h5>
          <p class="card-text">เป็นสมุนไพรที่มีการนำมาใช้ในการประกอบอาหารที่มีสรรพคุณทางยาสามารถ ขับลมในลำไส้ แก้ปวดท้อง บำรุงธาตุ แก้หวัดคัดจมูก อีกทั้งยังช่วยทำให้ระบบย่อยอาหารดี เจริญอาหาร ทำให้ความดันโลหิตต่ำ ลดไขมันในเลือดได้ดีด้วย</p>
          <a href="#" class="btn btn-primary">เรียนรู้เพิ่มเติม</a>
        </div>
      </div>
      <div class="card-list" style={{ width: '18rem' }}>
        <img src="/f0102.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"><b className='MM'>ถั่วลิสงคั่ว</b></h5>
          <p class="card-text">สมุนไพรที่นำมาใช้เป็นอาหารคือเมล็ด ที่เอาเปลือกนอกออกแล้ว ที่มีการนำมาใช้ในการประกอบอาหารที่มีสรรพคุณทางยา ช่วยลดความดันโลหิตสูงลดความเสี่ยงของโรคเบาหวานช่วยป้องกันโรคหัวใจถั่วลิสงมีสารที่ช่วยลดระดับคอเลสเตอรอล  </p>
          <a href="#" class="btn btn-primary">เรียนรู้เพิ่มเติม</a>
        </div>
      </div>
      <div class="card-list" style={{ width: '18rem' }}>
        <img src="/f0103.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" ><b className='MM'>พริกขี้หนู</b></h5>
          <p class="card-text">เป็นสมุนไพรที่มีส่วนช่วยแต่งรสชาติและสีให้อาหารนานาชนิด มีการนำมาใช้ในการประกอบอาหาร เพื่อเพิ่มความเผ็ดทำให้อาหารมีรสชาติที่อร่อยยิ่งขึ้น มีสรรพคุณทำให้ระบบการเผาผลาญทำงานได้ดี ส่งผลให้ สามารถช่วยลดน้ำหนักได้ </p>
          <a href="#" class="btn btn-primary">เรียนรู้เพิ่มเติม</a>
        </div>
      </div>
    </div >
  );
}
function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  }
  const [product1, setProduct1] = useState(60);
  const [product2, setProduct2] = useState(30);
  const [product3, setProduct3] = useState(54);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const data = [
    ["เมี่ยงคำกลีบบัวหลวงแบบโบราณ", 60],
    ["พริกขี้หนูสวนกับเมี่ยงคำกลีบบัวหลวงแบบโบราณ", 30],
    ["หอมแดงกับเมี่ยงคำกลีบบัวหลวงแบบโบราณ", 54],

  ];
  return (
    <>
      <Layout />
      <h4>Product</h4>
      <Table striped border hover className='my-3 ' ref={table}>
        <thead>
          <tr>
            <th>ชื่ออาหาร</th>
            <th>แคลลอรี่</th>
            <th>เลือกเมนู</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>เมี่ยงคำกลีบบัวหลวงแบบโบราณ</td>
            <td>60</td>
            <td className='text-center'><button className='btn btn-primary' style={{ marginRight: 5 }} onClick={() => {
              setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + product1)
            }}>Add to cart</button></td>


          </tr>
          <tr>
            <td>เพริกขี้หนูสวนกับเมี่ยงคำกลีบบัวหลวงแบบโบราณ</td>
            <td>30</td>
            <td className='text-center'><button className='btn btn-primary' style={{ marginRight: 5 }} onClick={() => {
              setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + product2)
            }}>Add to cart</button></td>


          </tr>
          <tr>
            <td>หอมแดงกับเมี่ยงคำกลีบบัวหลวงแบบโบราณ</td>
            <td>54</td>
            <td className='text-center'><button className='btn btn-primary' style={{ marginRight: 5 }} onClick={() => {
              setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + product3)
            }}>Add to cart</button></td>


          </tr>



        </tbody>
        <h6 style={{ textAlign: 'center', marginTop: '15px', marginLeft: '50%' }}>พลังงานที่ได้รับ {totalPrice} Kcal</h6>
      </Table>
    </>
  );
}
function App() {
  return (

    <BrowserRouter>
      {/*  //if you wanna use URL you should create this Element and cover this Element all */}
      <Container className='bg-light p-2 my-3' >
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/main' element={< Index />} />
          <Route path='/product' element={< Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>



  );
}

export default App;