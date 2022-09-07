import React from "react";

function Students() {
  return (
    <>
      <div className="students">
        <div className="stubox">
          <h1 className="stuheading">Students Details</h1>
          <button className="button1">Add new student</button>
        </div>

        <div className="tablebox">
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
            <tr>
              <td>Jhon</td>
              <td>24</td>
              <td>MERN</td>
              <td>October</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Doe</td>
              <td>25</td>
              <td>MERN</td>
              <td>August</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Biden</td>
              <td>26</td>
              <td>MERN</td>
              <td>January</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Barar</td>
              <td>27</td>
              <td>MERN</td>
              <td>July</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Christ</td>
              <td>28</td>
              <td>MERN</td>
              <td>March</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Rock</td>
              <td>28</td>
              <td>MERN</td>
              <td>June</td>
              <td>Edit</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default Students;
