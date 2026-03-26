import { useEffect, useState } from 'react';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    gap: '2rem',
    [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
    [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
    [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
        borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
}));

function ToggleButtons({ onButtonChange }) {
    const [value, setValue] = useState('HP');

    useEffect(() => {
        if (onButtonChange) onButtonChange(value);
    }, [value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledToggleButtonGroup
            value={value}
            exclusive
            onChange={handleChange}
            aria-label="Stat display"
        >
            <ToggleButton value="hp" aria-label="hp">
                <p>HP</p>
            </ToggleButton>
            <ToggleButton value="atk" aria-label="atk">
                <p>Atk</p>
            </ToggleButton>
            <ToggleButton value="def" aria-label="def">
                <p>Def</p>
            </ToggleButton>
            <ToggleButton value="spd" aria-label="spd">
                <p>Spd</p>
            </ToggleButton>
            <ToggleButton value="spatk" aria-label="spatk">
                <p>Sp-atk</p>
            </ToggleButton>
        </StyledToggleButtonGroup>
    );
}

export default ToggleButtons;