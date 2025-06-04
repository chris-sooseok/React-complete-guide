export default function Tabs({ children, buttons, buttonsContainer="menu"}) {
    // depending on the value passed (ex. "menu" or custom componenet), it will load appropriately
    const ButtonsContainer = buttonsContainer;
    
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}