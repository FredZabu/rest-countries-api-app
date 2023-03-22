import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detailPage.css'


function DetailPage({ match }) {
    const params = useParams()
    
    const { countryName } = params;
    console.log(countryName);
    const [dataNeeded, setDataNeeded] = useState([]);
    
    
   const getData = async()=> {
       try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
           if (!res.ok) throw new Error('something went wrong');
       const data = await res.json(); 
           setDataNeeded(data)
       } catch (error) {
        console.log("error here "+ error);
       }
       
   }
    
    useEffect(() => {
        getData();
       
    }, [countryName]);
    
    return (
        
        <div>
            <div className="back">
                <Link to = "/">Back</Link>
            </div>
            {dataNeeded.length!==0? 
            <div className="detail-container">
                <div className="image"> <img src={dataNeeded[0].flags.png} alt="country flag" srcset="" /> </div>
                <div className="detail1">
                    <h2>{ dataNeeded[0].name.common}</h2>
                    <div className="infor">
                        <div className="infor1">
                            <p><span className='inf1'>Native Name: </span> <span>{dataNeeded[0].native}</span ></p>
                            <p><span className='inf1'>Population: </span> <span> { new Intl.NumberFormat().format(dataNeeded[0].population) }</span ></p>
                            <p><span className='inf1'>Region: </span> <span>{ dataNeeded[0].region}</span ></p>
                            <p><span className='inf1'>Sub Region: </span> <span>{ dataNeeded[0].subregion}</span ></p>
                            <p><span className='inf1'>Capital: </span> <span>{ dataNeeded[0].capital}</span ></p>
                        </div>
                        <div className="infor2">
                            <p><span className='inf1'>Top Level Domain: </span> <span>{ dataNeeded[0].tld}</span ></p>
                            <p><span className='inf1'>Currencies: </span> <span>{dataNeeded[0].currence}</span ></p>
                            <p><span className='inf1'>Languages: </span> english </p>
                        </div>
                    </div>
                    <div className="border">
                        <p>Border Countries</p>
                       
                    </div>

                </div>
            </div> : <div><h3>loading.....</h3></div>}
        </div>
            
    )  
}

// function Btn() {
//     return <div className="btn-detail"><p>the borders</p></div>
// }
// function Language() {
//     return <span>language</span>
// }
export default DetailPage;