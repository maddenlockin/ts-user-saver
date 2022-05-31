import React from "react";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { UserObject } from "../Interfaces";

// interface Props {
//   user: UserObject,

// }



// export default function DataTable({user, username, date}) {
//   const columns: GridColDef[] = [
//     { field: "username", headerName: "Username", width: 130 },
//     { field: "name", headerName: "Name", width: 130 },
//     { 
//       field: "public_repos", 
//       headerName: "Public Repos",     
//       type: "number", 
//       width: 80 
//     },
//     {
//       field: "public_gists",
//       headerName: "Public Gists",
//       type: "number",
//       width: 80,
//     },
//     {
//       field: "followers",
//       headerName: "Followers",
//       type: "number",
//       width: 80,
//     },
//     {
//       field: "following",
//       headerName: "Following",
//       type: "number",
//       width: 80,
//     },
//     {
//       field: "date",
//       headerName: "Created at",
//       width: 130,
//     },
//   ];

//   const rows = [
//     {
//       username: {username},
//       name: user.name,
//       public_repos: {user.public_repos},
//       public_gists: {user.public_gists},
//       followers: {user.followers},
//       following: {user.following},
//       date: {date},
//     },
//   ];

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
