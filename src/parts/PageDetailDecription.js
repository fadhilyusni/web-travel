import React from 'react'
import parse from "html-react-parser";

export default function PageDetailDecription ({data}) {
    return (
        <main>
            <h4 style={{marginBottom:20}}>About The Legacy</h4>
            {parse(data.description)}
            <div className="row" style={{marginTop:50}}>
                {data.features.map ((feature, index) =>{
                    return (
                        <div
                        key={`feature-${index}`}
                        className="col-3"
                        style={{marginBottom:20}}
                        >
                            <img
                            width="30"
                            className="d-block mb-2"
                            src={feature.imageUrl}
                            alt={feature.name}
                            />{" "}
                            <span>
                                {feature.qty}
                            </span>{" "}
                            <span className="text-gray-500 font-weight-light">
                                {feature.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}