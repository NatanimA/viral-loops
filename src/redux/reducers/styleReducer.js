import {
    TOGGLE_FIRST_NAME,
    TOGGLE_LAST_NAME,
    SET_LABEL_BACKGROUND,
    SET_HEADING_FONT_FAMILY,
    SET_HEADING_FONT_SIZE,
    SET_HEADING_BOLD,
    SET_HEADING_ITALIC,
    SET_HEADING_UNDERLINE,
    SET_HEADING_TEXT_ALIGN,
    SET_HEADING_TEXT,
    SET_HEADING_COLOR,
    SET_SUBTITLE_FONT_FAMILY,
    SET_SUBTITLE_FONT_SIZE,
    SET_SUBTITLE_BOLD,
    SET_SUBTITLE_ITALIC,
    SET_SUBTITLE_UNDERLINE,
    SET_SUBTITLE_TEXT_ALIGN,
    SET_SUBTITLE_TEXT,
    SET_SUBTITLE_COLOR,
    SET_BUTTON_FONT_FAMILY,
    SET_BUTTON_FONT_SIZE,
    SET_BUTTON_BOLD,
    SET_BUTTON_ITALIC,
    SET_BUTTON_UNDERLINE,
    SET_BUTTON_BACKGROUND,
    SET_BUTTON_TEXT,
    SET_BUTTON_TEXT_COLOR,
    SET_MODAL_OPEN,
    SET_PREVIEW_ID,
    SET_TOGGLE_FIRST_NAME,
    SET_TOGGLE_LAST_NAME

  } from '../types';
  
  const initialState = {
    modalOpen: false,

    firstNameToggle: false,
    lastNameToggle: false,
    labelBackground: "#ffffff",
    headingFontFamily: "font-sans",
    headingFontSize: "text-base",
    headingBold: false,
    headingColor: "#000000",
    headingItalic: false,
    headingUnderline: false,
    headingTextAlign: false,
    headingText: "Join the give away, and get rewarded!",
    subtitleFontFamily: "font-sans",
    subtitleFontSize: "text-base",
    subtitleBold: false,
    subtitleItalic: false,
    subtitleUnderline: false,
    subtitleTextAlign: false,
    subtitleText: "Join the give away,and refer to a friend to Win!",
    subtitleColor: "#D3D3D3",
    buttonFontFamily: "font-sans",
    buttonFontSize: "text-base",
    buttonBold: false,
    buttonItalic: false,
    buttonUnderline: false,
    buttonBackground: "#5558db",
    buttonText: "Join and Win!",
    buttonTextColor: "#ffffff",

    previewId: "",
   
  };
  
  const styleReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TOGGLE_FIRST_NAME:
        return { ...state, firstNameToggle: action.payload };
      case SET_TOGGLE_LAST_NAME:
        return { ...state, lastNameToggle: action.payload };
      case TOGGLE_FIRST_NAME:
        return { ...state, firstNameToggle: !state.firstNameToggle };
      case TOGGLE_LAST_NAME:
        return { ...state, lastNameToggle: !state.lastNameToggle };
      case SET_LABEL_BACKGROUND:
        return { ...state, labelBackground: action.payload };
      case SET_HEADING_FONT_FAMILY:
        return { ...state, headingFontFamily: action.payload };
      case SET_HEADING_FONT_SIZE:
        return { ...state, headingFontSize: action.payload };
      case SET_HEADING_BOLD:
        return { ...state, headingBold: action.payload };
      case SET_HEADING_ITALIC:
        return { ...state, headingItalic: action.payload };
      case SET_HEADING_UNDERLINE:
        return { ...state, headingUnderline: action.payload };
      case SET_HEADING_TEXT_ALIGN:
        return { ...state, headingTextAlign: action.payload };
      case SET_HEADING_TEXT:
        return { ...state, headingText: action.payload };
      case SET_SUBTITLE_FONT_FAMILY:
        return { ...state, subtitleFontFamily: action.payload };
      case SET_SUBTITLE_FONT_SIZE:
        return { ...state, subtitleFontSize: action.payload };
      case SET_SUBTITLE_BOLD:
        return { ...state, subtitleBold: action.payload };
      case SET_SUBTITLE_ITALIC:
        return { ...state, subtitleItalic: action.payload };
      case SET_SUBTITLE_UNDERLINE:
        return { ...state, subtitleUnderline: action.payload };
      case SET_SUBTITLE_TEXT_ALIGN:
        return { ...state, subtitleTextAlign: action.payload };
      case SET_SUBTITLE_TEXT:
        return { ...state, subtitleText: action.payload };
      case SET_SUBTITLE_COLOR:
        return { ...state, subtitleColor: action.payload };
      case SET_BUTTON_FONT_FAMILY:
        return { ...state, buttonFontFamily: action.payload };
      case SET_BUTTON_FONT_SIZE:
        return { ...state, buttonFontSize: action.payload };
      case SET_BUTTON_BOLD:
        return { ...state, buttonBold: action.payload };
      case SET_BUTTON_ITALIC:
        return { ...state, buttonItalic: action.payload };
      case SET_BUTTON_UNDERLINE:
        return { ...state, buttonUnderline: action.payload };
      case SET_BUTTON_BACKGROUND:
        return { ...state, buttonBackground: action.payload };
      case SET_BUTTON_TEXT:
        return { ...state, buttonText: action.payload };
      case SET_HEADING_COLOR:
        return { ...state, headingColor: action.payload };
      case SET_BUTTON_TEXT_COLOR:
        return { ...state, buttonTextColor: action.payload };
      case SET_MODAL_OPEN:
        return { ...state, modalOpen: action.payload };
      case SET_PREVIEW_ID:
        return { ...state, previewId: action.payload };
      default:
        return state;
    }
  };

  export default styleReducer;

  