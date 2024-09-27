
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
    SET_SUBTITLE_FONT_FAMILY,
    SET_SUBTITLE_FONT_SIZE,
    SET_SUBTITLE_BOLD,
    SET_SUBTITLE_ITALIC,
    SET_SUBTITLE_UNDERLINE,
    SET_SUBTITLE_TEXT_ALIGN,
    SET_SUBTITLE_TEXT,
    SET_BUTTON_FONT_FAMILY,
    SET_BUTTON_FONT_SIZE,
    SET_BUTTON_BOLD,
    SET_BUTTON_ITALIC,
    SET_BUTTON_UNDERLINE,
    SET_BUTTON_BACKGROUND,
    SET_BUTTON_TEXT,
    SET_HEADING_COLOR,
    SET_SUBTITLE_COLOR,
    SET_BUTTON_TEXT_COLOR,
    SET_MODAL_OPEN,
    SET_PREVIEW_ID,
    SET_TOGGLE_FIRST_NAME,  
    SET_TOGGLE_LAST_NAME
  } from '../types';

// Action creators

export const setToggleFirstName = (toggle) => ({ type: SET_TOGGLE_FIRST_NAME, payload: toggle });
export const setToggleLastName = (toggle) => ({ type: SET_TOGGLE_LAST_NAME, payload: toggle });

export const toggleFirstName = () => ({ type: TOGGLE_FIRST_NAME });
export const toggleLastName = () => ({ type: TOGGLE_LAST_NAME });
export const setLabelBackground = (color) => ({ type: SET_LABEL_BACKGROUND, payload: color });
export const setHeadingFontFamily = (fontFamily) => ({ type: SET_HEADING_FONT_FAMILY, payload: fontFamily });
export const setHeadingFontSize = (fontSize) => ({ type: SET_HEADING_FONT_SIZE, payload: fontSize });
export const setHeadingBold = (isBold) => ({ type: SET_HEADING_BOLD, payload: isBold });
export const setHeadingItalic = (isItalic) => ({ type: SET_HEADING_ITALIC, payload: isItalic });
export const setHeadingUnderline = (isUnderline) => ({ type: SET_HEADING_UNDERLINE, payload: isUnderline });
export const setHeadingTextAlign = (textAlign) => ({ type: SET_HEADING_TEXT_ALIGN, payload: textAlign });
export const setHeadingText = (text) => ({ type: SET_HEADING_TEXT, payload: text });
export const setHeadingColor = (color) => ({ type: SET_HEADING_COLOR, payload: color });
export const setSubtitleFontFamily = (fontFamily) => ({ type: SET_SUBTITLE_FONT_FAMILY, payload: fontFamily });
export const setSubtitleFontSize = (fontSize) => ({ type: SET_SUBTITLE_FONT_SIZE, payload: fontSize });
export const setSubtitleBold = (isBold) => ({ type: SET_SUBTITLE_BOLD, payload: isBold });
export const setSubtitleItalic = (isItalic) => ({ type: SET_SUBTITLE_ITALIC, payload: isItalic });
export const setSubtitleUnderline = (isUnderline) => ({ type: SET_SUBTITLE_UNDERLINE, payload: isUnderline });
export const setSubtitleTextAlign = (textAlign) => ({ type: SET_SUBTITLE_TEXT_ALIGN, payload: textAlign });
export const setSubtitleText = (text) => ({ type: SET_SUBTITLE_TEXT, payload: text });
export const setSubtitleColor = (color) => ({ type: SET_SUBTITLE_COLOR, payload: color });
export const setButtonFontFamily = (fontFamily) => ({ type: SET_BUTTON_FONT_FAMILY, payload: fontFamily });
export const setButtonFontSize = (fontSize) => ({ type: SET_BUTTON_FONT_SIZE, payload: fontSize });
export const setButtonBold = (isBold) => ({ type: SET_BUTTON_BOLD, payload: isBold });
export const setButtonItalic = (isItalic) => ({ type: SET_BUTTON_ITALIC, payload: isItalic });
export const setButtonUnderline = (isUnderline) => ({ type: SET_BUTTON_UNDERLINE, payload: isUnderline });
export const setButtonBackground = (color) => ({ type: SET_BUTTON_BACKGROUND, payload: color });
export const setButtonText = (text) => ({ type: SET_BUTTON_TEXT, payload: text });
export const setButtonTextColor = (color) => ({ type: SET_BUTTON_TEXT_COLOR, payload: color });

// MODAL
export const setModalOpen = (isOpen) => ({ type: SET_MODAL_OPEN, payload: isOpen })

// PREVIEW ID
export const setPreviewId = (id) => ({ type: SET_PREVIEW_ID, payload: id })