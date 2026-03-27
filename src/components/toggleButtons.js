import { useEffect, useState } from 'react';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  //code from MUI for seperated buttons
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
 //code from MUI for seperated buttons

 //individual button styling 
    [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
        width: "120px",
        height: '50px',
        borderRadius: '50px',
        backgroundColor: 'rgb(84, 42, 134)',
        borderColor: 'rgb(144, 94, 206)',
        borderWidth: '1.5px',
        color: 'rgb(239, 226, 255)',
        fontSize: '16px',
        
        '&:hover': { //hover styling
            backgroundColor: 'rgb(144, 94, 206)',
            borderColor: 'rgb(84, 42, 134)',
            color: 'rgb(239, 226, 255)',
        },
        [`&.${toggleButtonClasses.selected}`]: { //selected styling 
            backgroundColor: 'rgb(42, 15, 75)',
            color: 'rgb(239, 226, 255)',
            borderColor: 'rgb(239, 226, 255)',
            fontWeight: '600',

            '&:hover': { //hover and selected styling 
                backgroundColor: 'rgb(144, 94, 206)',
                borderColor: 'rgb(84, 42, 134)',
                color: 'rgb(239, 226, 255)',
            },
        },
    },
    '& p': {
        margin: 0, //center text in buttons 
    },
}));

function ToggleButtons({ onButtonChange }) {
    const [value, setValue] = useState('hp');

    useEffect(() => {
        console.log(value);

        if (onButtonChange) onButtonChange(value);
    }, [value]);

    const handleChange = (event, newValue) => {
        if (newValue !== null) setValue(newValue);
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