
import "./Acceuil.css"
import React, { useEffect, useState } from 'react';
import { Typed } from "react-typed";
import { Link} from 'react-router-dom';


const Acceuil = () => {

 
  return (


    
      <div className='Corp1'> 

      <div className="Corps2">
        <h1 className='text-5xl'>
          Perfectionner vos compétences en un Click
          
         
          </h1>
        
        <p>Avec nos formations</p> 
      </div>
      
       
      <div className='sport-card'>
      <div className="sport"> 
        <div className='foot' >
         
        <div className='description' >
        <h1 className="description--title">
       
         Formation de Football
        </h1>
        <p class="description--para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic facere dolores fugit natus nam repellendus vol
          </p>
        </div>
        </div>
        </div>
        <div className="sport"> 
        <div className='basket'>
        <div className='description' >
        <h1 className="description--title">
         Formation de Basket
         </h1>
         <p class="description--para">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic facere dolores fugit natus nam repellendus vol
          </p>
         </div>
        </div>
        </div>
        <div className="sport"> 
        <div className='combat'>
        <div className='description' >
        <h1 className="description--title">
         Formation de Combat
         </h1>
         <p class="description--para">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic facere dolores fugit natus nam repellendus vol
          </p>
         </div>
        </div>
      </div>
      </div>

     
      <div className='Corp'>
        
        <button className="bg-[#00000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"> 
          </button>
      </div>

      <section>
        
      </section>
      </div>
  )
}

export default Acceuil;
