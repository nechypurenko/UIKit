import { RowContainer } from "../RowContainer";
import { Checkbox } from "../../components/UI/Checkbox";
import { useState } from "react";

export const CheckboxContainer = () => {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: true,
        checkbox2: false,
        checkbox3: true,
        checkbox4: false
    });

    const handleCheckboxChange = (name, checked) => {
        setCheckboxes({ ...checkboxes, [name]: checked });
    };

    return (
        <div>
            <h3>Checkbox Component</h3>
            <RowContainer>
                <Checkbox
                    name="checkbox1"
                    data-testid="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    name="checkbox2"
                    data-testid="checkbox2"
                    checked={checkboxes.checkbox2}
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    name="checkbox3"
                    data-testid="checkbox3"
                    checked={checkboxes.checkbox3}
                    label="Title"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    name="checkbox4"
                    data-testid="checkbox4"
                    checked={checkboxes.checkbox4}
                    label="Title"
                    onChange={handleCheckboxChange}
                />
            </RowContainer>
        </div>
    );
};
