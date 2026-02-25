import styled, { css } from "styled-components";
import {useSearchParams} from 'react-router-dom'
const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.6rem;
  transition: all 0.3s;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  &:hover:not(:disabled) {
    background-color: var(--color-brand-500);
    color: var(--color-brand-50);
  }
`;

function Filter({filterField,options}) {
 const[searchParams,setSearchParam]=useSearchParams()
const currentFilter=searchParams.get(filterField)|| options.at(0).value;

  function handleClick(value){
      searchParams.set(filterField,value)
      setSearchParam(searchParams)
  }
  return (
    <StyledFilter>
      {
        options?.map((opt)=> 
        <FilterButton 
        key={opt.value} 
        onClick={()=>handleClick(opt.value)}
        active={opt.value===currentFilter}
        disabled={opt.value===currentFilter}
        >
          {opt.label}

          </FilterButton>)
      }
     
     
    </StyledFilter>
  );
}

export default Filter;