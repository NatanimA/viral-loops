
import axios from "axios";
import { API } from "../constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setButtonBackground, setButtonFontFamily, setButtonFontSize, setButtonText, setButtonTextColor, setModalOpen, setPreviewId, setSubtitleFontFamily, setSubtitleFontSize, setSubtitleText, setSubtitleTextAlign, setHeadingFontFamily, setHeadingFontSize, setHeadingText, setHeadingTextAlign, setLabelBackground, setButtonBold, setButtonItalic, setButtonUnderline, setHeadingBold, setHeadingItalic, setHeadingUnderline, setSubtitleBold, setSubtitleItalic, setSubtitleUnderline,setHeadingColor,setSubtitleColor,setToggleFirstName,setToggleLastName } from "../redux/actions/styleActions";

const useLayout = () => {

    const dispatch = useDispatch();
    const saveLayoutUrl = API.LAYOUT_API

    const saveLayout = async (data) => {

        await axios
            .post(saveLayoutUrl, data)
            .then((res) => {
                console.log(res.data);
                const form = res.data.form
                toast.success("Layout Saved Successfully", {
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                dispatch(setModalOpen(true))
                dispatch(setPreviewId(form._id))
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong", {
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    const dispatchStates = (data) => {
        const {
      
            buttonBackground,
            buttonColor,
            buttonFontSize,
            buttonFontStyle,
            form: {
                buttonText,
                isFirstNameRequired,
                isLastNameRequired,
                subtitle,
                title,
               
            },
            formBackground,
            headingColor,
            headingFontSize,
            headingFontStyle,
            isButtonBold,
            isButtonItalic,
            isButtonUnderlined,
            isHeadingBold,
            isHeadingCenter,
            isHeadingItalic,
            isHeadingUnderlined,
            isSubtitleBold,
            isSubtitleCenter,
            isSubtitleItalic,
            isSubtitleUnderlined,
            subtitleColor,
            subtitleFontSize,
            subtitleFontStyle,
            _id,
        } = data;

        dispatch(
            setPreviewId(_id)
        );

        dispatch(setLabelBackground(formBackground));

        dispatch(setButtonBackground(buttonBackground));
        dispatch(setButtonTextColor(buttonColor));
        dispatch(setButtonFontFamily(buttonFontStyle));
        dispatch(setButtonFontSize(buttonFontSize));
        dispatch(setButtonText(buttonText));

        dispatch(setHeadingText(title));
        dispatch(setHeadingFontFamily(headingFontStyle));
        dispatch(setHeadingFontSize(headingFontSize));
        dispatch(setHeadingColor(headingColor));
        dispatch(setHeadingTextAlign(headingColor));
        dispatch(setHeadingBold(isHeadingBold));
        dispatch(setHeadingItalic(isHeadingItalic));
        dispatch(setHeadingUnderline(isHeadingUnderlined));
        dispatch(setHeadingTextAlign(isHeadingCenter));


        dispatch(setSubtitleText(subtitle));
        dispatch(setSubtitleFontFamily(subtitleFontStyle));
        dispatch(setSubtitleFontSize(subtitleFontSize));
        dispatch(setSubtitleColor(subtitleColor));
        dispatch(setSubtitleTextAlign(subtitleColor));
        dispatch(setSubtitleBold(isSubtitleBold));
        dispatch(setSubtitleItalic(isSubtitleItalic));
        dispatch(setSubtitleUnderline(isSubtitleUnderlined));
        dispatch(setSubtitleTextAlign(isSubtitleCenter));

   
        dispatch(setToggleFirstName(isFirstNameRequired));
        dispatch(setToggleLastName(isLastNameRequired));
       
        
        dispatch(setButtonBold(isButtonBold));
        dispatch(setButtonItalic(isButtonItalic));
        dispatch(setButtonUnderline(isButtonUnderlined));
    }

    const getLayout = async(id) => {

        await axios
            .get(`${API.LAYOUT_API}/${id}`)
            .then((res) => {
                console.log(res.data);
                if(!res.data){
                    throw Error("Something went wrong")
                }
                dispatchStates(res.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong", {
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            
                throw Error("Something went wrong")
            });
    };
    return { saveLayout, getLayout };
};

export default useLayout;