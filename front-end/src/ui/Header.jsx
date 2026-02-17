
import styled from "styled-components"
const StyledHeader=styled.header`
       background-color:gray;
        padding: 1.2rem 4.8rem;
        border-right: blue;
`

function Header() {
  return (
    <StyledHeader>
      <header>Header</header>
    </StyledHeader>
  )
}

export default Header
