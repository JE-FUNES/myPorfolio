import React from "react";
import Switch from "react-switch";
import american from "../../assets/Flags/american.png";
import spain from "../../assets/Flags/spain.png";
import { useSelector, useDispatch } from 'react-redux';
import { chooseLanguage } from "../../redux/actions";

const LanguagesSwitcher = () => {

    const language = useSelector((state) => state.language);
    const dispatch = useDispatch();

    const handleToggle = () => {
        const newLanguage = language === 'en' ? 'es' : 'en';
        dispatch(chooseLanguage(newLanguage));
      };

    return (
        <div className="rounded-full px-2 py-1 shadow-md sm:max-w-[170px] lg:w-auto border-2 border-black shadow-white bg-slate-100">
        <div className="flex items-center justify-center">
            
            <img src={spain} className="w-8 h-8 mr-2 rounded-full"  title="Español"/>
        <Switch 
        checked={language === 'en'}
        onChange={handleToggle}
        onColor="#334155" // color de base del switch
        offColor="#334155" // color de base del switch
        onHandleColor="#55F2F7" //círculo
        offHandleColor="#0E797A" // Circulo
        boxShadow="0px 1px 5px rgba(1, 0, 0, 2)"
        activeBoxShadow="0px 1px 5px rgba(1, 0, 0, 2)"
        handleDiameter={28}
        uncheckedIcon={false}
        checkedIcon={false}
        height={22}
        width={48}
        />
        <img src={american} className="w-8 h-8 ml-2 rounded-full"  title="English"/>
        </div>
        </div>

    )
};

export default LanguagesSwitcher;