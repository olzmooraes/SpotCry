export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};
export const goToAddPlaylist = (navigate) => {
  navigate("/addplaylist");
};
export const goToAddMusic = (navigate) => {
  navigate("/addsongs");
};
export const goToSongsFromPlaylist = (navigate, playlist) => {
  navigate(`/SongsFromPLaylist/${playlist}`);
};

export const goBack = (navigate) => {
  navigate(-1);
};
