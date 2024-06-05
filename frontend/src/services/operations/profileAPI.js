import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apiLinks";
import { toast } from 'react-hot-toast'
// import { setLoading , setUser } from "../../redux/slices/profileSlice";

const {

    // GET_USER_DETAILS_API,
    GET_USER_ENROLLED_COURSES_API,
    GET_INSTRUCTOR_DATA_API ,

} = profileEndpoints


export async function getUserEnrolledCourses(token) {

    const toastId = toast.loading("Loading...");
    let result = [];

    try {

        const response = await apiConnector("GET", GET_USER_ENROLLED_COURSES_API, null, {
            Authorization: `Bearer ${token}`
        });

        console.log("Response of enrolled courses : ", response);

        if (!response.data.success) {
            console.log("throw field mei error");
            throw new Error(response.data.message);

        }

        // result = response?.data?.courses
        // result.push(response?.data?.courses)

        result = response.data.data
        console.log("result: ", result);



    }
    catch (err) {
        console.log("Error in calling enrolled course api : ", err);
        console.log(err.message);
        toast.error("Could not get enrolled courses");

    }

    toast.dismiss(toastId);
    return result;
}


export async function getInstructorData(token){

    const toastId = toast.loading("Loading....");
    let result = [];

    try{

        const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null , {
            Authorization : `Bearer ${token}`
        })

        console.log("GET_INSTRUCTOR_API_DATA  : " , response);

        if(!response?.data?.success){
            throw new Error("Could Not Fetch Instructor Data");
        }

        result = response?.data?.courses;
       

    }catch(err){

        console.log("GET_INSTRUCTOR_API ERROR : ", err);
        toast.error("Could not get Instructor Data");

    }
    
    toast.dismiss(toastId)
    return result ;
}