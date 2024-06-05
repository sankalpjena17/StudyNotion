const BASE_URL =`${window.location.origin}/api/v1`

// Auth endpoint
export const authEndpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


// profile endpoint
export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",

    //Get instructor data api

    GET_INSTRUCTOR_DATA_API  : BASE_URL + "/profile/instructorDashboard"
}


// student endpoint
export const studentEndpoints = {
    COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
    COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
    
    SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// course endpoint
export const courseEndpoints = {
    GET_ALL_COURSE_API: BASE_URL + "/course/showAllCourse",
    COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
    EDIT_COURSE_API: BASE_URL + "/course/editCourse",    
    
    COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategory",
    CREATE_COURSE_API: BASE_URL + "/course/createCourse",

    CREATE_SECTION_API: BASE_URL + "/course/createSection",
    CREATE_SUBSECTION_API: BASE_URL + "/course/createSubSection",
    UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
    UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",

    GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",

    DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
    DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",

    DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
    DELETE_ALL_COURSES_API : BASE_URL + "/course/deleteAllCourses",


    GET_FULL_COURSE_DETAILS_AUTHENTICATED:
      BASE_URL + "/course/getFullCourseDetails",

    LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",


}



// rating and review
export const ratingsEndpoints = {

    GET_RATING_AND_REVIEW_API: BASE_URL + "/course/getAllRatingAndReviews",
    CREATE_RATING_API: BASE_URL + "/course/createRating",
    AVERAGE_RATING: BASE_URL + "/course/getAverageRating",
    COURSE_RATING_API: BASE_URL + "/course/getCourseRating"

}


// categories
export const categories = {
    GET_CATEGORIES_API: BASE_URL + "/course/showAllCategory",
    CREATE_CATEGORY_API: BASE_URL + "/course/createCategory",
    CATEGORY_PAGE_DETAILS: BASE_URL + "/course/getcategoryPageDetails"
}


// catalog
export const catalogData = {
    CATALOG_PAGE_DATA_API: BASE_URL + "/course/getCategoryPageDetails",
}

//-----------------------------------------------------------
// contact -us
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  } 




// setting app
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",

    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",

    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",

    DELETE_PROFILE_API: BASE_URL + "/profile/deleteAccount",
}

