import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core"

function NavBar() {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Blueprint</NavbarHeading>
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon='home' text='Home' />
                <Button
                    className={Classes.MINIMAL}
                    icon='document'
                    text='Files'
                />
            </NavbarGroup>
        </Navbar>
    )
}

export default NavBar
