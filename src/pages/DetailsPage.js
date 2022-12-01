import React, { Component } from "react";
import PageDetailsTitle from "parts/PageDetailsTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDecription from "parts/PageDetailDecription";
import BookingForm from "parts/BookingForm";
import Header from "parts/Header";
import ItemDetails from "json/itemDetails.json";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Deatails", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailsTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailsTitle>
        <FeaturedImage
          breadcrumb={breadcrumb}
          data={ItemDetails.imageUrls}
        ></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDecription data={ItemDetails}></PageDetailDecription>
            </div>
            <div className="col-5">
              <BookingForm itemDetails={ItemDetails}></BookingForm>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories}></Categories>
        <Testimoni data={ItemDetails.testimonial}></Testimoni>
        <Footer></Footer>
      </>
    );
  }
}
