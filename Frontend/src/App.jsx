// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTask,
//   deleteTask,
//   completeTask,
//   uncompleteTask,
//   EditTaskData,
// } from "./todoSlice";

// const App = () => {
//   const [mywork, setMyWork] = useState("");
//   const [btnStatus, setBtnStatus] = useState(true);
//   const [myid, setMyid] = useState("");
//   const dispatch = useDispatch();
//   const workData = useSelector((state) => state.todo.task);
//   console.log(workData);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addTask({ id: Date.now(), work: mywork, status: false }));
//   };

//   const deleteWork = (id) => {
//     dispatch(deleteTask(id));
//   };

//   const completeWork = (id) => {
//     dispatch(completeTask(id));
//   };

//   const uncompleteWork = (id) => {
//     dispatch(uncompleteTask(id));
//   };

//   const editData = (id, wrk) => {
//     setMyWork(wrk);
//     setBtnStatus(false);
//     setMyid(id);
//   };

//   const editDataSave = () => {
//     dispatch(EditTaskData({ myid, mywork }));
//     setMyWork("");
//     setBtnStatus(true);
//   };

//   let sno = 0;
//   const ans = workData.map((key) => {
//     sno++;
//     return (
//       <>
//         <tr>
//           <td> {sno} </td>

//           <td>
//             {key.status ? (
//               <span style={{ color: "red", textDecoration: "line-through" }}>
//                 {key.work}
//               </span>
//             ) : (
//               <span style={{ color: "black", textDecoration: "none" }}>
//                 {key.work}
//               </span>
//             )}
//           </td>
//           <td>
//             <button
//               onClick={() => {
//                 deleteWork(key.id);
//               }}
//             >
//               Delete
//             </button>
//           </td>
//           <td>
//             <button
//               onClick={() => {
//                 completeWork(key.id);
//               }}
//             >
//               {" "}
//               Complete
//             </button>
//           </td>
//           <td>
//             <button
//               onClick={() => {
//                 uncompleteWork(key.id);
//               }}
//             >
//               {" "}
//               UnComplete
//             </button>
//           </td>
//           <td>
//             <button
//               onClick={() => {
//                 editData(key.id, key.work);
//               }}
//             >
//               {" "}
//               Edit
//             </button>
//           </td>
//         </tr>
//       </>
//     );
//   });
//   return (
//     <>
//       <div className="App">
//         <h1> To Do App </h1>
//         <form>
//           Enter your Task :{" "}
//           <input
//             type="text"
//             value={mywork}
//             onChange={(e) => {
//               setMyWork(e.target.value);
//             }}
//           />
//           {btnStatus ? (
//         <button onClick={handleSubmit}>Add</button>
//       ) : (
//         <button onClick={editDataSave}> EditSave</button>
//       )}
//         </form>
//       </div>
      

//       <table border="1">{ans}</table>
//     </>
//   );
// };
// export default App;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  completeTask,
  uncompleteTask,
  EditTaskData,
} from "./todoSlice";


const App = () => {
  const [mywork, setMyWork] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);
  const [myid, setMyid] = useState("");

  const dispatch = useDispatch();
  const workData = useSelector((state) => state.todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mywork.trim() === "") return;

    dispatch(addTask({ id: Date.now(), work: mywork, status: false }));
    setMyWork("");
  };

  const editData = (id, work) => {
    setMyWork(work);
    setMyid(id);
    setBtnStatus(false);
  };

  const editDataSave = (e) => {
    e.preventDefault();
    dispatch(EditTaskData({ myid, mywork }));
    setMyWork("");
    setBtnStatus(true);
  };

  return (
    <div className="page">
      <div className="todo-card">
        <h2>To-Do List 📝</h2>

        <form className="todo-form">
          <input
            type="text"
            placeholder="Add your task"
            value={mywork}
            onChange={(e) => setMyWork(e.target.value)}
          />

          {btnStatus ? (
            <button onClick={handleSubmit}>Add</button>
          ) : (
            <button onClick={editDataSave}>Save</button>
          )}
        </form>

        <ul className="todo-list">
          {workData.map((item) => (
            <li key={item.id} className="todo-item">
              <label>
                <input
                  type="checkbox"
                  className="circle-checkbox"
                  checked={item.status}
                  onChange={() =>
                    item.status
                      ? dispatch(uncompleteTask(item.id))
                      : dispatch(completeTask(item.id))
                  }
                />
                <span className={item.status ? "completed" : ""}>
                  {item.work}
                </span>
              </label>

              <div className="actions">
                <button onClick={() => editData(item.id, item.work)}>✏</button>
                <button onClick={() => dispatch(deleteTask(item.id))}>
                  ✖
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
