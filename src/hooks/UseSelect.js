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
                            fontSize: "var(--small)"
                        
                        }),

                        control:  (baseStyles)=>({
                            ...baseStyles,
                            backgroundColor : "#232b3b",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            fontSize: "var(--small)",
                            height:10,
                            ":focus":{
                                border:"none"
                            }
                        }),
                        menu:  (baseStyles, state)=>({
                            ...baseStyles,
                            backgroundColor : "#232b3b",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            fontSize: "var(--small)"
                        }),
                        option:  (baseStyles, state)=>({
                            ...baseStyles,
                            backgroundColor : "#232b3b",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            ":hover" : {
                                backgroundColor : "var(--primary)"
                            },
                            fontSize: "var(--small)"
                            
                        }),
                        singleValue: (baseStyles, state)=>({
                            ...baseStyles,
                            color:"white",
                           
                            fontSize: "var(--small)",
                        ":focus":{
                                border:"none"
                            }
                        }),
                        placeholder: (baseStyles)=>({
                            ...baseStyles,
                            fontSize: "var(--small)",
                        }),
                        
                    }}
                />   
    return [value,selectComponent]
}

export default UseSelect;