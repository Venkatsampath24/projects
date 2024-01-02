import React from "react";

function Banner(){

    return(
        
        <div className="h-[80vh] w-[100vw] bg-cover bg-center py-10" style={{
                backgroundImage : `url('https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-batman.jpg')`,
            }}
            >

            <div className="text-white font-bold md:text-3xl text-center mt-[25rem] bg-black h-[5rem] opacity-70  ">
            The Dark knight Rises</div>


        </div>
            
            
     

    );
}

export default Banner