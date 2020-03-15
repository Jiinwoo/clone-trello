import React from 'react';
import Board from "./Board";


export default {
    title: "Component|Board",
    component: Board
}

export const board = () => {
    return (<Board/>)
}
board.story = {
    name: "Default"
}

export const primaryBoard = () => {
    return <Board theme={"primary"}/>
}
export const secondaryBoard = () => {
    return <Board theme={"secondary"}/>
}

export const disabledBoard = () => {
    return <Board disabled={true}/>
}
export const disabledBoard1 = () => {
    return <Board disabled={true}/>
}