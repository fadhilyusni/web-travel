import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageHero from 'assets/images/image-hero.jpg';
import HeroFrame from 'assets/images/image-hero-frame.jpg';
import IconCities from 'assets/images/icon/ic-cities.svg';
import IconTreasure from 'assets/images/icon/ic-treasure.svg';
import IconTraveler from 'assets/images/icon/ic-traveler.svg';
import Button from 'elements/Button'
import formatNumber from 'utilitas/formatNumber'


export default function Hero (props){

    function showMostPicked (){
    window.scrollTo({
        top: props.refMostPicked.current.offsetTop - 30,
        behavior : "smooth"
    });
}
    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Bussy Work, <br/>
                        Start New Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%" }}>
                        We provide what you need to enjoy your 
                        holiday with family. Time to make another 
                        memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked} >
                        Show Me Now
                    </Button>

                    <div className="row" style={{marginTop:80}}>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img 
                            src={IconTraveler}
                            alt={`${props.data.travelers} Travelers`}>
                            </img>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}
                                <span className="font-weight-light text-gray-500">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img 
                            src={IconTreasure}
                            alt={`${props.data.treasures} Treasure`}>
                            </img>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)}{" "}
                                <span className="font-weight-light text-gray-500">
                                    Treasure
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img 
                            src={IconCities}
                            alt={`${props.data.cities} Cities`}>
                            </img>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)}{" "}
                                <span className="font-weight-light text-gray-500">
                                    Cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className ="col-6 pl-5">
                    <div style={{width:520, height:410 }}>
                        <img 
                        src={ImageHero}
                        alt="Room With Couches"
                        className="img-fluid position-absolute"
                        style={{margin : "-30px 0 0 -30px", zIndex:1}}
                        />
                        <img 
                        src={HeroFrame}
                        alt="Room With Couches Frame"
                        className="img-fluid position-absolute"
                        style={{margin : "0 -15px -15px 0"}}
                        />
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    );
        
    
}