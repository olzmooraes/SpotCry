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
export const goToPlaylistByUser = (navigate) => {
  navigate(`/feed/myplaylist`);
};
export const goToAddMusic = (navigate) => {
  navigate("/addsongs");
};
export const goToAddMusicByPlaylist = (navigate, playlist) => {
  navigate(`/DetailPlaylist/${playlist}/addMusics`);
};
export  const goToDetailPage = (navigate, playlist) => {
  navigate(`/DetailPlaylist/${playlist}`);
};

export const goBack = (navigate) => {
  navigate(-1);
};
