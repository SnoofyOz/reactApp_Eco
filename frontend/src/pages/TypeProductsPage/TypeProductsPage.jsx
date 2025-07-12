import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Row, Pagination, Col } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductsPage = () => {
    const onChange = () => { }
    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{width:'1270px', margin:'0 auto'}}>
                <Row style={{ paddingTop: '10px', flexWrap: 'nowrap' }}>
                    <WrapperNavbar span={4}>
                        <NavbarComponent />
                    </WrapperNavbar>
                    <Col span={20}>
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
                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{
                            display: 'flex', justifyContent: 'center', marginTop: '10px'
                        }} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TypeProductsPage