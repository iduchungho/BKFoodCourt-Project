import { React, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Pay.css'


export default function PayComponent() {


  
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('FOOD_TOTAL_QUANTITY'));
        const items2 = JSON.parse(localStorage.getItem('FOOD_TOTAL_AMOUNT'));
        if (items || items2) {
            setItems(items);
            setItems2(items2);
        }
    }, []);
    console.log(items);
    console.log(items2);
   
    return (

        <div className="box-container">
            <div className="BOX1">

                <div className="box1">
                    <Card variant='light' style={{ width: '50rem' }}>
                        <Card.Title  >
                            <span className="Phuongthucgiaohang">Phương thức giao hàng</span>
                        </Card.Title>
                        <Card.Body >
                            <div className="Box__checkbox">
                                <label class="container container1">
                                    <span className="marginthing">Giao Hàng tận Nơi</span>
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container container2">
                                    <span className="marginthing">Nhận tại cửa hàng</span>
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <div className="box2">
                    <Card variant='light' style={{ width: '50rem' }}>
                        <Card.Title >
                            <span className="thongtinlienhe">
                                Thông tin liên hệ
                            </span>
                        </Card.Title>
                        <Card.Body className="bandacotaikhoan">
                            Bạn đã có tài khoản?
                            <a className="dangnhap" href='/Login'>  đăng nhập</a>
                        </Card.Body>
                        <Card.Body className="inputtt">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="Tên người nhận" class="form-control-lg"  ></Form.Control>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="Số điện thoại" class="form-control-lg"></Form.Control>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                <div className="box3">
                    <Card variant='light' style={{ width: '50rem' }}>
                        <Card.Title>
                            <span className="phuongthucthanhtoan">
                                Phương thức thanh toán
                            </span>
                        </Card.Title>
                        <Card.Body className="inputtt">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Tiền mặt
                            </label>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <div className="BOX2">

                <Card variant='light' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><span className="giohang">Giỏ hàng</span></Card.Title>
                    </Card.Body>
                    <Card.Body className="dongdau">
                        <span className="Tamtinh"> Tạm tính ({items2} Món ) </span>
                        <span className="gia1"> ₫{items} </span>
                    </Card.Body>
                    <Card.Body className="donghai">
                        <span className="giamgia"> Giảm giá </span>
                        <span className="gia2"> ₫0 </span>
                    </Card.Body>
                    <Card.Body className="dongba">
                        <div className="tongcong">
                            <span >Tổng cộng</span>
                            <span class="text-xs text-gray-500 mt-2 block">
                            Đã bao gồm thuế (nếu có)
                            </span>
                        </div>
                        <span className="gia3"> ₫{items} </span>
                    </Card.Body>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="ghichu">Ghi Chú</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <div className="dong4">
                        <Card.Body >
                            <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Thanh Toán</a>
                        </Card.Body>
                    </div>
                </Card>

            </div>
        </div>
    );
}