import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperMoreButton, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import Pic1 from '../../assets/images/Ama1.jpg';
import Pic2 from '../../assets/images/Ama2.jpg';
import Pic3 from '../../assets/images/Ama3.jpg';
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct >
      </div>
      <div className='body' style={{ width:'100%', backgroundColor:'#efefef'}}>
        <div id='container-slider' style={{ height:'1000px', width:'1270px', margin:'0 auto' }}>
          <SliderComponent arrImages={[Pic1, Pic2, Pic3]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div style={{width:'100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperMoreButton
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: '1px solid rgb(11, 116, 229)',
                color: 'rgb(11,116, 229)',
                width: '240px',
                height: '38px',
                borderRadius: '4px'
              }}
              styleTextButon={{ fontWeight: 500 }}
            />
          </div>
          <div style={{ background: 'black', textAlign: 'center', marginTop: '100px', fontSize: '40px', color: '#808089' }}>
            Nhat Dang
          </div>
        </div>
      </div >
    </>
  )
}

export default HomePage