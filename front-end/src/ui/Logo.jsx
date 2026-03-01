import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

function Logo() {
    const {isDarkMode} = useDarkMode();

    const src = isDarkMode ? "Dark" : "Light";

    return (
        <StyledLogo>
            {/* <Img src={src} alt="Logo" /> */}
            <h1>{src}</h1>
        </StyledLogo>
    );
}

export default Logo;