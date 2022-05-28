const INITIAL_STATE = {
    Categories: ["Bilim","Teknoloji","Yaşam","Kripto Varlıklar","Oyun","Askeri Teknoloji","Hesaplama Araçları","Testler","Biyografi"],
    SearchParam : ""
  };

  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_SEARCH_PARAM":
        return { ...state, SearchParam: action.payload };
      default:
        return state;
    }
  };