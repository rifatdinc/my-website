import React from 'react'
import { Card } from 'antd';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={5}>

                    <Card title={<Link to='1'> Network Osi Layer</Link>} className='blog__card text-center' bordered={true}>
                        <hr className='mt-2' />
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            <p>Network layer felan filan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dolore iure molestiae pariatur odit voluptas qui, quos possimus ipsum provident! Molestias mollitia dolore dolor voluptates nobis placeat magnam nulla quia.
                            Inventore molestias rerum quidem fugiat, veritatis ducimus ratione eos cupiditate quis, quas pariatur suscipit odio hic velit. Accusantium similique quam nisi iste expedita natus accusamus ducimus dolores aut, cupiditate voluptas?
                            Nesciunt id nemo, doloribus minus error debitis praesentium tempora dolorum rem eius ipsum quisquam aspernatur molestias recusandae adipisci ex repudiandae atque, labore optio officia assumenda. Sit dolore officia atque placeat?
                            Quis culpa blanditiis vitae saepe quisquam cum beatae porro recusandae magnam ratione repellendus expedita necessitatibus error soluta, explicabo libero, pariatur amet tempora qui distinctio quas eius cupiditate sequi fugit? Repellendus.
                            Aliquid molestiae eum quaerat pariatur odit exercitationem ea assumenda eaque perspiciatis id? Ipsum fugit quam maiores ex provident libero nulla, asperiores reprehenderit neque quibusdam rerum repudiandae illo. Nostrum, impedit eos!</p>
                        </div>
                    </Card>
                    <Card title='Selam Ilk Blog' className='mt-2 blog__card text-center' bordered={true}>
                        <hr className='mt-2' />
                        <p>Merhaba bu benim ilk blogum</p>
                    </Card>
                    <Card title='Selam Ilk Blog' className='mt-2 blog__card text-center' bordered={true}>
                        <hr className='mt-2' />
                        <p>Merhaba bu benim ilk blogum</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Blog