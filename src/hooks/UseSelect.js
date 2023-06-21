import React,{ useState} from 'react';
import Select from 'react-select';

function UseSelect ({options,placeholder,intialDisabledValue}) {

    const optionsList = options.map((option)=>{
      return  { value: option, label: option }
    });

    const resetValue = () => {
        console.log('inside reset')
        setvalue(null);
    }

    const disableThiscomponent = (isDisabled) => {
        setIsDisabled(isDisabled);
    }

    const [value, setvalue] = useState(null);
    const [isDisabled,setIsDisabled] = useState(intialDisabledValue);

    const SelectComponent =    <Select
                    value={value}
                    defaultValue={value}
                    options={optionsList}
                    placeholder={placeholder}
                    onChange={setvalue}
                    isSearchable={false}
                    isDisabled={isDisabled}
                    noOptionsMessage={()=>""}
                    styles={{
                        dropdownIndicator: (baseStyles) => ({
                            ...baseStyles,
                            color: "black",
                            fontSize: "var(--small)",
                            width:"100%",
                        }),

                        control:  (baseStyles,state)=>({
                            ...baseStyles,
                            // backgroundColor : "var(--fourtary)",
                            border :"none",
                            borderColor: "none",
                            color: "white",
                            fontSize: "var(--small)",
                            height:10,
                            width:"100%",
                            backgroundColor: state.isFocused ? 'var(--territary)' : "var(--fourtary)",
                            outline: state.isFocused ?  '1px var(--primary) solid' : 'none',
                            cursor:'pointer',
                            // ":focus":{ 
                            //     ...baseStyles[':focus'],
                            //     backgroundColor:'black',
                            //     outline: '1px var(--primary) solid',
                            // }
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
                            width:"100%",
                           
                        }),
                        
                    }}
                />   
    return [SelectComponent,value,resetValue,disableThiscomponent];
}

export default UseSelect;