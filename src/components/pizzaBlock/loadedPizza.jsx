import React from 'react'
import ContentLoader from "react-content-loader"
const LoadedPizza = () => {
    return(
        <ContentLoader 
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
         >
          <circle cx="133" cy="131" r="130" /> 
          <circle cx="192" cy="195" r="23" /> 
          <rect x="0" y="277" rx="6" ry="6" width="289" height="30" /> 
          <rect x="3" y="322" rx="8" ry="8" width="270" height="84" /> 
          <rect x="142" y="393" rx="6" ry="6" width="56" height="0" /> 
          <rect x="4" y="419" rx="0" ry="0" width="111" height="33" /> 
          <rect x="158" y="418" rx="20" ry="20" width="114" height="35" />
        </ContentLoader>
        );
}

export default LoadedPizza
