import Uploader from "../data/Uploader";
import { useCabins } from "../features/cabins/useCabins";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { isLoading, cabins } = useCabins();

  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
