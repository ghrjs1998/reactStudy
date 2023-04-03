import React from "react";

const students = [
    {
        id: 1,
        name: "Oper"
    },
    {
        id: 2,
        name: "Park"
    },
    {
        id: 3,
        name: "Lee"
    },
    {
        id: 4,
        name: "Ban"
    },
    {
        id: 5,
        name: "Kang"
    },
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook