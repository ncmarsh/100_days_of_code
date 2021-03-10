import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

function ToggleViewBtn() {
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Cards', value: '1' },
      { name: 'Table', value: '2' },
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
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
}
  
export default ToggleViewBtn;