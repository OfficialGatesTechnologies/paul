import React, { Component } from 'react';
import '../styles/styles.scss'
import AliceCarousel from 'react-alice-carousel';
import { withRouter } from 'next/router';
 export default withRouter(class Header extends Component {
 
     
     
    constructor(props) {
        super(props);
        this.state = {
            mainBannerItems : {
                1024: { items: 1 },
              },
              subBannerItems : {
                1024: { items: 3 },
              }
        }
    }
    componentDidMount = () => {

    }
 
    render() {
       
        return (

            <div>
 


    <AliceCarousel responsive={this.state.mainBannerItems} mouseDragEnabled  buttonsDisabled ={true}>
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png" className="yours-custom-class" />
    </AliceCarousel>
    <AliceCarousel responsive={this.state.subBannerItems} mouseDragEnabled  buttonsDisabled ={true}>
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png"  className="yours-custom-class" />
      <img src="../static/images/banner/banner.png" className="yours-custom-class" />
    </AliceCarousel>


                {/* <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                >
                    <div class="item"><h4>1</h4></div>
                    <div class="item"><h4>2</h4></div>
                    <div class="item"><h4>3</h4></div>
                    <div class="item"><h4>4</h4></div>
                    <div class="item"><h4>5</h4></div>
                    <div class="item"><h4>6</h4></div>
                    <div class="item"><h4>7</h4></div>
                    <div class="item"><h4>8</h4></div>
                    <div class="item"><h4>9</h4></div>
                    <div class="item"><h4>10</h4></div>
                    <div class="item"><h4>11</h4></div>
                    <div class="item"><h4>12</h4></div>
                </OwlCarousel> */}


                {/* <section className="banner-sec">
                 <img src="../static/images/banner/banner.png" alt="banner"/>
            </section> */}


        
            </div>
        )
        
    }
})
 





