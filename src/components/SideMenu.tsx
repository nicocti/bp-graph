import { Menu, MenuDivider } from "@blueprintjs/core"
import { MenuItem2 } from "@blueprintjs/popover2"

function SideMenu() {
    return (
        <Menu className='app-sidebar'>
            <MenuItem2 icon='new-text-box' text='New text box' />
            <MenuItem2 icon='new-object' text='New object' />
            <MenuItem2 icon='new-link' text='New link' />
            <MenuDivider />
            <MenuItem2 text='Settings...' icon='cog' intent='primary'>
                <MenuItem2 icon='tick' text='Save on edit' />
                <MenuItem2 icon='blank' text='Compile on edit' />
            </MenuItem2>
        </Menu>
    )
}

export default SideMenu
