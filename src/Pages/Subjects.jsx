import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, Redirect, Switch, Router, Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';
import Subs from '../Components/Subjects/Subs';



const Subjects = () => {
  return (
    <>
      <Subs/>
    </>
    // <div >
    //   <div class="btn-group btn-group-lg p-4" role="group" aria-label="Large button group">
    //     <button type="button" class="btn btn-outline-dark"><a>
    //       <NavLink className="nav-link" to="/Arts">
    //         {" "}
    //         Arts
    //       </NavLink>
    //     </a></button>
    //     <button type="button" class="btn btn-outline-dark">Commerce</button>
    //     <button type="button" class="btn btn-outline-dark">Science</button>
    //   </div>
    //   <div>
    //     {/* <BrowserRouter>
    //     <Header>
    //       <Routes>

    //         <Route exact path="Arts" element={<Arts />} />
    //         <Route exact path="Commerce" element={<Commerce />} />
    //         <Route exact path="Science" element={<Science />} />

    //       </Routes>
    //     </Header>
    //     </BrowserRouter> */}
    //   </div>
    //   <div>
    //     <div className="container">
    //       <h1>The React Routing Application</h1>
    //       <table className="table table-bordered table-striped table-danger">

    //         <tbody>
    //           <tr>
    //             <td>
    //               <Link to={`/Arts`}>Arts</Link>
    //             </td>
    //             <td>
    //               <Link to={`/Commerce`}>Commerce</Link>
    //             </td>
    //             <td>
    //               <Link to={`/Science`}>Science</Link>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //       {/* Define Route Table Here */}
    //       <div>
    //         <Routes>
    //           <Route exact path="/Arts" component={<Courses />}></Route>
    //           <Route exact path="/Commerce" component={<Arts />}></Route>
    //           <Route exact path="/Science" component={<Science />}></Route>
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </div >
  );
};

export default Subjects;