import { Link, useParams } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import React from "react";
import background from "../images/trial_pics/background2.png";
// import { useState } from "react";
import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
// import placeHolderPic from "../images/noun_account_2480291.svg";
// import placeHolderPic from "../images/plus_svgrepo_com.svg";
import placeHolderPic from "../images/profile-round_1342_svgrepo_com.svg";
import placeHolderPic2 from "../images/profile-1341-svgrepo-com.svg";
// import { useEffect, useContext } from "react";

import Navbar from "../Components/Navbar";
// import { userContext } from "../AuthContext";
// import { MyContext } from "../App";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebase";

import { useState, useEffect } from "react";
import React from "react";
// import { Link } from "react-router-dom";
import AuthDetails from "../Components/AuthDetails";
import logo from "../images/website_data/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase";

import { getAuth, updateProfile, updatePassword } from "firebase/auth";

// import avatar from "../images/vector_imgs/noun_avatar_2323975.svg";
const Profile = (props3) => {
  const [authUser, setAuthUser] = useState(null);
  const [UserEmail, setUserEmail] = useState(null);
  const [UserUserName, setUserUserName] = useState(null);
  const [UserDisplayImg, setUserDisplayImg] = useState(null);
  const [UserPassword, setUserPassword] = useState(null);
  // props.extract("ahmed");

  // //callback fnc
  // const getUser = (userValue) => {
  //   return userValue;
  // };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        // console.log("phone number ", user.phoneNumber);
        // setUserPassword(user.phoneNumber);
        setUserEmail(user.email);
        setUserUserName(user.displayName);
        setUserDisplayImg(user.photoURL);
        // setUserPassword;(user)
      } else {
        // setAuthUser(null);
        setUserEmail(null);
        setUserUserName(null);
        setUserDisplayImg(null);
      }
    });

    // console.log("auth", auth);

    return () => {
      listen();
    };
  }, []);

  // if (auth) {
  //   // console.log("ready , authUser = ", authUser.email);
  //   console.log("ready , authUser ", UserEmail);
  //   console.log("ready , authUser ", UserUserName);
  //   console.log("ready , authUser ", UserDisplayImg);
  // } else {
  //   console.log("not available yet");
  // }
  console.log("ready , UserEmail ", UserEmail);
  console.log("ready , UserUserName ", UserUserName);
  console.log("ready , UserDisplayImg ", UserDisplayImg);
  console.log("ready , UserPassword ", UserPassword);

  //add image to firebase
  //new imageURL
  const [imageURL, setImageURl] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("image uploaded successfully");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageURl(url);
        setImageList((prev) => [...prev, url]);
      });
    });
    setImageUpload(null);
  };

  //display all img in list

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     //   console.log(response);
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  //update the circle instantly
  if (imageURL) {
    console.log("image url ", imageURL);
    setTimeout(() => {
      setUserDisplayImg(imageURL);
    }, 1000);
  }

  //end of add image to firebase

  //delete img from firebase

  const delPic = () => {
    // import { getStorage, ref, deleteObject } from "firebase/storage";
    if (imageUpload == null) {
      updateProfile(auth.currentUser, {
        displayName: UserUserName,
        photoURL: null,
      })
        .then(() => {
          setUserDisplayImg(null);
          setImageURl(null);
          // window.location.reload();
          alert("image removed succesfully");
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
      return;
    }
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, `images/${imageUpload.name}`);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // window.location.reload();
        setUserDisplayImg(null);
        setImageURl("");
        setUserDisplayImg("");
        alert("image deleted successfully");
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    window.location.reload();
  };

  //delete img from firebase

  //update password

  // const auth = getAuth();
  // const user = auth.currentUser;

  // // const newPassword = getASecureRandomPassword();
  // const newPassword = "getASecureRandomPassword()";

  // updatePassword(user, newPassword)
  //   .then(() => {
  //     // Update successful.
  //   })
  //   .catch((error) => {
  //     // An error ocurred
  //     // ...
  //   });

  //end of update password

  //edit data

  const [editing, setEditing] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState("");
  const edit_data = () => {
    setEditing(true);
  };

  //end of edit data

  //update imageUrl in userInfo

  updateProfile(auth.currentUser, {
    displayName: UserUserName,
    photoURL: UserDisplayImg,
  })
    .then(() => {
      // alert("image added succesfully");
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  //end of update user info

  // const { name } = useContext(userContext);
  // console.log("context : ", name);
  // const testvalue = useParams();
  // console.log(testvalue);
  // console.log("props : ", props3);
  // console.log("MyContext", MyContext);
  // console.log("MyContext.Provider", MyContext.Provider);
  // console.log("MyContext.Provider", MyContext.Consumer);
  // console.log("MyContext.displayName", MyContext.displayName);
  // const tempZ = useContext(MyContext);
  // const { tempZ } = props3;
  // console.log(tempZ);
  //   const backgroundStyle = {
  //     backgroundImage: `url(${background})`,

  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageList, setImageList] = useState([]);
  // const imageListRef = ref(storage, "images/");
  // const uploadImage = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     alert("image uploaded");
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList((prev) => [...prev, url]);
  //     });
  //   });
  // };
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     //   console.log(response);
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  //   };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1%",
        // margin: "5%",
        // alignContent: "space-around",
        // alignItems: "end",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat-y",
        backgroundRepeat: "repeat-x",
        // width: "100%",
        height: "100vh",
        // border: "1px solid red",
      }}
    >
      <Navbar props2={""}></Navbar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   margin: "5%",
          height: "70vh",
          width: "25%",
          //   verticalAlign: "middle",
          //   border: "1px solid black",
          backgroundColor: "white",
          padding: "1%",
        }}
      >
        {/* <Navbar></Navbar> */}
        <h2>My Profile </h2>

        {/* <div>Click the upload icon below to upload a file.</div> */}
        <div
          className="image-upload"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label htmlFor="file-input">
            {/* {UserDisplayImg == "" && (
              <img
                className="rounded-circle"
                alt="profile picture"
                // src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                src={placeHolderPic2}
                //   src={avatar}
              />
            )} */}
            {UserDisplayImg == null && (
              <img
                style={{ scale: "0.1" }}
                className="rounded-circle"
                alt="profile picture"
                // src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                // src={UserDisplayImg === "" ? placeHolderPic : UserDisplayImg}
                src={placeHolderPic2}
                //   src={avatar}
              />
            )}
            {UserDisplayImg != null && (
              <img
                className="rounded-circle"
                alt="profile picture"
                // src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                // src={UserDisplayImg === "" ? placeHolderPic : UserDisplayImg}
                src={UserDisplayImg == null ? placeHolderPic2 : UserDisplayImg}

                //   src={avatar}
              />
            )}
            {/* <img
              className="rounded-circle"
              alt="profile picture"
              // src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
              // src={UserDisplayImg === "" ? placeHolderPic : UserDisplayImg}
              src={UserDisplayImg}

              //   src={avatar}
            /> */}
          </label>
          <input
            // style={{ zIndex: "3", color: "red" }}
            placeholder="click here to upload img"
            type="file"
            id="file-input"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />

          {/* <input id="file-input" type="file" /> */}
        </div>

        {/* new */}

        <button
          onClick={uploadImage}
          style={{
            display: "flex",
            // display: "inline-block",
            width: "100%",
            margin: "5%",
            justifyContent: "center",
          }}
          type="button"
          className="btn btn-primary"
        >
          upload Profile Picture
        </button>
        <button
          onClick={delPic}
          style={{
            display: "flex",
            // display: "inline-block",
            width: "100%",
            margin: "5%",
            justifyContent: "center",
          }}
          type="button"
          className="btn btn-primary"
        >
          delete Profile Picture
        </button>
      </div>

      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        {imageList.map((url, index) => {
          return (
            <img
              key={index}
              style={{ width: "150px", height: "150px" }}
              src={url}
            />
          );
        })}
      </div> */}
      {editing == false && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   justifyContent: "center",
            alignItems: "flex-start",
            justifyContent: "center",
            //   margin: "5%",
            //   height: "100%",
            height: "70vh",
            width: "40%",
            //   verticalAlign: "middle",
            padding: "0 0 0 1%",
            margin: "0 0 0 3%",
            //   border: "1px solid black",
            backgroundColor: "white",
            //   verticalAlign: "top",
          }}
        >
          {/* <h4 style={{ display: "inline-block" }} className="text-primary">
          Full Name
        </h4>
        <p style={{ display: "inline-block" }}>Full Name</p> */}
          <h4 style={{ display: "inline-block" }} className="text-primary">
            Username
          </h4>
          <p style={{ display: "inline-block" }}> {UserUserName}</p>
          <h4 style={{ display: "inline-block" }} className="text-primary">
            Email
          </h4>
          <p style={{ display: "inline-block" }}>{UserEmail}</p>

          {/* <h4 style={{ display: "inline-block" }} className="text-primary">
            Password
          </h4>
          <p style={{ display: "inline-block" }}>Password</p> */}
          <button
            style={{
              // display: "block",
              // margin: "1%",
              // justifyContent: "center",
              display: "inline-block",
              width: "100%",
              // margin: "8% 0 0 0",
              justifyContent: "center",
            }}
            type="button"
            className="btn btn-primary"
          >
            Edit details
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
