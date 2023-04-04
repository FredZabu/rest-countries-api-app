import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loading } from '../../components/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import './detailPage.css'



function DetailPage({ match }) {
    const params = useParams()
    
    let { countryName } = params;
    const [searchName, setSearchName] = useState(countryName);

    const [dataNeeded, setDataNeeded] = useState([]);
    
    

    
    useEffect(() => {
           const getData = async()=> {
       try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${searchName}`);
           if (!res.ok) throw new Error('something went wrong');
       const data = await res.json(); 
           setDataNeeded(data)
            console.log(Object.values(data[0].currencies));
             
       } catch (error) {
        console.log("error here "+ error);
       }
       
   }
        getData();
       
    }, [countryName, searchName]);
   
    return (
        
        <div className="wrapper">
            <div className="back">
                <Link to = "/"> <FontAwesomeIcon icon={faLeftLong} /> <span>Back</span> </Link>
            </div>
            {dataNeeded.length!==0? 
            <div className="detail-container">
                <div className="image"> <img src={dataNeeded[0].flags.png} alt="country flag" srcset="" /> </div>
                <div className="detail1">
                    <h2>{ dataNeeded[0].name.common}</h2>
                    <div className="infort">
                        <div className="infor1">
                            <p><span className='inf1'>Native Name: </span> <span>{dataNeeded[0].name.official}</span ></p>
                            <p><span className='inf1'>Population: </span> <span> { new Intl.NumberFormat().format(dataNeeded[0].population) }</span ></p>
                            <p><span className='inf1'>Region: </span> <span>{ dataNeeded[0].region}</span ></p>
                            <p><span className='inf1'>Sub Region: </span> <span>{ dataNeeded[0].subregion}</span ></p>
                            <p><span className='inf1'>Capital: </span> <span>{ dataNeeded[0].capital}</span ></p>
                        </div>
                        <div className="infor2">
                            <p><span className='inf1'>Top Level Domain: </span> <span>{ dataNeeded[0].tld}</span ></p>
                            <p><span className='inf1'>Currencies: </span> <span>{(Object.values(dataNeeded[0].currencies))[0].name}</span ></p>
                            <p><span className='inf1'>Languages: </span> english </p>
                        </div>
                    </div>
                    {dataNeeded[0].borders && (<div className="border">
                            <p>Border Countries:</p>
                            <div className="border-container">
                                {dataNeeded[0].borders.map((item) => {
                            return <Border key={item} name={item} clickHandler={(itemName) => {
                                console.log("itemName was called"+ itemName);
                                setSearchName(itemName)
                            }} />
                       })}
                            </div>
                           
                    </div>)}

                </div>
            </div> : <Loading />}
        </div>
            
    )  
}

function Border({ name, clickHandler }) {

    const handleClick = () => {
        clickHandler(name)
    }
    return <span onClick={handleClick} >{ name}</span>
}
export default DetailPage;