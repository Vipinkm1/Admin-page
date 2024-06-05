import React from 'react'
import Search from '../../assests/search.png';
import Filter from '../../assests/filter.png';
import Home from '../../assests/home.png'
import Notification from '../../assests/notification.png'
import Shop from '../../assests/heart.png'
import Conversation from '../../assests/message.png'
import Wallet from '../../assests/message.png'
import Favorite from '../../assests/favorite.png'
import Profile from '../../assests/profile.png'
import Setting from '../../assests/setting.png'
import Pixels from '../../assests/pexels-ali-pazani-2613260.png'
import Banner from '../../assests/pexels-humphrey-muleba-2045248.png'
import Anastasia from '../../assests/anastasia.png'
import Andrea from '../../assests/andrea.png'
import Antoni from '../../assests/antoni.png'
import Shkraba from '../../assests/shkraba.png'
import Imad from '../../assests/imad.png'
import Heart2 from "../../assests/heart2.png"
import Share from '../../assests/share.png'
import Comment from '../../assests/comment.png'
import Tobias from '../../assests/tobias.png'
import Pixabay from '../../assests/pexels-pixabay-164455.png'
import Star from '../../assests/star.png'
import Image1 from '../../assests/Image1.png'
import Image2 from '../../assests/Image2.png'
import Image3 from '../../assests/Image3.png'
import Logout from '../../assests/logout.png'

import './Task.css'
const Task = () => {
    return (
        <>
            <div className='container'>
                <div className='top-container'>
                    <div className='nav-container'>
                        <div className='nav-container-item'>
                            <p className='logo-name'>LOGO</p>
                        </div>
                        <div className='nav-container-items'>
                            <img className='search' src={Search} />
                            <input className='input-box' type='text' placeholder='Search here...' />
                            <img src={Filter} />
                            <p className='filter'>Filter</p>
                        </div>
                        <div className='nav-container-itemses'>
                            <button className='button'>Become a seller</button>
                        </div>
                    </div>
                    <div className='nav-container nav-container2'>
                        <div className='nav-container-item nav-container-item2'>
                            <div className='flex'>
                                <img src={Home} />
                                <p className='home'>Home</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Notification} />
                                <p>Notification</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Shop} />
                                <p>Shop</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Conversation} />
                                <p>Conversation</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Wallet} />
                                <p>Wallet</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Favorite} />
                                <p>Suscription</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Profile} />
                                <p>Profile</p>
                            </div>
                            <div className='flex flex-item'>
                                <img src={Setting} />
                                <p>Setting</p>
                            </div>
                            <div className='flex flex-item logout'>
                                <img src={Logout}/>
                                <p className='log'>Log out</p>
                            </div>
                        </div>
                        <div>
                        <div className=' nav-container-items2'>

                            <div className='media'>
                                <div className='img-container'>
                                    <div className='img'>
                                        <img src={Pixels} />
                                    </div>
                                    <div className='title'>
                                        <p className='home'>Lara Leones</p>
                                        <p>@thewallart</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </div>
                                
                            </div>
                           <div className='text-container'>
                            <p className='content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout <span>Read More</span></p>
                           </div>
                           <div className='banner'>
                            <img src={Banner}></img>
                           </div>
                           <div className='icons'>
                             <div className='icons-item'>
                                <img src={Heart2} className='icon-width'/>
                                <p className='home'>9.8k</p>
                             </div>
                             <div className='icons-item'>
                                <img src={Share} className='icon-width'/>
                                <p className='home'>8.6k</p>
                             </div>
                             <div className='icons-item'>
                                <img src={Comment} className='icon-width'/>
                                <p className='home'>7.2k</p>
                             </div>
                           </div>
                        </div>
                        <div className=' nav-container-items2 nav-container-items22'>

                            <div className='media'>
                                <div className='img-container'>
                                    <div className='img'>
                                        <img src={Imad} />
                                    </div>
                                    <div className='title'>
                                        <p className='home'>Thomas J</p>
                                        <p>@thewallart</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </div>
                                
                            </div>
                           <div className='text-container'>
                            <p className='content'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout <span>Read More</span></p>
                           </div>
                           <div className='banner'>
                            <img src={Tobias}></img>
                           </div>
                           <div className='icons'>
                             <div className='icons-item'>
                                <img src={Heart2} className='icon-width'/>
                                <p className='home'>9.8k</p>
                             </div>
                             <div className='icons-item'>
                                <img src={Share} className='icon-width'/>
                                <p className='home'>8.6k</p>
                             </div>
                             <div className='icons-item'>
                                <img src={Comment} className='icon-width'/>
                                <p className='home'>7.2k</p>
                             </div>
                           </div>
                        </div>
                        </div>
                        <div className=' nav-container-itemses2 '>
                           <div className='img-container top'>
                            <p className='home'>Artist</p>
                            <p>Photographers</p>
                           </div>
                           <div className=' back1'>
                            <div className='img-container back'>
                                <div className='img'>
                                    <img src={Anastasia}/>
                                </div>
                                <div className='title'>
                                    <p className='white'>Thomas Edward</p>
                                    <p className='white-2'>@thewildwithyou</p>
                                </div>
                            </div>
                           </div>
                           
                           <div className=' back1 back2'>
                            <div className='img-container back'>
                                <div className='img'>
                                    <img src={Andrea}/>
                                </div>
                                <div className='title'>
                                    <p className='white'>Chrios Doy</p>
                                    <p className='white-2'>@thewildwithyou</p>
                                </div>
                            </div>
                           </div>
                           
                           <div className=' back1 back3'>
                            <div className='img-container back'>
                                <div className='img'>
                                    <img src={Antoni}/>
                                </div>
                                <div className='title'>
                                    <p className='white'>Emilie Jones</p>
                                    <p className='white-2'>@thewildwithyou</p>
                                </div>
                            </div>
                           </div>
                           
                           <div className=' back1 back4'>
                            <div className='img-container back'>
                                <div className='img'>
                                    <img src={Shkraba}/>
                                </div>
                                <div className='title'>
                                    <p className='white'>Jessica Williams</p>
                                    <p className='white-2'>@thewildwithyou</p>
                                </div>
                            </div>
                           </div>
                           
                           <div className=' back1 back5'>
                            <div className='img-container back'>
                                <div className='img'>
                                    <img src={Imad}/>
                                </div>
                                <div className='title'>
                                    <p className='white'>Thomas J</p>
                                    <p className='white-2'>@thewildwithyou</p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className='product-cart'>
                        <div className='product-container'>
                            <img src={Pixabay} className='imgs'/>
                            <p className='home content size'>Modern Wall Decor Framed Painting</p>
                            <div className='product-flex'>
                               <div className='currency'>
                               <p className='cre'>$199.99</p>
                               </div>
                               <div className='rating'>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                               </div>
                                
                            </div>
                        </div>
                        <div className='product-container'>
                            <img src={Image1} className='imgs'/>
                            <p className='home content size'>Modern Wall Decor Framed Painting</p>
                            <div className='product-flex'>
                               <div className='currency'>
                               <p className='cre'>$199.99</p>
                               </div>
                               <div className='rating'>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                               </div>
                                
                            </div>
                        </div>
                        <div className='product-container'>
                            <img src={Image2} className='imgs'/>
                            <p className='home content size'>Modern Wall Decor Framed Painting</p>
                            <div className='product-flex'>
                               <div className='currency'>
                               <p className='cre'>$199.99</p>
                               </div>
                               <div className='rating'>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                               </div>
                                
                            </div>
                        </div>
                        <div className='product-container'>
                            <img src={Image3} className='imgs'/>
                            <p className='home content size'>Modern Wall Decor Framed Painting</p>
                            <div className='product-flex'>
                               <div className='currency'>
                               <p className='cre'>$199.99</p>
                               </div>
                               <div className='rating'>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                                <img src={Star} className='star'/>
                               </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Task