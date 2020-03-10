import React from 'react'
import BoardGroup from "./BoardGroup";
import Board from "../Board/Board";

export default {
    title: "Component|BoardGroup",
    component: BoardGroup,
}

export const boardGroup = () => {
    return <BoardGroup>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
        <Board>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</Board>
    </BoardGroup>
}

boardGroup.story = {
    name: "Default"
}