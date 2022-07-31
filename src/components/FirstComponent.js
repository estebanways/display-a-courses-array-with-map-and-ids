import React from 'react';

export const FirstComponent = () => {

  let name = "Esteban";

  let courses = [
    "CSS",
    "HTML",
    "Sass",
    "JavaSCript",
    "React",
  ];

  return (
    <div>
      <h1>My First Component</h1>
      <p>My name is {name}</p>
      <ul>
        {
          courses.map(course => {
            return (<li>
              {course}
            </li>)
          })
        }
      </ul>
      <ul>
        {
          courses.map((courses, index) => {
            return (<li key={index}>
              {courses}
            </li>)
          })
        }
      </ul>
      <ul>
        {
          courses.map((course) => {
            return (<li key={course.toString()} style={{ color: "blue" }}>
              {course}
            </li>)
          })
        }
      </ul>
      <ul>
        {
          courses.map((course) =>
            <li key={course.toString()} style={{ color: "blue" }}>
              {course}
            </li>
          )
        }
      </ul>
    </div>
  )
}
