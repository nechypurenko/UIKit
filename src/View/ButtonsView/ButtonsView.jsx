import React from 'react';
import { ColumnContainer } from '../ColumnContainer'
import { RowContainer } from '../RowContainer';
import { Button } from '../../components/UI/Button/Button'
// import primaryButtonIcon from '../../assets/img/primaryButtonIcon.svg';
// import secondaryButtonIcon from '../../assets/img/secondaryButtonIcon.svg';
import { PlayIcon } from '../../components/UI/Icons/icons/play'
export const ButtonsView = () => {
    return (
        <RowContainer>
            <ColumnContainer>
                <h3>Primary</h3>
                <Button
                    label="Button"
                    type="primary"/>
                <Button
                    label="Button"
                    type="primary"
                    disabled />
            </ColumnContainer>

            <ColumnContainer>
                <h3>Primary with icon</h3>
                <Button
                    label="Button"
                    type="primary"
                    icon={PlayIcon}/>
                <Button
                    label="Button"
                    type="primary"
                    disabled
                    icon={PlayIcon} />
            </ColumnContainer>

            <ColumnContainer>
                <h3>Secondary</h3>
                <Button
                    label="Button"
                    type="secondary"/>
                <Button
                    label="Button"
                    type="secondary"
                    disabled/>
            </ColumnContainer>

            <ColumnContainer>
                <h3>Secondary with icon</h3>
                <Button
                    label="Button"
                    type="secondary"
                    icon={PlayIcon}/>
                <Button
                    label="Button"
                    type="secondary"
                    disabled
                    icon={PlayIcon} />
            </ColumnContainer>
        </RowContainer>
        
        
    )
}