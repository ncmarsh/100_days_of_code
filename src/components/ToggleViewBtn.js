import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const styles = {
  color: "white"
}

function ToggleViewBtn() {
    const [radioValue, setRadioValue] = useState("/card");
  
    const radios = [
      { name: "Cards", value: "/card" },
      { name: "Table", value: "/table" },
    ];
  
    return (
      <>
        <ButtonGroup toggle style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <Link to={radio.value} style={styles}>
                {radio.name}
              </Link>
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
}
  
export default ToggleViewBtn;