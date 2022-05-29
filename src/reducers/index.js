const INITIAL_STATE = {
    Categories: ["Bilim","Teknoloji","Yaşam","Oyun","Askeri Teknoloji","Hesaplama Araçları","Testler"],
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