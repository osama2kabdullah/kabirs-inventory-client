import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLoadStocks from '../../../hooks/useLoadStocks';
import ButtonMe from '../../shared/ButtonMe';

const InstockProducts = () => {
    const [products, setProducts] = useLoadStocks('products.json');
    const navigate = useNavigate();
    const btnclik = (id) => {
        navigate('/manageproducts/'+id)
    }
    return (
        <div className='m-12'>
            <h3 className='text-3xl text-center mb-12'>In stock products</h3>
            
            <div className='grid grid-cols-3 gap-4'>
            {
                products.map(product=><div className='border'>
                <img className='w-full' src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg" alt="" />
                <div className='p-2'>
                    <h4 className='text-xl font-bold'>title</h4>
                    <p className='font-mono'>price: $23</p>
                    <p>availble: 12 pis</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.
                        Lorem ipsum dolor it amet consectetur adipisicing elit. Dignissimos.
                    </p>
                    <p className='font-bold mb-5'>supplier namne</p>
                    <ButtonMe btn={()=>btnclik(product._id)}>Update this product</ButtonMe>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default InstockProducts;