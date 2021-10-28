import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TourHandler from './handlers/TourHandle';
// import ValidationErrorThrow from "./handlers/ValidationsErrors";
const DiscordLink = "https://discord.gg/2nYZhczHJ5"
function App() {
 const {HandleChange,FormValues,HandleChangeImage,RegisterTournament,errors,ShowModaler,token,Loading,AllowTournament}  = TourHandler()

 
  return (

 <div className="App">
      <div id="home"></div>
    <div class="preloader" id="preloader"></div>
    
    
  
    <a href="#" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a>
  
    <header id="header-section">
      <div class="overlay">
        <div class="container">
          <div class="row d-flex header-area">
            <div class="logo-section flex-grow-1 d-flex align-items-center">
              <a class="site-logo site-title" href="index.html"><img src="./assets/images/logo.png" alt="site-logo" /></a>
            </div>
            <button class="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>


            <nav class="navbar navbar-expand-lg p-0">
              <div class="navbar-collapse collapse" id="navbarSupportedContent">
                <ul class="navbar-nav main-menu ml-auto">
                  <li><a href="#home" >Home</a></li>
                  <li><a href="#about" >About</a></li>
                  <li><a href="#sponsor" >Sponsor</a></li>
                  <li><a href="#contact" >Contact</a></li>
                  <li><a href="#features" >Features</a></li>
                  
                 
                </ul>
              </div>
            </nav>
            <div class="right-area header-action d-flex align-items-center">
            
            

            
              <a href="#tournaments-section" class="cmn-btn">Register Now!</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <section id="banner-section" class="inner-banner">
      <div class="banner-content d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="main-content">
                <div class="top-area justify-content-center text-center">
                  <h3>Play Unlimited</h3>
                  <h1>Tournaments</h1>
                  <p>Compete in Free and Paid entry Tournaments. Transform your
                    games to real money eSports</p>
                  <div class="btn-play d-flex justify-content-center align-items-center">
                    <a href="#tournaments-section" class="cmn-btn">REGISTER NOW</a>
                    <a href="https://www.youtube.com/watch?v=MJ0zpsWQ_XM" class="mfp-iframe popupvideo">
                      <img src="./assets/images/play-icon.png" alt="play" />
                    </a>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="row justify-content-center">
                      <div class="col-lg-6">
                        <div class="bottom-area text-center">
                          <img src="./assets/images/versus.png" alt="banner-vs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ani-illu">
            <img class="left-1 wow fadeInUp" src="./assets/images/left-banner.png" alt="image" />
            <img class="right-2 wow fadeInUp" src="./assets/images/right-banner.png" alt="image" />
          </div>
        </div>
      </div>
      {/* <div class="container sec2">
        <div class="testimonials-carousel d-flex align-items-center">
          <div class="bottom-item">
            <div class="row">
              <div class="col-lg-5">
                <div class="left-item">
                  <p class="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div class="draw-counter d-flex">
                    <div class="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div class="head">
                      <div class="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div class="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div class="btn-area">
                    <a href="registration.html" class="cmn-btn">Join now!</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="right-area">
                  <img class="img-char" src="./assets/images/character.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-item">
            <div class="row">
              <div class="col-lg-5">
                <div class="left-item">
                  <p class="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div class="draw-counter d-flex">
                    <div class="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div class="head">
                      <div class="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div class="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div class="btn-area">
                    <a href="#" class="cmn-btn">Join now!</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="right-area">
                  <img class="img-char" src="./assets/images/character.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-item">
            <div class="row">
              <div class="col-lg-5">
                <div class="left-item">
                  <p class="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div class="draw-counter d-flex">
                    <div class="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div class="head">
                      <div class="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div class="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div class="btn-area">
                    <a href="#" class="cmn-btn">Join now!</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="right-area">
                  <img class="img-char" src="./assets/images/character.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-item">
            <div class="row">
              <div class="col-lg-5">
                <div class="left-item">
                  <p class="text-sm">Registration Opened</p>
                  <h4>Leader Cup #7</h4>
                  <div class="draw-counter d-flex">
                    <div class="time-parameter left">
                      <h5>26</h5>
                      <span>SEP</span>
                    </div>
                    <div class="head">
                      <div class="date-area d-flex justify-content-center" data-countdown="2022/06/20">
                      </div>
                      <div class="time-parameter">
                        <span>DAY</span>
                        <span>HRS</span>
                        <span>MIN</span>
                        <span>SEC</span>
                      </div>
                    </div>
                  </div>
                  <div class="btn-area">
                    <a href="#" class="cmn-btn">Join now!</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="right-area">
                  <img class="img-char" src="./assets/images/character.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  
  
  
    <section id="how-works-section" class="border-area">
      <div class="overlay pt-120 pb-120">
        <div class="container wow fadeInUp">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-header">
                <h2 class="title"></h2>
                <p>It's easier than you think. Follow 4 simple easy steps</p>
              </div>
            </div>
          </div>
          <div class="row mp-top">
            <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
              <div class="single-item">
                <div class="icon-area">
                  <span>1</span>
                  <img src="./assets/images/how-icon-1.png" alt="image" />
                </div>
                <div class="text-area">
                  <h5>Register</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel">
              <div class="single-item">
                <div class="icon-area">
                  <span>2</span>
                  <img src="./assets/images/how-icon-2.png" alt="image" />
                </div>
                <div class="text-area">
                  <h5>Get Token</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-alt">
              <div class="single-item">
                <div class="icon-area">
                  <span>3</span>
                  <img src="./assets/images/how-icon-3.png" alt="image" />
                </div>
                <div class="text-area">
                  <h5>Playing</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel">
              <div class="single-item">
                <div class="icon-area">
                  <span>4</span>
                  <img src="./assets/images/how-icon-4.png" alt="image" />
                </div>
                <div class="text-area">
                  <h5>Win</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <a href="#tournaments-section" class="cmn-btn">Lets Go</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section id="tournaments-section">
      <div class="overlay pt-120 pb-120">
        <div class="container wow fadeInUp">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8 text-center">
              <div class="section-header">
                <h2 class="title">{AllowTournament?"PMPE Tournaments ":"Registration Close"}</h2>
                <p>Find the perfect tournaments for you. Head to head matches
                  where you pick the game, rules and prize.</p>
              </div>
            </div>
          </div>
         <div class={AllowTournament?"container-fluid active":"container-fluid deactive"} id="tmain" >
            <div class="row mb-40 mp-none" >
            <div class="col-lg-8">

          <form method="post" enctype='multipart/form-data' onSubmit={RegisterTournament} >
          
              <div class="contact-form-wrapper"  style={{borderRadius:"5px"}}>
                {/* <img style="width: 100%;border:1px solid #fff;border-radius:10px;"
                  src="/../teamsdata/banner/616f2de0270ac.jpg" alt="" /> */}
   
        
            <div class="row mb-4 " style={{textAlign:'left'}}  >
              <img src="/assets/images/tourbanner.gif" class="bimage" />
              </div>
  
                <div class="row clanform-row" style={{textAlign:'left'}}  >
                  
                  <div class="col-md-6">
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Your Clan Name</span>
                      <input  class={errors.Clanname?'active':'RemoveActive'} type="text" name="Clanname" onChange={HandleChange}  value={FormValues.Clanname} style={{borderRadius:"5px"}} 
                        placeholder="Your Clan Name" />
                    </div>
                  </div>
                  <div class="col-md-6" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Your Clan Tag</span>
                      <input  class={errors.ClanTag?'active':'RemoveActive'} type="text" name="ClanTag" onChange={HandleChange}  value={FormValues.ClanTag} style={{borderRadius:"5px"}} 
                        placeholder="Your Clan Tag" />
                    </div>
                  </div>
                </div>
  
                <hr />
                <div class="row py-4  linup-detail-row"
                  >
                    
                  <h1 class="title" >{FormValues.Clanname}</h1>
                </div>
  
  
  
                <hr />
                <div class="row clan-logo-form-row" >
  
  
                  <div class="col-md-12 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Enter Your Clan Logo (Only Jpg AND Png)</span>
                      <input class={errors.ClanLogo?'active':'RemoveActive'}  id="paymentsc" type="file" name="ClanLogo" onChange={HandleChangeImage}   style={{borderRadius:"5px"}}
                         />
                    </div>
                  </div>
                </div>
  
                <hr />
  
                <div class="row igl-row-form">
  
                  <div class="col-md-4" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>IGL IN Game Name</span>
                      <input class={errors.IglName?'active':'RemoveActive'}  type="text" name="IglName" onChange={HandleChange}  value={FormValues.IglName} style={{borderRadius:"5px"}} 
                        placeholder="IGL IN Game Name" />
                    </div>
                  </div>
                  <div class="col-md-4" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>IGL Id</span>
                      <input class={errors.IglId?'active':'RemoveActive'}   type="text" name="IglId" onChange={HandleChange}  value={FormValues.IglId} style={{borderRadius:"5px"}} 
                        placeholder="IGL Id" />
                    </div>
                  </div>
                  <div class="col-md-4" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>IGL Watsapp</span>
                      <input class={errors.Whatsapp?'active':'RemoveActive'}   type="text" name="Whatsapp" onChange={HandleChange}  value={FormValues.Whatsapp} style={{borderRadius:"5px"}} 
                        placeholder="IGL Watsapp" />
                    </div>
                  </div>
                </div>
  
  
                <hr />
                <div class="row igl-row-form">
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 2 Ingame Name</span>
                      <input  class={errors.Player2Name?'active':'RemoveActive'}  type="text" name="Player2Name" onChange={HandleChange}  value={FormValues.Player2Name} style={{borderRadius:"5px"}} 
                        placeholder="Player 2 Ingame Name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input" >
                      <span>Player 2 Id</span>
                      <input  class={errors.Player2Id?'active':'RemoveActive'}  type="text" name="Player2Id" onChange={HandleChange}  value={FormValues.Player2Id} style={{borderRadius:"5px"}} 
                        placeholder="Player 2  Id" />
                    </div>
                  </div>
  
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 3 Ingame Name</span>
                      <input class={errors.Player3Name?'active':'RemoveActive'}  type="text" name="Player3Name" onChange={HandleChange}  value={FormValues.Player3Name} style={{borderRadius:"5px"}} 
                        placeholder="Player 3 Ingame Name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 3 Id</span>
                      <input class={errors.Player3Id?'active':'RemoveActive'}  type="text" name="Player3Id" onChange={HandleChange}  value={FormValues.Player3Id} style={{borderRadius:"5px"}} 
                        placeholder="Player 3 Id" />
                    </div>
                  </div>
  
         
  
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div  class="single-input">
                      <span>Player 4 Ingame Name</span>
                      <input class={errors.Player4Name?'active':'RemoveActive'}   type="text" name="Player4Name" onChange={HandleChange}  value={FormValues.Player4Name} style={{borderRadius:"5px"}} 
                        placeholder="Player 4 Ingame Name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 4 Id</span>
                      <input  class={errors.Player4Id?'active':'RemoveActive'}  type="text" name="Player4Id" onChange={HandleChange}  value={FormValues.Player4Id} style={{borderRadius:"5px"}} 
                        placeholder="Player 4 Id" />
                    </div>
                  </div>
  
  
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 5 Ingame Name</span>
                      <input class={errors.Player5Name?'active':'RemoveActive'}  type="text" name="Player5Name" onChange={HandleChange}  value={FormValues.Player5Name} style={{borderRadius:"5px"}} 
                        placeholder="Player 5 Ingame Name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 5 Id</span>
                      <input  class={errors.Player5Id?'active':'RemoveActive'}  type="text" name="Player5Id" onChange={HandleChange}  value={FormValues.Player5Id} style={{borderRadius:"5px"}} 
                        placeholder="Player 5 Id" />
                    </div>
                  </div>
  
  
  
                </div>
  
  
  
                <hr />
                <div class="row extra-slot-form"
                  >
                  <div class="col-12" style={{textAlign:'left'}}>
                    <h4 style={{color:'#fff '}}>Extra Slot</h4>
                  </div>
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 6 Ingame Name</span>
                      <input    type="text" name="Player6Name" onChange={HandleChange}  value={FormValues.Player6Name} style={{borderRadius:"5px"}}
                        placeholder="Player 6 Ingame Name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <div class="single-input">
                      <span>Player 6 Id</span>
                      <input    type="text" name="Player6Id" onChange={HandleChange}  value={FormValues.Player6Id} style={{borderRadius:"5px"}}
                        placeholder="Player 6 Id" />
                    </div>
                  </div>
                </div>
  
                <hr />
                <div class="row form-amount-sec" style={{textAlign:'left'}}>
  
                  <h6 style={{textTransform:'uppercase'}}>Please Send ( <span style={{color:'#15c4f8' }}> Rs 1000
                    </span> ) Amount to this Number
                    ( <span style={{color:'#15c4f8' }}>Easy Paisa 03151003118 | Jazzcash
                      03151003118 </span> )</h6>
  
                </div>
                <hr />
                <div class="row pay-screenshot" >
  
                  <div class="col-md-12 mb-2" style={{textAlign:'left'}}>
                  <div class={Loading?'placeload active':'placeload deactive'}>
                   <div class="image-placeholder loads"></div>
                  </div>
                    <span class='text-danger' >{errors.PaymentScreenshot}</span>
                    <div class="single-input" >
                      <span >Payment Screenshot <span>(Only Jpg OR Png)(Upload Image Size Less
                          The 1 Mb)</span> </span>
                      <input   id="paymentsc" type="file"   name="PaymentScreenshot" onChange={HandleChangeImage}  style={{borderRadius:"5px"}}
                         />
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit"  data-action='submit' class="cmn-btn container text-light" style={{borderRadius:"5px"}}>Register A
                  Team</button>
  
              </div>
              </form>
  
            </div>
            <div class="col-lg-4">
  
              <div class="contact-content-wrapper">
                <h4>Tournament Rules</h4>
                <p style={{fontSize:'15px'}}>.</p>
                <div class="row mt-1 mb-none-30">
  
                  
                <div class="col-lg-12 mb-30">

             
                <ul class="list-group">
                <li class="list-group-item">🔹YOUR INGAME ID LEVEL MUST BE 50+ </li>
                <li class="list-group-item">🔹CORRECT ID & NAME MUST BE SUBMITTED CORRECTLY IN  </li>
                <li class="list-group-item">🔹ONLY PLAYERS WHO HAVE BEEN REGISETERD CAN PLAY </li>
                <li class="list-group-item">🔹TWO PLAYER OF THE TEAM MUST RECORD PLAYERS WITH LOW END PCS CAN RECORD VIA MOBILE</li>
                <li class="list-group-item">🔹WE CAN ASK FOR THE RECORDINGS ANYTIME,IF YOU FAIL TO PROVIDE RECORDINGS ,WILL BE BANNED </li>
                <li class="list-group-item">🔹FISTING IS STRICTLY PROHIBITED | WARN AND AFTER BAN </li>
                <li class="list-group-item">🔹ONLY GAME LOOP / TENCENT PLAYERS ARE ALLOWED </li>
                <li class="list-group-item">🔹FOR ANY QUERY CONTACT MANAGEMENT ON DISCORD (https://discord.com/invite/2nYZhczHJ5) </li>
                <li class="list-group-item">🔹ANY TEAM CAUGHT HACKING/STREAM SNIPING WILL BE DISQUALIFIED</li>
                <li class="list-group-item">🔹ALL PLAYERS MUST JOIN THIR RESPECTIVE VC PRIOR TO THE TIME </li>
                <li class="list-group-item">🔹PLAYERS MUST RECORD THIR GAMEPLAY ON DISPLAY CAPTURE GAME/WINDOW CAPTURE IS PROHIBITED </li>
                <li class="list-group-item">🔹EVERY INDIVIDUAL PLAYER CAN PLAY FROM ONE TEAM ONLY THIS ALSO CONSIDERS PLAYING FROM IDS OF OTHER PLAYERS ANYONE CAUGHT PLAYING FROM OTHER PLAYERS IDS WILL BE BANNED</li>
                <li class="list-group-item">🔹IN CASE OF DELAY YOU HAVE TO MENTION BEFORE THE FIRST ZONE HAS STARTED </li>
                <li class="list-group-item">🔹THE USE OF X-MOUSE BUTTON FOR KILLING PLAYERS THORUGH WALL GLITCH IS NOT ALLOWED  </li>
                <li class="list-group-item">🔹I PAD VIEW IS BANNED ONLY PLAYERS WHO HAVE A LCD/SCREEN THAT HAS A RESOLUTION LIKE IPAD VIEW CAN PLAY ON IPAD VIEW </li>
                <li class="list-group-item">🔹YOU CAN REGISTER MAX 6 PLAYERS FROM ONE LINEUP 5 MUST </li>
              </ul>
               
                  </div>
  
                </div>
              </div>
  
            </div>
          </div>
         </div>
  
        </div>
  
      </div>

  </section>
  
  <div id="features"></div>
  <section id="features-section">
    <div class="overlay pt-120">
      <div class="container wow fadeInUp">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-header text-center">
              <h2 class="title">Pakistan Esport Features</h2>
              <p>The biggest esports tournaments anytime, anywhere</p>
            </div>
          </div>
        </div>
        <div class="row pm-none">
  
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-item text-center">
              <div class="img-area">
                <img src="./assets/images/features-icon-3.png" alt="image" />
              </div>
              <h5>Climb the Leaderboards</h5>
              <p>Compete in monthly leaderboard challenges for real cash and prizes.</p>
            </div>
          </div>
  
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-item text-center">
              <div class="img-area">
                <img src="./assets/images/features-icon-5.png" alt="image" />
              </div>
              <h5>Make up to 10X your $$</h5>
              <p>Make up to 10X your money on multiplayer tourneys. With paid and free entry.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-item text-center">
              <div class="img-area">
                <img src="./assets/images/features-icon-6.png" alt="image" />
              </div>
              <h5>Play at your Level</h5>
              <p>With ranked divisions we help you find the right level to compete.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div id="about"></div>
  <section id="about-us-section">
    <div class="overlay pt-120">
      <div class="container wow fadeInUp">
        <div class="main-container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <div class="section-header text-center">
                <h2 class="title mt-5">ABOUT PAKISTAN ESPORT</h2>
                <p>Welcome To Pakistan Esports We Are Providing You Well Disciplined Gaming Platform Which Can Make You Earn Money By Showing You Skills We Will Be Organizing The Competitive Tournament Of Every Type Of Game Pakistan Esports Is An Esports Community That Is Giving You A Chance To Enhance Your Gaming Skills By Which You Can Earn Money</p>
        
                <a href="#tournaments-section" class="cmn-btn">Lets Go</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="sponsor"></div>

  
  
  
  <section id="tournaments-everyone" class="pb-120">
    <div class="container">
    <h2 class="title mt-5">SPONSORS..</h2>
      <div class="row mt-5">
    
        <div class="col-lg-8 mt-5 col-md-8 d-flex align-items-left text-left" >
          <div class="section-header">
            <h2 class="title text-left">SOFTMECK.COM</h2>
            <h5 class="text-left">THE BEST AGENCY IN PAKISTAN.</h5>
            <p class="text-left" style={{fontSize:'15px'}} >WE PROVIDE CREATIVE, INNOVATIVE, AND PROFESSIONAL SERVICES FOR WEB DEVELOPMENT. HAVING A TEAM OF EXPERT DESIGNERS PROFESSIONAL WEB DEVELOPERS THAT CAN DRIVE YOUR BUSINESS TOWARDS THE DESIRED DESTINATION AND TAKE YOU WHERE YOU WANT. WE HAVE LEARNED THAT THE GREAT DESIGNS ARE TEAMWORK AT ONCE; IT NEEDS PATIENCE, EFFECTIVE TEAMWORK, AND CREATIVITY TO BRING SOMETHING THAT IS JUST AWESOME!.</p>
            <a href="https://www.softmeck.com/" class="cmn-btn">View More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 mt-5">
          <div class="right-area">
            <img class="customingspon" style={{width:'100%'}} src="https://www.softmeck.com/assests/images/pormotebanner.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  
  
  
  
  <div id="contact"></div>
  <footer id="footer-section">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-top">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="top-area text-center">
                    <h3>CONTACT DETIALS</h3>
                  {/* sec */}

                        <div class="row" >
                        <div class="col-lg-5 " >
                          <br/>
                        <h5 class="col-12" style={{color:"orange"}} >Discrod Server</h5>
                       
                                  <p ><a href="https://discord.gg/2nYZhczHJ5"  class="ml-2 btn mb-1 customcolor">https://discord.gg/2nYZhczHJ5</a>
                                  <br/>
                                  <p>https://discord.gg/2nYZhczHJ5</p>
                                  
                                  
                                  </p>
                          </div>
                          <div class="col-lg-7 " >
                          <br/>
                        <h5 class="col-12" style={{color:"orange"}} >Mangers Of Pakistan Esports</h5>
                       
                                  <p ><a  class="ml-2 btn mb-1 customcolor">CrayonYt</a>
                                
                                  
                                  <a  class="ml-2 btn mb-1 customcolor">SameerYt</a>
                                  <a  class="ml-2 btn mb-1 customcolor">ZiddiYt</a>
                                  <a  class="ml-2 btn mb-1 customcolor">Op Smurf</a>
                                  <a  class="ml-2 btn mb-1 customcolor">Op Killer</a>
                                  </p>
                          </div>
                        </div>
                  
                  {/* sec */}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-mid pt-120">
      <div class="container">
        <div class="row d-flex">
          <div
            class="col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center cus-grid">
            <div class="logo-section">
              <a class="site-logo site-title" href="index.html"><img src="./assets/images/logo.png" alt="site-logo" /></a>
            </div>
            <ul class="menu-side d-flex align-items-center">
              <li><a href="#home" class="active">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#sponsor">Sponsor</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
            <div class="right-area">
              {/* <ul class="d-flex">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="main-content">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="col-lg-12 col-md-6">
              <div class="left-area text-center">
                <p>Copyright © 2021. All Rights Reserved By
                  <a  class="ml-2" target="_blank" href="https://www.softmeck.com/"> SOFTMECK</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>




  
    <div class={ShowModaler?"backdropcust active":"backdropcust deactive"} id="backdropcust">
    <div class="alert col-8 customalert alert-dismissible">
    <button type="button" class="btn text-light alclose" id="alclosea" >X</button>
    <br/>
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
            <h3 style={{color:'yellow'}}>Don't Miss : {token}</h3>
            <hr/>
            <p style={{fontSize:'15px'}}>Your Team Register SuccessFully. Copy The Token And Send Token To Managers On Pakistan Esports DiscordServer For Team Approve And Get Your Roles.</p>
            <hr/>
            <h5 style={{color:'yellow'}}>{DiscordLink}</h5>    
    </div>

    </div>


  </div>

  
  )
}

export default App;
