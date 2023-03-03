import { createContext, useEffect, useState } from "react";
import isImage from '../utils/isimage'

const FilterHtmlContext = createContext();

export const FilterHtmlProvider = ({children})=>{
    const extractUrls = require("extract-urls");


    const [code, setCode] = useState(``);
    const [allurls, setallurls] = useState([])
    const [formData, setformData] = useState([

    ]);

    
    const validateHtml = async (countrylink) =>{
        const extractedurls = await extractUrls(code);
        if(extractedurls === undefined){
            setallurls(['No Url\'s found']);
        }else{
            setallurls(extractedurls); 
        }
        
        console.log(countrylink);
        console.log(allurls);
    }

    return(
        <FilterHtmlContext.Provider value={{
            code,
            setCode,
            validateHtml,
            allurls,
        }}> {children}</FilterHtmlContext.Provider> 
    )
}

export default FilterHtmlContext;