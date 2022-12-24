import { MouseEvent, useContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Graphin from "@antv/graphin"
import type { ContextMenuValue } from "@antv/graphin"
import { Utils, Components, GraphinContext } from "@antv/graphin"
import { Menu, MenuDivider } from "@blueprintjs/core"
import { MenuItem2 } from "@blueprintjs/popover2"
import {
    GraphinEdge,
    GraphinNode,
    IUserEdge,
    IUserNode,
} from "@antv/graphin/lib/typings/type"

const { ContextMenu } = Components
type TypeContextMenuProps = {
    value: ContextMenuValue
}

const NodeMenu = (props: TypeContextMenuProps) => {
    const { graph, apis } = useContext(GraphinContext)
    const { onClose, id } = props.value

    const addNode = (item: string) => {
        const id = uuidv4()
        const node: IUserNode = {
            id: id,
            label: id,
            style: {
                badges: [
                    {
                        position: "RT",
                        type: "text",
                        value: 8,
                        size: [15, 15],
                        fill: "red",
                        color: "#fff",
                    },
                ],
            },
        }
        const edge: IUserEdge = {
            source: item,
            target: id,
            type: "related-to",
        }
        graph.addItem("node", node)
        graph.addItem("edge", edge)
        graph.layout()
        onClose()
    }
    function deleteNode(item: string) {
        graph.removeItem(item)
        onClose()
    }

    return (
        <Menu>
            <MenuItem2
                icon='new-link'
                text='Add link'
                onClick={(e) => addNode(id)}
            />
            <MenuItem2
                icon='graph-remove'
                text='Remove'
                onClick={(e) => deleteNode(id)}
            />
            <MenuDivider />
            <MenuItem2 disabled={true} text={"Clicked on node " + id} />
        </Menu>
    )
}

const BackgroundMenu = (value: ContextMenuValue) => {
    return (
        <Menu>
            <MenuItem2 icon='new-object' text='Add node' />
            <MenuItem2 icon='search-around' text='Enrich with...' />
            <MenuItem2 icon='group-objects' text='Group' />
            <MenuDivider />
            <MenuItem2 disabled={true} text='Clicked on background' />
        </Menu>
    )
}

export const DisplayGraph = () => {
    const data = Utils.mock(6).circle().graphin()
    // const addNode = (node: IUserNode, edge: IUserEdge) => {
    //     setData({
    //         nodes: [...data.nodes, node],
    //         edges: [...data.edges, edge],
    //     })
    // }

    return (
        <Graphin data={data} animate={true}>
            <ContextMenu bindType='node'>
                {(value) => {
                    return <NodeMenu value={value} />
                }}
            </ContextMenu>
            <ContextMenu bindType='canvas'>
                {(value) => {
                    return <BackgroundMenu {...value} />
                }}
            </ContextMenu>
        </Graphin>
    )
}
