import React from 'react'
import Button from 'elements/Button'
import BrandIcon from 'parts/iconText'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width:350}}>
            <BrandIcon/>
            <p className="brand-tagline">
              wee kaboom your beautiy holiday instantly and memorable
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">
            For Beginner
            </h6>
            <ul className="list-group list-grup-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                Start Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payment">
                Use Payment
                </Button>
              </li>            
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">
            Explore Us
            </h6>
            <ul className="list-group list-grup-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                Our Career
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                terms & conditions 
                </Button>
              </li>            
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">
            Connect us
            </h6>
            <ul className="list-group list-grup-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.id">
                support@staycation.id 
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                021-2208-1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>
                  Staycation, kemang, jakarta
                </span>
              </li>            
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
          Copyright 2019 * All rights reserved * copyright
          </div>
        </div>
      </div>
    </footer>
  )
}
