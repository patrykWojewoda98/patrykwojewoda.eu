import { changeLanguage } from "i18next";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const languages = [
  { code: "en", lang: "English" },
  { code: "pl", lang: "Polish" },
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState("PL");

  const handleLanguageChange = (code) => {
    setCurrentLanguage(code.toUpperCase());
    changeLanguage(code);
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={currentLanguage}
        variant="secondary"
      >
        {languages.map((lng) => (
          <Dropdown.Item
            key={lng.code}
            onClick={() => handleLanguageChange(lng.code)}
          >
            {lng.lang}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default LanguageSelector;
