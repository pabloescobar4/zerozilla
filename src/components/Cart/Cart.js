import {React  }from 'react'
import { useSelector} from 'react-redux';
// import {useNavigate,Link} from 'react-router-dom'
export const Cart = (props) => {

	const data1 = useSelector((state) => state.Cart.cart)
	console.log(data1)
	// const [img,setImg] = useState("")
  return(
	  
	<div>
     {data1.map((a) => {
		 return(
			<div key={a.id}  className="ml-48 mt-48">
			  <div className="   h-full ">
				  {/* <Link to={`/product/${a.id}`} key={a.id}> 
                    <div className="rounded-xl ">
                      <img
                        src={a.id.img[0]}
                        alt=""
                        id="img"
                        className="rounded-xl "
                      />
                    </div>
					</Link> */}
                    <div className="b  w-3/5 text-white mt-2 ml-20">
                      <div>
                        <button
                          type="button"
						//   onClick={() => {Send(a)}} 
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
                        {a.id.name}
                      </div>

                      <div className="text-sm mb-5 text-black">
                        <p>{a.id.madeBy}</p>
                      </div>

                      <div className="  ">
                        <div className="flex w-48">
                          <div className="text-red-400 font-bold ">
                            <p>₹ {a.id.offer_price}</p>
                          </div>
                          <div className="text-gray-500 ml-5 ">
                            <p>
                              {' '}
                              <del>₹{a.id.actual_price}</del>
                            </p>
                          </div>
                        </div>

                        <div className="text-gray-500 mt-2 d2">
                          <p>Save ₹ {a.id.total_savings}</p>
                        </div>
                      </div>
                    </div>
                  </div>
				 
		</div>
		 )
		
	 })}
	</div>
   )

 }