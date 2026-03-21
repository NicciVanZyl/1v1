import react, { useState, useEffect } from "react";
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
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


export default function ToggleButtons({ onSelectStat }) {
    const [selectedStat, setSelectedStat] = useState('hp');

    const handleChange = (event, newStat) => {
        setSelectedStat(newStat);
    };
    


    useEffect(() => {
        if (onSelectStat) onSelectStat(selectedStat);
    }, [selectedStat])

    return (
        <StyledToggleButtonGroup
            value={selectedStat}
            exclusive
            onChange={handleChange}
            aria-label="Stat Selection"
        >
            <ToggleButton value="hp" aria-label="HP">
                <p className="toggleButtonText">HP</p>
            </ToggleButton>
            <ToggleButton value="atk" aria-label="ATK">
                <p className="toggleButtonText">Atk</p>
            </ToggleButton>
            <ToggleButton value="def" aria-label="DEF">
                <p className="toggleButtonText">Def</p>
            </ToggleButton>
            <ToggleButton value="spd" aria-label="SPD">
                <p className="toggleButtonText">Spd</p>
            </ToggleButton>
            <ToggleButton value="spatk" aria-label="SP-ATK">
                <p className="toggleButtonText">Sp-Atk</p>
            </ToggleButton>
        </StyledToggleButtonGroup>
    );
}