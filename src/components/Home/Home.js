import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../../redux/Cart/action';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, Link } from 'react-router-dom';
import { storeData } from '../../redux/storeData/action';

export const Home = (props) => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState('');
  // const [value, setValue] = useState([]);
  //console.log(search)
  const [val, setVal] = useState('');

  const dispatch = useDispatch();

  /*
           fetching the data from the Api
           */
  const fetchData = async () => {
    return axios({
      url: ` https://pepperfrydb1.herokuapp.com/furniture`,
      method: 'GET',
      params: {},
    })
      .then((response) => {
        // const data =(response.data)

        console.log(response.data);
        dispatch(storeData(response.data));
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  
/*

         getting the data from the redux
           */



  const data = useSelector((state) => state.Data.data);

  const Send = (e) => {
    // console.log(e)
    dispatch(addCart(e));
  };
  const navigate = useNavigate();

  function handleClickCart() {
    navigate('/product');
  }
  function handleCart() {
    navigate('/cart');
  }

  const data1 = useSelector((state) => state.Cart.cart);
  const x = 0;
  return (
    <>
      <div className="w-full h-1/12 border-red-500 flex">
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/letter-logos-120926491.jpg"
            alt=""
            className="img1 "
            onClick={handleClickCart}
          />
        </div>
        <div className=" mt-5">
          <input
            type="text"
            placeholder="What are you loooking"
            className="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="borde flex   w-2/5 mt-5   lg:pl-24 lg: md:ml-28 md: sm:ml-10 sm:">
          <div></div>

          <div className="mt ml-4 ">
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

      <div className="abc">
        <button
          onClick={() => {
            setVal('sofas');
          }}
          type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Sofas
        </button>

        <button
          onClick={() => {
            setVal('Chair');
          }}
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Chair
        </button>
        <button
          onClick={() => {
            setVal('Settee');
          }}
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Settee
        </button>
        <button
          onClick={() => {
            setVal('Table');
          }}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Table
        </button>
      </div>
      <div className="ml-48 mt-16">
        <div className="container ">
          {data

            /*
           Filter by Categories
           */

            .filter((el) => {
              if (el.category === val) {
                return el.category === val;
              } else if (val === '') {
                return el;
              }
            })

            /*
           Search Functionality
           */
            .filter((a) => {
              if (search === '') {
                return a;
              } else {
                return (
                  a.name.toLowerCase().includes(search.toLowerCase()) ||
                  a.madeBy.toLowerCase().includes(search.toLowerCase())
                );
              }
            })
            /*
           mapping the Data
           */
            .map((a) => {
              return (
                <>
                  <div
                    className="borde border-gray-300  from-green-400 to-blue-600 w-80 hover:shadow-lg rounded-xl  hover:shadow-blue-500/50 p-4  cursor-pointer"
                    key={a.id}
                  >
                    <div className="   h-full ">
                      <Link to={`/product/${a.id}`} key={a.id}>
                        <div className="rounded-xl">
                          <img
                            src={a.img[x]}
                            alt=""
                            id="img"
                            className="rounded-xl"
                          />
                        </div>
                      </Link>
                      <div className="b  w-3/5 text-white mt-2 ml-20">
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              Send(a);
                            }}
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            {' '}
                            Add to cart
                          </button>

                          {/* <button className="bg-blue-500 shadow-lg rounded-2xl p-2 mt-2 hover:bg-blue-600 shadow-blue-500/50  "  >
				 
				 </button> */}
                        </div>
                      </div>

                      <div className=" mt-1 mb-2  ">
                        <div className="text-md text-black font-semi-bold borde w-72 ">
                          {a.name}
                        </div>

                        <div className="text-sm mb-5 text-black">
                          <p>{a.madeBy}</p>
                        </div>

                        <div className="  ">
                          <div className="flex w-48">
                            <div className="text-red-400 font-bold ">
                              <p>₹ {a.offer_price}</p>
                            </div>
                            <div className="text-gray-500 ml-5 ">
                              <p>
                                {' '}
                                <del>₹{a.actual_price}</del>
                              </p>
                            </div>
                          </div>

                          <div className="text-gray-500 mt-2 d2">
                            <p>Save ₹ {a.total_savings}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return <></>;
};

export { Navbar };
