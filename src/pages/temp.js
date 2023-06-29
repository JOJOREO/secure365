<img
  className="rounded-circle"
  alt="avatar1"
  // src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
  src={UserDisplayImg === "" ? placeHolderPic : UserDisplayImg}
  //   src={avatar}
/>;
{
  /* <button
          style={{
            display: "flex",
            // display: "inline-block",
            width: "100%",
            margin: "5%",
            justifyContent: "center",
          }}
          type="button"
          class="btn btn-primary"
        >
          Edit Profile Picture
        </button> */
}
<input
  type="file"
  onChange={(event) => {
    setImageUpload(event.target.files[0]);
  }}
/>;
{
  /* new */
}
