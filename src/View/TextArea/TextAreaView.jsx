import React from 'react';
import { TextArea } from '../../components/UI/Textarea'

export const TextAreaView = () =>{
    return(
        <div>
            <h3>Text Area</h3>
            <TextArea
                description="Description"
            />
        </div>
    );
}