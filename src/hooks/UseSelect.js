import React,{ useState} from 'react';
import Select from 'react-select';

function UseSelect (options,placeholder) {
    const optionsList = options.map((option)=>{
      return  { value: option, label: option }
    });

    const [value, setvalue] = useState(null);

    const selectComponent =    <Select
                    defaultValue={value}
                    options={optionsList}
                    placeholder={placeholder}
                    onChange={setvalue}
                    isSearchable={false}
                    noOptionsMessage={()=>"No gender found.."}
                    styles={{
                        dropdownIndicator: (baseStyles) => ({
                            ...baseStyles,
                            color: "white",
                            fontSize: "var(--small)",
                            width:"100%"
                        
                        }),

                        control:  (baseStyles)=>({
                            ...baseStyles,
                            backgroundColor : "var(--fourtary)",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            fontSize: "var(--small)",
                            height:10,
                            width:"100%",
                            ":focus":{
                                border:"none"
                            }
                        }),
                        menu:  (baseStyles, state)=>({
                            ...baseStyles,
                            backgroundColor : "var(--fourtary)",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            fontSize: "var(--small)",
                            width:"100%"
                        }),
                        option:  (baseStyles, state)=>({
                            ...baseStyles,
                            backgroundColor : "var(--fourtary)",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            width:"100%",
                            ":hover" : {
                                backgroundColor : "var(--secondary)"
                            },
                            fontSize: "var(--small)"
                            
                        }),
                        singleValue: (baseStyles, state)=>({
                            ...baseStyles,
                            color:"white",
                            width:"100%",
                           
                            fontSize: "var(--small)",
                        ":focus":{
                                border:"none"
                            }
                        }),
                        placeholder: (baseStyles)=>({
                            ...baseStyles,
                            fontSize: "var(--small)",
                            width:"100%"
                        }),
                        
                    }}
                />   
    return [value,selectComponent]
}

export default UseSelect;