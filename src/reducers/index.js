const INITIAL_STATE = {
    Categories: ["Bilim","Teknoloji","Yaşam","Kripto Varlıklar","Oyun","Askeri Teknoloji","Hesaplama Araçları","Testler","Biyografi"],
  };

  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_DATAS_START":
        return { ...state, isLoading: true };
      default:
        return state;
    }
  };