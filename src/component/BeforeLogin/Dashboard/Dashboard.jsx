// import React, {useState, useEffect} from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, db, logout } from "../../../firebase";
// import { query, getDoc, collection, where } from "firebase/firestore";

// function Dashboard() {
//   const [user, loading, error] = useAuthState(auth);
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
//   const fetchUserName = async () => {
//     try {
//       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
//       const doc = await getDoc(q);
//       const data = doc.docs[0].data();
//       setName(data.name);
//     } catch (err) {
//       console.error(err);
//       alert("An error occured while fetching user data");
//     }
//   };
//   useEffect(() => {
//       if (loading) return;
//       if (!user) return ("/");
//       fetchUserName();
//   }, [user, loading]);

//   return (
//       <div className="dashboard">
//           <div className="dashboardContainer">
//               Logged in as
//               <div>{name}</div>
//               <div>{user?.email}</div>
//               <button onClick={logout}>Louout</button>
//           </div>
//       </div>
//   )
// }

// export default Dashboard;
