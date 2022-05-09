import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { addCart } from '../../redux/Cart/action';
import { useNavigate } from 'react-router-dom';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const ProductDetail = (props) => {

  const [data, setData] = useState({});
  const [img, setImg] = useState('');
  const { id } = useParams();

  const dispatch = useDispatch();

  const fetchData = async () => {
    const d = await fetch(`https://pepperfrydb1.herokuapp.com/furniture/${id}`);
    const mk = await d.json();
    setData(mk);
    setImg(mk.img[0]);
  };
  //  const data2 = useSelector((state)=> state.Data.data)
  useEffect(() => {
    fetchData();
  }, []);

 // console.log(img);

  const Send = (e) => {
    // console.log(e)
    dispatch(addCart(e));
  };
  const navigate = useNavigate();

  function handleProduct() {
    navigate('/product');
  }

  function handleCart() {
    navigate('/cart');
  }

  const data1 = useSelector((state) => state.Cart.cart);
  return (
    <>
      <div className="w-full h-1/12 border-red-500 flex">
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/letter-logos-120926491.jpg"
            alt=""
            className="img1 cursor-pointer"
            onClick={handleProduct}
          />
        </div>
        <div className=" mt-5">
          <input
            type="text"
            placeholder="What are you loooking"
            className="search"
          />
        </div>

        <div className="borde flex   w-2/5 mt-5   lg:pl-24 lg: md:ml-28 md: sm:ml-10 sm:">
          <div></div>

          <div className="mta ml-4 ">
            <PersonSharpIcon fontSize="large" className="cursor-pointer" />
          </div>

          <div className="mt cursor-pointer flex ml-4 ">
            <ShoppingCartIcon fontSize="large" onClick={handleCart} />
            <div className="-mt-2 -ml-1 text-white border bg-red-400 pl-1 pb-1 pr-1 rounded-xl font-bold h-6">
              {data1.length}
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="ml-24 mt-10">
          <img src={img} alt="No" key={data.id} />
        </div>

        <div className="ml-24 mt-10">
          <div className=" mt-1 mb-2  ">
            <div className="text-md text-black font-semi-bold borde w-72 ">
              {data.name}
            </div>

            <div className="text-sm mb-5 text-black">
              <p>{data.madeBy}</p>
            </div>

            <div className="  ">
              <div className="flex w-48">
                <div className="text-red-400 font-bold ">
                  <p>₹ {data.offer_price}</p>
                </div>
                <div className="text-gray-500 ml-5 ">
                  <p>
                    {' '}
                    <del>₹{data.actual_price}</del>
                  </p>
                </div>
              </div>

              <div className="text-gray-500 mt-2 d2">
                <p>Save ₹ {data.total_savings}</p>
              </div>
              <div className="b  w-3/5 text-white mt-2 ml-20">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      Send(data);
                    }}
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    {' '}
                    Add to cart
                  </button>

                  {/* <button className="bg-blue-500 shadow-lg rounded-2xl p-2 mt-2 hover:bg-blue-600 shadow-blue-500/50  "  >
				 
				 </button> */}
                </div>
              </div>
              <div className="w-96 h-48 text-gray-500">
                {/* <p>{data.details.overview}</p> */}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
