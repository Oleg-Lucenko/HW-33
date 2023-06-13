import { Typography, Card } from 'antd';
import { getProducts } from '../API/index';
import { useEffect, useState } from 'react';
import './products.css';
const { Meta } = Card;


function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data.products);
        });
    }, []);

    return (
        <div>
            <Typography.Title level={4}>Products</Typography.Title>

            <div className='products-general-container'>


            <Typography.Title level={5}>Smartphones</Typography.Title>

            <div className='products-container smartphones'>

            {products.filter(products => products.category === 'smartphones').map((item) => (
                            <Card
                            style={{
                            width: 250,
                            }}
                            cover={
                            <img
                                src={item.images[0]}
                                className='img-smartphones'
                            />
                            }
                
                            >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />

                            <div className='product-info'>
                                <span>Price: {item.price}</span>
                                <span>Rating: {item.rating}</span>
                                <span>Brand: {item.brand}</span>
                            </div>

                            </Card>

            ))}

            </div>


            <Typography.Title level={5}>Laptops</Typography.Title>

            <div className='products-container laptops'>


            {products.filter(products => products.category === 'laptops').map((item) => (
                            <Card
                            style={{
                            width: 250,
                            }}
                            cover={
                            <img
                                src={item.images[0]}
                                className='img-laptops'
                            />
                            }
                
                            >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />


                            <div className='product-info'>
                                <span>Price: {item.price}</span>
                                <span>Rating: {item.rating}</span>
                                <span>Brand: {item.brand}</span>
                            </div>
                            </Card>

            ))}

            </div>


            <Typography.Title level={5}>Frangrances</Typography.Title>

            <div className='products-container fragrances'>


            {products.filter(products => products.category === 'fragrances').map((item) => (
                            <Card
                            style={{
                            width: 250
                            }}
                            cover={
                            <img
                                src={item.images[0]}
                                className='img-fragrances'
                            />
                            }
                
                            >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />

                            <div className='product-info'>
                                <span>Price: {item.price}</span>
                                <span>Rating: {item.rating}</span>
                                <span>Brand: {item.brand}</span>
                            </div>
                            </Card>

            ))}

            </div>


            <Typography.Title level={5}>Skincare</Typography.Title>

            <div className='products-container skincare'>

            {products.filter(products => products.category === 'skincare').map((item) => (
                            <Card
                            style={{
                            width: 250,
                            }}
                            cover={
                            <img
                                src={item.images[0]}
                                className='img-skincare'
                            />
                            }
                
                            >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />

                            <div className='product-info'>
                                <span>Price: {item.price}</span>
                                <span>Rating: {item.rating}</span>
                                <span>Brand: {item.brand}</span>
                            </div>
                            </Card>

            ))}

            </div>


            <Typography.Title level={5}>Groceries</Typography.Title>

            <div className='products-container groceries'>

                {products.filter(products => products.category === 'groceries').map((item) => (
                            <Card
                            style={{
                            width: 250,
                            }}
                            cover={
                            <img
                                src={item.images[0]}
                                className='img-groceries'
                            />
                            }
                
                            >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />

                            <div className='product-info'>
                                <span>Price: {item.price}</span>
                                <span>Rating: {item.rating}</span>
                                <span>Brand: {item.brand}</span>
                            </div>
                            </Card>

                ))}

            </div>


            <Typography.Title level={5}>Home decoration</Typography.Title>

            <div className='products-container home-decoration'>

            {products.filter(products => products.category === 'home-decoration').map((item) => (
                            <Card
                            style={{
                            width: 250,
                            }}
                            cover={
                            <img
                                src={item.images[0]}
                                className='img-home-decoration'
                            />
                            }

                            >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />


                            <div className='product-info'>
                                <span>Price: {item.price}</span>
                                <span>Rating: {item.rating}</span>
                                <span>Brand: {item.brand}</span>
                            </div>
                            </Card>

            ))}

            </div>

            </div>

        </div>
    );
}

export default Products;